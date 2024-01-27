import React from 'react'
import './Animepage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'
import Table from '../components/Table/Table'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FileDownload from "js-file-download";


import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

function Animepage() {
  
  const downloadAnime = (e) => {
    e.preventDefault();
    axios.get('/api/animes/download')
    .then((res) => {
        if (window.confirm(`Would you like to download in PDF Format `) === true) {
          var resData = []
          res.data.map((d) => {
            const { anime_name, rating, original_status, your_status, startdate, Enddate } = d;
            const animeData = {
              anime_name, rating, original_status, your_status, startdate, Enddate
            }
            resData.push(animeData)
          })

          const doc = new jsPDF()

          autoTable(doc, {
            headStyles: { fillColor: [4, 184, 241] },
            showHead: 'everyPage',
            head: [['Anime Name', 'Rating', 'Original Status', 'Your Status', 'Start Date', 'End Date']],
            body: resData.map(({ anime_name, rating, original_status, your_status, startdate, Enddate }) => {
              return [anime_name, rating, original_status, your_status, startdate, Enddate]
            })
          })
        
          doc.save('AnimeTable.pdf')
        }
        else {
          var data = "";
          if (window.confirm(`Would you like to download in CSV Format `) === true) {
          res.data.map((d) => {
            const { anime_name, rating, original_status, your_status, startdate, Enddate } = d;
            data += anime_name + "," + rating + "," + original_status + "," + your_status + "," + startdate + "," + Enddate + "\n"

          })
          FileDownload(data, `AnimeData.csv`)
        }
        else {
          
          res.data.map((d) => {
            const { anime_name, rating, original_status, your_status, startdate, Enddate } = d;
            data +="["+ anime_name + "," + rating + "," + original_status + "," + your_status + "," + startdate + "," + Enddate +"]"+ "\n"

          })
          FileDownload(data, `AnimeData.txt`)
        }
      
        }
      })
      .catch(error => { console.log(error) })
  }

  return (
    <div>
      <Header />
      <div className='anime-page-container'>
        <div className='anime-page-title-container'>
          <div className='anime-page-title'>Anime</div>
          <div className='anime-page-title-desc'>Anime that you have watched are listed below.</div>
        </div>
        <div className='anime-page-body-container'>
          <div className='anime-button-container'>
            <div className='anime-export-button-container'>
              <div className='form-group'>
                <button onClick={(e) => {
                  if (window.confirm(`Confirm to download your Anime Table `) === true) {
                    downloadAnime(e);
                  }
                }} name='export-button' className='form-element-button' id='export-button'>Download Data</button>
              </div>
            </div>
            <Link to='/userform' className='link-element' state={{ update: false, data: {}, id: 0 }}>
              <div className='form-group'>
                <input type='button' name='userform' className='form-element-button' id='userform' value={"Add Information"} />
              </div>
            </Link>
          </div>
          <div className='table-container'>
            <Table />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Animepage