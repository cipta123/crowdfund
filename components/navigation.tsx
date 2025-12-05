'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SearchOverlay } from '@/components/search-overlay'
import { Heart, Menu, X, Search, User } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold hidden sm:inline">KitaPeduli</span>
            </Link>

            {/* Search Bar - Desktop & Mobile */}
            <div className="flex-1 max-w-xl">
              <div 
                className="relative cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Search clicked!')
                  setSearchOpen(true)
                }}
              >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <div className="w-full h-10 pl-10 pr-4 text-sm border rounded-lg bg-background flex items-center text-muted-foreground hover:bg-muted/50 transition-colors">
                Cari campaign...
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/campaigns" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Jelajahi
            </Link>
            <Link href="/create" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Buat Campaign
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Tentang Kami
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button size="sm">Donasi</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link
              href="/campaigns"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jelajahi
            </Link>
            <Link
              href="/create"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buat Campaign
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <div className="pt-3 space-y-2">
              <Button className="w-full">Donasi Sekarang</Button>
              <Button variant="outline" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Masuk
              </Button>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Search Overlay - Outside nav */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
