import React from 'react'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'
import './Profile.css'



function Profile() {
  return (
    <div>
     <Header/>
      <div className='profile-page-container'>
        <div className='profile-page-title-container'>
          <div className='profile-page-title'>Account Profile</div>
          <div className='profile-page-title-desc'>Your Entered details.</div>
        </div>
        <div className='profile-page-body-container'>
          <div className='profile-page-form-container'>
            <form className='form-body'>
              <div className='form-group'>
                <label htmlFor='email' className='form-element-text'>Email</label>
                <input type='email' name='email' className='form-element-input' id='email' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <label htmlFor='username' className='form-element-text'>Username</label>
                <input type='text' name='username' className='form-element-input' id='username' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-element-text'>Password</label>
                <input type='password' name='password' className='form-element-input' id='password' required />
              </div>
              <div className='form-group'>
                <input type='button' name='profile' className='form-element-button' id='profile' value={" Edit profile"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile