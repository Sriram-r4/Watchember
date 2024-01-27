import React from 'react'
import './Bookspage.css'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'

function Bookspage() {
  return (
    <div>
      <Header />
      <div className='books-page-container'>
        <div className='books-page-title-container'>
          <div className='books-page-title'>Books</div>
          <div className='books-page-title-desc'>Books that you have read are listed below</div>
        </div>
        <div className='books-page-body-container'>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bookspage