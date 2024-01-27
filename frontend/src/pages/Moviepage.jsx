import React from 'react'
import './Moviepage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'

function Moviepage() {
  return (
    <div>
      <Header />
      <div className='movies-page-container'>
        <div className='movies-page-title-container'>
          <div className='movies-page-title'>Movies</div>
          <div className='movies-page-title-desc'>Movies that you have watched are listed below.</div>
        </div>
        <div className='movies-page-body-container'>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Moviepage