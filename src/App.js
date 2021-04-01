import './App.css';
import React from "react";
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Startpage from './components/Startpage.js';
import Resume from './components/Resume.js';



function App() {
  return (
    <div className="App">
      <Startpage />
      <Contact />
      <Portfolio />
      <Resume />

    </div>
  );
}

export default App;
