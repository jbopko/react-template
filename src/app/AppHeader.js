import React from 'react';
import logo from '../images/logo.svg';
import VerticalMenu from '../components/VerticalMenu';
import './AppHeader.css';


function AppHeader(props) {
  const { headerMenu } = props;

  return (
    <header>
      <img src={logo} className="App-logo" alt="PyreSquared Productions" />
      <nav>
        <VerticalMenu headerMenu={headerMenu} />
      </nav>
      <a href="index.html"><h1>PyreSquared Software</h1></a>
    </header>
  );
}
export default AppHeader;
