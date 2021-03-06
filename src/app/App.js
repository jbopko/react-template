import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBanner from './AppBanner';
import AppContent from './AppContent';
import './App.css';

const headerMenu = [
  [
    ['tech.js', 'Technology'],
    ['service.js', 'Services'],
    ['blog.js', 'Blog'],
  ],
  [
    ['tech.js', 'Technology'],
    ['service.js', 'Services'],
  ],
  [
    ['index.js', 'Home'],
    ['about.js', 'About'],
  ],
];

const footerMenu = [
  ['index.js', 'Home'],
  ['about.js', 'About'],
  ['works.js', 'Apps'],
  ['services.js', 'Services'],
  ['blog.js', 'Blog'],
];

const socialMedia = [
  ['_self', 'Instagram'],
  ['_self', 'Facebook'],
  ['_self', 'LinkedIn'],
];

const copyright = 'Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.';

function App() {
  return (
    <div>
      <AppHeader headerMenu={headerMenu} />
      <div>
        <AppBanner />
        <AppContent />
        <AppContent />
      </div>
      <AppFooter footerMenu={footerMenu} socialMedia={socialMedia} copyright={copyright} />
    </div>
  );
}
export default App;
