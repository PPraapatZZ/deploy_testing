'use client'

import { useState, useEffect, FormEvent } from 'react'

interface Skill {
  icon: string
  title: string
  desc: string
}

interface Project {
  icon: string
  title: string
  desc: string
  tags: string[]
}

export default function Home() {
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('bg-white/98', 'backdrop-blur-md')
        } else {
          navbar.classList.remove('bg-white/98', 'backdrop-blur-md')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    alert(`Thank you for reaching out, ${name}! I'll get back to you at ${email} soon.`)
    form.reset()
  }

  const skills: Skill[] = [
    { icon: 'fab fa-react', title: 'React & Next.js', desc: 'Modern frontend framework for scalable applications' },
    { icon: 'fab fa-vuejs', title: 'Vue.js', desc: 'Progressive JavaScript framework' },
    { icon: 'fab fa-node', title: 'Node.js & Express', desc: 'Scalable backend development' },
    { icon: 'fab fa-python', title: 'Python & FastAPI', desc: 'Data science & API development' },
    { icon: 'fas fa-database', title: 'MongoDB & PostgreSQL', desc: 'Database design & optimization' },
    { icon: 'fab fa-docker', title: 'Docker & Cloud', desc: 'Containerization & deployment' },
    { icon: 'fab fa-git-alt', title: 'Git & GitHub', desc: 'Version control & collaboration' },
    { icon: 'fas fa-code', title: 'TypeScript', desc: 'Type-safe JavaScript development' }
  ]

  const projects: Project[] = [
    {
      icon: 'fas fa-globe',
      title: 'Portfolio Website',
      desc: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS deployed on Firebase',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase']
    }
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </div>
            
            <ul className={`md:flex md:space-x-8 ${navActive ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4' : 'hidden'}`}>
              <li><a href="#home" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setNavActive(false)}>Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setNavActive(false)}>About</a></li>
              <li><a href="#skills" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setNavActive(false)}>Skills</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setNavActive(false)}>Projects</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setNavActive(false)}>Contact</a></li>
            </ul>
            
            <button className="md:hidden flex flex-col space-y-1" onClick={() => setNavActive(!navActive)}>
              <span className={`block w-6 h-0.5 bg-gray-700 transition ${navActive ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition ${navActive ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition ${navActive ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Pearapat Kumsing</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-600 font-semibold">Computer Engineering Student | Full-Stack Developer</p>
            <p className="text-lg text-gray-600">KMITL • Passionate about building innovative tech solutions</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg transition transform hover:-translate-y-1">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-500 hover:text-white transition">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <img src="https://github.com/PPraapatZZ.png" alt="Pearapat Kumsing" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              I'm a Computer Engineering student at King Mongkut's Institute of Technology Ladkrabang (KMITL)
              with a strong passion for full-stack development and emerging technologies.
            </p>
            <p>
              I specialize in building modern web applications using cutting-edge frameworks and technologies.
              Always eager to learn new skills and take on challenging projects that push the boundaries of innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <i className="fas fa-envelope text-2xl text-indigo-600"></i>
                <span className="text-sm">pea6423pea@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <i className="fas fa-phone text-2xl text-indigo-600"></i>
                <span className="text-sm">098-492-6443</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <i className="fas fa-map-marker-alt text-2xl text-indigo-600"></i>
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <i className={`${skill.icon} text-6xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <i className={`${project.icon} text-8xl text-white`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-50 text-indigo-600 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-indigo-600 hover:text-purple-600 transition font-medium">
                      <i className="fas fa-external-link-alt mr-2"></i>Demo
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-purple-600 transition font-medium">
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Let's Work Together!</h3>
              <p className="text-lg text-gray-600">
                If you have an interesting project or want to discuss web development, feel free to reach out!
              </p>
              <div className="flex gap-4">
                {[
                  { href: 'https://github.com/PPraapatZZ', icon: 'fab fa-github', title: 'GitHub' },
                  { href: 'mailto:pea6423pea@gmail.com', icon: 'fas fa-envelope', title: 'Email' },
                  { href: 'tel:0984926443', icon: 'fas fa-phone', title: 'Phone' }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" 
                     className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl hover:shadow-lg hover:-translate-y-1 transition"
                     title={social.title}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition resize-none"
                ></textarea>
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 Pearapat Kumsing. Made with ❤️ by Pea</p>
      </footer>
    </>
  )
}
