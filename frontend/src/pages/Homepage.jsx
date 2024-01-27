import React from 'react'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'
import Herobanner from '../components/Herobanner'
import '../components/Herobanner.css'
import Genre from '../components/Genre'
import '../components/Genre.css'

function Homepage() {
  return (
    <div>
        <Header/>
        <Herobanner/>
        <Genre/>
        <Footer/>
    </div>
  )
}

export default Homepage