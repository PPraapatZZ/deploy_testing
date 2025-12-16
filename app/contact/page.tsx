'use client'

import { FormEvent, useEffect } from 'react'
import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

export default function ContactPage() {
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    alert(`Thank you for reaching out, ${name}! I'll get back to you at ${email} soon. 🐠`)
    form.reset()
  }

  return (
    <>
      <OceanBackground />
      <Navbar />
      
      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="parallax-content max-w-4xl mx-auto">
          <div className="fade-in-up text-center mb-32">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Let's collaborate on something amazing
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Contact Links */}
            <div className="space-y-12 text-center">
              <a 
                href="https://github.com/PPraapatZZ"
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-3 py-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl">💻</div>
                <h3 className="text-white/90">GitHub</h3>
                <p className="text-cyan-300/70 font-light">@PPraapatZZ</p>
              </a>
              
              <a 
                href="mailto:pea6423pea@gmail.com"
                className="block space-y-3 py-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl">📧</div>
                <h3 className="text-white/90">Email</h3>
                <p className="text-cyan-300/70 font-light">pea6423pea@gmail.com</p>
              </a>
              
              <a 
                href="tel:0984926443"
                className="block space-y-3 py-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl">📱</div>
                <h3 className="text-white/90">Phone</h3>
                <p className="text-cyan-300/70 font-light">098-492-6443</p>
              </a>
            </div>
            
            {/* Simple Message Form */}
            <div className="max-w-2xl mx-auto pt-16">
              <h3 className="text-center text-white/80 mb-12 text-2xl font-light">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400/50 focus:outline-none transition text-white placeholder-white/40"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400/50 focus:outline-none transition text-white placeholder-white/40"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400/50 focus:outline-none transition resize-none text-white placeholder-white/40"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-light"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-32 text-center">
            <p className="text-white/40 text-sm font-light">© 2025 Pearapat Kumsing</p>
          </div>
        </div>
      </main>
    </>
  )
}
