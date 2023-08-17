import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Nav-blog/Nav'
import Home from "./Components/home-page/HomePage"
import About from "./Components/about-page/AboutPage"
import Education from "./Components/education-page/EducationPage"
import Contact from "./Components/contact-page/ContactPage"
import Project from "./Components/project-page/ProjectPage"
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    
    </>
  )
}

export default App
