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
        <div className="parallax-content max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-20">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Full-Stack Enthusiast
            </p>
          </div>

          <div className="space-y-24">
            {/* Profile Section */}
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-12">
                <img
                  src="https://github.com/PPraapatZZ.png"
                  alt="Pearapat Kumsing"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-cyan-400/30"
                />
              </div>

              <h2 className="text-4xl text-white/90 font-light">Pearapat Kumsing</h2>
              <p className="text-2xl md:text-3xl text-cyan-200/80 font-light">
                Computer Engineering Graduate @ KMITL
              </p>
            </div>

            {/* Professional Summary */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-12">
              <h3 className="text-2xl text-white/90 mb-6 text-center">Professional Summary</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light text-center">
                Motivated Computer Engineering graduate with strong expertise in <span className="text-cyan-400">Backend Development</span> and <span className="text-cyan-400">System Architecture</span>. 
                Proficient in building scalable applications using <span className="text-cyan-400">Python (FastAPI)</span>, <span className="text-cyan-400">C# (.NET Core)</span>, 
                and <span className="text-cyan-400">TypeScript (NestJS)</span>. Experienced in <span className="text-cyan-400">full-stack integration</span> with React and Svelte. 
                Skilled in translating business requirements into technical specifications through detailed documentation (UML, BPMN).
              </p>
            </div>

            {/* Projects Section */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl text-white/90 mb-12 text-center">Featured Projects</h3>
              <div className="space-y-8">
                {/* Sustainable Fashion Marketplace */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <h4 className="text-2xl text-cyan-400 mb-3">Sustainable Fashion Marketplace</h4>
                  <p className="text-white/60 mb-4">Full Stack Development (ReactTS, NestTS)</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Developed a clothing trading platform using ReactTS (Frontend) and NestTS (Backend)</li>
                    <li>• Designed system architecture using Sequence, Use Case and ER diagrams</li>
                    <li>• Implemented features to promote clothing circulation and waste reduction</li>
                  </ul>
                </div>

                {/* Detective Conan Web Crawler */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <h4 className="text-2xl text-cyan-400 mb-3">Detective Conan Web Crawler</h4>
                  <p className="text-white/60 mb-4">Frontend Development (Python FastAPI, SvelteJS)</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Developed a web crawler to extract data using Python Regex</li>
                    <li>• Built RESTful APIs with FastAPI to serve data to a SvelteJS frontend</li>
                    <li>• Managed data processing and formatting for specific requirements</li>
                  </ul>
                </div>

                {/* University Registration System */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <h4 className="text-2xl text-cyan-400 mb-3">University Registration System</h4>
                  <p className="text-white/60 mb-4">Backend Development & System Analysis (FastAPI, ReactJS)</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Engineered backend services using Python (FastAPI) with ReactJS frontend integration</li>
                    <li>• Created technical documentation including Sequence, Class and Use Case diagrams</li>
                    <li>• Optimized registration workflows and system requirements</li>
                  </ul>
                </div>

                {/* Chill - Event Community Webboard */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <h4 className="text-2xl text-cyan-400 mb-3">Chill - Event Community Webboard</h4>
                  <p className="text-white/60 mb-4">Web Application Development (ASP.NET Core MVC)</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Developed an event webboard application using C# and ASP.NET Core MVC</li>
                    <li>• Created features for connecting users with shared interests and activities</li>
                    <li>• Implemented full-stack features using Microsoft .NET technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-cyan-200/90 text-lg mb-2">Email</h3>
                <p className="text-white/60">pea6423pea@gmail.com</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-cyan-200/90 text-lg mb-2">Phone</h3>
                <p className="text-white/60">083-250-4733</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-cyan-200/90 text-lg mb-2">Location</h3>
                <p className="text-white/60">Bangkok, Thailand</p>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="text-center">
              <a
                href="https://github.com/PPraapatZZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">🐙</span>
                <span>View My GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
