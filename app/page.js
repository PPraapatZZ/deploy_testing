'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setNavActive(false)
        }
      })
    })

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)'
        navbar.style.backdropFilter = 'blur(10px)'
      } else {
        navbar.style.background = '#ffffff'
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    alert(`Thank you for reaching out, ${name}! I'll get back to you at ${email} soon.`)
    e.target.reset()
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h1>My Portfolio</h1>
          </div>
          <ul className={`nav-links ${navActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={() => setNavActive(!navActive)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Pearapat Kumsing</span></h1>
          <p className="hero-subtitle">Computer Engineering Student | Full-Stack Developer</p>
          <p className="hero-description">KMITL • Passionate about building innovative tech solutions</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="https://github.com/PPraapatZZ.png" alt="Pearapat Kumsing" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Engineering student at King Mongkut's Institute of Technology Ladkrabang (KMITL)
                with a strong passion for full-stack development and emerging technologies.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge frameworks and technologies.
                Always eager to learn new skills and take on challenging projects that push the boundaries of innovation.
              </p>
              <div className="about-info">
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>pea6423pea@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>098-492-6443</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {[
              { icon: 'fab fa-react', title: 'React & Next.js', desc: 'Modern frontend framework for scalable applications' },
              { icon: 'fab fa-vuejs', title: 'Vue.js', desc: 'Progressive JavaScript framework' },
              { icon: 'fab fa-node', title: 'Node.js & Express', desc: 'Scalable backend development' },
              { icon: 'fab fa-python', title: 'Python & FastAPI', desc: 'Data science & API development' },
              { icon: 'fas fa-database', title: 'MongoDB & PostgreSQL', desc: 'Database design & optimization' },
              { icon: 'fab fa-docker', title: 'Docker & Cloud', desc: 'Containerization & deployment' },
              { icon: 'fab fa-git-alt', title: 'Git & GitHub', desc: 'Version control & collaboration' },
              { icon: 'fas fa-code', title: 'TypeScript', desc: 'Type-safe JavaScript development' }
            ].map((skill, i) => (
              <div key={i} className="skill-card">
                <i className={skill.icon}></i>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {[
              {
                icon: 'fas fa-shopping-cart',
                title: 'E-Commerce Website',
                desc: 'Modern online shopping platform with payment system and product management',
                tags: ['React', 'Node.js', 'MongoDB']
              },
              {
                icon: 'fas fa-tasks',
                title: 'Task Management App',
                desc: 'Task management application that helps teams collaborate efficiently',
                tags: ['Vue.js', 'Firebase', 'Tailwind']
              },
              {
                icon: 'fas fa-blog',
                title: 'Personal Blog',
                desc: 'Personal blog with easy-to-use CMS system',
                tags: ['Next.js', 'Markdown', 'Vercel']
              }
            ].map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-image">
                  <i className={project.icon}></i>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Demo</a>
                    <a href="#" className="project-link"><i className="fab fa-github"></i> Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together!</h3>
              <p>If you have an interesting project or want to discuss web development, feel free to reach out!</p>
              <div className="social-links">
                <a href="https://github.com/PPraapatZZ" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:pea6423pea@gmail.com" className="social-link" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:0984926443" className="social-link" title="Phone">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Pearapat Kumsing. Made with ❤️ by Pea</p>
        </div>
      </footer>
    </>
  )
}
