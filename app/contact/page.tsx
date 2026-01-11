'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker, 
  HiClock,
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi'
import { FadeIn, SlideIn } from '@/components/Animations'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY',
          ...formData,
          from_name: 'AFS G-14 Website',
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      details: ['+92-51-8736555', '+92-339-0001281'],
      href: 'tel:+92512106789',
    },
    {
      icon: HiMail,
      title: 'Email',
      details: ['Airschoolg14@gmail.com'],
      href: 'mailto:Airschoolg14@gmail.com',
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      details: ['House No. 748, Service Road East, Sector G-14/4', 'Islamabad, Pakistan'],
      href: 'https://maps.app.goo.gl/Qdfm6mD8qmYTLgM68',
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 2:00 PM', 'Sat: 9:00 AM - 12:00 PM'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat" />
        </div>
        <div className="container-custom relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with Air Foundation School - Capital Campus. 
              We'd love to hear from you and answer any questions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-500">Contact</span>
          </nav>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <SlideIn direction="left" className="lg:col-span-1">
              <div className="bg-secondary-500 rounded-2xl p-8 text-white h-full">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          item.href && i === 0 ? (
                            <a
                              key={i}
                              href={item.href}
                              className="block text-gray-300 hover:text-primary-300 transition-colors"
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-gray-300">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <h3    className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.facebook.com/AirSchoolG14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Contact Form */}
            <SlideIn direction="right" delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-secondary-500 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <HiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600 mb-4">
                      Thank you for contacting Air Foundation School. 
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="+92-XXX-XXXXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="general">General Inquiry</option>
                          <option value="fees">Fee Structure</option>
                          <option value="visit">Schedule a Visit</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-field resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                        <HiExclamationCircle className="w-5 h-5" />
                        <span>Something went wrong. Please try again later.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <HiPaperAirplane className="ml-2 w-5 h-5 rotate-90" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary-500 mb-2">
              Find Us on Map
            </h2>
            <p className="text-gray-600">
              Air Foundation School - Capital Campus, G-14/4, Islamabad
            </p>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.547111535458!2d72.95532399999999!3d33.642983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df96482c01bfe7%3A0x52663ac63f9928d6!2zQUlSIEZvdW5kYXRpb24gU2Nob29sIEcxNC1DYXBpdGFsIElzbGFtYWJhZCAo2KfbjNim2LEg2YHYp9ik2YbaiNuM2LTZhiDYs9qp2YjZhCDYrNuMIDE0INin2LPZhNin2YUg2KLYqNin2K8p!5e0!3m2!1sen!2s!4v1768150892805!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Air Foundation School Location"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Questions About Admissions?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Visit our campus for a tour and meet our faculty. 
              We're happy to answer all your questions in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+92512106789"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold 
                          rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <HiPhone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/923335123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold 
                          rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
