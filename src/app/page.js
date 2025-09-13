"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null)

  // Images for the grid (replacing carousel)
  const gridImages = [
    {
      id: 1,
      src: "/assets/personal-bathtub.jpg",
      alt: "Personal Bathtub",
      description: "Personal Bathtub"
    },
    {
      id: 2,
      src: "/assets/peaceful-outdoor-space.jpg", 
      alt: "Peaceful Outdoor Space",
      description: "Peaceful Outdoor Space"
    },
    {
      id: 3,
      src: "/assets/personal-toilets.jpg",
      alt: "Personal Toilets",
      description: "Personal Toilets"
    },
    {
      id: 4,
      src: "/assets/spacious-private-bedrooms.jpg",
      alt: "Spacious Private Bedrooms",
      description: "Spacious Private Bedrooms"
    },
    {
      id: 5,
      src: "/assets/outdoorspace.jpg",
      alt: "Outdoor Space",
      description: "Outdoor Space"
    },
    {
      id: 6,
      src: "/assets/community-meals.jpeg",
      alt: "Community Meals",
      description: "Community Meals"
    }
  ]

  const features = [
    {
      id: 1,
      icon: "🏠",
      title: "Comfort and Safety",
      description: "We offer a wide and comprehensive range of care and services. From light care to end-of-life including dementia and hospice care.",
      color: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: "📏",
      title: "Spacious",
      description: "Large bedrooms with roll-in showers, as well as open and comfortable common areas. Our AFH has wide hallways and is fully wheelchair accessible.",
      color: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: "🕐",
      title: "Care Anytime",
      description: "We are staffed 24/7. Our centralized call systems ensures that residents get care whenever they need, without waiting.",
      color: "border-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      id: 4,
      icon: "🌳",
      title: "Outdoor Space",
      description: "Spacious and pleasant outdoor deck offers residents the ability to enjoy the outdoors in wheelchairs or walkers.",
      color: "border-purple-500",
      bgColor: "bg-purple-50"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Annamarie & Terilynn",
      relation: "daughters",
      date: "September 17, 2023",
      title: "Perfect place for mom!",
      text: "I can't say enough good things about Joe and his staff. It has meant the world to us to know such great people are taking care of mom. She has become more alert and interactive since being at Joe's. It feels like a home. It is always very clean, very welcoming, and lively. We know she is safe and well taken care of.",
      rating: 5
    },
    {
      id: 2,
      name: "Doug S.",
      relation: "spouse",
      date: "September 5, 2023",
      title: "GREAT PLACE!",
      text: "Westford Homes truly is a home! Very caring, friendly, and helpful staff. Willing to do whatever it takes to make my spouse's stay as safe and comfortable as possible. Would highly recommend them!",
      rating: 5
    },
    {
      id: 3,
      name: "Sammy",
      relation: "family",
      date: "August 23, 2023",
      title: "A Place like home",
      text: "The world a brighter place, May you continue to touch more lives in the future as you have done so for my Dad!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Westford Homes Inc | Licensed Adult Foster Care in Wilsonville, Oregon | 24/7 Senior Care Services</title>
        <meta
          name="description"
          content="Westford Homes Inc - Licensed adult foster care home in Wilsonville, Oregon's Charbonneau District. Professional 24/7 skilled nursing, wheelchair accessible facility, specialized dementia & hospice care. Affordable alternative to nursing homes."
        />
        <meta
          name="keywords"
          content="adult foster care Wilsonville Oregon, senior care Wilsonville, dementia care Wilsonville, hospice care Wilsonville, wheelchair accessible senior care, 24/7 skilled nursing Wilsonville, nursing home alternative Wilsonville, adult family home Wilsonville, senior care, a place for mom and Dad, adult foster home Oregon, senior care services Clackamas County, memory care Wilsonville, respite care Oregon, long-term care Wilsonville, elderly care Portland Metro, adult family home, elder care Washington, trusted senior care, warm senior home, loving elder care, peaceful caregiving, private care home, small assisted living, compassionate caregivers, licensed adult foster care in Wilsonville Oregon, affordable dementia care in Clackamas County, wheelchair accessible adult foster home, hospice care services in Wilsonville, senior care for end-of-life in Oregon, adult foster care Charbonneau District, 24/7 nursing care for seniors Wilsonville, personalized senior care Wilsonville, family-style care home Wilsonville, senior housing Snohomish, caregiving with dignity Wilsonville, safe senior living Wilsonville, residential care Washington, serene senior environment Wilsonville, dementia care Snohomish, home with heart Wilsonville"
        />
        <meta name="author" content="Westford Homes Inc" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href="https://westfordhomesinc.com/" />

        {/* Enhanced Local SEO */}
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Wilsonville, Oregon" />
        <meta name="geo.position" content="45.2988;-122.7736" />
        <meta name="ICBM" content="45.2988, -122.7736" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westford Homes Inc | Licensed Adult Foster Care in Wilsonville, Oregon" />
        <meta
          property="og:description"
          content="Professional adult foster care home in Wilsonville, Oregon. 24/7 skilled nursing, wheelchair accessible, specialized dementia & hospice care. Affordable alternative to nursing homes."
        />
        <meta property="og:url" content="https://westfordhomesinc.com/" />
        <meta property="og:site_name" content="Westford Homes Inc" />
        <meta property="og:image" content="https://westfordhomesinc.com/assets/westford-homes-oregon.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Westford Homes Inc - Licensed Adult Foster Care Facility in Wilsonville, Oregon" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WestfordHomesInc" />
        <meta name="twitter:title" content="Westford Homes Inc | Licensed Adult Foster Care in Wilsonville, Oregon" />
        <meta name="twitter:description" content="Professional adult foster care home in Wilsonville, Oregon. 24/7 skilled nursing, wheelchair accessible, specialized dementia & hospice care services." />
        <meta name="twitter:image" content="https://westfordhomesinc.com/assets/westford-homes-oregon.jpg" />
        <meta name="twitter:image:alt" content="Westford Homes Inc Adult Foster Care Facility" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="Westford Homes Inc" />
        <meta name="apple-mobile-web-app-title" content="Westford Homes Inc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Business Contact Information */}
        <meta name="business:contact_data:street_address" content="Charbonneau District, Wilsonville" />
        <meta name="business:contact_data:locality" content="Wilsonville" />
        <meta name="business:contact_data:region" content="Oregon" />
        <meta name="business:contact_data:postal_code" content="97070" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:phone_number" content="+1-503-XXX-XXXX" />

        {/* Alternate Language Links */}
        <link rel="alternate" hrefLang="en-US" href="https://westfordhomesinc.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://westfordhomesinc.com/" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NursingHome",
              "name": "Westford Homes Inc",
              "alternateName": "Westford Homes",
              "description": "Licensed adult foster care home in Wilsonville, Oregon providing comprehensive 24/7 skilled nursing care, wheelchair accessible facilities, specialized dementia and hospice care services. Affordable alternative to nursing homes.",
              "url": "https://westfordhomesinc.com",
              "keywords": [
                "adult foster care Wilsonville Oregon",
                "senior care Wilsonville",
                "dementia care Wilsonville",
                "hospice care Wilsonville",
                "wheelchair accessible senior care",
                "24/7 skilled nursing Wilsonville",
                "nursing home alternative Wilsonville",
                "adult family home Wilsonville",
                "senior care",
                "a place for mom and Dad",
                "adult foster home Oregon",
                "senior care services Clackamas County",
                "memory care Wilsonville",
                "respite care Oregon",
                "long-term care Wilsonville",
                "elderly care Portland Metro",
                "adult family home",
                "elder care Washington",
                "trusted senior care",
                "warm senior home",
                "loving elder care",
                "peaceful caregiving",
                "private care home",
                "small assisted living",
                "compassionate caregivers",
                "licensed adult foster care in Wilsonville Oregon",
                "affordable dementia care in Clackamas County",
                "wheelchair accessible adult foster home",
                "hospice care services in Wilsonville",
                "senior care for end-of-life in Oregon",
                "adult foster care Charbonneau District",
                "24/7 nursing care for seniors Wilsonville",
                "personalized senior care Wilsonville",
                "family-style care home Wilsonville",
                "senior housing Snohomish",
                "caregiving with dignity Wilsonville",
                "safe senior living Wilsonville",
                "residential care Washington",
                "serene senior environment Wilsonville",
                "dementia care Snohomish",
                "home with heart Wilsonville"
              ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://westfordhomesinc.com/westford-logo.PNG",
                "width": 300,
                "height": 100
              },
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://westfordhomesinc.com/assets/westford-homes-oregon.jpg",
                  "width": 1200,
                  "height": 630
                },
                {
                  "@type": "ImageObject",
                  "url": "https://westfordhomesinc.com/assets/interior-caring.jpg",
                  "width": 600,
                  "height": 400
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Charbonneau District",
                "addressLocality": "Wilsonville",
                "addressRegion": "Oregon",
                "postalCode": "97070",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.2988",
                "longitude": "-122.7736"
              },
              "telephone": "+1-503-XXX-XXXX",
              "email": "info@westfordhomesinc.com",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Insurance, Medicaid, Medicare",
              "openingHours": "Mo-Su 00:00-23:59",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Joe Kiere",
                "jobTitle": "Registered Nurse",
                "description": "Licensed Registered Nurse with extensive experience in senior care"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "45.2988",
                  "longitude": "-122.7736"
                },
                "geoRadius": "50000"
              },
              "areaServed": [
                "Wilsonville, Oregon",
                "Clackamas County",
                "Portland Metro Area",
                "Oregon"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Adult Foster Care Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalService",
                      "name": "24/7 Skilled Nursing Care",
                      "description": "Round-the-clock professional nursing care for seniors with comprehensive health monitoring",
                      "provider": {
                        "@type": "Organization",
                        "name": "Westford Homes Inc"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalService",
                      "name": "Dementia and Memory Care",
                      "description": "Specialized care for residents with dementia, Alzheimer's, and memory-related conditions",
                      "provider": {
                        "@type": "Organization",
                        "name": "Westford Homes Inc"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalService",
                      "name": "Hospice and End-of-Life Care",
                      "description": "Compassionate end-of-life care services with dignity and comfort",
                      "provider": {
                        "@type": "Organization",
                        "name": "Westford Homes Inc"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wheelchair Accessible Facilities",
                      "description": "Fully wheelchair accessible facility with wide halls and roll-in showers",
                      "provider": {
                        "@type": "Organization",
                        "name": "Westford Homes Inc"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Annamarie & Terilynn"
                  },
                  "datePublished": "2023-09-17",
                  "reviewBody": "I can't say enough good things about Joe and his staff. It has meant the world to us to know such great people are taking care of mom. She has become more alert and interactive since being at Joe's. It feels like a home. It is always very clean, very welcoming, and lively. We know she is safe and well taken care of.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Doug S."
                  },
                  "datePublished": "2023-09-05",
                  "reviewBody": "Westford Homes truly is a home! Very caring, friendly, and helpful staff. Willing to do whatever it takes to make my spouse's stay as safe and comfortable as possible. Would highly recommend them!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ],
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Wheelchair Accessible",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "24/7 Nursing Care",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Private Bedrooms",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Outdoor Space",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Roll-in Showers",
                  "value": true
                }
              ],
              "knowsAbout": [
                "adult foster care Wilsonville Oregon",
                "senior care Wilsonville",
                "dementia care Wilsonville",
                "hospice care Wilsonville",
                "wheelchair accessible senior care",
                "24/7 skilled nursing Wilsonville",
                "nursing home alternative Wilsonville",
                "adult family home Wilsonville",
                "senior care",
                "a place for mom and Dad",
                "adult foster home Oregon",
                "senior care services Clackamas County",
                "memory care Wilsonville",
                "respite care Oregon",
                "long-term care Wilsonville",
                "elderly care Portland Metro",
                "adult family home",
                "elder care Washington",
                "trusted senior care",
                "warm senior home",
                "loving elder care",
                "peaceful caregiving",
                "private care home",
                "small assisted living",
                "compassionate caregivers",
                "licensed adult foster care in Wilsonville Oregon",
                "affordable dementia care in Clackamas County",
                "wheelchair accessible adult foster home",
                "hospice care services in Wilsonville",
                "senior care for end-of-life in Oregon",
                "adult foster care Charbonneau District",
                "24/7 nursing care for seniors Wilsonville",
                "personalized senior care Wilsonville",
                "family-style care home Wilsonville",
                "senior housing Snohomish",
                "caregiving with dignity Wilsonville",
                "safe senior living Wilsonville",
                "residential care Washington",
                "serene senior environment Wilsonville",
                "dementia care Snohomish",
                "home with heart Wilsonville"
              ],
              "sameAs": [
                "https://www.facebook.com/WestfordHomesInc",
                "https://www.linkedin.com/company/westford-homes-inc"
              ]
            })
          }}
        />

        {/* Additional JSON-LD for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is adult foster care in Wilsonville Oregon?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Adult foster care at Westford Homes Inc in Wilsonville, Oregon, is a residential care option providing personalized senior care services, including 24/7 skilled nursing, dementia care, and hospice care, in a wheelchair-accessible, family-style care home."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Westford Homes Inc a wheelchair accessible adult family home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Westford Homes Inc is a fully wheelchair accessible adult family home in Wilsonville, Oregon, with wide hallways, roll-in showers, and accessible outdoor spaces for safe senior living."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of senior care services are offered at Westford Homes Inc?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Westford Homes Inc in Wilsonville, Oregon, offers comprehensive senior care services, including 24/7 skilled nursing, dementia care, hospice care, and personalized caregiving with dignity in a warm, home-like environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Westford Homes Inc as a place for mom and Dad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Westford Homes Inc is a trusted senior care home in Wilsonville, Oregon, offering compassionate caregivers, a serene senior environment, and personalized care, making it an ideal alternative to nursing homes for your loved ones."
                  }
                }
              ]
            })
          }}
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      </Head>

      <Header />

      <main className="min-h-screen bg-[#082125]">
        {/* Hero Section */}
        <section className="relative text-white py-12 sm:py-20 lg:py-24 px-4 overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/westford-homes-oregon.jpg"
              alt="Westford Homes - Adult Foster Home in Wilsonville, Oregon"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-yellow-500/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-6 sm:space-y-8">
                <div className="animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Westford Homes
                  </h1>
                  <div className="w-16 sm:w-24 h-1 bg-white mb-6 sm:mb-8"></div>
                  <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 leading-relaxed">
                    Adult Foster Home located at Charbonneau District in Wilsonville, Oregon
                  </p>
                  <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed opacity-90">
                    Receive safe and competent personal care at adult Foster home licensed in Clackamas county Oregon.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    <span className="mr-2">📞</span>
                    Contact Us
                  </Link>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600 text-sm sm:text-base"
                  >
                    <span className="mr-2">🏥</span>
                    View Our Care Services
                  </Link>
                </div>
              </div>

              {/* Right Column - Empty space for balance */}
              <div className="relative lg:block hidden">
                {/* This column is now empty as the image is in the background */}
              </div>
            </div>
          </div>
        </section>

        {/* Caring for Local Seniors Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#D2D0BB' }}>
                Caring for Local Seniors
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                In our adult foster home in Wilsonville Oregon we provide loving and personalized senior care. It's an excellent alternative to institutional assisted living and nursing home facilities, or if you can't continue to live in your own home as your needs increase.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Column - Care Description */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    From Light Care to End-of-Life
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    We can meet a wide range of care and personal needs. From basic supportive assistance to end-of-life care, you will receive safe and competent assistance and support whenever you need help, round the clock.
                  </p>
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                    <p className="text-blue-800 font-semibold text-base sm:text-lg">
                      Making this a place for mom or a place for dad
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Wheelchair Access, Spacious, Comfortable
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-90">
                    Our facility is designed with accessibility and comfort in mind, ensuring all residents can navigate safely and comfortably.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative order-first lg:order-last">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/assets/interior-caring.jpg"
                    alt="Caring environment at Westford Homes"
                    width={600}
                    height={600}
                    className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[600px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Our Care Features
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Comprehensive care services designed around your comfort and safety
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 ${feature.color} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    hoveredCard === feature.id ? feature.bgColor : ''
                  } animate-fade-in-up`}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-4 text-lg sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ backgroundColor: '#082125' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#D2D0BB' }}>
                See Our Facilities
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: '#D2D0BB' }}>
                Take a visual tour of our comfortable and accessible facilities
              </p>
            </div>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridImages.map((image, index) => (
                <div key={image.id} className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                  />
                  <div className="p-4 text-center" style={{ backgroundColor: '#082125', color: '#D2D0BB' }}>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {image.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Column - Image */}
              <div className="relative order-last lg:order-first">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/assets/residents-activities.jpg"
                    alt="Residents and family activities at Westford Homes"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Residents and Family Activities
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    We believe in fostering connections and maintaining relationships. Our home encourages family visits and provides engaging activities for our residents.
                  </p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                  >
                    <span className="mr-2">🏥</span>
                    View Our Care Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ backgroundColor: '#082125' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#D2D0BB' }}>
                What Families Say
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: '#D2D0BB' }}>
                Real stories from families who trust us with their loved ones
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="relative bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    color: '#D2D0BB'
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-2xl"></div>
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3" style={{ color: '#D2D0BB' }}>
                    {testimonial.title}
                  </h3>
                  <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: '#D2D0BB' }}>
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-blue-500/20 pt-4">
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#D2D0BB' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm opacity-80" style={{ color: '#D2D0BB' }}>
                      {testimonial.relation}
                    </p>
                    <p className="text-xs sm:text-sm opacity-60" style={{ color: '#D2D0BB' }}>
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4 sm:px-0">
              Contact us today to discuss how we can provide the best care for your loved one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <span className="mr-2">📞</span>
                Contact Us Today
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600 text-sm sm:text-base"
              >
                <span className="mr-2">👨‍⚕️</span>
                Meet Joe Kiere, RN
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}