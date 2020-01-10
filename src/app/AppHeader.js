import React from 'react';
import logo from '../images/logo.svg';
import './AppHeader.css';

function AppHeader() {
  return (
    <header id="navtop" className="App-header">
      <img src={logo} className="App-logo" alt="PyreSquared Productions" />
      <nav className="fright">
        <ul>
          <li><a href="index.html" className="navactive">Home</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
        <ul>
          <li><a href="works.html">Works</a></li>
          <li><a href="applications.html">Applications</a></li>
          <li><a href="services.html">Services</a></li>
          {' '}
        </ul>
        <ul>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <a href="index.html"><h1>PyreSquared Software</h1></a>
    </header>
  );
}
export default AppHeader;
