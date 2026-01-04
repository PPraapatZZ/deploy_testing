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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-6xl mx-auto text-center py-32">
          <div className="fade-in-up space-y-8">
            <div className="inline-block px-6 py-2 bg-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-sm mb-4">
              🎓 Computer Engineering Graduate
            </div>

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200">
              Pearapat Kumsing
            </h1>

            <h2 className="text-4xl md:text-5xl text-white/90 font-light">
              Fullstack Developer
            </h2>

            <div className="flex gap-6 justify-center flex-wrap pt-8">
              <Link
                href="/projects"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-6xl mx-auto py-32">
          <h2 className="text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
            Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl text-white/90 mb-8 text-center">Backend</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {['Python', 'FastAPI', 'C#', '.NET Core', 'TypeScript', 'NestJS', 'Node.js'].map((tech) => (
                  <span key={tech} className="px-5 py-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-xl text-sm backdrop-blur-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-white/90 mb-8 text-center">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'PostgreSQL', 'Redis'].map((tech) => (
                  <span key={tech} className="px-5 py-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300 rounded-xl text-sm backdrop-blur-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-white/90 mb-8 text-center">Monitoring</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {['Prometheus', 'Grafana', 'ELK Stack', 'System Design', 'UML', 'BPMN'].map((tech) => (
                  <span key={tech} className="px-5 py-3 bg-gradient-to-br from-green-500/20 to-teal-500/20 text-green-300 rounded-xl text-sm backdrop-blur-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
            >
              <span>View All Skills</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-6xl mx-auto py-32">
          <h2 className="text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
            Explore Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link href="/about" className="group text-center space-y-6 py-16 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">👤</div>
              <h3 className="text-white/90 text-3xl group-hover:text-cyan-200 transition-colors">About Me</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Learn about my journey and background</p>
            </Link>

            <Link href="/projects" className="group text-center space-y-6 py-16 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">💼</div>
              <h3 className="text-white/90 text-3xl group-hover:text-cyan-200 transition-colors">Projects</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">View my latest work and creations</p>
            </Link>

            <Link href="/skills" className="group text-center space-y-6 py-16 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">🛠️</div>
              <h3 className="text-white/90 text-3xl group-hover:text-cyan-200 transition-colors">Skills</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Discover my technical expertise</p>
            </Link>

            <Link href="/contact" className="group text-center space-y-6 py-16 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="text-7xl md:text-8xl">✉️</div>
              <h3 className="text-white/90 text-3xl group-hover:text-cyan-200 transition-colors">Contact</h3>
              <p className="text-white/60 text-lg max-w-sm mx-auto">Let's connect and collaborate</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12">
        <div className="parallax-content max-w-4xl mx-auto text-center py-32">
          <h2 className="text-4xl md:text-5xl text-white/90 font-light mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            I'm available for internships and junior system engineer positions. Let's create scalable solutions together.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Get In Touch
            </Link>
            <a
              href="https://github.com/PPraapatZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
