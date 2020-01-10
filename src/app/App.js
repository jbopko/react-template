import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBanner from './AppBanner';
import AppContent from './AppContent';
import './App.css';

function App() {
  return (
    <div>
      <AppHeader />
      <AppBanner />
      <AppContent />
      <AppFooter />
    </div>
  );
}
export default App;
