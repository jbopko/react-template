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
        <VerticalMenu items={headerMenu[0]} />
        <VerticalMenu items={headerMenu[1]} />
        <VerticalMenu items={headerMenu[2]} />
      </nav>
      <a href="index.html"><h1>PyreSquared Software</h1></a>
    </header>
  );
  // const { menuItems, socialMedia } = props;

  // return (
  //   <footer>
  //     <nav>
  //       <HorizontalMenu items={menuItems} />
  //       <HorizontalMenu items={socialMedia} />
  //     </nav>
  //   </footer>
  // );
}
export default AppHeader;
