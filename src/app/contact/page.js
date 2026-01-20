'use client'

import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle, FaFax, FaClock } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false)
  const [contactCardsVisible, setContactCardsVisible] = useState([])
  const [formVisible, setFormVisible] = useState(false)
  const [quickInfoVisible, setQuickInfoVisible] = useState(false)
  const [mapsVisible, setMapsVisible] = useState(false)
  const [amenitiesVisible, setAmenitiesVisible] = useState([])

  // Refs
  const heroRef = useRef(null)
  const contactCardsRefs = useRef([])
  const formRef = useRef(null)
  const quickInfoRef = useRef(null)
  const mapsRef = useRef(null)
  const amenitiesRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const createObserver = (setter) => new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setter(true)
        }
      })
    }, observerOptions)

    const heroObserver = createObserver(setHeroVisible)
    const formObserver = createObserver(setFormVisible)
    const quickInfoObserver = createObserver(setQuickInfoVisible)
    const mapsObserver = createObserver(setMapsVisible)

    const contactCardsObservers = contactCardsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setContactCardsVisible(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      }, observerOptions)
      
      if (ref) observer.observe(ref)
      return observer
    })

    const amenitiesObservers = amenitiesRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAmenitiesVisible(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      }, observerOptions)
      
      if (ref) observer.observe(ref)
      return observer
    })

    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (formRef.current) formObserver.observe(formRef.current)
    if (quickInfoRef.current) quickInfoObserver.observe(quickInfoRef.current)
    if (mapsRef.current) mapsObserver.observe(mapsRef.current)

    return () => {
      [heroObserver, formObserver, quickInfoObserver, mapsObserver].forEach(obs => obs.disconnect())
      contactCardsObservers.forEach(observer => observer.disconnect())
      amenitiesObservers.forEach(observer => observer.disconnect())
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to send message')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 3000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const amenities = [
    { icon: '🏌️', title: 'Golf Course Access', desc: 'Beautiful golf course views and access', color: 'from-blue-50 to-blue-100', textColor: 'text-blue-800' },
    { icon: '🏊', title: 'Swimming Pools', desc: 'Multiple swimming facilities nearby', color: 'from-cyan-50 to-cyan-100', textColor: 'text-cyan-800' },
    { icon: '🌲', title: 'Nature Walks', desc: 'Scenic walking paths through nature', color: 'from-green-50 to-green-100', textColor: 'text-green-800' },
    { icon: '🛏️', title: 'Private Bedrooms', desc: 'Spacious, private rooms for comfort', color: 'from-purple-50 to-purple-100', textColor: 'text-purple-800' },
    { icon: '👩‍⚕️', title: '24/7 Care Staff', desc: 'Dedicated caregivers round-the-clock', color: 'from-pink-50 to-pink-100', textColor: 'text-pink-800' },
    { icon: '🚿', title: 'Accessible Bathrooms', desc: 'Wheelchair-accessible with roll-in showers', color: 'from-indigo-50 to-indigo-100', textColor: 'text-indigo-800' },
    { icon: '🍽️', title: 'Community Dining', desc: 'Nutritious meals in social setting', color: 'from-orange-50 to-orange-100', textColor: 'text-orange-800' },
    { icon: '🐾', title: 'Pet-Friendly', desc: 'Welcoming space for residents\' pets', color: 'from-amber-50 to-amber-100', textColor: 'text-amber-800' },
    { icon: '🎉', title: 'Daily Activities', desc: 'Engaging activities and social events', color: 'from-red-50 to-red-100', textColor: 'text-red-800' }
  ]

  return (
    <>
      <Head>
        <title>Contact Westford Homes Adult Family Care | Wilsonville & Tualatin, Oregon</title>
        <meta name="description" content="Contact Westford Homes Adult Family Care in Wilsonville and Tualatin, Oregon. Call (978) 881-8055 or email us for questions about senior care services, costs, and availability. 24/7 compassionate care." />
        <meta name="keywords" content="adult family home contact, senior care Wilsonville Oregon, senior care Tualatin Oregon, assisted living contact, elder care services, memory care contact, adult family care phone number" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Westford Homes Adult Family Care" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Wilsonville, Oregon; Tualatin, Oregon" />
        <meta name="geo.position" content="45.3311;-122.7644;45.3768;-122.7467" />
        <meta name="ICBM" content="45.3311, -122.7644; 45.3768, -122.7467" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westfordhomesinc.com/contact" />
        <meta property="og:title" content="Contact Westford Homes Adult Family Care | Wilsonville & Tualatin, Oregon" />
        <meta property="og:description" content="Contact Westford Homes Adult Family Care in Wilsonville and Tualatin, Oregon. Call (978) 881-8055 or email us for questions about senior care services, costs, and availability. 24/7 compassionate care." />
        <meta property="og:image" content="https://westfordhomesinc.com/images/westford-homes-contact.jpg" />
        <meta property="og:image:alt" content="Westford Homes Adult Family Care contact information" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Westford Homes Adult Family Care" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://westfordhomesinc.com/contact" />
        <meta name="twitter:title" content="Contact Westford Homes Adult Family Care | Wilsonville & Tualatin, Oregon" />
        <meta name="twitter:description" content="Contact Westford Homes Adult Family Care in Wilsonville and Tualatin, Oregon. Call (978) 881-8055 or email us for questions about senior care services, costs, and availability." />
        <meta name="twitter:image" content="https://westfordhomesinc.com/images/westford-homes-contact.jpg" />
        
        <link rel="canonical" href="https://westfordhomesinc.com/contact" />
        <link rel="alternate" hrefLang="en-us" href="https://westfordhomesinc.com/contact" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SeniorCare",
              "name": "Westford Homes Adult Family Care",
              "description": "Adult family home providing compassionate senior care and assisted living services in Wilsonville and Tualatin, Oregon",
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
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "image": "https://westfordhomesinc.com/images/westford-homes-facility.jpg",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.3311,
                  "longitude": -122.7644
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Senior Care Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Adult Family Home Care",
                      "description": "24/7 residential care for seniors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Assisted Living Services",
                      "description": "Daily living assistance and support"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Memory Care",
                      "description": "Specialized care for dementia and Alzheimer's"
                    }
                  }
                ]
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(978) 881-8055",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://westfordhomesinc.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://westfordhomesinc.com/contact"
                }
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Westford Homes Adult Family Care",
              "description": "Contact information and form for Westford Homes Adult Family Care in Wilsonville and Tualatin, Oregon",
              "url": "https://westfordhomesinc.com/contact",
              "mainEntity": {
                "@type": "SeniorCare",
                "name": "Westford Homes Adult Family Care",
                "telephone": "(978) 881-8055",
                "email": "westfordhomesinc@gmail.com"
              }
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        
        <meta name="theme-color" content="#2B5699" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Westford Homes Contact" />
        
        <link rel="alternate" hrefLang="x-default" href="https://westfordhomesinc.com/contact" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative h-[600px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/image2.jpg')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-blue-900/90"></div>
          
          <div ref={heroRef} className={`relative z-10 h-full flex items-center justify-center px-4 transition-all duration-1200 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Let's Start a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Conversation
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed">
                Your loved one deserves exceptional care.<br />
                We're here to answer every question and guide you through each step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a href="tel:9788818055" className="bg-white text-purple-800 px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                  <FaPhoneAlt />
                  <span>(978) 881-8055</span>
                </a>
                <a href="#contact-form" className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FaPhoneAlt, title: 'Call Us', value: '(978) 881-8055', href: 'tel:9788818055', color: 'from-blue-500 to-blue-600' },
                { icon: FaEnvelope, title: 'Email Us', value: 'westfordhomesinc@gmail.com', href: 'mailto:westfordhomesinc@gmail.com', color: 'from-purple-500 to-purple-600' },
                { icon: FaFax, title: 'Fax', value: '(503) 342-2212', href: '#', color: 'from-green-500 to-green-600' },
                { icon: FaClock, title: 'Available', value: '24/7 Emergency Support', href: '#', color: 'from-orange-500 to-orange-600' }
              ].map((card, idx) => (
                <a 
                  key={idx}
                  ref={el => contactCardsRefs.current[idx] = el}
                  href={card.href}
                  className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl text-white hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 ${contactCardsVisible[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{transitionDelay: `${idx * 100}ms`}}
                >
                  <card.icon className="text-4xl mb-4" />
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section id="contact-form" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div ref={formRef} className={`transition-all duration-1000 ease-out ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
                  {!isSubmitted ? (
                    <>
                      <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
                        <p className="text-gray-600">We'll get back to you within 24 hours</p>
                      </div>

                      {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="(123) 456-7890"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            disabled={isLoading}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                            placeholder="Tell us about your needs..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-5 px-6 rounded-xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="animate-bounce mb-6">
                        <FaCheckCircle className="text-7xl text-green-500 mx-auto" />
                      </div>
                      <h3 className="text-3xl font-bold text-green-600 mb-4">Message Sent!</h3>
                      <p className="text-gray-600 text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Info & Social */}
              <div ref={quickInfoRef} className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${quickInfoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                {/* Locations */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Locations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 p-3 rounded-full flex-shrink-0">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">Wilsonville</p>
                        <p className="text-blue-800">6770 SW Molalla Bend Road<br />Wilsonville, OR 97070</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 p-3 rounded-full flex-shrink-0">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">Tualatin</p>
                        <p className="text-blue-800">21446 SW Christensen CT<br />Tualatin, OR 97062</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours & Emergency */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">Hours & Availability</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <FaClock className="text-purple-600 text-3xl" />
                      <div>
                        <p className="font-semibold text-purple-900">Office Hours</p>
                        <p className="text-purple-800">Mon-Fri: 8AM - 6PM<br />Sat: 9AM - 4PM</p>
                      </div>
                    </div>
                    <div className="bg-purple-200 p-4 rounded-xl">
                      <p className="text-purple-900 font-semibold">🚨 24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                  <div className="flex gap-4 justify-center">
                    <a href="#" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <FaFacebookF className="text-white text-2xl" />
                    </a>
                    <a href="#" className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <FaTwitter className="text-white text-2xl" />
                    </a>
                    <a href="#" className="bg-pink-600 p-4 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <FaInstagram className="text-white text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section ref={mapsRef} className={`py-16 px-4 bg-gray-100 transition-all duration-1000 ease-out ${mapsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Beautiful Locations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Two convenient locations in the Portland Metro Area, offering compassionate senior care in serene environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">Wilsonville Location</h3>
                  <p className="opacity-90">6770 SW Molalla Bend Road, Wilsonville, OR 97070</p>
                </div>
                <iframe
                  title="Westford Homes Wilsonville Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5!2d-122.7644!3d45.3311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54957b8b0f4c2c5b%3A0x8b96e6edb8f3e0b!2s6770%20SW%20Molalla%20Bend%20Rd%2C%20Wilsonville%2C%20OR%2097070!5e0!3m2!1sen!2sus!4v1689941123456!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tualatin Location</h3>
                  <p className="opacity-90">21446 SW Christensen CT, Tualatin, OR 97062</p>
                </div>
                <iframe
                  title="Westford Homes Tualatin Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.4!2d-122.7467!3d45.3768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a3b7f4c2c5b%3A0x8b96e6edb8f3e0b!2s21446%20SW%20Christensen%20CT%2C%20Tualatin%2C%20OR%2097062!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Amenities</h2>
              <p className="text-lg text-gray-600">Everything your loved one needs for comfort and happiness</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  ref={el => amenitiesRefs.current[idx] = el}
                  className={`bg-gradient-to-br ${amenity.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 ${amenitiesVisible[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{transitionDelay: `${idx * 50}ms`}}
                >
                  <div className="text-5xl mb-4">{amenity.icon}</div>
                  <h4 className={`font-bold ${amenity.textColor} mb-2 text-lg`}>{amenity.title}</h4>
                  <p className="text-gray-700">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}