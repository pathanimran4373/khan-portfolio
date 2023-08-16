import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav-blog/Nav'
import FirstPage from './Components/First-page/First-page'
import SecondPage from './Components/Second-page/Second-page'
import ThirdPage from './Components/Third-page/Third-page'
import FourthPage from './Components/Fourth-page/Fourth-page'
import FifthPage from './Components/Fifth-page/Fift-page'

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/about" element={<SecondPage />} />
        <Route path="/education" element={<ThirdPage />} />
        <Route path="/contact" element={<FourthPage />} />
        <Route path="/project" element={<FifthPage />} />
      </Routes>
    
    </>
  )
}

export default App
