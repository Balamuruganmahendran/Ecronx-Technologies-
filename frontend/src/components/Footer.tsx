import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock, Globe, Award, Users, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-cyan-50/30 backdrop-blur-xl border-t border-white/50 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Company Info */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/60 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Ecronx Technology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              Building innovative solutions for the future.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900 flex items-center text-sm sm:text-base">
              <Code className="mr-2 text-cyan-600" size={18} />
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium text-sm sm:text-base">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium text-sm sm:text-base">
                  Personalized Dashboard
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium text-sm sm:text-base">
                  CRM Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium text-sm sm:text-base">
                  Custom SaaS Tools
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium text-sm sm:text-base">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Resources */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900 flex items-center">
              <Globe className="mr-2 text-cyan-600" size={20} />
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Tech Blog
                </a>
              </li>
              <li>
                <a href="/innovation-lab" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Innovation Lab
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900 flex items-center text-sm sm:text-base">
              <Phone className="mr-2 text-cyan-600" size={18} />
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-cyan-600 mt-1 flex-shrink-0" />
                <div className="text-gray-700 text-xs sm:text-sm">
                  <p>123 Tech Street</p>
                  <p>Silicon Valley, CA 94043</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-cyan-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-cyan-600 flex-shrink-0" />
                <a href="mailto:info@ecronx.com" className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                  info@ecronx.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={14} className="text-cyan-600 flex-shrink-0" />
                <span className="text-gray-700 text-xs sm:text-sm">Mon-Fri: 9AM-6PM PST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 mb-6 lg:mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0 text-center lg:text-left">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                <Zap className="mr-2 text-cyan-600" size={20} />
                Stay Updated
              </h4>
              <p className="text-gray-700 text-sm">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 border border-white/60 rounded-l-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-sm"
              />
              <button className="px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-r-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm lg:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="flex flex-col space-y-6">
          {/* Social Media - Centered on mobile */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="p-3 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 touch-manipulation"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 touch-manipulation"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 touch-manipulation"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 touch-manipulation"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Footer Links - Centered and stacked on mobile */}
          <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
            <a href="/privacy-policy" className="hover:text-gray-900 transition-colors block sm:inline">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:text-gray-900 transition-colors block sm:inline">Terms of Service</a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/50 mt-8 pt-6">
          <div className="text-center space-y-3">
            <p className="text-gray-700 bg-white/30 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-white/50 text-sm">
              &copy; {new Date().getFullYear()} Ecronx Technology Pvt Ltd. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Designed by Balamurugan Mahendran.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;