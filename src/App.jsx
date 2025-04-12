import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Features from './pages/Features'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Features/>
    <Testimonials/>
    <Contact/>
    </>
    
  )
}

export default App