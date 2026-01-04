'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900/95 to-teal-900/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all">
            ⚡ System Engineer Portfolio
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`${
                    isActive(item.path) ? 'text-cyan-400 font-medium' : 'text-white'
                  } hover:text-cyan-400 transition-all text-sm`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setNavActive(!navActive)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${navActive ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navActive ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navActive ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {navActive && (
          <div className="lg:hidden pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                        : 'text-white hover:bg-white/10'
                    } transition-all`}
                    onClick={() => setNavActive(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
