import React from 'react';
import './AppFooter.css';

function AppFooter() {
  return (
    <footer id="navbottom" className="App-footer">
      <nav className="col-one-third">
        <ul>
          <li>
            <a href="_self">RSS</a>
          </li>
          <li>
            <a href="_self">Facebook</a>
          </li>
          <li>
            <a href="_self">Twitter</a>
          </li>
          <li>
            <a href="_self">Google+</a>
          </li>
          <li><a href="_self">Flickr</a></li>
        </ul>
      </nav>
      <nav className="col-one-third tcenter mleft">
        <ul>
          <li><b><a href="#navtop" title="Go back up"><h1>&uarr;</h1></a></b></li>
        </ul>
      </nav>
      <nav className="col-one-third tright mleft">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="works.html">Works</a></li>
          <li><a href="applications.html">Applications</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}
export default AppFooter;
