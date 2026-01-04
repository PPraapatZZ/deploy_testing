'use client'

import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

export default function ProjectsPage() {
  const projects = [
    {
      icon: '🛒',
      title: 'Sustainable Fashion Marketplace',
      category: 'Full Stack Development',
      desc: 'E-commerce platform for clothing trading built with modern microservices architecture',
      details: [
        'Developed using ReactTS (Frontend) and NestTS (Backend)',
        'Implemented BPMN workflows and UML diagrams for system design',
        'Features include user authentication, product catalog, and order management',
        'Focused on promoting clothing circulation and reducing waste'
      ],
      tags: ['ReactTS', 'NestJS', 'TypeScript', 'PostgreSQL', 'BPMN', 'UML'],
      architecture: 'Microservices with separate frontend and backend services',
      link: 'https://github.com/PPraapatZZ'
    },
    {
      icon: '🎓',
      title: 'University Registration System',
      category: 'Backend Development & System Analysis',
      desc: 'Comprehensive course registration system with real-time availability tracking',
      details: [
        'Backend built with Python FastAPI and ReactJS frontend',
        'Created detailed technical documentation (Sequence, Class, Use Case diagrams)',
        'Optimized database queries for handling concurrent registrations',
        'Implemented role-based access control for students and administrators'
      ],
      tags: ['FastAPI', 'Python', 'ReactJS', 'PostgreSQL', 'UML', 'System Design'],
      architecture: 'RESTful API with React frontend, PostgreSQL database',
      link: 'https://github.com/PPraapatZZ'
    },
    {
      icon: '🕵️',
      title: 'Detective Conan Web Crawler',
      category: 'Frontend Development & Data Processing',
      desc: 'Automated web scraper with data processing and visualization',
      details: [
        'Python web crawler using Regex for data extraction',
        'Built RESTful APIs with FastAPI for data serving',
        'SvelteJS frontend for displaying formatted content',
        'Implemented caching for improved performance'
      ],
      tags: ['Python', 'FastAPI', 'SvelteJS', 'Web Scraping', 'Regex', 'REST API'],
      architecture: 'Backend crawler + API service + Svelte frontend',
      link: 'https://github.com/PPraapatZZ/UDP_Socket'
    },
    {
      icon: '🎉',
      title: 'Cilali - Event Community Webboard',
      category: 'Web Application Development',
      desc: 'Social platform connecting users with shared interests and events',
      details: [
        'Developed with ASP.NET Core MVC and C#',
        'Features include event creation, user matching, and activity feeds',
        'Implemented full-stack using Microsoft .NET technologies',
        'Responsive design for mobile and desktop'
      ],
      tags: ['C#', 'ASP.NET Core MVC', '.NET', 'SQL Server', 'Entity Framework'],
      architecture: 'MVC pattern with server-side rendering',
      link: 'https://github.com/PPraapatZZ'
    },
    {
      icon: '📦',
      title: 'JubJub Hotel Management System',
      category: 'Object-Oriented Programming',
      desc: 'Hotel management system with advanced room allocation algorithm',
      details: [
        'Built with Python following OOP principles',
        'Infinite room management with guest check-in/out',
        'CSV export functionality for reports',
        'Implemented design patterns for scalability'
      ],
      tags: ['Python', 'OOP', 'Pandas', 'Data Management'],
      architecture: 'Object-oriented design with modular components',
      link: 'https://github.com/PPraapatZZ/JubJubHotel_OOD'
    },
    {
      icon: '🔌',
      title: 'UDP Socket File Transfer',
      category: 'Network Programming',
      desc: 'Reliable file transfer protocol over UDP with verification',
      details: [
        'Custom UDP protocol implementation in Python',
        'MD5 checksum verification for data integrity',
        'Backup management and recovery features',
        'Handles packet loss and retransmission'
      ],
      tags: ['Python', 'Socket Programming', 'Networking', 'UDP Protocol'],
      architecture: 'Client-server architecture with custom protocol',
      link: 'https://github.com/PPraapatZZ/UDP_Socket'
    },
    {
      icon: '📊',
      title: 'TypeScript Merge Algorithm',
      category: 'Algorithm Development',
      desc: 'Three-way merge algorithm for sorted arrays without built-in functions',
      details: [
        'Custom merge algorithm implementation in TypeScript',
        'Comprehensive unit tests with Jest',
        'Optimized for performance and memory usage',
        'Clean code with detailed documentation'
      ],
      tags: ['TypeScript', 'Jest', 'Algorithm', 'Testing'],
      architecture: 'Pure function with test-driven development',
      link: 'https://github.com/PPraapatZZ/ts-merge-algorithm'
    }
  ]

  return (
    <>
      <OceanBackground />
      <Navbar />

      <main className="min-h-screen px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-up text-center mb-20">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-8">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
              Diverse portfolio showcasing system engineering and full-stack development
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-white/90 mb-2">{project.title}</h3>
                    <p className="text-cyan-400 text-lg mb-4">{project.category}</p>
                    <p className="text-white/70 text-lg leading-relaxed">{project.desc}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white/80 text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.details.map((detail, j) => (
                      <li key={j} className="text-white/60 flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▪</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white/80 text-sm mb-2">Architecture:</h4>
                  <p className="text-white/60 italic">{project.architecture}</p>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-white/10 text-cyan-300 rounded-full text-sm"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    <span>View Project</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl text-white/90 font-light mb-2">{projects.length}+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl text-white/90 font-light mb-2">10+</div>
              <div className="text-white/60">Technologies Used</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl text-white/90 font-light mb-2">4</div>
              <div className="text-white/60">Tech Stacks</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl text-white/90 font-light mb-2">100%</div>
              <div className="text-white/60">Passion Driven</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
