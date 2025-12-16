'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900/90 to-teal-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            🐠 Neptune Portfolio
          </Link>
          
          <ul className={`md:flex md:space-x-8 ${navActive ? 'flex flex-col absolute top-16 left-0 w-full bg-blue-900/95 backdrop-blur-md shadow-lg p-4 space-y-4' : 'hidden'}`}>
            <li>
              <Link 
                href="/" 
                className={`${isActive('/') ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition`}
                onClick={() => setNavActive(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${isActive('/about') ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition`}
                onClick={() => setNavActive(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className={`${isActive('/skills') ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition`}
                onClick={() => setNavActive(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={`${isActive('/projects') ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition`}
                onClick={() => setNavActive(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${isActive('/contact') ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition`}
                onClick={() => setNavActive(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <button className="md:hidden flex flex-col space-y-1" onClick={() => setNavActive(!navActive)}>
            <span className={`block w-6 h-0.5 bg-white transition ${navActive ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition ${navActive ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition ${navActive ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
