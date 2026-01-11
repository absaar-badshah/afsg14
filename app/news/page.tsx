import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiCalendar, HiTag, HiArrowRight } from 'react-icons/hi'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations'
import newsData from '@/data/news.json'

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, announcements, and upcoming events at Air Foundation School - Capital Campus, G-14 Islamabad.',
  keywords: ['school news G-14', 'school events Islamabad', 'Air Foundation School updates', 'school announcements'],
}

const categoryColors: Record<string, string> = {
  'Admissions': 'bg-green-100 text-green-700',
  'Sports': 'bg-blue-100 text-blue-700',
  'Academic': 'bg-purple-100 text-purple-700',
  'Notice': 'bg-yellow-100 text-yellow-700',
  'Trip': 'bg-pink-100 text-pink-700',
}

export default function NewsPage() {
  const { news, events } = newsData
  const featuredNews = news.filter(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-PK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

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
              News & Events
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest happenings, announcements, and 
              upcoming events at Air Foundation School - Capital Campus.
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
            <span className="text-primary-500">News & Events</span>
          </nav>
        </div>
      </div>

      {/* Upcoming Events */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-bold text-secondary-500 mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600">
              Mark your calendars for these important dates.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-primary-500 text-white text-center py-4">
                    <div className="text-sm font-medium opacity-90">{event.day}</div>
                    <div className="text-4xl font-bold">{event.date.split('-')[2]}</div>
                    <div className="text-sm font-medium opacity-90">{event.month}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-secondary-500 mb-2 group-hover:text-primary-500 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Featured News */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-bold text-secondary-500 mb-2">
              Featured News
            </h2>
            <p className="text-gray-600">
              Important announcements and highlights from our school.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <article 
                  id={item.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <HiCalendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-3 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {item.excerpt}
                    </p>
                    <button className="mt-4 inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                      Read More
                      <HiArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-bold text-secondary-500 mb-2">
              All News & Announcements
            </h2>
            <p className="text-gray-600">
              Browse all news and updates from Air Foundation School.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {news.map((item) => (
              <StaggerItem key={item.id}>
                <article 
                  id={item.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
                          <HiTag className="inline w-3 h-3 mr-1" />
                          {item.category}
                        </span>
                        <span className="flex items-center text-gray-500 text-sm">
                          <HiCalendar className="w-4 h-4 mr-1" />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-500 mb-3 group-hover:text-primary-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-8">
              Follow us on social media or contact us to stay informed about 
              the latest news and events at Air Foundation School.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold 
                        rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
              <HiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
