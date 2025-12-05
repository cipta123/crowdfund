'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, TrendingUp, Heart, Mail, User } from 'lucide-react'

export function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Donasi',
      href: '/',
      icon: Home,
    },
    {
      name: 'Galang Dana',
      href: '/create',
      icon: TrendingUp,
    },
    {
      name: 'Donasi Cepat',
      href: '/quick-donate',
      icon: Heart,
    },
    {
      name: 'Inbox',
      href: '/inbox',
      icon: Mail,
    },
    {
      name: 'Akun',
      href: '/profile',
      icon: User,
    },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
