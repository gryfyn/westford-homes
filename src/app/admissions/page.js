"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'

export default function Admissions() {
  // Animation states
  const [heroVisible, setHeroVisible] = useState(false)
  const [approachVisible, setApproachVisible] = useState(false)
  const [approachCardsVisible, setApproachCardsVisible] = useState([])
  const [processTitleVisible, setProcessTitleVisible] = useState(false)
  const [processStepsVisible, setProcessStepsVisible] = useState([])
  const [basePayVisible, setBasePayVisible] = useState(false)
  const [documentsVisible, setDocumentsVisible] = useState(false)
  const [testimonialVisible, setTestimonialVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // Refs
  const heroRef = useRef(null)
  const approachRef = useRef(null)
  const approachCardsRefs = useRef([])
  const processTitleRef = useRef(null)
  const processStepsRefs = useRef([])
  const basePayRef = useRef(null)
  const documentsRef = useRef(null)
  const testimonialRef = useRef(null)
  const ctaRef = useRef(null)

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
    const approachObserver = createObserver(setApproachVisible)
    const processTitleObserver = createObserver(setProcessTitleVisible)
    const basePayObserver = createObserver(setBasePayVisible)
    const documentsObserver = createObserver(setDocumentsVisible)
    const testimonialObserver = createObserver(setTestimonialVisible)
    const ctaObserver = createObserver(setCtaVisible)

    const approachCardsObservers = approachCardsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setApproachCardsVisible(prev => {
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

    const processStepsObservers = processStepsRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setProcessStepsVisible(prev => {
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
    if (approachRef.current) approachObserver.observe(approachRef.current)
    if (processTitleRef.current) processTitleObserver.observe(processTitleRef.current)
    if (basePayRef.current) basePayObserver.observe(basePayRef.current)
    if (documentsRef.current) documentsObserver.observe(documentsRef.current)
    if (testimonialRef.current) testimonialObserver.observe(testimonialRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      [heroObserver, approachObserver, processTitleObserver, basePayObserver, 
       documentsObserver, testimonialObserver, ctaObserver].forEach(obs => obs.disconnect())
      approachCardsObservers.forEach(observer => observer.disconnect())
      processStepsObservers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <>
      <Head>
          <title>Admissions Process | Westford Homes Senior Care | Assisted Living Enrollment</title>
          <meta
            name="description"
            content="Start your loved one's journey at Westford Homes with our simple 5-step admissions process. Schedule tours, health assessments, and personalized care plans. Call (958) 881-8055 for assisted living enrollment."
          />
          <meta name="keywords" content="assisted living admissions, senior care enrollment, elderly care admissions, nursing home admissions, Westford Homes, senior living admissions process, care home enrollment" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="author" content="Westford Homes" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="en-US" />
          
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Admissions Process | Westford Homes Senior Care" />
          <meta
            property="og:description"
            content="Discover our compassionate 5-step admissions process at Westford Homes. We make transitions smooth and stress-free for your loved ones."
          />
          <meta property="og:url" content="https://westfordhomesinc.com/admissions" />
          <meta property="og:image" content="https://westfordhomesinc.com/assets/admissions.jpg" />
          <meta property="og:image:alt" content="Westford Homes admissions process - caring staff helping seniors" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Westford Homes" />
          <meta property="og:locale" content="en_US" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Admissions Process | Westford Homes Senior Care" />
          <meta
            name="twitter:description"
            content="Start your loved one's journey at Westford Homes with our simple 5-step admissions process. Personalized care, comprehensive tours, and compassionate support."
          />
          <meta name="twitter:image" content="https://westfordhomesinc.com/assets/admissions.jpg" />
          <meta name="twitter:image:alt" content="Westford Homes admissions process" />
          
          <link rel="canonical" href="https://westfordhomesinc.com/admissions" />
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Admissions Process | Westford Homes Senior Care",
                "description": "Start your loved one's journey at Westford Homes with our simple 5-step admissions process. Schedule tours, health assessments, and personalized care plans.",
                "url": "https://westfordhomesinc.com/admissions",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "Westford Homes",
                  "url": "https://westfordhomesinc.com",
                  "logo": "https://westfordhomesinc.com/assets/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-958-881-8055",
                    "contactType": "Customer Service",
                    "email": "westfordhomesinc@gmail.com",
                    "availableLanguage": "en-US"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                  },
                  "sameAs": []
                },
                "breadcrumb": {
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
                      "name": "Admissions",
                      "item": "https://westfordhomesinc.com/admissions"
                    }
                  ]
                },
                "provider": {
                  "@type": "Organization",
                  "name": "Westford Homes",
                  "serviceType": "Senior Care Services",
                  "areaServed": "US"
                }
              })
            }}
          />
        </Head>


      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/image3.jpg')",
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2b0f3a]/70 via-[#3a155c]/60 to-[#082125]/80"></div>
          </div>

          <div ref={heroRef} className={`relative z-10 h-full flex items-center justify-center px-4 transition-all duration-1200 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to the Family.<br />
                
              </h1>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                We're here to guide you every step of the way, ensuring a smooth transition for your loved ones into a community that cares.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#process" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule a Tour
                </a>
                <a href="#contact" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  Contact Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div ref={approachRef} className={`text-center mb-12 transition-all duration-1000 ease-out ${approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-purple-600 font-semibold mb-2 uppercase tracking-wide text-sm">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">A Supportive Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our admissions process is designed to be stress-free and transparent, prioritizing the comfort of your family.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '💜', title: 'Compassionate Assessment', desc: 'We take the time to understand your loved one\'s unique needs, preferences, and life story.' },
                { icon: '📋', title: 'Personalized Care Plans', desc: 'Every plan is crafted with care, tailored specifically to fit medical and social needs.' },
                { icon: '🏡', title: 'Seamless Transition', desc: 'We handle the logistics to make move-in day a smooth celebration of a new chapter, not a move.' }
              ].map((card, idx) => (
                <div key={idx} ref={el => approachCardsRefs.current[idx] = el} className={`bg-gray-50 p-8 rounded-2xl text-center transition-all duration-700 ease-out hover:shadow-xl ${approachCardsVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions Process */}
        <section id="process" className="py-16 sm:py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div ref={processTitleRef} className={`text-center mb-12 transition-all duration-1000 ease-out ${processTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Admissions Process</h2>
              <p className="text-lg text-gray-600">Four simple steps to joining our community.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { num: '01', title: 'Initial Inquiry & Tour', desc: 'Reach out to our admissions coordinator to schedule a comfortable facility tour and meet our team. We\'ll answer all your preliminary questions.' },
                { num: '02', title: 'Assessment', desc: 'We conduct a thorough wellness assessment to determine the appropriate level of care required.' },
                { num: '03', title: 'Review & Agreement', desc: 'Review care plans, pricing, medical records, then sign the residency agreement together.' },
                { num: '04', title: 'Move-In Day', desc: 'Our team assists with setting a care-including tour logistics to their new home.' }
              ].map((step, idx) => (
                <div key={idx} ref={el => processStepsRefs.current[idx] = el} className={`bg-white p-6 rounded-2xl shadow-md transition-all duration-700 ease-out hover:shadow-xl ${processStepsVisible[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                  <div className="text-4xl font-bold text-purple-200 mb-3">{step.num}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start the Process
              </button>
            </div>
          </div>
        </section>

        {/* Base Pay & Documents Section */}
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Base Pay */}
              <div ref={basePayRef} className={`bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${basePayVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <h3 className="text-2xl font-bold text-purple-800 mb-6">Base Pay & Inclusions</h3>
                <p className="text-gray-600 mb-6">Transparent pricing for peace of mind.</p>
                
                <div className="bg-white p-6 rounded-xl mb-6 text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">$4,500</div>
                  <p className="text-gray-500">/month starting</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 mt-1">✓</div>
                    <p className="text-gray-700">Private or semi-private furnished room</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 mt-1">✓</div>
                    <p className="text-gray-700">Three nutritious meals & snacks daily</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 mt-1">✓</div>
                    <p className="text-gray-700">Housekeeping and laundry services</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 mt-1">✓</div>
                    <p className="text-gray-700">24/7 staff availability & emergency call system</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 mt-1">✓</div>
                    <p className="text-gray-700">Daily social activities and events</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6 italic">*Additional care levy (medication management, bathing assistance, etc.) assessed separately.</p>
              </div>

              {/* Required Documents */}
              <div ref={documentsRef} className={`bg-gray-50 p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out delay-200 ${documentsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Required Documents</h3>
                <p className="text-gray-600 mb-6">Please prepare these items for admission.</p>

                <div className="space-y-4">
                  {[
                    { icon: '📋', title: 'Medical History & Physical', desc: 'Recent physical exam results' },
                    { icon: '🧪', title: 'TB Test Results', desc: 'Current tuberculosis screening' },
                    { icon: '⚖️', title: 'Power of Attorney (POA)', desc: 'Legal healthcare representative' },
                    { icon: '💳', title: 'Insurance Cards', desc: 'Medicare, Medicaid, or private' }
                  ].map((doc, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl flex items-start space-x-4 hover:shadow-md transition-shadow">
                      <div className="text-3xl">{doc.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{doc.title}</h4>
                        <p className="text-sm text-gray-600">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-purple-100 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-purple-600">📥</span>
                    <h4 className="font-semibold text-purple-800">Download Full Admissions Packet (PDF)</h4>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                    Click to Download →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div ref={testimonialRef} className={`bg-white p-12 rounded-2xl shadow-xl text-center transition-all duration-1000 ease-out ${testimonialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-6xl text-purple-200 mb-6">"</div>
              <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                "From the moment we walked in, we felt a sense of relief. The admissions team handled everything with such grace, making a difficult time so much easier for our family."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Sarah Jenkins</p>
                  <p className="text-sm text-gray-600">Daughter of Resident</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="max-w-4xl mx-auto text-center">
            <div ref={ctaRef} className={`transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to take the next step?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Have questions? Our dedicated admissions specialty is standing by to help you navigate this important decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9588818055" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>📞</span>
                  <span>(958) 881-8055</span>
                </a>
                <a href="mailto:westfordhomesinc@gmail.com" className="bg-purple-700 text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>Email Admissions</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}