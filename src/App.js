import "./App.css";
import React from "react";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Startpage from "./components/Startpage.js";
import Resume from "./components/Resume.js";
import ReactFullpageWrapper from "./extra/fullpage";

function App() {
  return (
    <ReactFullpageWrapper>
      <div className="App">
        <div id="fullpage-wrapper">
          <div className="section">
            <Startpage />
          </div>
          <div className="section">
            <Contact />
          </div>
          <div className="section">
            <Portfolio />
          </div>
          <div className="section">
            <Resume />
          </div>
        </div>
      </div>
    </ReactFullpageWrapper>
  );
}

export default App;
