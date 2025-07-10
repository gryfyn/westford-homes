'use client'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaHeart, FaUsers, FaHome, FaClock, FaCheckCircle } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  // Fixed dependency warning by including testimonials.length
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:westfordhomesinc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Contact | Westford Homes</title>
        <meta name="description" content="For questions about care, cost, services, or availability, contact Westford Homes by phone, email, or visit us." />
        <link rel="canonical" href="https://westfordhomes.com/contact" />
      </Head>

      <Header />

      {/* Floating Elements */}
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

      {/* Hero Section with Gradient */}
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
          
          {/* Floating stats */}
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

      {/* Contact Form Section */}
      <section className="px-6 py-16 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info with Enhanced Design */}
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
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">6770 SW Molalla Bend Road, Wilsonville OR 97070</p>
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

            {/* Testimonial Carousel */}
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

          {/* Enhanced Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#2B5699] mb-2">Send a Message</h3>
                  <p className="text-gray-600">{"We'll get back to you within 24 hours"}</p>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer"
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
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer"
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
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer resize-none"
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
                  className="w-full bg-gradient-to-r from-[#2B5699] to-blue-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
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

      {/* Enhanced Location Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2B5699] mb-6">Visit Our Beautiful Location</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Westford Adult Family Home is located in the well-sorted Charbonneau District in Wilsonville Oregon. 
              The AFH location has plenty of amenities, including a golf course, tennis court, multiple swimming pools, 
              plenty of nature walk paths, and beautiful views.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">🏌️ Golf Course Access</h3>
                <p className="text-gray-700">Beautiful golf course views and access</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">🏊 Swimming Pools</h3>
                <p className="text-gray-700">Multiple swimming facilities nearby</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">🌲 Nature Walks</h3>
                <p className="text-gray-700">Scenic walking paths through nature</p>
              </div>
            </div>

            <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <iframe
                title="Westford Homes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5!2d-122.7644!3d45.3311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54957b8b0f4c2c5b%3A0x8b96e6edb8f3e0b!2s6770%20SW%20Molalla%20Bend%20Rd%2C%20Wilsonville%2C%20OR%2097070!5e0!3m2!1sen!2sus!4v1689941123456!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}