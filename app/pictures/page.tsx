'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPhotograph, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations'
import galleryData from '@/data/gallery.json'

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

interface GalleryCategory {
  id: string
  title: string
  description: string
  coverImage: string
  images: GalleryImage[]
}

export default function PicturesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories: GalleryCategory[] = galleryData.categories

  const currentCategory = categories.find(cat => cat.id === selectedCategory)
  const currentImages = currentCategory?.images || []

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
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
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-300">
              Explore memorable moments and events captured at Air Foundation School - Capital Campus.
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
            {selectedCategory ? (
              <>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="hover:text-primary-500"
                >
                  Gallery
                </button>
                <span className="mx-2">/</span>
                <span className="text-primary-500">{currentCategory?.title}</span>
              </>
            ) : (
              <span className="text-primary-500">Gallery</span>
            )}
          </nav>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              // Category Grid
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FadeIn className="mb-10">
                  <h2 className="text-3xl font-bold text-secondary-500 mb-2">
                    Browse by Category
                  </h2>
                  <p className="text-gray-600">
                    Click on a category to view photos from that event or collection.
                  </p>
                </FadeIn>

                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <StaggerItem key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className="w-full text-left group"
                      >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                          <div className="relative h-56 overflow-hidden">
                            <Image
                              src={category.coverImage}
                              alt={category.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {category.title}
                              </h3>
                              <p className="text-gray-200 text-sm">
                                {category.images.length} Photos
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-gray-600 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            ) : (
              // Photo Grid
              <motion.div
                key="photos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FadeIn className="mb-10">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium mb-4"
                  >
                    <HiChevronLeft className="w-5 h-5 mr-1" />
                    Back to Categories
                  </button>
                  <h2 className="text-3xl font-bold text-secondary-500 mb-2">
                    {currentCategory?.title}
                  </h2>
                  <p className="text-gray-600">
                    {currentCategory?.description}
                  </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentImages.map((image, index) => (
                    <StaggerItem key={image.id}>
                      <button
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer w-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <HiPhotograph className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-medium truncate">
                            {image.caption}
                          </p>
                        </div>
                      </button>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Close"
            >
              <HiX className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 text-white hover:text-primary-400 transition-colors z-10 bg-black/50 rounded-full"
              aria-label="Previous"
            >
              <HiChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 text-white hover:text-primary-400 transition-colors z-10 bg-black/50 rounded-full"
              aria-label="Next"
            >
              <HiChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImages[currentImageIndex].src}
                alt={currentImages[currentImageIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white text-center font-medium">
                  {currentImages[currentImageIndex].caption}
                </p>
                <p className="text-gray-400 text-center text-sm mt-1">
                  {currentImageIndex + 1} / {currentImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-secondary-500 mb-4">
              Want to See More?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest photos and updates from 
              Air Foundation School - Capital Campus.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Us
              </Link>
              <Link
                href="/news"
                className="btn-outline"
              >
                View News & Events
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
