'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import OceanBackground from './components/OceanBackground'
import Navbar from './components/Navbar'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-content')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const scrolled = window.scrollY
        const rate = scrolled * -0.3
        ;(el as HTMLElement).style.transform = `translateY(${rate}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <OceanBackground />
      <Navbar />
      
      {/* Apple-style Full Screen Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-6xl mx-auto text-center py-32">
          <div className="fade-in-up space-y-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200">
              Pearapat Kumsing
            </h1>
            
            <h2 className="text-white/90 font-light">
              Computer Engineering Student
            </h2>
            
            <p className="text-2xl md:text-3xl text-cyan-100/80 max-w-3xl mx-auto font-light">
              Building the future with code, one line at a time.
            </p>
            
            <div className="flex gap-8 justify-center flex-wrap pt-8">
              <Link 
                href="/projects"
                className="px-10 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Projects
              </Link>
              <Link 
                href="/contact"
                className="px-10 py-4 text-cyan-200 rounded-full text-lg font-medium hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Navigation Cards */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-6xl mx-auto py-32">
          <h2 className="text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
            Explore
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <Link href="/about" className="group text-center space-y-6 py-16 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">👤</div>
              <h3 className="text-white/90 group-hover:text-cyan-200 transition-colors duration-300">About Me</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Learn about my journey in tech</p>
            </Link>
            
            <Link href="/skills" className="group text-center space-y-6 py-16 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">⚡</div>
              <h3 className="text-white/90 group-hover:text-cyan-200 transition-colors duration-300">Skills</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Technologies I work with</p>
            </Link>
            
            <Link href="/projects" className="group text-center space-y-6 py-16 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">🚀</div>
              <h3 className="text-white/90 group-hover:text-cyan-200 transition-colors duration-300">Projects</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">My latest creations</p>
            </Link>
            
            <Link href="/contact" className="group text-center space-y-6 py-16 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">✉️</div>
              <h3 className="text-white/90 group-hover:text-cyan-200 transition-colors duration-300">Contact</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Let's connect</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
