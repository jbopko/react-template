import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Introduction from './AppBanner';
import Notes from './AppContent';
import './App.css';

function App() {
  return (
    <div>
      <AppHeader />
      <Introduction />
      <Notes />
      <AppFooter />
    </div>
  );
}
export default App;
