import React from 'react'
import './Songspage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'

function Songspage() {
  return (
    <div>
      <Header />
      <div className='songs-page-container'>
        <div className='songs-page-title-container'>
          <div className='songs-page-title'>Songs</div>
          <div className='songs-page-title-desc'>Songs that you have listened are listed below</div>
        </div>
        <div className='songs-page-body-container'>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Songspage