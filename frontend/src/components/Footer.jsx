import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className='mp footer-title'>
            <div className='mp footer-title-head'> Watchember</div>
            <div className='mp footer-title-desc'>Store your list of things in an easier and simpler way.</div>
        </div>
        <div className='mp footer-links'>
        <div className='mp footer-links-title'>Links</div>
            <div className='mp footer-links-items'>
                <Link to='/signup' className='mp footer-links-items' >Signup</Link>
                <Link to='/signin' className='mp footer-links-items'>Signin</Link>
                <Link to='/profile' className='mp footer-links-items'>Profile</Link>
            </div>
        </div>
        <div className='mp footer-categories'>
            <div className='mp footer-categories-title'>Categories</div>
            <div className='mp footer-categories-items'>
            <div className='mp footer-categories-left'>
                <Link to="/anime" className='mp footer-categories-left'>Anime</Link>
                <Link to="/books" className='mp footer-categories-left'>Books</Link>
                <Link to="/movies" className='mp footer-categories-left'>Movies</Link>
            </div>
            <div className='mp footer-categories-right'>
                <Link to="/podcasts" className='mp footer-categories-right'>Podcasts</Link>
                <Link to="/series" className='mp footer-categories-right'>Series</Link>    
                <Link to="/songs" className='mp footer-categories-right'>Songs</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer