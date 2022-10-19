import React from 'react'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'
import Projects from '../Projects'
import Skills from '../Skills'

function Home() {
  return (
    <div>
      <Navbar/> 
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
        <Contact/>
    </div>
  )
}

export default Home
