import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AvailabilityBar from './components/AvailabilityBar'
import Marquee from './components/Marquee'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : ''
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <AvailabilityBar />
      <Marquee />
      <WorkGrid />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
