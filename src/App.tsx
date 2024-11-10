import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import bg from './images/lotr-bg1.jpg'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const hireMeRef = useRef<HTMLDivElement | null>(null);

  const [navClicked, setNavClicked] = useState("");
  const handleNavClick = (option:string) => {
    setNavClicked(option);
    switch (option){
      case "Home":
        homeRef.current?.scrollIntoView({
          behavior:"smooth"
        });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({
          behavior:"smooth"
        });
        break;
      case "Projects":
        projectsRef.current?.scrollIntoView({
          behavior:"smooth"
        });
        break;
      // case "Resume":
      //   resumeRef.current?.scrollIntoView();
      //   break;
      // case "Hire me":
      //   hireMeRef.current?.scrollIntoView();
      //   break;
      default:
    }
  }

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
      <div className='fixed h-10 w-full top-0 bg-black'>
        <Navbar onValueChange={handleNavClick}/>
      </div>
      <div className="top-10 container">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        {/* <Skills />
        <Testimonials />
        */}
        <Contacts />         
      </div>
    </div>
  );
}

export default App;
