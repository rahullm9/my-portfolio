import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Educations from "./components/Educations.jsx";
import Layout from "./Layout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Educations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
