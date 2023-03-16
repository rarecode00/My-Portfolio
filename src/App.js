import React , {useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1200);
  useEffect(() => {
    const handleResize = () => {
      console.log("Current width:", window.innerWidth);
      console.log("Current Height:" , window.innerHeight)
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener('load' , handleResize)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <div className="main-container" style={{overflow: 'hidden !important'}}>
        <div className="navbar">
          <Navbar width = {width} />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<About height={height}/>} />
            <Route exact path="/education" element={<Education height = {height} />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/Interest" element={<Interest />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
