'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiUserGroup, 
  HiLightBulb, 
  HiHeart,
  HiArrowRight,
  HiCalendar
} from 'react-icons/hi'
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from '@/components/Animations'
import newsData from '@/data/news.json'

const features = [
  {
    icon: HiAcademicCap,
    title: 'Quality Education',
    description: 'Experienced faculty delivering comprehensive curriculum from Pre School to High School.',
  },
  {
    icon: HiUserGroup,
    title: 'Holistic Development',
    description: 'Focus on academic excellence, character building, and extracurricular activities.',
  },
  {
    icon: HiLightBulb,
    title: 'Modern Facilities',
    description: 'Smart classrooms, computer labs, science labs, and well-equipped library.',
  },
  {
    icon: HiHeart,
    title: 'Safe Environment',
    description: 'Secure campus with caring staff ensuring a nurturing learning atmosphere.',
  },
]

export default function HomePage() {
  const latestNews = newsData.news.slice(0, 4)
  const upcomingEvents = newsData.events.slice(0, 4)
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.svg"
            alt="Air Foundation School Campus"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to Air Foundation School - Capital Campus
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Pre School - Junior School - High School
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Admissions Open for {currentYear}-{nextYear}
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Join Air Foundation School - Capital Campus and give your child 
              the best start in their educational journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg 
                          hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg 
                          hover:bg-white hover:text-primary-500 transition-all duration-300"
              >
                <HiCalendar className="mr-2 w-5 h-5" />
                Schedule a Visit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

           {/* Our Vision */}
            <FadeIn direction="left" className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiAcademicCap className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-500 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  Every student at Air Foundation schools is the trust of his parents and
                   Allah to the safe hands of the institute.Air Foundation schools are parenting orphans
                    and serving education to all classes of the society beyond any sectarianism. providing strong and positive
                     individuals to the society, we earn the pleasure of Allah through social reform.
                </p>
              </div>
            </FadeIn>

            {/* Mission Statement */}
            <FadeIn direction="left" className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiAcademicCap className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-500 mb-4">Mission Statement</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality, modern, and relevant education at a sustainable cost,
                   fostering personal grooming, character building, and academic excellence in
                    students to create respected citizens who positively impact society. The school 
                    aims to create a nurturing and stimulating environment that balances academic rigor
                     with critical thinking, creativity, and a strong sense of responsibility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <SlideIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-school.svg"
                    alt="Air Foundation School Students"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500 rounded-2xl -z-10" />
              </div>
            </SlideIn>

            {/* Content */}
            <SlideIn direction="right" delay={0.2}>
              <div>
                <h2 className="section-title">About Our School</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  “Air Foundation School” is a non-profit school that was established in the year 2007,July 30. 
                  The creation of “Me” schools is in line with the motto of “Adam Foundation Pakistan” that is 
                  to serve Humanity through social reform via education. We are committed to the excellence and 
                  highest and achievements of students in terms of their intellect, knowledge, good practice and 
                  skills for 21st century. We strive for providing Muslim community in Pakistan with the latest 
                  knowledge by means of blending faith, Islam into it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We teach students to be enquiring thinkers who can acclimatize and 
                  succeed in varying global society. The School starts at Grade K to Matriculation and expanding 
                  it to college and then university is in our plans. InshaAllah! We aspire to be the best 
                  Institutions creating well balanced and competitive human beings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-primary">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary-500">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Air Foundation School?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are committed to providing an exceptional educational experience 
              that prepares students for success in life.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  )
}
