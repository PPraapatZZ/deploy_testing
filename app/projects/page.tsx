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
      
      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up text-center mb-32">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Selected works
            </p>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="text-center space-y-6 hover:scale-105 transition-all duration-500"
              >
                <div className="text-8xl mb-8">{project.icon}</div>
                <h3 className="text-white/90">{project.title}</h3>
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="text-cyan-300/60 text-sm font-light"
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
                    className="inline-block text-cyan-400/80 hover:text-cyan-300 font-light transition pt-4"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
