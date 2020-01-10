import React from 'react';
import './Works.css';
import imgSearch from '../images/search-logo.png';
import imgSports from '../images/sports-logo.png';
import imgTTT from '../images/ttt-logo.png';
import imgBCase from '../images/bc-logo.png';

function Projects() {
  return (
    <section className="App-section">
      <h3 className="mleft">A few projects</h3>
      <figure className="App-section-slice col-one-quarter">
        <a href="work1.html"><img src={imgTTT} alt="" /></a>
        <figcaption>
          <a href="ttt.html" className="arrow">Tic Tac Toe</a>
          <p>ReactJs</p>
        </figcaption>
      </figure>
      <figure className="App-section-slice col-one-quarter">
        <a href="_self"><img src={imgSearch} alt="Search.jpg not found" /></a>
        <figcaption>
          <a href="_self" className="arrow">Search Engine</a>
          <p>Web Services, PHP, and jQuery</p>
        </figcaption>
      </figure>
      <figure className="App-section-slice col-one-quarter">
        <a href="_self"><img src={imgSports} alt="" /></a>
        <figcaption>
          <a href="_self" className="arrow">Sports PlayerTypelling</a>
          <p>Data Mining and Adv Deviation calcs</p>
        </figcaption>
      </figure>
      <figure className="App-section-slice col-one-quarter">
        <a href="_self"><img src={imgBCase} alt="" /></a>
        <figcaption>
          <a href="_self" className="arrow">Project BC</a>
          <p>To be continued...</p>
        </figcaption>
      </figure>
    </section>
  );
}
export default Projects;
