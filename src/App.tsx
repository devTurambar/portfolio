import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import bg from './images/lotr-bg1.jpg'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {

  const [dimensions, setDimentions] = useState({
    height: window.innerHeight,
    width: window.innerHeight*1.33
  });

  useEffect(() => {
    const handleResize = () => {
      setDimentions({
        height: window.innerHeight,
        width: window.innerHeight*1.33
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });
  
  return (
    // <div className="App bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
    <div className="App">
      <div className='screen'>
        <Navbar />
        <Home />
        <About />
        <Projects />
        {/* <Skills />
        <Testimonials />
        <Contact />         */}
      </div>

    </div>
  );
}

export default App;
