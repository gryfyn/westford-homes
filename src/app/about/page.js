"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Animation states
  const [heroVisible, setHeroVisible] = useState(false)
  const [leftCardVisible, setLeftCardVisible] = useState(false)
  const [centerCardVisible, setCenterCardVisible] = useState(false)
  const [rightCardVisible, setRightCardVisible] = useState(false)
  const [leadershipTextVisible, setLeadershipTextVisible] = useState(false)
  const [leadershipImageVisible, setLeadershipImageVisible] = useState(false)
  const [statisticsTitleVisible, setStatisticsTitleVisible] = useState(false)
  const [statisticsVisible, setStatisticsVisible] = useState([])
  const [blogVisible, setBlogVisible] = useState(false)

  // Refs
  const heroRef = useRef(null)
  const leftCardRef = useRef(null)
  const centerCardRef = useRef(null)
  const rightCardRef = useRef(null)
  const leadershipTextRef = useRef(null)
  const leadershipImageRef = useRef(null)
  const statisticsTitleRef = useRef(null)
  const statisticsRefs = useRef([])
  const blogRef = useRef(null)

  const statistics = [
    {
      id: 1,
      title: "Adult Family Homes are the Future of Senior Care",
      description: "In Oregon state, more than 17,000 seniors receive long-term care in state-licensed adult family homes. As our population ages, this number will be expected to double in the next 7 to 10 years.",
      color: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "$280 Million Saved Annually",
      description: "It is estimated that each year Washington state saves more than $280 million in long-term care costs by utilizing adult family homes rather than nursing homes.",
      color: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Small and Familial Setting",
      description: "Adult family homes offer a small and familial setting where frail seniors can receive all levels of care.",
      color: "border-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      id: 4,
      title: "120,000 People with Alzheimer's in Oregon",
      description: "295,000 family caregivers bear the burden of the disease in Oregon. We are here to provide a safe, loving, and nurturing environment.",
      color: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 5,
      title: "5,200 Residents Receiving Hospice Care",
      description: "Many of them at home or in institutions, a low-stimulation home environment with dementia-skilled staff is best for minimizing difficult behaviors.",
      color: "border-red-500",
      bgColor: "bg-red-50"
    },
    {
      id: 6,
      title: "27.3% Growth Rate by 2025",
      description: "It is estimated that the number of individuals 85 and older in Oregon State will grow from 47,000 to 54,000 by 2025.",
      color: "border-orange-500",
      bgColor: "bg-orange-50"
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    // Hero observer
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHeroVisible(true)
        }
      })
    }, observerOptions)

    // Cards observers
    const leftCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLeftCardVisible(true)
        }
      })
    }, observerOptions)

    const centerCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCenterCardVisible(true)
        }
      })
    }, observerOptions)

    const rightCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setRightCardVisible(true)
        }
      })
    }, observerOptions)

    // Leadership section observers
    const leadershipTextObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLeadershipTextVisible(true)
        }
      })
    }, observerOptions)

    const leadershipImageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLeadershipImageVisible(true)
        }
      })
    }, observerOptions)

    // Statistics observers
    const statisticsTitleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStatisticsTitleVisible(true)
        }
      })
    }, observerOptions)

    const statisticsObservers = statisticsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStatisticsVisible(prev => {
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

    // Blog observer
    const blogObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setBlogVisible(true)
        }
      })
    }, observerOptions)

    // Observe all elements
    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (leftCardRef.current) leftCardObserver.observe(leftCardRef.current)
    if (centerCardRef.current) centerCardObserver.observe(centerCardRef.current)
    if (rightCardRef.current) rightCardObserver.observe(rightCardRef.current)
    if (leadershipTextRef.current) leadershipTextObserver.observe(leadershipTextRef.current)
    if (leadershipImageRef.current) leadershipImageObserver.observe(leadershipImageRef.current)
    if (statisticsTitleRef.current) statisticsTitleObserver.observe(statisticsTitleRef.current)
    if (blogRef.current) blogObserver.observe(blogRef.current)

    // Cleanup
    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (leftCardRef.current) leftCardObserver.unobserve(leftCardRef.current)
      if (centerCardRef.current) centerCardObserver.unobserve(centerCardRef.current)
      if (rightCardRef.current) rightCardObserver.unobserve(rightCardRef.current)
      if (leadershipTextRef.current) leadershipTextObserver.unobserve(leadershipTextRef.current)
      if (leadershipImageRef.current) leadershipImageObserver.unobserve(leadershipImageRef.current)
      if (statisticsTitleRef.current) statisticsTitleObserver.unobserve(statisticsTitleRef.current)
      if (blogRef.current) blogObserver.unobserve(blogRef.current)
      statisticsObservers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <>
      <Head>
        <title>About Joe Kiere, RN - Westford Homes Adult Family Care | Oregon Senior Care</title>
        <meta
          name="description"
          content="Meet Joe Kiere, RN, founder of Westford Homes Adult Family Care. 15+ years nursing experience in geriatrics, dementia & mental health. Licensed adult family home in Oregon providing compassionate senior care."
        />
        <meta name="keywords" content="Joe Kiere RN, Westford Homes, adult family home Oregon, senior care, dementia care, mental health elderly, geriatric nursing, assisted living alternative, Oregon AFH, memory care" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Joe Kiere, RN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://westfordhomesinc.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Joe Kiere, RN - Westford Homes Adult Family Care | Oregon Senior Care" />
        <meta
          property="og:description"
          content="Meet Joe Kiere, RN, founder of Westford Homes Adult Family Care. 15+ years nursing experience in geriatrics, dementia & mental health. Licensed adult family home in Oregon."
        />
        <meta property="og:image" content="https://westfordhomesinc.com/assets/joe-kiere.jpg" />
        <meta property="og:image:alt" content="Joe Kiere, RN - Founder of Westford Homes Adult Family Care" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westfordhomesinc.com/about" />
        <meta property="og:site_name" content="Westford Homes" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Joe Kiere, RN - Westford Homes Adult Family Care" />
        <meta name="twitter:description" content="Meet Joe Kiere, RN, founder of Westford Homes Adult Family Care. 15+ years nursing experience in geriatrics, dementia & mental health." />
        <meta name="twitter:image" content="https://westfordhomesinc.com/assets/joe-kiere.jpg" />
        <meta name="twitter:image:alt" content="Joe Kiere, RN - Founder of Westford Homes Adult Family Care" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joe Kiere",
              "jobTitle": "Registered Nurse & Founder",
              "worksFor": {
                "@type": "HealthAndBeautyBusiness",
                "name": "Westford Homes Adult Family Care",
                "@id": "https://westfordhomesinc.com",
                "url": "https://westfordhomesinc.com",
                "telephone": "503-XXX-XXXX",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Oregon",
                  "addressCountry": "US"
                },
                "description": "Licensed adult family home providing compassionate senior care with specialization in dementia and mental health care",
                "priceRange": "$",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Adult Family Home Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Dementia Care",
                        "description": "Specialized care for residents with dementia and Alzheimer's disease"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mental Health Care",
                        "description": "Mental health support for elderly residents"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hospice Care",
                        "description": "End-of-life care and support for families"
                      }
                    }
                  ]
                }
              },
              "alumniOf": "Nursing School",
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Registered Nurse License"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "Adult Foster Home License"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Mental Health Specialty Designation"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Dementia Care Specialty Designation"
                }
              ],
              "knowsAbout": ["Geriatric Care", "Dementia Care", "Mental Health", "Hospice Care", "Adult Family Homes"],
              "yearsOfExperience": "15+"
            })
          }}
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Who We Are Section */}
        <section className="py-16 sm:py-20 lg:py-0 px-0 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-0 text-center">
            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 relative min-h-[400px] flex items-center justify-center">
              {/* Fixed Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/assets/image2.jpg')",
                  backgroundAttachment: 'fixed',
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content - Slides up from bottom */}
              <div 
                ref={heroRef}
                className={`relative z-10 text-center px-4 sm:px-8 max-w-4xl lg:h-[500px] py-25 transition-all duration-1000 ease-out ${
                  heroVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
              >
                <span className="text-purple-500 text-4xl font-bold tracking-wide uppercase">
                  WHO WE ARE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white drop-shadow-lg">
                  More Than Care, It's Community
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-md">
                  At Westford Homes, we believe that an adult family home should be exactly that—a home. We provide a supportive environment where residents are empowered to live fully, surrounded by compassionate caregivers and a vibrant community of peers. Our institution is dedicated to the highest standards of safety, dignity, and personal well-being.
                </p>
              </div>
            </div>

            {/* Three Cards */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 px-4">
              {/* Card 1 - Slides from left */}
              <div 
                ref={leftCardRef}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out ${
                  leftCardVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-16'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a1 1 0 10-1.414-1.414A6 6 0 1110 4a1 1 0 000 2 4 4 0 100 8 1 1 0 000-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#D2D0BB' }}>
                  Our Mission
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  To deliver exceptional, personalized care that honors the unique life story and medical needs of every resident in our care.
                </p>
              </div>

              {/* Card 2 - Slides from bottom */}
              <div 
                ref={centerCardRef}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out delay-150 ${
                  centerCardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.414-1.414 3 3 0 01-4.242 0 1 1 0 00-1.414 1.414 5 5 0 007.072 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#D2D0BB' }}>
                  Our Values
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Integrity, respect, and clinical excellence guide every interaction, ensuring family-like care and personal dignity.
                </p>
              </div>

              {/* Card 3 - Slides from right */}
              <div 
                ref={rightCardRef}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out delay-300 ${
                  rightCardVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-16'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13.5a.5.5 0 01.5.5v5.5H14a.5.5 0 010 1h-4a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#D2D0BB' }}>
                  Our Environment
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  A safe, comfortable, and accessible setting designed to promote independence and well-being for every resident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto lg:px-22">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content - Slides from left */}
              <div 
                ref={leadershipTextRef}
                className={`space-y-8 lg:w-[600px] transition-all duration-1000 ease-out ${
                  leadershipTextVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-16'
                }`}
              >
                <div className="p-8 rounded-2xl space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#D2D0BB' }}>
                    LEADERSHIP & STANDARDS
                  </h2>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Built on Clinical Excellence
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Westford Homes stands as a beacon of quality in the adult family home community. Our institution bridges the gap between sterile institutional care and the comfort of true home living, offering a sanctuary where medical needs are met with a personal touch.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Founded by Joe Kiere, RN, our facility operates under a philosophy that every senior deserves dignity, respect, and professional medical attention. With over 15 years of nursing experience guiding our protocols, we ensure the highest standards of safety without sacrificing personal freedom.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "Westford Homes isn't just a facility; it's a community dedicated to the well-being of every resident."
                  </p>
                </div>
              </div>

              {/* Right: Image - Slides from right */}
              <div 
                ref={leadershipImageRef}
                className={`relative transition-all duration-1000 ease-out delay-200 ${
                  leadershipImageVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-16'
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl lg:w-[400px] mx-25">
                  <Image
                    src="/assets/joe.PNG"
                    alt="Joe Kiere, RN - Founder of Westford Homes"
                    width={400}
                    height={630}
                    className="object-fit w-[400px] h-[630px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Bottom Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-md">
                    <p className="text-gray-800 font-bold text-base sm:text-lg">
                      Joe Kiere, RN - Founder & Licensed Provider
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Specializing in Mental Health & Dementia Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <section className="mb-20">
            {/* Title - Fades in and slides up */}
            <div 
              ref={statisticsTitleRef}
              className={`text-center mb-12 transition-all duration-1000 ease-out ${
                statisticsTitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Why Adult Family Homes Matter
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The statistics tell a compelling story about the future of senior care
              </p>
            </div>

            {/* Statistics Cards - Staggered fade in */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={stat.id}
                  ref={el => statisticsRefs.current[index] = el}
                  className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${stat.color} transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl ${
                    hoveredCard === stat.id ? stat.bgColor : ''
                  } ${
                    statisticsVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setHoveredCard(stat.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-2">📞</span>
                Contact Us Today
              </Link>
            </div>
          </section>

          {/* Blog Section - Fades in and scales up */}
          <section 
            ref={blogRef}
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-1000 ease-out ${
              blogVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Joe's Blog: Thoughts on Senior Care
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
                Beyond the bedside, I'm passionate about educating families and sharing insights about aging, memory care, and wellness. Check back soon for my blog, where I'll write about challenges, breakthroughs, and personal stories from the journey of caregiving.
              </p>
              
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-lg">
                  <span className="text-gray-600 font-medium">📝 Blog coming soon...</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}