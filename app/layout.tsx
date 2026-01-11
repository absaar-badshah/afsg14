import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://afsg14.edu.pk'),
  title: {
    default: 'Air Foundation School - Capital Campus | Best School in G-14 Islamabad',
    template: '%s | Air Foundation School - Capital Campus',
  },
  description: 'Air Foundation School - Capital Campus, G-14 Islamabad offers quality education from Pre School to High School. Admissions open for 2026. Best school in G-14 Islamabad with experienced faculty and modern facilities.',
  keywords: [
    'Air Foundation School',
    'AFS Capital Campus',
    'schools in G-14 Islamabad',
    'best school in G-14',
    'private school G-14 Islamabad',
    'school admissions Islamabad 2026',
    'Pre School G-14',
    'Junior School G-14',
    'High School G-14 Islamabad',
    'education Islamabad',
    'top schools Islamabad',
  ],
  authors: [{ name: 'Air Foundation School - Capital Campus' }],
  creator: 'Air Foundation School - Capital Campus',
  publisher: 'Air Foundation School - Capital Campus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Air Foundation School - Capital Campus | Best School in G-14 Islamabad',
    description: 'Quality education from Pre School to High School in G-14, Islamabad. Modern facilities, experienced faculty, and holistic development.',
    url: 'https://afsg14.edu.pk',
    siteName: 'Air Foundation School - Capital Campus',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Air Foundation School - Capital Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Foundation School - Capital Campus',
    description: 'Quality education from Pre School to High School in G-14, Islamabad.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://afsg14.edu.pk',
  },
}

// Schema.org JSON-LD for local SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Air Foundation School - Capital Campus',
  alternateName: 'AFS G-14',
  description: 'Air Foundation School - Capital Campus offers quality education from Pre School to High School in G-14, Islamabad, Pakistan.',
  url: 'https://afsg14.edu.pk',
  logo: 'https://afsg14.edu.pk/images/logo.png',
  image: 'https://afsg14.edu.pk/images/school-building.jpg',
  telephone: '+92-51-2106789',
  email: 'info@afsg14.edu.pk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Street 1, Sector G-14/4',
    addressLocality: 'Islamabad',
    addressRegion: 'Islamabad Capital Territory',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.6425,
    longitude: 72.9736,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/afsg14',
    'https://www.instagram.com/afsg14',
  ],
  educationalLevel: ['Pre School', 'Primary School', 'Middle School', 'High School'],
  areaServed: {
    '@type': 'City',
    name: 'Islamabad',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
