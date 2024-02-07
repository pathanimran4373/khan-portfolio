import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/navigationSidebar/NavigationSideBar";
import Home from "./pages/home-page/HomePage";
const About = lazy(() => import("./pages/about-page/AboutPage"));
const Education = lazy(() => import("./pages/education-page/EducationPage"));
const Contact = lazy(() => import("./pages/contact-page/ContactPage"));
const Project = lazy(() => import("./pages/project-page/ProjectPage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
