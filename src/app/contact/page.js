'use client'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaHeart, FaUsers, FaHome, FaClock, FaCheckCircle, FaFax } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const testimonials = [
    {
      text: "The care and compassion at Westford Homes is extraordinary. My mother feels truly at home here.",
      author: "Sarah M.",
      role: "Daughter of Resident"
    },
    {
      text: "Joe and his team provide exceptional care. We couldn't be happier with our decision.",
      author: "Michael K.",
      role: "Family Member"
    },
    {
      text: "The personal attention and medical expertise give us complete peace of mind.",
      author: "Jennifer L.",
      role: "Son of Resident"
    }
  ]

  const stats = [
    { icon: FaUsers, number: "15+", label: "Years Experience", color: "text-blue-500" },
    { icon: FaHome, number: "24/7", label: "Care Available", color: "text-green-500" },
    { icon: FaHeart, number: "100%", label: "Satisfaction Rate", color: "text-red-500" },
    { icon: FaClock, number: "< 24hr", label: "Response Time", color: "text-purple-500" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('') // Clear error on input change
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
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

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

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-4 h-4 bg-blue-200 rounded-full opacity-30 animate-pulse"
          style={{ 
            left: `${mousePosition.x * 0.1}px`, 
            top: `${mousePosition.y * 0.1}px`,
            transition: 'all 0.3s ease'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-green-200 rounded-full opacity-20 animate-bounce"
          style={{ 
            left: `${mousePosition.x * 0.05}px`, 
            top: `${mousePosition.y * 0.05}px`,
            transition: 'all 0.5s ease'
          }}
        />
      </div>

      <section className="relative px-6 py-20 bg-gradient-to-br from-[#2B5699] via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            {"Let's Start a "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" Conversation"}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Your loved one deserves exceptional care. {"We're here to answer every question and guide you through each step."}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className={`text-3xl ${stat.color} mb-2 mx-auto`} />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-6 text-[#2B5699]">Get in Touch</h2>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                For questions about care, cost, services, or availability, please contact us anytime by phone or email.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Wilsonville Address</p>
                    <p className="text-gray-600">6770 SW Molalla Bend Road, Wilsonville, OR 97070</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Tualatin Address</p>
                    <p className="text-gray-600">3030 SW 66th Ave, Tualatin, OR 97062</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-300">
                  <div className="bg-green-500 p-3 rounded-full">
                    <FaPhoneAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a href="tel:9788818055" className="text-gray-600 hover:text-green-600 transition-colors">
                      (978) 881-8055
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300">
                  <div className="bg-indigo-500 p-3 rounded-full">
                    <FaFax className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Fax</p>
                    <p className="text-gray-600">(503) 342-2212</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:westfordhomesinc@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                      westfordhomesinc@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4 justify-center">
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110">
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors transform hover:scale-110">
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors transform hover:scale-110">
                  <FaInstagram className="text-white text-lg" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#2B5699]">What Families Say</h3>
              <div className="relative h-32 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === currentTestimonial
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    <blockquote className="text-gray-700 italic mb-4">
                      {`"${testimonial.text}"`}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <FaHeart className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#2B5699] mb-2">Send a Message</h3>
                  <p className="text-gray-600">{"We'll get back to you within 24 hours"}</p>
                </div>

                {error && (
                  <div className="text-red-600 text-center mb-4">{error}</div>
                )}

                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer disabled:opacity-50"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer disabled:opacity-50"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isLoading}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer resize-none disabled:opacity-50"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-[#2B5699] to-blue-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="animate-bounce mb-6">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                <p className="text-gray-600">{"Thank you for reaching out. We'll get back to you within 24 hours."}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#082125]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#D2D0BB] mb-6">Visit Our Beautiful Locations</h2>
            <p className="text-[#D2D0BB] max-w-3xl mx-auto text-lg leading-relaxed">
              Westford Adult Family Home operates two locations in the Portland Metro Area, offering compassionate senior care in serene and accessible environments. Visit us in Wilsonville’s Charbonneau District or our new Tualatin location, both designed for comfort and accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#D2D0BB] p-4">Wilsonville Location</h3>
              <p className="text-[#D2D0BB] px-4 pb-4">6770 SW Molalla Bend Road, Wilsonville, OR 97070</p>
              <iframe
                title="Westford Homes Wilsonville Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5!2d-122.7644!3d45.3311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54957b8b0f4c2c5b%3A0x8b96e6edb8f3e0b!2s6770%20SW%20Molalla%20Bend%20Rd%2C%20Wilsonville%2C%20OR%2097070!5e0!3m2!1sen!2sus!4v1689941123456!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#D2D0BB] p-4">Tualatin Location</h3>
              <p className="text-[#D2D0BB] px-4 pb-4">3030 SW 66th Ave, Tualatin, OR 97062</p>
              <iframe
                title="Westford Homes Tualatin Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.4!2d-122.7467!3d45.3768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a3b7f4c2c5b%3A0x8b96e6edb8f3e0b!2s3030%20SW%2066th%20Ave%2C%20Tualatin%2C%20OR%2097062!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#2B5699] text-center">Our Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">🏌️ Golf Course Access</h4>
                <p className="text-gray-700">Beautiful golf course views and access</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">🏊 Swimming Pools</h4>
                <p className="text-gray-700">Multiple swimming facilities nearby</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">🌲 Nature Walks</h4>
                <p className="text-gray-700">Scenic walking paths through nature</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">🛏️ Private Bedrooms</h4>
                <p className="text-gray-700">Spacious, private rooms for resident comfort</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-800 mb-2">👩‍⚕️ 24/7 Care Staff</h4>
                <p className="text-gray-700">Dedicated caregivers available round-the-clock</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">🚿 Accessible Bathrooms</h4>
                <p className="text-gray-700">Wheelchair-accessible bathrooms with roll-in showers</p>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
                <h4 className="font-bold text-teal-800 mb-2">🍽️ Community Dining</h4>
                <p className="text-gray-700">Nutritious meals in a warm, social setting</p>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg">
                <h4 className="font-bold text-pink-800 mb-2">🐾 Pet-Friendly Environment</h4>
                <p className="text-gray-700">Welcoming space for residents’ pets</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">🎉 Daily Activities & Events</h4>
                <p className="text-gray-700">Engaging activities and social events for residents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}