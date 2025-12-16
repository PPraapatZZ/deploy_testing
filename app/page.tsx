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
      
      {/* Hero Section with Parallax */}
      <section className="parallax-section min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="parallax-content max-w-4xl mx-auto text-center space-y-8">
          <div className="glass rounded-3xl p-12 shadow-2xl fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-pulse">
              🌊 Welcome to Neptune's Realm
            </h1>
            
            <p className="text-2xl md:text-3xl text-cyan-100 font-semibold mb-4">
              Pearapat Kumsing
            </p>
            
            <p className="text-xl text-white/90 mb-8">
              Computer Engineering Student | Full-Stack Developer
            </p>
            
            <p className="text-lg text-cyan-200 mb-8">
              Diving deep into the ocean of code 🐠
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                href="/about"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
              >
                🐙 Explore My Story
              </Link>
              <Link 
                href="/projects"
                className="px-8 py-4 glass text-cyan-200 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 border-2 border-cyan-400/50"
              >
                🐚 View Projects
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in-up stagger-2">
            <Link href="/about" className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105">
              <div className="text-4xl mb-2">👤</div>
              <p className="text-cyan-200 font-semibold">About</p>
            </Link>
            <Link href="/skills" className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-cyan-200 font-semibold">Skills</p>
            </Link>
            <Link href="/projects" className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-cyan-200 font-semibold">Projects</p>
            </Link>
            <Link href="/contact" className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105">
              <div className="text-4xl mb-2">✉️</div>
              <p className="text-cyan-200 font-semibold">Contact</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-300 animate-bounce">
        <div className="text-4xl">↓</div>
        <p className="text-sm">Scroll to explore</p>
      </div>
    </>
  )
}
