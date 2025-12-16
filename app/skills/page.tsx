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
      
      <main className="parallax-section min-h-screen pt-24 px-4 pb-12">
        <div className="parallax-content max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              ⚡ My Skills
            </h1>
            <p className="text-center text-cyan-200 mb-12 text-lg">
              Technologies I've mastered in my underwater tech journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="glass rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 border-2 border-cyan-400/20"
                >
                  <div className="text-6xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{skill.title}</h3>
                  <p className="text-white/70 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
