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
      
      <main className="parallax-section min-h-screen pt-24 px-4 pb-12">
        <div className="parallax-content max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              🐙 About Me
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2 shadow-2xl shadow-cyan-500/50">
                  <img 
                    src="https://github.com/PPraapatZZ.png" 
                    alt="Pearapat Kumsing" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 text-white/90">
                <h2 className="text-3xl font-bold text-cyan-300">Pearapat Kumsing (Pea)</h2>
                <p className="text-xl text-cyan-100">Computer Engineering Student @ KMITL</p>
                
                <p className="text-lg leading-relaxed">
                  I'm a passionate Computer Engineering student at King Mongkut's Institute of Technology Ladkrabang (KMITL),
                  diving deep into the ocean of full-stack development and emerging technologies.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Like a fish exploring the vast ocean, I'm always eager to learn new technologies and take on challenging
                  projects that push the boundaries of innovation. My journey in tech is driven by curiosity and the desire
                  to build solutions that make a difference.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-xl p-6 border-2 border-cyan-400/30">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-cyan-300 font-semibold mb-2">Email</h3>
                <p className="text-white/80">pea6423pea@gmail.com</p>
              </div>
              
              <div className="glass rounded-xl p-6 border-2 border-cyan-400/30">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-cyan-300 font-semibold mb-2">Phone</h3>
                <p className="text-white/80">098-492-6443</p>
              </div>
              
              <div className="glass rounded-xl p-6 border-2 border-cyan-400/30">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-cyan-300 font-semibold mb-2">Location</h3>
                <p className="text-white/80">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
