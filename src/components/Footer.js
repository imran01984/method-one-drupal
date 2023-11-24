import React from 'react';
import accImage from './Accenture-logo.png'; 
import './Footer.css';

function Footer() {

  return (
    <div className="footer">
      <div className="left">
        <img src={accImage} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <p className='methodone'>| &nbsp; Method One</p>
        <br/>
        <p className='copyright'>Copyright 2023 Method One Accenture. All rights reserved.<br/> Accenture Confidential. Internal use only.</p>
        <br/>
      </div>
      <div className="right">
        <div className="footer-item">Privacy Statements</div>
        <div className="footer-item">Terms of Use</div>
      </div>
    </div>
  );
}

export default Footer;
