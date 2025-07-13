import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function Admissions() {
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

      <main className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2B5699] text-center mb-12">
            Admissions
          </h1>

          {/* Top Section: Image + Info */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
            <div>
              <Image
                src="/assets/admissions.jpg"
                alt="Elderly Care Admissions"
                width={600}
                height={200}
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
              
              {/* Additional Info Box */}
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-[#2B5699]">
                <h3 className="font-semibold text-[#2B5699] mb-2">What to Expect</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Personalized care assessment</li>
                  <li>• Comprehensive facility tour</li>
                  <li>• Meet our caring staff</li>
                  <li>• Review of services and amenities</li>
                  <li>• Transparent pricing discussion</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Westford Homes, we understand that choosing a care home is a deeply personal and emotional decision. Our admissions process is designed to be simple, compassionate, and informative. We're here to support you every step of the way.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you're in the early stages of considering care or ready to move forward, our team is available to answer all your questions and help you feel confident in your decision.
              </p>

              {/* Quick Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#2B5699] mb-3">Quick Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Phone:</strong> (958) 881-8055</p>
                  <p><strong>Email:</strong> westfordhomesinc@gmail.com</p>
                  <p><strong>Hours:</strong> Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                  <p><strong>Emergency:</strong> 24/7 support available</p>
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-700 mb-2">Required Documents</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Medical records and current medications</li>
                  <li>• Insurance information</li>
                  <li>• Emergency contact details</li>
                  <li>• Personal care preferences</li>
                  <li>• Financial information (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step-by-step Process */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#2B5699] mb-6">Steps to Admission</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-blue-700 mb-2 text-lg">Initial Contact</h3>
                  <p className="text-gray-700">
                    Call or email us to express interest and ask questions. We're here to listen and provide initial guidance.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500 flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-2 text-lg">Tour & Consultation</h3>
                  <p className="text-gray-700">
                    Schedule a tour of our home and meet with staff to assess your loved one's needs. See our facilities firsthand.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500 flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-purple-700 mb-2 text-lg">Health Assessment</h3>
                  <p className="text-gray-700">
                    We review medical needs and ensure we can provide the best possible care tailored to your loved one's requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500 flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-orange-700 mb-2 text-lg">Paperwork</h3>
                  <p className="text-gray-700">
                    Complete necessary forms including personal history and care needs. We'll guide you through each document.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500 flex items-start">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-red-700 mb-2 text-lg">Move-In Planning</h3>
                  <p className="text-gray-700">
                    We work with you to set a move-in date, prepare the room, and make the transition smooth and comfortable.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2B5699] mb-3">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-4">
                  Contact us today to begin the admissions process or schedule a tour.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+1234567890" 
                    className="bg-[#2B5699] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3d6f] transition-colors"
                  >
                    Call Us Today
                  </a>
                  <a 
                    href="mailto:westfordhomesinc@gmail.com" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}