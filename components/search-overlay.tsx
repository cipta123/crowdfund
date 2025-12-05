'use client'

import { useState, useEffect } from 'react'
import { Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

interface CampaignSummary {
  id: string
  title: string
  slug: string
  imageUrl: string
  organizer: {
    name: string
  }
  isVerified: boolean
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<CampaignSummary[]>([])
  const [loading, setLoading] = useState(false)

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const controller = new AbortController()
    const query = searchQuery.trim()

    setLoading(true)
    const timeout = setTimeout(() => {
      const params = new URLSearchParams()
      params.set('limit', '5')
      if (query) {
        params.set('q', query)
      }

      fetch(`/api/campaigns?${params.toString()}`, {
        signal: controller.signal,
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error('Gagal memuat data')
          }
          return res.json()
        })
        .then((data) => setResults(data))
        .catch((error) => {
          if (error.name !== 'AbortError') {
            console.error('Gagal memuat campaign', error)
            setResults([])
          }
        })
        .finally(() => setLoading(false))
    }, 300)

    return () => {
      controller.abort()
      clearTimeout(timeout)
    }
  }, [isOpen, searchQuery])

  if (!isOpen) {
    return null
  }

  const popularKeywords = [
    'Kesehatan',
    'Pendidikan', 
    'Bencana Alam',
    'Operasi',
    'Anak Yatim'
  ]

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">
      {/* Overlay Content - Full white background */}
      <div className="relative w-full h-full bg-white dark:bg-gray-950 overflow-hidden">
      {/* Header with Search Bar */}
      <div className="sticky top-0 bg-white dark:bg-gray-950 border-b shadow-sm z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari campaign, kategori, atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full h-10 pl-10 pr-4 text-sm border rounded-lg bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 overflow-y-auto h-[calc(100vh-70px)]">
        {/* Pencarian Pilihan */}
        <section className="mb-8">
          <h2 className="text-base font-bold mb-3">Pencarian Pilihan</h2>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-3">Kata Kunci</p>
            <div className="flex flex-wrap gap-2">
              {popularKeywords.map((keyword) => (
                <Link
                  key={keyword}
                  href={`/search?q=${keyword}`}
                  onClick={onClose}
                  className="px-4 py-2 text-sm border rounded-full hover:bg-muted transition-colors"
                >
                  {keyword}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Empty State */}
        {searchQuery === '' && (
          <div className="text-center py-12">
            <div className="inline-block mb-4">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" fill="#E0F2FE"/>
                <path d="M45 55C45 52.2386 47.2386 50 50 50H70C72.7614 50 75 52.2386 75 55V65C75 67.7614 72.7614 70 70 70H50C47.2386 70 45 67.7614 45 65V55Z" fill="#0EA5E9"/>
                <circle cx="55" cy="58" r="3" fill="white"/>
                <circle cx="65" cy="58" r="3" fill="white"/>
                <path d="M52 64C52 64 55 67 60 67C65 67 68 64 68 64" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Kata kunci tidak ditemukan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Gunakan kata kunci lain atau lihat Penggalangan Dana yang sudah terdaftar di Kitabisa
            </p>
          </div>
        )}

        {/* Penggalangan Dana */}
        <section className="mb-8">
          <h2 className="text-base font-bold mb-4">Penggalangan Dana</h2>
          {loading && (
            <p className="text-sm text-muted-foreground">Memuat data...</p>
          )}
          {!loading && results.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Tidak ada campaign untuk kata kunci ini.
            </p>
          )}
          <div className="space-y-3">
            {results.map((campaign) => (
              <Link
                key={campaign.id}
                href={`/campaign/${campaign.slug}`}
                onClick={onClose}
                className="flex gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <img
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold line-clamp-2 mb-1">
                    {campaign.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{campaign.organizer.name}</span>
                    {campaign.isVerified && (
                      <span className="text-green-600">✓ Terverifikasi</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Kategori */}
        <section className="mb-8">
          <h2 className="text-base font-bold mb-4">Kategori</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Kesehatan', icon: '🏥', href: '/category/kesehatan' },
              { name: 'Pendidikan', icon: '📚', href: '/category/pendidikan' },
              { name: 'Bencana Alam', icon: '🌊', href: '/category/bencana-alam' },
              { name: 'Lingkungan', icon: '🌱', href: '/category/lingkungan' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                onClick={onClose}
                className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}
