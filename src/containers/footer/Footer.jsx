import React from 'react';
import './footer.css';

import gtp3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
      <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gtp3Logo} alt="logo" />
          <p>
          Brian Gitau - Glitched Designs, All Rights Reserved
          </p>
        </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Condtions</p>
        <p>Privacy Policy</p>
        <p>Contact </p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get In Touch</h4>
        <p>Brian Gitau</p>
        <p>0726833920</p>
        <p>miiri.brian@gmail.com</p>
      </div> 
     </div>

     <div className='gpt3__footer-copyright'>
          <p>© 2023 GPT-3. All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer