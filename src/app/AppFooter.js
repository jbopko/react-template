import React from 'react';
import HorizontalMenu from '../components/HorizontalMenu';
import './AppFooter.css';

const menuItems = [
  [1, 'index.js', 'Home'],
  [2, 'about.js', 'About'],
  [3, 'works.js', 'Apps'],
  [4, 'services.js', 'Services'],
  [5, 'blog.js', 'Blog'],
];

const socialMedia = [
  [1, '_self', 'Instagram'],
  [2, '_self', 'Facebook'],
  [3, '_self', 'LinkedIn'],
];

function AppFooter() {
  return (
    <footer>
      <nav>
        <HorizontalMenu items={menuItems} />
        <HorizontalMenu items={socialMedia} />
      </nav>
    </footer>
  );
}
export default AppFooter;
