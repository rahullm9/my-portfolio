import React from "react";
import "./index.css";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
