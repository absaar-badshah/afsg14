'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker 
} from 'react-icons/hi'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'News & Events', href: '/news' },
  { name: 'Gallery', href: '/pictures' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/AirSchoolG14/', color: 'hover:bg-blue-600' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/923390001281', color: 'hover:bg-green-600' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-500 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image
                  src="/images/logo.svg"
                  alt="Air Foundation School Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AIR FOUNDATION</h3>
                <p className="text-sm text-primary-300">SCHOOL SYSTEM</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Air Foundation School - Capital Campus provides quality education 
              from Pre School to High School in G-14, Islamabad.    
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                             transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
                
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+92-51-8736555</p>
                  <p className="text-gray-300">+92-339-0001281</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiMail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Airschoolg14@gmail.com"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  Airschoolg14@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  House No. 748, Service Road East, Sector G-14/4<br />
                  Islamabad, Pakistan
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Office Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-primary-300">8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary-300">9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-500">Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white text-sm 
                          font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Air Foundation School - Capital Campus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
