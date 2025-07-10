'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to check if a link is active
  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Navigation items without icons
  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/admissions', label: 'ADMISSIONS' },
    { href: '/contact', label: 'CONTACT' }
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className={`bg-gradient-to-r from-blue-700 to-blue-800 text-white text-sm transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiPhone className="text-blue-200" />
              <span>(978) 881-8055</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-blue-200" />
              <span>westfordhomesinc@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-blue-200">Caring for your loved ones with compassion</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-xl' : 'py-5 shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
              className={`text-gray-700 transition-all duration-300 transform hover:scale-110 ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <div className="relative w-6 h-6">
                {isOpen ? (
                  <FiX className="text-2xl absolute inset-0 animate-spin" />
                ) : (
                  <FiMenu className="text-2xl absolute inset-0" />
                )}
              </div>
            </button>
          </div>

          {/* Logo - centered on mobile */}
          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <Image
                  src="/assets/westford-logo.PNG"
                  alt="Westford Homes Logo"
                  width={isScrolled ? 140 : 180}
                  height={isScrolled ? 55 : 70}
                  className={`mx-auto md:mx-0 transition-all duration-300 group-hover:scale-105 drop-shadow-sm`}
                  priority
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-blue-200 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            </Link>
          </div>

          {/* Nav (Desktop) */}
          <nav className={`hidden md:flex items-center space-x-8 text-gray-700 font-medium transition-all duration-300 ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-2 transition-all duration-300 hover:text-blue-600 ${
                  isActiveLink(item.href) ? 'text-blue-600' : ''
                }`}
              >
                <span>{item.label}</span>
                
                {/* Underline - always visible for active, on hover for inactive */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 ${
                  isActiveLink(item.href) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full hover:w-full'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block ml-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
            <nav className="flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`relative px-6 py-3 transition-all duration-300 hover:text-blue-600 ${
                    isActiveLink(item.href) ? 'text-blue-600' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.label.charAt(0).toUpperCase() + item.label.slice(1).toLowerCase()}</span>
                  
                  {/* Mobile underline */}
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 ${
                    isActiveLink(item.href) ? 'w-3/4' : 'w-0 hover:w-3/4'
                  }`}></div>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  )
}