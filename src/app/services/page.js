"use client"

// pages/services.js

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: 1,
      image: "/assets/Registered-Nurse.PNG",
      title: "Registered Nurse Provider",
      description: "Joe Kiere, RN, manages and supervises all care and services. With over 15 years of experience in the field, rest assured that your loved one is in good hands.",
      color: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      image: "/assets/meals-and-diet.PNG",
      title: "Meals and Diet",
      description: "We serve freshly prepared meals and snacks daily. We also accommodate specialized diets such as low salt, low fat, diabetic, and pureed or mechanical soft.",
      color: "from-green-50 to-green-100"
    },
    {
      id: 3,
      image: "/assets/medication-management.PNG",
      title: "Medication Management",
      description: "We track, administer, reorder, and manage all aspects of your loved one's medication regiment, so you never have to worry about reordering or delivering medication.",
      color: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      image: "/assets/staffing.PNG",
      title: "Staffing",
      description: "Aside from Mr. Kiere, two fully credentialed caregivers are on day shift duty, and one at night.",
      color: "from-orange-50 to-orange-100"
    },
    {
      id: 5,
      image: "/assets/resident-needs.PNG",
      title: "Resident Needs",
      description: "We serve residents with all levels of need, including dementia & memory care, strokes, hip fractures, and more.",
      color: "from-teal-50 to-teal-100"
    },
    {
      id: 6,
      image: "/assets/care-planning.PNG",
      title: "Care Planning",
      description: "Each resident's care plan is as unique as they are. Individualized care plans are developed based on your specific needs and preferences. Support and assistance are available whenever needed.",
      color: "from-pink-50 to-pink-100"
    },
    {
      id: 7,
      image: "/assets/health-monitoring.PNG",
      title: "Health Monitoring",
      description: "With a Registered Nurse on-site, your health is closely monitored and we can work directly with your doctor to promptly handle most health needs.",
      color: "from-indigo-50 to-indigo-100"
    },
    {
      id: 8,
      image: "/assets/dementia-and-memory-care.PNG",
      title: "Dementia and Memory Care",
      description: "We hold dementia and mental health specialty certifications. We can accommodate Alzheimer's Disease and other cognitive and memory care needs.",
      color: "from-red-50 to-red-100"
    },
    {
      id: 9,
      image: "/assets/personal-care-and-adls.PNG",
      title: "Personal Care & ADLs",
      description: "We provide all personal care such as bathing, personal hygiene, transfers, grooming, feeding assistance, incontinence care, and more.",
      color: "from-yellow-50 to-yellow-100"
    }
  ]

  return (
    <>

  <Head>
    {/* Primary Meta Tags */}
    <title>Comprehensive Care Services - Westford Homes | Assisted Living & Senior Care in Wilsonville, Oregon</title>
    <meta name="title" content="Comprehensive Care Services - Westford Homes | Assisted Living & Senior Care in Wilsonville, Oregon" />
    <meta name="description" content="Discover comprehensive care services at Westford Homes in Wilsonville, Oregon. Professional registered nurse care, medication management, dementia care, personal care, and specialized meal services. Call (978) 881-8055." />
    <meta name="keywords" content="assisted living services, senior care services, registered nurse care, medication management, dementia care, memory care, personal care, ADL assistance, meal services, health monitoring, Wilsonville Oregon, Charbonneau District" />
    
    {/* Canonical URL */}
    <link rel="canonical" href="https://westfordhomesinc.com/services" />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://westfordhomesinc.com/services" />
    <meta property="og:title" content="Comprehensive Care Services - Westford Homes" />
    <meta property="og:description" content="Professional care services including registered nurse supervision, medication management, dementia care, and personalized support in Wilsonville, Oregon." />
    <meta property="og:image" content="https://westfordhomesinc.com/assets/care-services-og.jpg" />
    <meta property="og:site_name" content="Westford Homes" />
    <meta property="og:locale" content="en_US" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Comprehensive Care Services - Westford Homes" />
    <meta name="twitter:description" content="Professional care services including registered nurse supervision, medication management, dementia care, and personalized support in Wilsonville, Oregon." />
    <meta name="twitter:image" content="https://westfordhomesinc.com/assets/care-services-twitter.jpg" />
    <meta name="twitter:site" content="@WestfordHomes" />
    
    {/* Additional SEO Meta Tags */}
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="author" content="Westford Homes" />
    <meta name="geo.region" content="US-OR" />
    <meta name="geo.placename" content="Wilsonville, Oregon" />
    <meta name="geo.position" content="45.2979;-122.7739" />
    <meta name="ICBM" content="45.2979, -122.7739" />
    
    {/* Mobile Optimization */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#2B5699" />
    
    {/* Structured Data for Services */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Westford Homes",
          "description": "Comprehensive assisted living and senior care services in Wilsonville, Oregon",
          "url": "https://westfordhomesinc.com/services",
          "telephone": "(978) 881-8055",
          "email": "westfordhomesinc@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wilsonville",
            "addressRegion": "OR",
            "addressCountry": "US"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Wilsonville, Oregon and surrounding areas"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Care Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Registered Nurse Care",
                  "description": "Professional registered nurse supervision and care management with over 15 years of experience"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Medication Management",
                  "description": "Complete medication tracking, administration, reordering, and management services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dementia and Memory Care",
                  "description": "Specialized care for Alzheimer's Disease and other cognitive and memory care needs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Personal Care and ADLs",
                  "description": "Comprehensive personal care including bathing, hygiene, transfers, grooming, and feeding assistance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Meal Services",
                  "description": "Freshly prepared meals with specialized diet accommodations including low salt, diabetic, and pureed options"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Health Monitoring",
                  "description": "Continuous health monitoring with registered nurse on-site and direct doctor coordination"
                }
              }
            ]
          },
          "priceRange": "$$",
          "paymentAccepted": "Cash, Check, Insurance",
          "openingHours": "Mo-Su 00:00-23:59"
        })
      }}
    />
    
    {/* FAQ Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Westford Homes provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Westford Homes provides comprehensive care services including registered nurse supervision, medication management, dementia and memory care, personal care and ADL assistance, specialized meal services, health monitoring, and individualized care planning."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide dementia and memory care services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we hold dementia and mental health specialty certifications and can accommodate Alzheimer's Disease and other cognitive and memory care needs with specialized care plans."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a registered nurse on staff?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Joe Kiere, RN, manages and supervises all care and services with over 15 years of experience in the field, ensuring professional medical oversight."
              }
            },
            {
              "@type": "Question",
              "name": "What type of meal services do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve freshly prepared meals and snacks daily, accommodating specialized diets such as low salt, low fat, diabetic, and pureed or mechanical soft diets."
              }
            }
          ]
        })
      }}
    />
    
    {/* Breadcrumb Structured Data */}
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
              "item": "https://westfordhomesinc.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://westfordhomesinc.com/services"
            }
          ]
        })
      }}
    />
    
    {/* Local Business Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Westford Homes",
          "description": "Professional assisted living and senior care services in Wilsonville, Oregon",
          "url": "https://westfordhomesinc.com",
          "telephone": "(978) 881-8055",
          "email": "westfordhomesinc@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wilsonville",
            "addressRegion": "OR",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.2979,
            "longitude": -122.7739
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Check, Insurance"
        })
      }}
    />
    
    {/* Preload critical resources */}
    <link rel="preload" href="/assets/westford-logo.PNG" as="image" type="image/png" />
    <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    
    {/* Alternate language tags (if applicable) */}
    <link rel="alternate" hrefLang="en" href="https://westfordhomesinc.com/services" />
    <link rel="alternate" hrefLang="x-default" href="https://westfordhomesinc.com/services" />
    
    {/* Additional meta tags for better indexing */}
    <meta name="category" content="Healthcare, Senior Care, Assisted Living" />
    <meta name="coverage" content="Worldwide" />
    <meta name="distribution" content="Global" />
    <meta name="rating" content="General" />
    <meta name="revisit-after" content="7 days" />
    <meta name="target" content="seniors, families, caregivers" />
    
    {/* Structured data for organization */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Westford Homes",
          "url": "https://westfordhomesinc.com",
          "logo": "https://westfordhomesinc.com/assets/westford-logo.PNG",
          "description": "Professional assisted living and senior care services providing compassionate care in Wilsonville, Oregon",
          "telephone": "(978) 881-8055",
          "email": "westfordhomesinc@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wilsonville",
            "addressRegion": "OR",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.facebook.com/westfordhomes",
            "https://www.linkedin.com/company/westford-homes"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(978) 881-8055",
            "email": "westfordhomesinc@gmail.com",
            "contactType": "Customer Service",
            "availableLanguage": "English"
          }
        })
      }}
    />
  </Head>


      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in"
              style={{ color: '#2B5699' }}
            >
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive personal care, memory care, and short-term respite services designed with your loved ones' comfort and dignity in mind.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative p-8 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={service.image} 
                      width={80} 
                      height={80} 
                      alt={service.title} 
                      className="mx-auto drop-shadow-md" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300" style={{ color: '#2B5699' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center bg-white rounded-2xl shadow-lg p-12 border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2B5699' }}>
              Ready to Learn More?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can provide the personalized care your loved one deserves in a warm, home-like environment.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Ensure cards start hidden for animation */
        .grid > div {
          opacity: 0;
        }
      `}</style>
    </>
  )
}