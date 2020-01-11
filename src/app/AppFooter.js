import React from 'react';
import HorizontalMenu from '../components/HorizontalMenu';
import './AppFooter.css';

function AppFooter(props) {
  const { footerMenu, socialMedia, copyright } = props;

  return (
    <footer>
      <nav>
        <HorizontalMenu items={footerMenu} />
        <HorizontalMenu items={socialMedia} />
      </nav>
      <p>
        <sub>
          {copyright}
        </sub>
      </p>
    </footer>
  );
}
export default AppFooter;
