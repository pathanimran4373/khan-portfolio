import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundries";
import Navbar from "./Components/navigationSidebar/NavigationSideBar";
import PageNotFound from "./pages/pageNotFound/PajeNotfound";
import LoadingPage from "./Components/loader/LoadingPage";

// Lazily loaded components
const Home = lazy(() => import("./pages/home-page/HomePage"));
const About = lazy(() => import("./pages/about-page/AboutPage"));
const Education = lazy(() => import("./pages/education-page/EducationPage"));
const Contact = lazy(() => import("./pages/contact-page/ContactPage"));
const Project = lazy(() => import("./pages/project-page/ProjectPage"));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
