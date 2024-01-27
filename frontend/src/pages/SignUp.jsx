import React, { useState } from 'react'
import Header from '../components/Header'
import '../components/Header.css'
import Footer from '../components/Footer'
import '../components/Footer.css'
import './SignUp.css'
import logoWhite from '../assets/logo-white.png'
import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState(
    {
      email: "",
      username: "",
      password: ""
    }
  )

  const RegisterUser = async (e) => {
    const { username, password, email } = user;
    e.preventDefault();
    try {
      await axios.post('/api/users', {
        username,
        email,
        password
      })
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <Header />
      <div className='signup-page-container'>
        <div className='signup-page-title-container'>
          <div className='signup-page-title'>Sign Up</div>
          <div className='signup-page-title-desc'>Hello there! Create an account to get started.</div>
        </div>
        <div className='signup-page-body-container'>
          <div className='signup-page-form-container'>
            <form className='form-body'>
              <div className='form-logo'><img src={logoWhite} alt='logo' /></div>
              <div className='form-group'>
                <label htmlFor='email' className='form-element-text'>Email</label>
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })} type='email' name='email' className='form-element-input' id='email' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <label htmlFor='username' className='form-element-text'>Username</label>
                <input onChange={(e) => setUser({ ...user, username: e.target.value })} type='text' name='username' className='form-element-input' id='username' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-element-text'>Password</label>
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} type='password' name='password' className='form-element-input' id='password' required autoComplete autoFocus />
              </div>
              <div className='form-group'>
                <input onClick={(e) => {
                  alert("user created");
                  RegisterUser(e);
                  console.log(user);
                }} type='button' name='signup' className='form-element-button' id='signup' value={"signup"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp