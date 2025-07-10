"use client"

import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null)

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

  return (
    <>
      <Head>
        <title>About Us | Westford Homes</title>
        <meta
          name="description"
          content="Hi! I'm Joe Kiere, RN. With 15+ years in nursing, I'm dedicated to offering senior care that feels like home at Westford Homes."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Westford Homes" />
        <meta
          property="og:description"
          content="Meet Joe Kiere, founder of Westford Homes. Learn about our mission and personalized senior care approach."
        />
        <meta property="og:image" content="/images/joe-profile.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westfordhomes.com/about" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Westford Homes
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Compassionate senior care with the warmth of home
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Joe's Story Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                {/* Highlight Box */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👨‍⚕️</span>
                    </div>
                    <h2 className="text-2xl font-bold">Meet Joe Kiere, RN</h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    After 15 years of working with seniors in various healthcare settings, I opened Westford Homes AFH.
                  </p>
                </div>

                {/* Bio Text */}
                <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Hi! I am <strong className="text-blue-600">Joe Kiere, RN</strong>, and I've worked as a Registered Nurse for over 15 years. I have broad and varied experience working with residents and families in geriatrics, psychiatry, and dementia.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I also worked for 8 years in assisted living, adult family homes, and done hospice care work. I hold an Adult Foster Home license with a specialty designation in Mental Health and Dementia care.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    It has been very fulfilling to provide quality services and support families who cannot care for their loved ones, whose caregivers are not able or available to provide full-time care, or desire a non-institutional alternative for their personal care.
                  </p>
                </div>

                {/* Credentials Box */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Licensed & Specialized</h3>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Registered Nurse (15+ years experience)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Adult Foster Home License
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Mental Health Specialty Designation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Dementia Care Specialty Designation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/joe-kiere.jpg"
                    alt="Joe Kiere, RN - Founder of Westford Homes"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px] md:h-[600px]"
                    priority
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-medium text-sm">
                      Joe Kiere, RN - Founder & Licensed Provider
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      Specializing in Mental Health & Dementia Care
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-30 pointer-events-none"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 pointer-events-none"></div>
              </div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Experience & Background
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Geriatrics & Psychiatry</h3>
                  <p className="text-gray-600">15+ years of specialized nursing experience in geriatric and psychiatric care</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Adult Family Homes</h3>
                  <p className="text-gray-600">8 years of hands-on experience in assisted living and adult family home settings</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Hospice Care</h3>
                  <p className="text-gray-600">Compassionate end-of-life care and support for families during difficult times</p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Why Adult Family Homes Matter
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The statistics tell a compelling story about the future of senior care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${stat.color} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    hoveredCard === stat.id ? stat.bgColor : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(stat.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
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

          {/* Blog Section */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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