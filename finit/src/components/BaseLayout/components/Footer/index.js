//Dependencies
import React from 'react';
//Internals
import './index.css';
import Flip from 'react-reveal';

const Footer = () => (
  <footer className="footer" id="footer">
    <div id="footer-footer">
      <Flip bottom cascade>
        <div className="grid">
          <span>
            <p id="company"> Copyright &copy; 2020 Finit LTD.<br></br> All rights reserved. <br></br>Website by: FinIT LTD<br></br></p>
          </span>
          <img id="footer-image" src="f13.jpg" alt="" ></img>
        </div>
      </Flip>
    </div>
    
  </footer>
)

export default Footer;
