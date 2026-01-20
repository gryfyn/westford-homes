'use client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/admissions', label: 'ADMISSIONS' },
    { href: '/contact', label: 'CONTACT' }
  ];

  return (
    <>
      <Head>
        {/* SEO meta tags */}
      </Head>

      {/* Fixed top bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-800 ease-out"
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      >
        {/* Purple contact bar with scrolling text */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white text-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {/* Desktop view - contact info + scrolling text */}
            <div className="hidden md:flex justify-between items-center">
              <div className="flex items-center space-x-6 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <FiPhone className="text-purple-200" />
                  <a href="tel:+19788818055" className="hover:text-purple-100 transition-colors">(978) 881-8055</a>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-purple-200" />
                  <a href="mailto:westfordhomesinc@gmail.com" className="hover:text-purple-100 transition-colors">westfordhomesinc@gmail.com</a>
                </div>
              </div>
              
              {/* Scrolling text */}
              <div className="flex-1 overflow-hidden ml-8">
                <div className="marquee-container">
                  <div className="marquee-content">
                    <span className="text-purple-200 mx-8">Caring for your loved ones with compassion</span>
                    <span className="text-purple-200 mx-8">24/7 Professional Care Services</span>
                    <span className="text-purple-200 mx-8">Licensed & Certified Adult Family Home</span>
                    <span className="text-purple-200 mx-8">Caring for your loved ones with compassion</span>
                    <span className="text-purple-200 mx-8">24/7 Professional Care Services</span>
                    <span className="text-purple-200 mx-8">Licensed & Certified Adult Family Home</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile view - scrolling text only */}
            <div className="md:hidden">
              <div className="marquee-container">
                <div className="marquee-content">
                  <span className="text-purple-200 mx-6">📞 (978) 881-8055</span>
                  <span className="text-purple-200 mx-6">✉️ westfordhomesinc@gmail.com</span>
                  <span className="text-purple-200 mx-6">Caring for your loved ones with compassion</span>
                  <span className="text-purple-200 mx-6">📞 (978) 881-8055</span>
                  <span className="text-purple-200 mx-6">✉️ westfordhomesinc@gmail.com</span>
                  <span className="text-purple-200 mx-6">Caring for your loved ones with compassion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header 
          className={`bg-white/95 backdrop-blur-sm transition-all duration-800 ease-out ${
            isScrolled ? 'py-2 shadow-lg' : 'py-3 shadow-md'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Logo & Text */}
            <div 
              className={`transition-all duration-900 ease-out flex-shrink-0 ${
                isScrolled ? 'opacity-0 w-0 -mr-4 hidden md:block' : 'opacity-100 w-auto'
              }`}
            >
              <Link href="/" className="group inline-block relative">
                {/* Desktop layout - logo and text side by side */}
                <div className="hidden md:flex items-center space-x-3">
                  <Image
                    src="/assets/westford-logo.PNG"
                    alt="Westford Homes Logo"
                    width={isScrolled ? 60 : 70}
                    height={isScrolled ? 60 : 90}
                    className="transition-all duration-900 ease-out group-hover:scale-105 drop-shadow-sm"
                    priority
                  />
                  <div className="flex flex-col">
                    <span className={`font-bold text-gray-800 transition-all duration-900 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
                      Westford Homes
                    </span>
                    <span className="text-xs text-gray-600">Adult Foster Care</span>
                  </div>
                </div>

                {/* Mobile layout - logo on top, text below */}
                <div className="flex md:hidden flex-col items-center">
                  <Image
                    src="/assets/westford-logo.PNG"
                    alt="Westford Homes Logo"
                    width={50}
                    height={50}
                    className="transition-all duration-900 ease-out group-hover:scale-105 drop-shadow-sm mb-1"
                    priority
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-sm leading-tight">
                      Westford Homes
                    </div>
                    <div className="text-xs text-gray-600">Adult Foster Care</div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-purple-200 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </Link>
            </div>

            {/* Centered navigation - Desktop */}
            <nav className={`hidden md:flex items-center space-x-10 text-gray-700 font-medium ${
              isScrolled ? 'text-sm ml-auto' : 'text-base'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-2 hover:text-purple-600 transition-colors duration-400 ${isActiveLink(item.href) ? 'text-purple-600' : ''}`}
                >
                  {item.label}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-400 ${isActiveLink(item.href) ? 'w-full' : 'w-0 hover:w-full'}`}></div>
                </Link>
              ))}
            </nav>

            {/* Get Started button - Desktop */}
            <Link
              href="/contact"
              className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full font-medium text-white transition-all duration-400 ease-out ${
                isScrolled ? 'text-sm' : 'text-base'
              } bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 hover:shadow-xl hover:scale-105 shadow-md ml-6`}
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                aria-label="Toggle navigation menu"
                onClick={toggleMenu}
                className="text-gray-700 transition-transform duration-300 hover:scale-110 p-2"
              >
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`relative px-6 py-3 hover:text-purple-600 transition-colors duration-300 ${isActiveLink(item.href) ? 'text-purple-600' : ''} animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-300 ${isActiveLink(item.href) ? 'w-3/4' : 'w-0 hover:w-3/4'}`}></div>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="mt-4 px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '500ms' }}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content jump under fixed header */}
      <div className="h-[calc(88px+40px)] md:h-[calc(64px+40px)]" />

      <style jsx global>{`
        @keyframes fadeInUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        /* Marquee scrolling animation */
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}