import React from 'react'
import './Herobanner.css'
import arrowrighticon from '../assets/arrow-right.svg';
function Herobanner() {
  return (
    <div className='herobanner'>
      <div className='hb-container'>
        <div className='hb-title'><span className='hb-title-color'>LOG</span> it. <span className='hb-title-color'>REMEMBER</span> it.</div>
        <div className='hb-title-desc'>A place to store everything you have WATCHED , READ , and  LISTENED</div>
        <div className='hb-title-sub'>Create an account to log the things you want to remember,provide information
          and we  will remember it for you.  </div>
        <div >
          <button className='hb-title-button'>
            <div className='hb-button-text'> Get Started&nbsp;
              <span>
                <img src={arrowrighticon} alt='arricon' className='hb-button-icon' />
              </span></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Herobanner