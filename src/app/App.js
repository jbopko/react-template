import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Introduction from './Introduction';
import Notes from './Notes';
import Projects from './Projects';
import Game from '../game/components/Game';
import './App.css';

function App() {
  return (
    <div>
      <AppHeader />
      <Introduction />
      <Projects />
      <Notes />
      <AppFooter />
    </div>
  );
}
export default App;
