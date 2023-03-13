import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path="/" element = {<About/>} />
              <Route exact path="/education" element = {<Education/>} />
              <Route exact path="/experience" element = {<Experience/>} />
              <Route exact path="/Interest" element = {<Interest/>} />
              <Route exact path="/skills" element = {<Skills/>} />
            </Routes>
          </div>
        </Router>
  );
};

export default App;
