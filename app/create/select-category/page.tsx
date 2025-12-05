'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  Stethoscope,
  GraduationCap,
  Home,
  Leaf,
  Users,
  Heart,
  ChevronRight,
  Building2,
  Lightbulb,
  HandHeart,
  Baby,
  Church,
  Sprout,
  PawPrint,
  Accessibility,
} from 'lucide-react'

const medicalCategories = [
  {
    id: 'kesehatan',
    icon: Stethoscope,
    label: 'Kesehatan',
    description: 'Galang dana untuk biaya pengobatan, operasi, atau perawatan kesehatan',
    color: 'bg-gradient-to-br from-red-400 to-pink-500',
  },
]

const otherCategories = [
  {
    id: 'pendidikan',
    icon: GraduationCap,
    label: 'Bantuan Pendidikan',
    description: 'Bantu biaya sekolah, kuliah, atau program pendidikan lainnya',
    color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
  },
  {
    id: 'bencana-alam',
    icon: Home,
    label: 'Bencana Alam',
    description: 'Galang dana untuk korban bencana alam dan pemulihan',
    color: 'bg-gradient-to-br from-orange-400 to-red-500',
  },
  {
    id: 'difabel',
    icon: Accessibility,
    label: 'Difabel',
    description: 'Bantuan untuk penyandang disabilitas dan kebutuhan khusus',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  },
  {
    id: 'infrastruktur-umum',
    icon: Building2,
    label: 'Infrastruktur Umum',
    description: 'Pembangunan dan perbaikan fasilitas umum untuk masyarakat',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    id: 'karya-kreatif',
    icon: Lightbulb,
    label: 'Karya Kreatif & Modal Usaha',
    description: 'Dukung kreativitas dan pengembangan usaha kecil menengah',
    color: 'bg-gradient-to-br from-purple-400 to-pink-500',
  },
  {
    id: 'kegiatan-sosial',
    icon: Users,
    label: 'Kegiatan Sosial',
    description: 'Program dan kegiatan sosial untuk kemajuan masyarakat',
    color: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  },
  {
    id: 'kemanusiaan',
    icon: HandHeart,
    label: 'Kemanusiaan',
    description: 'Bantuan kemanusiaan untuk mereka yang membutuhkan',
    color: 'bg-gradient-to-br from-rose-400 to-pink-500',
  },
  {
    id: 'lingkungan',
    icon: Leaf,
    label: 'Lingkungan',
    description: 'Dukung program pelestarian lingkungan dan alam',
    color: 'bg-gradient-to-br from-green-400 to-emerald-500',
  },
  {
    id: 'menolong-hewan',
    icon: PawPrint,
    label: 'Menolong Hewan',
    description: 'Bantuan untuk hewan terlantar dan pelestarian satwa',
    color: 'bg-gradient-to-br from-teal-400 to-cyan-500',
  },
  {
    id: 'panti-asuhan',
    icon: Baby,
    label: 'Panti Asuhan',
    description: 'Bantuan untuk panti asuhan dan anak yatim piatu',
    color: 'bg-gradient-to-br from-amber-400 to-orange-500',
  },
  {
    id: 'rumah-ibadah',
    icon: Church,
    label: 'Rumah Ibadah',
    description: 'Pembangunan dan perbaikan tempat ibadah',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 'wakaf-produktif',
    icon: Sprout,
    label: 'Wakaf Produktif',
    description: 'Program wakaf untuk kemaslahatan umat',
    color: 'bg-gradient-to-br from-green-500 to-teal-500',
  },
]

export default function SelectCategoryPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'other'
  
  const categories = type === 'medical' ? medicalCategories : otherCategories
  const title = type === 'medical' 
    ? 'Pilih Kategori Kesehatan' 
    : 'Pilih kategori galang dana'
  const subtitle = type === 'medical'
    ? 'Pilih kategori yang sesuai dengan kondisi medis'
    : 'Pilih kategori yang paling sesuai dengan kebutuhan galang dana kamu'

  const handleSelectCategory = (categoryId: string) => {
    router.push(`/create/form?category=${categoryId}&type=${type}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link 
              href="/create/campaign-type" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold text-primary">Pilih Kategori</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Category List */}
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => handleSelectCategory(category.id)}
                  className="group w-full bg-white rounded-xl border border-gray-200 p-4 text-left transition-all hover:border-primary hover:shadow-md hover:bg-emerald-50/50 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-0.5 flex items-center justify-between">
                        {category.label}
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex gap-2">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-700">
                <strong className="text-primary">💡 Tips:</strong> Pilih kategori yang paling relevan agar campaign kamu mudah ditemukan oleh donatur yang tepat.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
