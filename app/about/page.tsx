'use client'

import { useEffect } from 'react'
import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

export default function AboutPage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-content')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const scrolled = window.scrollY
        const rate = scrolled * -0.2
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
      
      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="parallax-content max-w-5xl mx-auto">
          <div className="fade-in-up text-center mb-20">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              A Computer Engineering student exploring the depths of technology
            </p>
          </div>
          
          <div className="space-y-32">
            {/* Profile Section */}
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-12">
                <img 
                  src="https://github.com/PPraapatZZ.png" 
                  alt="Pearapat Kumsing" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl"
                />
              </div>
              
              <h2 className="text-white/90">Pearapat Kumsing</h2>
              <p className="text-2xl md:text-3xl text-cyan-200/80 font-light">Computer Engineering @ KMITL</p>
            </div>
            
            {/* Bio Section */}
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Passionate about full-stack development and emerging technologies.
              </p>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Always eager to learn and build solutions that make a difference.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-16 text-center max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="text-6xl">📧</div>
                <h3 className="text-cyan-200/90">Email</h3>
                <p className="text-white/60">pea6423pea@gmail.com</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl">📱</div>
                <h3 className="text-cyan-200/90">Phone</h3>
                <p className="text-white/60">098-492-6443</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl">📍</div>
                <h3 className="text-cyan-200/90">Location</h3>
                <p className="text-white/60">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
