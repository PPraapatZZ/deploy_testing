'use client'

import { useEffect } from 'react'
import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

interface Skill {
  icon: string
  title: string
  desc: string
}

export default function SkillsPage() {
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
  const skills: Skill[] = [
    { icon: '⚛️', title: 'React & Next.js', desc: 'Modern frontend framework for scalable applications' },
    { icon: '💚', title: 'Vue.js', desc: 'Progressive JavaScript framework' },
    { icon: '🟢', title: 'Node.js & Express', desc: 'Scalable backend development' },
    { icon: '🐍', title: 'Python & FastAPI', desc: 'Data science & API development' },
    { icon: '🗄️', title: 'MongoDB & PostgreSQL', desc: 'Database design & optimization' },
    { icon: '🐳', title: 'Docker & Cloud', desc: 'Containerization & deployment' },
    { icon: '🔱', title: 'Git & GitHub', desc: 'Version control & collaboration' },
    { icon: '📘', title: 'TypeScript', desc: 'Type-safe JavaScript development' }
  ]

  return (
    <>
      <OceanBackground />
      <Navbar />
      
      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="parallax-content max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-32">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              Skills
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className="text-center space-y-4 py-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-7xl md:text-8xl mb-6">{skill.icon}</div>
                <h3 className="text-white/90">{skill.title}</h3>
                <p className="text-white/60 text-lg max-w-sm mx-auto font-light">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
