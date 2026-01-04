'use client'

import { useEffect } from 'react'
import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

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

  const skillCategories = [
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Python (FastAPI)', level: 90 },
        { name: 'C# (.NET Core)', level: 85 },
        { name: 'TypeScript (NestJS)', level: 85 },
        { name: 'Node.js (Express)', level: 80 },
        { name: 'RESTful API Design', level: 90 },
      ]
    },
    {
      category: 'System Architecture',
      icon: '🏗️',
      skills: [
        { name: 'Microservices Architecture', level: 85 },
        { name: 'System Design Patterns', level: 80 },
        { name: 'API Gateway Design', level: 80 },
        { name: 'Event-Driven Architecture', level: 75 },
        { name: 'Load Balancing', level: 75 },
      ]
    },
    {
      category: 'Database & Caching',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis (Caching)', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Database Design & Optimization', level: 85 },
      ]
    },
    {
      category: 'DevOps & Infrastructure',
      icon: '🚀',
      skills: [
        { name: 'Docker & Containerization', level: 85 },
        { name: 'Kubernetes (K8s)', level: 70 },
        { name: 'CI/CD (GitHub Actions)', level: 80 },
        { name: 'Linux System Administration', level: 75 },
        { name: 'Cloud Platforms (AWS/Azure)', level: 70 },
      ]
    },
    {
      category: 'Monitoring & Observability',
      icon: '📊',
      skills: [
        { name: 'Prometheus & Grafana', level: 75 },
        { name: 'ELK Stack (Elasticsearch)', level: 70 },
        { name: 'Application Performance Monitoring', level: 75 },
        { name: 'Log Aggregation', level: 75 },
        { name: 'Alert Management', level: 75 },
      ]
    },
    {
      category: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React & ReactTS', level: 85 },
        { name: 'Svelte & SvelteJS', level: 80 },
        { name: 'Next.js', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      category: 'System Analysis & Documentation',
      icon: '📋',
      skills: [
        { name: 'UML Diagrams', level: 90 },
        { name: 'BPMN Modeling', level: 85 },
        { name: 'Requirements Analysis', level: 85 },
        { name: 'Technical Documentation', level: 90 },
        { name: 'API Documentation (Swagger)', level: 85 },
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman/Insomnia', level: 85 },
        { name: 'Jira & Confluence', level: 75 },
        { name: 'Slack & Teams', level: 85 },
      ]
    },
  ]

  return (
    <>
      <OceanBackground />
      <Navbar />

      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="parallax-content max-w-7xl mx-auto">
          <div className="fade-in-up text-center mb-20">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              Technical Skills
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Comprehensive expertise in system engineering and full-stack development
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-3xl text-white/90">{category.category}</h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Competencies */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-white/90 text-xl mb-3">Problem Solving</h3>
              <p className="text-white/60">Analytical thinking and systematic approach to complex technical challenges</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-white/90 text-xl mb-3">Team Collaboration</h3>
              <p className="text-white/60">Effective communication and cooperation in agile development teams</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-white/90 text-xl mb-3">Continuous Learning</h3>
              <p className="text-white/60">Staying updated with latest technologies and industry best practices</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
