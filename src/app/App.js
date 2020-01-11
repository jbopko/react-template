import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBanner from './AppBanner';
import AppContent from './AppContent';
import './App.css';

const headerMenu = [
  [
    [11, 'tech.js', 'Technology'],
    [12, 'service.js', 'Services'],
    [13, 'blog.js', 'Blog'],
  ],
  [
    [21, 'tech.js', 'Technology'],
    [22, 'service.js', 'Services'],
  ],
  [
    [31, 'index.js', 'Home'],
    [32, 'about.js', 'About'],
  ],
];

const footerMenu = [
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

const copyright = 'Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.';

function App() {
  return (
    <div>
      <AppHeader headerMenu={headerMenu} />
      <AppBanner />
      <AppContent />
      <AppFooter footerMenu={footerMenu} socialMedia={socialMedia} copyright={copyright} />
    </div>
  );
}
export default App;
