import React from "react";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Education from "./pages/Education";
import Projects from "./pages/projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";



function App() {
  return (
    <>
    <NavigationBar/>
    <Home/>
    <AboutMe/>
    <Education/>
    <Projects/>
    <Hobbies/>
    <Contact/>
    
    </>
  );
}

export default App;
