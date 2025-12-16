'use client'

import { FormEvent } from 'react'
import OceanBackground from '../components/OceanBackground'
import Navbar from '../components/Navbar'

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    alert(`Thank you for reaching out, ${name}! I'll get back to you at ${email} soon. 🐠`)
    form.reset()
  }

  return (
    <>
      <OceanBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              ✉️ Contact Me
            </h1>
            <p className="text-center text-cyan-200 mb-12 text-lg">
              Let's dive into collaboration together!
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-cyan-300">Get in Touch!</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Whether you have an exciting project, want to discuss web development, 
                  or just want to say hi - feel free to reach out! I'm always open to new opportunities 
                  and interesting conversations. 🌊
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com/PPraapatZZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/30 transition border-2 border-cyan-400/20"
                  >
                    <div className="text-4xl">💻</div>
                    <div>
                      <h3 className="text-cyan-300 font-semibold">GitHub</h3>
                      <p className="text-white/70 text-sm">@PPraapatZZ</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:pea6423pea@gmail.com"
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/30 transition border-2 border-cyan-400/20"
                  >
                    <div className="text-4xl">📧</div>
                    <div>
                      <h3 className="text-cyan-300 font-semibold">Email</h3>
                      <p className="text-white/70 text-sm">pea6423pea@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:0984926443"
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/30 transition border-2 border-cyan-400/20"
                  >
                    <div className="text-4xl">📱</div>
                    <div>
                      <h3 className="text-cyan-300 font-semibold">Phone</h3>
                      <p className="text-white/70 text-sm">098-492-6443</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="glass rounded-xl p-8 border-2 border-cyan-400/20">
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition text-white placeholder-white/50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition text-white placeholder-white/50"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition resize-none text-white placeholder-white/50"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
                  >
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center glass rounded-xl p-6">
            <p className="text-cyan-200">© 2025 Pearapat Kumsing • Made with ❤️ & 🌊 by Pea</p>
          </div>
        </div>
      </main>
    </>
  )
}
