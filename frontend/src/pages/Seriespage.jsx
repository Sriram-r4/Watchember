import React from 'react'
import './Seriespage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'


function Seriespage() {
  return (
    <div>
      <Header />
      <div className='series-page-container'>
        <div className='series-page-title-container'>
          <div className='series-page-title'>Series</div>
          <div className='series-page-title-desc'>Series that you have watched are listed below.</div>
        </div>
        <div className='series-page-body-container'>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Seriespage