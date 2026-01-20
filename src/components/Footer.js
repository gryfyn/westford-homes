// src/components/Footer.js
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaHome, FaUsers, FaBed, FaEnvelopeOpen, FaUserMd, FaHeart, FaPills, FaBrain, FaHandsHelping, FaUtensils, FaUserFriends, FaHeartbeat, FaClipboardList } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <FaHome className="text-white text-sm" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', icon: FaHome },
                { name: 'About Us', icon: FaUsers },
                { name: 'Our Rooms', icon: FaBed },
                { name: 'Contact', icon: FaEnvelopeOpen }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.name.toLowerCase().replace(' ', '-')}`} className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <item.icon className="mr-3 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <FaHeart className="text-white text-sm" />
              </div>
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Registered Nurse Care', icon: FaUserMd },
                { name: 'Meals & Specialized Diets', icon: FaUtensils },
                { name: 'Medication Management', icon: FaPills },
                { name: '24/7 Professional Staffing', icon: FaUserFriends },
                { name: 'All Levels of Care', icon: FaHeartbeat },
                { name: 'Individualized Care Plans', icon: FaClipboardList },
                { name: 'Health Monitoring', icon: FaHeartbeat },
                { name: 'Dementia & Memory Care', icon: FaBrain },
                { name: 'Personal Care & ADLs', icon: FaHandsHelping }
              ].map((item, index) => (
                <div key={index} className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">
                  <item.icon className="mr-3 text-green-400 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                  <span className="relative text-sm">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaMapMarkerAlt className="text-orange-400" />
                  </div>
                  <span>Wilsonville, Oregon</span>
                </li>
                <li className="flex items-start text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaPhoneAlt className="text-green-400" />
                  </div>
                  <span>(978) 881-8055</span>
                </li>
                <li className="flex items-start text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <span>westfordhomesinc@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <FaEnvelopeOpen className="text-white text-sm" />
                </div>
                Stay Connected
              </h3>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm">Subscribe to our newsletter for updates and care tips.</p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm">Follow us on social media</p>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebookF, color: 'hover:bg-blue-600', href: '#' },
                    { icon: FaTwitter, color: 'hover:bg-sky-500', href: '#' },
                    { icon: FaInstagram, color: 'hover:bg-pink-600', href: '#' }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/20 ${social.color}`}
                    >
                      <social.icon className="text-lg" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                Careers
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Westford Homes. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Made with <FaHeart className="inline text-red-400 mx-1" /> for our seniors
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}