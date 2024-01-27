import React from 'react'
import './Podcastpage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'

function Podcastpage() {
  return (
    <div>
      <Header />
      <div className='podcasts-page-container'>
        <div className='podcasts-page-title-container'>
          <div className='podcasts-page-title'> Podcasts</div>
          <div className='podcasts-page-title-desc'>Podcasts that you have listened are listed below.</div>
        </div>
        <div className='podcasts-page-body-container'>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Podcastpage