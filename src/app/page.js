"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false)
  const [caringTitleVisible, setCaringTitleVisible] = useState(false)
  const [careCardsVisible, setCareCardsVisible] = useState([])
  const [galleryTitleVisible, setGalleryTitleVisible] = useState(false)
  const [galleryMainVisible, setGalleryMainVisible] = useState(false)
  const [galleryGridVisible, setGalleryGridVisible] = useState(false)
  const [testimonialsTitleVisible, setTestimonialsTitleVisible] = useState(false)
  const [testimonialsVisible, setTestimonialsVisible] = useState([])
  const [tourFormVisible, setTourFormVisible] = useState(false)
  const [tourMapVisible, setTourMapVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // Refs
  const heroRef = useRef(null)
  const caringTitleRef = useRef(null)
  const careCardsRefs = useRef([])
  const galleryTitleRef = useRef(null)
  const galleryMainRef = useRef(null)
  const galleryGridRef = useRef(null)
  const testimonialsTitleRef = useRef(null)
  const testimonialsRefs = useRef([])
  const tourFormRef = useRef(null)
  const tourMapRef = useRef(null)
  const ctaRef = useRef(null)

  const galleryImages = [
    { id: 1, src: "/assets/image1.PNG", alt: "Large gallery image 1" },
    { id: 2, src: "/assets/image2.jpg", alt: "Gallery image 2" },
    { id: 3, src: "/assets/image3.jpg", alt: "Gallery image 3" },
    { id: 4, src: "/assets/image4.jpg", alt: "Gallery image 4" },
    { id: 5, src: "/assets/image5.jpg", alt: "Gallery image 5" },
    { id: 6, src: "/assets/image6.webp", alt: "Gallery image 6" },
    { id: 7, src: "/assets/image7.webp", alt: "Gallery image 7" },
    { id: 8, src: "/assets/image8.webp", alt: "Gallery image 8" },
    { id: 9, src: "/assets/image9.webp", alt: "Gallery image 9" },
    { id: 10, src: "/assets/image10.webp", alt: "Gallery image 10" },
    { id: 11, src: "/assets/image11.webp", alt: "Gallery image 11" },
    { id: 12, src: "/assets/image12.webp", alt: "Gallery image 12" },
    { id: 13, src: "/assets/image13.webp", alt: "Gallery image 13" },
    { id: 14, src: "/assets/image14.webp", alt: "Gallery image 14" },
    { id: 15, src: "/assets/image15.webp", alt: "Gallery image 15" },
    { id: 16, src: "/assets/image16.webp", alt: "Gallery image 16" },
    { id: 17, src: "/assets/image17.webp", alt: "Gallery image 17" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Annamarie & Terilynn",
      relation: "daughters",
      date: "September 17, 2023",
      title: "Perfect place for mom!",
      text: "I can't say enough good things about Joe and his staff. It has meant the world to us to know such great people are taking care of mom. She has become more alert and interactive since being at Joe's. It feels like a home. It is always very clean, very welcoming, and lively. We know she is safe and well taken care of.",
    },
    {
      id: 2,
      name: "Doug S.",
      relation: "spouse",
      date: "September 5, 2023",
      title: "GREAT PLACE!",
      text: "Westford Homes truly is a home! Very caring, friendly, and helpful staff. Willing to do whatever it takes to make my spouse's stay as safe and comfortable as possible. Would highly recommend them!",
    },
    {
      id: 3,
      name: "Sammy",
      relation: "family",
      date: "August 23, 2023",
      title: "A Place like home",
      text: "The world a brighter place, May you continue to touch more lives in the future as you have done so for my Dad!",
    }
  ]

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
    const caringTitleObserver = createObserver(setCaringTitleVisible)
    const galleryTitleObserver = createObserver(setGalleryTitleVisible)
    const galleryMainObserver = createObserver(setGalleryMainVisible)
    const galleryGridObserver = createObserver(setGalleryGridVisible)
    const testimonialsTitleObserver = createObserver(setTestimonialsTitleVisible)
    const tourFormObserver = createObserver(setTourFormVisible)
    const tourMapObserver = createObserver(setTourMapVisible)
    const ctaObserver = createObserver(setCtaVisible)

    const careCardsObservers = careCardsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCareCardsVisible(prev => {
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

    const testimonialsObservers = testimonialsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTestimonialsVisible(prev => {
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
    if (caringTitleRef.current) caringTitleObserver.observe(caringTitleRef.current)
    if (galleryTitleRef.current) galleryTitleObserver.observe(galleryTitleRef.current)
    if (galleryMainRef.current) galleryMainObserver.observe(galleryMainRef.current)
    if (galleryGridRef.current) galleryGridObserver.observe(galleryGridRef.current)
    if (testimonialsTitleRef.current) testimonialsTitleObserver.observe(testimonialsTitleRef.current)
    if (tourFormRef.current) tourFormObserver.observe(tourFormRef.current)
    if (tourMapRef.current) tourMapObserver.observe(tourMapRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      [heroObserver, caringTitleObserver, galleryTitleObserver, galleryMainObserver, galleryGridObserver, 
       testimonialsTitleObserver, tourFormObserver, tourMapObserver, ctaObserver].forEach(obs => obs.disconnect())
      careCardsObservers.forEach(observer => observer.disconnect())
      testimonialsObservers.forEach(observer => observer.disconnect())
    }
  }, [])

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
        <section className="relative h-screen w-full overflow-hidden text-white">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/assets/westford-homes-oregon.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b0f3a]/70 via-[#3a155c]/60 to-[#082125]/80"></div>

         

          <div ref={heroRef} className={`relative z-10 flex flex-col items-center justify-center text-center h-full px-4 max-w-7xl mx-auto transition-all duration-1200 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{color: '#FFFFF0'}}>
            <h1 className="font-bold leading-tight space-y-2 font-serif">
              <span className="block text-5xl sm:text-6xl lg:text-6xl">Westford Homes</span>
              <span className="block text-xl sm:text-2xl font-light">Adult Foster Home in Charbonneau District</span>
              <span className="block text-base sm:text-lg opacity-90">Wilsonville, Oregon</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-light tracking-wide italic opacity-90 font-serif max-w-2xl">
              Receive safe and competent personal care at adult Foster home licensed in Clackamas county Oregon.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="bg-white text-purple-800 px-10 py-5 rounded-xl font-semibold transition transform hover:scale-105 hover:shadow-xl">Contact Us</Link>
              <Link href="/contact" className="border-2 border-white px-10 py-5 rounded-xl font-semibold transition transform hover:bg-white hover:text-purple-800 hover:scale-105">Schedule a Tour</Link>
            </div>
          </div>
        </section>

        {/* Caring Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div ref={caringTitleRef} className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ease-out ${caringTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#D2D0BB' }}>Caring for Local Seniors</h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                In our adult foster home in Wilsonville Oregon we provide loving and personalized senior care. It's an excellent alternative to institutional assisted living and nursing home facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
              {['Personalized Care', 'Safe & Secure Environment', 'Family-Like Atmosphere'].map((title, idx) => (
                <div key={idx} ref={el => careCardsRefs.current[idx] = el} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${careCardsVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                  <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#082125' }}>
                    <svg className="w-20 h-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>}
                      {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>}
                      {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 21a2 2 0 100-4 2 2 0 000 4z"></path>}
                    </svg>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {idx === 0 && "Compassionate, individualized care plans tailored to each resident's unique needs and preferences."}
                      {idx === 1 && "Fully wheelchair accessible with 24/7 supervision, ensuring safety and comfort at all times."}
                      {idx === 2 && "Genuine warmth and companionship in a home-like setting with dedicated caregivers who treat residents like family."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20">
              <div ref={galleryTitleRef} className={`transition-all duration-1000 ease-out ${galleryTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: '#D2D0BB' }}>Gallery</h2>
                <div className="flex justify-center items-center mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mr-4">Life at Westford Homes</h3>
                </div>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                  Our facilities are designed to feel like home, with bright open spaces, comfortable private rooms, and beautiful gardens.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div ref={galleryMainRef} className={`relative rounded-2xl shadow-2xl overflow-hidden h-[300px] lg:h-full transition-all duration-1000 ease-out ${galleryMainVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>

                <div ref={galleryGridRef} className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out delay-200 ${galleryGridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                  {galleryImages.slice(1, 5).map((image) => (
                    <div key={image.id} className="relative rounded-xl shadow-lg overflow-hidden h-40 sm:h-48">
                      <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  ))}
                  <button onClick={() => setShowGalleryModal(true)} className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 cursor-pointer">View all photos</button>
                </div>
              </div>
            </div>

            {showGalleryModal && (
              <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                <div className="relative w-full h-full flex items-center justify-center">
                  <button onClick={() => setShowGalleryModal(false)} className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold z-20 cursor-pointer">×</button>
                  <button onClick={() => setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))} className="absolute left-4 sm:left-10 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-3xl z-20 cursor-pointer">←</button>
                  <button onClick={() => setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))} className="absolute right-4 sm:right-10 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-3xl z-20 cursor-pointer">→</button>
                  <div className="relative w-[90%] sm:w-[80%] lg:w-[70%] h-[70vh] overflow-hidden rounded-xl shadow-2xl">
                    <Image src={galleryImages[currentImage].src} alt={galleryImages[currentImage].alt} fill className="object-contain" />
                  </div>
                  <div className="absolute bottom-6 text-white text-lg font-medium bg-black/50 px-6 py-2 rounded-full">{currentImage + 1} / {galleryImages.length}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto">
            <div ref={testimonialsTitleRef} className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${testimonialsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#D2D0BB' }}>What Families Say</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} ref={el => testimonialsRefs.current[index] = el} className={`p-6 sm:p-8 rounded-2xl border border-blue-500/30 transition-all duration-700 ease-out ${testimonialsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: `${index * 150}ms`, color: '#082125'}}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-2xl"></div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3">{testimonial.title}</h3>
                  <p className="leading-relaxed mb-6 text-sm sm:text-base">"{testimonial.text}"</p>
                  <div className="border-t border-blue-500/20 pt-4">
                    <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm opacity-80">{testimonial.relation}</p>
                    <p className="text-xs sm:text-sm opacity-60">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div ref={tourFormRef} className={`bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12 transition-all duration-1000 ease-out ${tourFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#D2D0BB' }}>Schedule a Tour</h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">We'd love to show you around. Fill out the form below and we'll be in touch shortly.</p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="fullName" placeholder="John Doe" className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                    <select id="interest" className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none bg-white">
                      <option value="">Select an option</option>
                      <option value="assisted-living">Assisted Living</option>
                      <option value="memory-care">Memory Care</option>
                      <option value="respite-care">Respite Care</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">Request Information</button>
                </form>
              </div>

              <div ref={tourMapRef} className={`relative rounded-3xl shadow-2xl overflow-hidden h-[500px] lg:h-[600px] transition-all duration-1000 ease-out delay-200 ${tourMapVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.2999999999997!2d-122.7644!3d45.3311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE5JzUyLjAiTiAxMjLCsDQ1JzUyLjAiVw!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Wilsonville Location"></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-800/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2">Visit Us</h4>
                      <p className="text-base">6770 SW Molalla Bend Road<br />Wilsonville, OR 97070</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Call Us</h4>
                      <p className="text-base">(978) 881-8055</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email Us</h4>
                      <p className="text-base">westfordhomesinc@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{backgroundColor: '#ffffff'}} className="py-16 px-4">
          <div ref={ctaRef} className={`text-center transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-xl text-gray-700 mb-6">Ready to see how we care for your loved one?</p>
            <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">Contact Us Today</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}