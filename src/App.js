import React from "react";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Education from "./pages/Education";



function App() {
  return (
    <>
    <NavigationBar/>
    <Home/>
    <AboutMe/>
    <Education/>
    
    </>
  );
}

export default App;
