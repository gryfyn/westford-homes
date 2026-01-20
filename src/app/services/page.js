"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState('family')

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState([])
  const [lifeTitleVisible, setLifeTitleVisible] = useState(false)
  const [tabsVisible, setTabsVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // Refs
  const heroRef = useRef(null)
  const servicesRefs = useRef([])
  const lifeTitleRef = useRef(null)
  const tabsRef = useRef(null)
  const ctaRef = useRef(null)

  const services = [
    {
      id: 1,
      image: "/assets/Registered-Nurse.PNG",
      title: "Registered Nurse Provider",
      description: "Joe Kiere, RN, manages and supervises all care and services. With over 15 years of experience in the field, rest assured that your loved one is in good hands.",
      color: "from-blue-500 to-blue-600",
      icon: "👨‍⚕️"
    },
    {
      id: 2,
      image: "/assets/meals-and-diet.PNG",
      title: "Meals and Diet",
      description: "We serve freshly prepared meals and snacks daily. We also accommodate specialized diets such as low salt, low fat, diabetic, and pureed or mechanical soft.",
      color: "from-green-500 to-green-600",
      icon: "🍽️"
    },
    {
      id: 3,
      image: "/assets/medication-management.PNG",
      title: "Medication Management",
      description: "We track, administer, reorder, and manage all aspects of your loved one's medication regiment, so you never have to worry about reordering or delivering medication.",
      color: "from-purple-500 to-purple-600",
      icon: "💊"
    },
    {
      id: 4,
      image: "/assets/staffing.PNG",
      title: "Staffing",
      description: "Aside from Mr. Kiere, two fully credentialed caregivers are on day shift duty, and one at night.",
      color: "from-orange-500 to-orange-600",
      icon: "👥"
    },
    {
      id: 5,
      image: "/assets/resident-needs.PNG",
      title: "Resident Needs",
      description: "We serve residents with all levels of need, including dementia & memory care, strokes, hip fractures, and more.",
      color: "from-teal-500 to-teal-600",
      icon: "🏥"
    },
    {
      id: 6,
      image: "/assets/care-planning.PNG",
      title: "Care Planning",
      description: "Each resident's care plan is as unique as they are. Individualized care plans are developed based on your specific needs and preferences.",
      color: "from-pink-500 to-pink-600",
      icon: "📋"
    },
    {
      id: 7,
      image: "/assets/health-monitoring.PNG",
      title: "Health Monitoring",
      description: "With a Registered Nurse on-site, your health is closely monitored and we can work directly with your doctor to promptly handle most health needs.",
      color: "from-indigo-500 to-indigo-600",
      icon: "❤️"
    },
    {
      id: 8,
      image: "/assets/dementia-and-memory-care.PNG",
      title: "Dementia and Memory Care",
      description: "We hold dementia and mental health specialty certifications. We can accommodate Alzheimer's Disease and other cognitive and memory care needs.",
      color: "from-red-500 to-red-600",
      icon: "🧠"
    },
    {
      id: 9,
      image: "/assets/personal-care-and-adls.PNG",
      title: "Personal Care & ADLs",
      description: "We provide all personal care such as bathing, personal hygiene, transfers, grooming, feeding assistance, incontinence care, and more.",
      color: "from-yellow-500 to-yellow-600",
      icon: "🛁"
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
    const lifeTitleObserver = createObserver(setLifeTitleVisible)
    const tabsObserver = createObserver(setTabsVisible)
    const ctaObserver = createObserver(setCtaVisible)

    const servicesObservers = servicesRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setServicesVisible(prev => {
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
    if (lifeTitleRef.current) lifeTitleObserver.observe(lifeTitleRef.current)
    if (tabsRef.current) tabsObserver.observe(tabsRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      [heroObserver, lifeTitleObserver, tabsObserver, ctaObserver].forEach(obs => obs.disconnect())
      servicesObservers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <>
      <Head>
        <title>Comprehensive Care Services - Westford Homes | Assisted Living & Senior Care</title>
        <meta name="description" content="Discover comprehensive care services at Westford Homes. Professional registered nurse care, medication management, dementia care, personal care, and specialized meal services." />
        <link rel="canonical" href="https://westfordhomesinc.com/services" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative h-[600px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/image4.jpg')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
          
          <div ref={heroRef} className={`relative z-10 h-full flex items-center justify-center px-4 transition-all duration-1200 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Comprehensive<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Care Services
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                We offer personalized care, memory support, and enrichment services designed with your loved ones' comfort and dignity in mind.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => servicesRefs.current[index] = el}
                  className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out overflow-hidden ${servicesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className={`h-3 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Westford Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div ref={lifeTitleRef} className={`text-center mb-12 transition-all duration-1000 ease-out ${lifeTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                Life at Westford Homes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating meaningful experiences and maintaining strong connections with family and community.
              </p>
            </div>

            {/* Tab Navigation */}
            <div ref={tabsRef} className={`flex justify-center mb-12 transition-all duration-1000 ease-out delay-200 ${tabsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveTab('family')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'family'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  👨‍👩‍👧 Family Visits
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'activities'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  🎨 Activities
                </button>
                <button
                  onClick={() => setActiveTab('birthdays')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'birthdays'
                      ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  🎂 Birthdays
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {activeTab === 'family' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-full">
                      <span className="text-5xl">👨‍👩‍👧‍👦</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Family Visits & Holiday Celebrations
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        We encourage regular family visits and create special opportunities for families to connect during holidays and special occasions. These precious moments help maintain strong family bonds and create lasting memories.
                      </p>
                      <div className="space-y-4">
                        {[
                          'Regular family visit hours with comfortable gathering spaces',
                          'Special holiday celebrations with family involvement',
                          'Family dinner opportunities and special events',
                          'Seasonal gatherings and community celebrations'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl">
                            <div className="text-blue-600 text-2xl">✓</div>
                            <p className="text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {['Family Visit', 'Holiday Party', 'Gathering', 'Celebration'].map((label, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                          <span className="text-blue-700 font-semibold">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'activities' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-full">
                      <span className="text-5xl">🎨</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Daily Activities & Enrichment Programs
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Professional Therapy', items: ['Music therapy sessions (1-2x weekly)', 'Group exercise with trainer', 'Therapeutic activities'], color: 'from-blue-500 to-blue-600', icon: '🎵' },
                      { title: 'Entertainment', items: ['Movie nights', 'Live music performances', 'Community entertainment'], color: 'from-green-500 to-green-600', icon: '🎬' },
                      { title: 'Games & Recreation', items: ['Bingo games', 'Uno and card games', 'Board games'], color: 'from-purple-500 to-purple-600', icon: '🎲' },
                      { title: 'Creative Arts', items: ['Coloring activities', 'Painting sessions', 'Craft projects'], color: 'from-orange-500 to-orange-600', icon: '🎨' },
                      { title: 'Physical Activities', items: ['Walks around the block', 'Staff-led exercises', 'Outdoor activities'], color: 'from-teal-500 to-teal-600', icon: '🚶' },
                      { title: 'Daily Enrichment', items: ['Reading groups', 'Conversation circles', 'Cognitive activities'], color: 'from-pink-500 to-pink-600', icon: '📚' }
                    ].map((category, idx) => (
                      <div key={idx} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{category.icon}</span>
                          <h4 className="font-bold text-gray-800">{category.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'birthdays' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-4 rounded-full">
                      <span className="text-5xl">🎂</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Birthday Celebrations & Special Occasions
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Every birthday is a special milestone that deserves celebration. We create memorable birthday parties for each resident, complete with decorations, cake, and the joy of being surrounded by friends and family.
                      </p>
                      <div className="space-y-4">
                        {[
                          { icon: '🎂', text: 'Personalized birthday celebrations for each resident' },
                          { icon: '🎉', text: 'Festive decorations and party atmosphere' },
                          { icon: '🎁', text: 'Special birthday cakes and treats' },
                          { icon: '🎈', text: 'Family and friends invited to join' },
                          { icon: '📸', text: 'Memory-making moments captured for families' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 bg-pink-50 p-4 rounded-xl">
                            <span className="text-3xl">{item.icon}</span>
                            <p className="text-gray-700 pt-1">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Birthday Party', color: 'from-pink-200 to-pink-300' },
                        { label: 'Cake Cutting', color: 'from-yellow-200 to-yellow-300' },
                        { label: 'Celebration', color: 'from-purple-200 to-purple-300' },
                        { label: 'Happy Moments', color: 'from-blue-200 to-blue-300' }
                      ].map((item, idx) => (
                        <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl h-40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
                          <span className="text-gray-700 font-semibold text-center px-2">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className={`py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Contact us today to discuss how we can provide the personalized care your loved one deserves in a warm, home-like environment.
            </p>
            <a href="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  )
}