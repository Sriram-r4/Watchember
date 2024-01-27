import React from 'react'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'
import './SignIn.css'
import logoWhite from '../assets/logo-white.png';

function SignIn() {
  return (
    <div>
      <Header />
      <div className='signin-page-container'>
        <div className='signin-page-title-container'>
          <div className='signin-page-title'>Sign In</div>
          <div className='signin-page-title-desc'>Welcome back! Sign in to access your account.</div>
        </div>
        <div className='signin-page-body-container'>
          <div className='signin-page-form-container'>
            <form className='form-body'>
              <div className='form-logo'><img src={logoWhite} alt='logo'/></div>
              <div className='form-group'>
                <label htmlFor='username' className='form-element-text'>Username</label>
                <input type='text' name='username' className='form-element-input' id='username' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-element-text'>Password</label>
                <input type='password' name='password' className='form-element-input' id='password' required autoComplete autoFocus/>
              </div>
              <div className='form-group'>
                <input type='button' name='signin' className='form-element-button' id='signin' value={"Signin"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn