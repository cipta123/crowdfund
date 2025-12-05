'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface BannerSlide {
  id: string
  imageUrl: string
  link: string
  alt: string
}

const bannerSlides: BannerSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=400&fit=crop',
    link: '/campaign/kuliah-terhenti',
    alt: 'Banner Campaign Kuliah Terhenti - Bantu Pendidikan Anak Indonesia'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=400&fit=crop',
    link: '/campaign/bantuan-bencana',
    alt: 'Banner Campaign Bantuan Bencana - Ulurkan Tangan untuk Sesama'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=400&fit=crop',
    link: '/campaign/operasi-jantung',
    alt: 'Banner Campaign Kesehatan - Bantu Operasi dan Pengobatan'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=400&fit=crop',
    link: '/campaign/bangun-sekolah',
    alt: 'Banner Campaign Pendidikan - Wujudkan Mimpi Anak Bersekolah'
  }
]

export function SpecialBannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide) => (
            <Link
              key={slide.id}
              href={slide.link}
              className="min-w-full block group"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-6 bg-primary' 
                : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
