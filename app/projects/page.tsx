'use client'

import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

interface Project {
  icon: string
  title: string
  desc: string
  tags: string[]
  link?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      icon: '🔢',
      title: 'TypeScript Merge Algorithm',
      desc: 'Three-way merge algorithm that combines sorted arrays without using built-in sort functions',
      tags: ['TypeScript', 'Jest', 'Algorithm'],
      link: 'https://github.com/PPraapatZZ/ts-merge-algorithm'
    },
    {
      icon: '🏨',
      title: 'JubJub Hotel Management System',
      desc: 'Hotel management system with infinite rooms, guest check-in/out, and CSV export functionality',
      tags: ['Python', 'Pandas', 'OOP'],
      link: 'https://github.com/PPraapatZZ/JubJubHotel_OOD'
    },
    {
      icon: '🌐',
      title: 'UDP Socket File Transfer',
      desc: 'Reliable UDP file transfer protocol with MD5 verification and backup management',
      tags: ['Python', 'Socket', 'Networking'],
      link: 'https://github.com/PPraapatZZ/UDP_Socket'
    },
    {
      icon: '🐠',
      title: 'Neptune Portfolio',
      desc: 'Modern portfolio website with ocean theme, built with Next.js, TypeScript, and Tailwind CSS',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
      link: 'https://github.com/PPraapatZZ/deploy_testing'
    }
  ]

  return (
    <>
      <OceanBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              🚀 My Projects
            </h1>
            <p className="text-center text-cyan-200 mb-12 text-lg">
              Treasures from the depths of code
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className="glass rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 border-2 border-cyan-400/20"
                >
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-32 flex items-center justify-center">
                    <div className="text-7xl">{project.icon}</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, j) => (
                        <span 
                          key={j} 
                          className="px-3 py-1 glass text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                      >
                        <span>View on GitHub</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
