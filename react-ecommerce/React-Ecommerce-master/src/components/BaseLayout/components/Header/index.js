//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">My Work</h1>
    <div className="links-header">
      <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/">About</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/">Portfolio</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/">Contact</NavLink></li>
    </div>
  </div>
)

export default Header;
