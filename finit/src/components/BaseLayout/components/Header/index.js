//Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
//Internals
import './index.css';

const Header = () => (
  <div className="header">  
    <h1>FinIT</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/">About</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/portfolio">Services</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/contact">Contact</NavLink></p>
    </div>
  </div>
)

export default Header;
