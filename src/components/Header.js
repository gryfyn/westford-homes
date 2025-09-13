'use client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveLink = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/admissions', label: 'ADMISSIONS' },
    { href: '/contact', label: 'CONTACT' }
  ]

  const seoData = {
    '/': {
      title: 'Westford Homes - Adult Foster Care in Wilsonville & Tualatin, Oregon',
      description: 'Compassionate adult foster care at Westford Homes in Wilsonville and Tualatin, Oregon. 24/7 skilled nursing, dementia care, and wheelchair-accessible facilities.',
      keywords: 'adult foster care Wilsonville Oregon, senior care Tualatin, dementia care Wilsonville, hospice care Oregon, wheelchair accessible senior care, adult family home'
    },
    '/services': {
      title: 'Care Services - Westford Homes | Wilsonville & Tualatin, Oregon',
      description: 'Comprehensive care services at Westford Homes, including 24/7 nursing, dementia care, and hospice care in Wilsonville and Tualatin, Oregon.',
      keywords: 'assisted living services, senior care Wilsonville, dementia care Tualatin, 24/7 skilled nursing, adult foster home Oregon, personalized senior care'
    },
    '/about': {
      title: 'About Westford Homes - Compassionate Care in Oregon',
      description: 'Learn about Westford Homes’ dedicated team providing compassionate senior care in Wilsonville and Tualatin, Oregon, with a focus on dignity and comfort.',
      keywords: 'about Westford Homes, senior care team Oregon, adult foster care Wilsonville, Tualatin caregivers, compassionate care, Charbonneau District'
    },
    '/admissions': {
      title: 'Admissions - Westford Homes | Senior Care in Oregon',
      description: 'Start your journey with Westford Homes in Wilsonville or Tualatin, Oregon. Smooth admission process for adult foster care and senior services.',
      keywords: 'Westford Homes admissions, senior care enrollment, adult foster care Tualatin, Wilsonville Oregon care, assisted living admissions'
    },
    '/contact': {
      title: 'Contact Westford Homes - Wilsonville & Tualatin, Oregon',
      description: 'Contact Westford Homes for adult foster care inquiries in Wilsonville and Tualatin, Oregon. Call (978) 881-8055 or email westfordhomesinc@gmail.com.',
      keywords: 'contact Westford Homes, adult family home contact, senior care Wilsonville Oregon, Tualatin care inquiry, (978) 881-8055, westfordhomesinc@gmail.com'
    }
  }

  const currentSEO = seoData[pathname] || seoData['/']
  const currentUrl = `https://westfordhomesinc.com${pathname}`

  return (
    <>
      <Head>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content="https://westfordhomesinc.com/assets/westford-logo.PNG" />
        <meta property="og:site_name" content="Westford Homes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content="https://westfordhomesinc.com/assets/westford-logo.PNG" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Westford Homes" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Wilsonville, Oregon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Westford Homes",
              "description": "Adult foster care providing compassionate senior care in Wilsonville and Tualatin, Oregon, with 24/7 skilled nursing and dementia care.",
              "url": "https://westfordhomesinc.com",
              "telephone": "(978) 881-8055",
              "email": "westfordhomesinc@gmail.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "6770 SW Molalla Bend Road",
                  "addressLocality": "Wilsonville",
                  "addressRegion": "OR",
                  "postalCode": "97070",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "3030 SW 66th Ave",
                  "addressLocality": "Tualatin",
                  "addressRegion": "OR",
                  "postalCode": "97062",
                  "addressCountry": "US"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": 45.3311,
                  "longitude": -122.7644
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 45.3768,
                  "longitude": -122.7467
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.3311,
                  "longitude": -122.7644
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              "telephone": "(978) 881-8055",
              "email": "westfordhomesinc@gmail.com",
              "contactType": "Customer Service"
            })
          }}
        />
      </Head>

      <div className={`bg-gradient-to-r from-blue-700 to-blue-800 text-white text-sm transition-all duration-500 ease-in-out ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiPhone className="text-blue-200" />
              <a href="tel:+19788818055" className="hover:text-blue-100"> (978) 881-8055 </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-blue-200" />
              <a href="mailto:westfordhomesinc@gmail.com" className="hover:text-blue-100"> westfordhomesinc@gmail.com </a>
            </div>
          </div>
          <div className="hidden md:block text-blue-200"> Caring for your loved ones with compassion </div>
        </div>
      </div>

      <header className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-2 shadow-xl' : 'py-3 shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="md:hidden">
            <button
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
              className="text-gray-700 transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="group inline-block relative">
              <Image
                src="/assets/westford-logo.PNG"
                alt="Westford Homes - Adult Foster Care"
                width={isScrolled ? 120 : 160}
                height={isScrolled ? 45 : 60}
                className="mx-auto md:mx-0 transition-all duration-500 ease-in-out group-hover:scale-105 drop-shadow-sm"
                priority
              />
              <div className="absolute inset-0 bg-blue-200 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </Link>
          </div>

          <nav className={`hidden md:flex items-center space-x-8 text-gray-700 font-medium ${isScrolled ? 'text-sm' : 'text-base'}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-2 hover:text-blue-600 transition-colors duration-300 ${isActiveLink(item.href) ? 'text-blue-600' : ''}`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 ${isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </Link>
            ))}
          </nav>
        </div>

        <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`relative px-6 py-3 hover:text-blue-600 transition-colors duration-300 ${isActiveLink(item.href) ? 'text-blue-600' : ''} animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 ${isActiveLink(item.href) ? 'w-3/4' : 'w-0 hover:w-3/4'}`}></div>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}