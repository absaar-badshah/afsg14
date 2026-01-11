import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HiAcademicCap, 
  HiUserGroup, 
  HiLightBulb, 
  HiShieldCheck,
  HiBookOpen,
  HiGlobe,
  HiCheckCircle
} from 'react-icons/hi'
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from '@/components/Animations'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Air Foundation School - Capital Campus in G-14 Islamabad. Our mission, vision, history, and commitment to quality education from Pre School to High School.',
  keywords: ['about Air Foundation School', 'school history G-14', 'mission vision school Islamabad', 'quality education Islamabad'],
}

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '500+', label: 'Happy Students' },
  { number: '50+', label: 'Expert Teachers' },
  { number: '100%', label: 'Parent Satisfaction' },
]

const values = [
  {
    icon: HiAcademicCap,
    title: 'Academic Excellence',
    description: 'We maintain high academic standards with a comprehensive curriculum that prepares students for future success.',
  },
  {
    icon: HiUserGroup,
    title: 'Character Building',
    description: 'We instill strong moral values, discipline, and ethical behavior in our students.',
  },
  {
    icon: HiLightBulb,
    title: 'Innovation',
    description: 'We embrace modern teaching methodologies and technology to enhance learning experiences.',
  },
  {
    icon: HiShieldCheck,
    title: 'Safety First',
    description: 'We provide a secure and nurturing environment where students can learn and grow.',
  },
  {
    icon: HiBookOpen,
    title: 'Holistic Education',
    description: 'We focus on intellectual, physical, emotional, and social development of every child.',
  },
  {
    icon: HiGlobe,
    title: 'Global Perspective',
    description: 'We prepare students to be responsible global citizens with awareness of world affairs.',
  },
]

const facilities = [
  'Smart Classrooms with Multimedia',
  'Well-equipped Computer Laboratory',
  'Modern Science Laboratories',
  'Comprehensive Library',
  'Spacious Sports Ground',
  'Dedicated Art & Music Rooms',
  'Safe Transport Facility',
  'CCTV Surveillance System',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat" />
        </div>
        <div className="container-custom relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Our School
            </h1>
            <p className="text-xl text-gray-300">
              Discover the story, mission, and values that make Air Foundation School 
              a premier educational institution in G-14, Islamabad.
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
            <span className="text-primary-500">About Us</span>
          </nav>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/school-building.svg"
                    alt="Air Foundation School Building"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500 rounded-2xl -z-10" />
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mt-2 mb-6">
                  A Legacy of Educational Excellence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Air Foundation School - Capital Campus was established with a vision to provide 
                  quality education that combines academic rigor with character development. Located 
                  in the heart of G-14, Islamabad, our school has become a beacon of educational 
                  excellence in the community.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Over the years, we have grown from a small institution to a comprehensive 
                  educational facility offering programs from Pre School to High School. Our 
                  commitment to excellence has helped shape the futures of hundreds of students 
                  who have gone on to achieve great success in their academic and professional lives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to uphold our founding principles while embracing modern 
                  educational practices and technology to prepare our students for the challenges 
                  of the 21st century.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <div className="w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center mb-6">
                  <HiLightBulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-500 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide a nurturing and stimulating learning environment that empowers 
                  students to achieve academic excellence, develop strong moral character, 
                  and become responsible citizens who contribute positively to society. We 
                  strive to inspire a lifelong love of learning and prepare our students 
                  for the challenges of an ever-changing world.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
                  <HiGlobe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-500 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as a leading educational institution in Islamabad that 
                  sets the benchmark for academic excellence, innovation, and character 
                  development. We envision our students becoming confident, creative, and 
                  compassionate leaders who make meaningful contributions to their 
                  communities and the world.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mt-2">
              Our Core Values
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-secondary-500">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
                  World-Class Infrastructure
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                  Our Facilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We believe that a conducive learning environment is essential for 
                  effective education. Our campus is equipped with modern facilities 
                  that support academic, creative, and physical development.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-center text-white">
                      <HiCheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/facility-1.svg"
                      alt="Computer Lab"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/facility-1.svg"
                      alt="Library"
                      width={300}
                      height={250}
                      className="w-full h-52 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/facility-1.svg"
                      alt="Science Lab"
                      width={300}
                      height={250}
                      className="w-full h-52 object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/facility-1.svg"
                      alt="Playground"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                        <Image
                          src="/images/principal.svg"
                          alt="Principal"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-500 mb-2">
                        Principal's Message
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        "At Air Foundation School - Capital Campus, we believe that every child 
                        has unique potential waiting to be discovered and nurtured. Our dedicated 
                        team of educators is committed to providing an environment where students 
                        can excel academically while developing the character and skills needed 
                        for success in life."
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        "We invite parents to partner with us in this important journey of 
                        shaping tomorrow's leaders. Together, we can create a bright future 
                        for our children."
                      </p>
                      <p className="font-semibold text-secondary-500">
                        — Principal, Air Foundation School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our School Family?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards providing your child with quality education 
              at Air Foundation School - Capital Campus.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold 
                        rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
