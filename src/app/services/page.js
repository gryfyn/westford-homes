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
        <title>Our Services | Westford Homes</title>
        <meta name="description" content="Westford Homes offers personal care, memory care, and respite services for your loved ones in a home-like environment." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - Westford Homes" />
        <meta property="og:description" content="Explore our compassionate personal care, memory care, and respite services tailored for seniors." />
        <meta property="og:image" content="/assets/care-icon.png" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
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