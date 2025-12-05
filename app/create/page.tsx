'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Heart,
  FileText,
  ShieldCheck,
  Share2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Users,
  Stethoscope,
  GraduationCap,
  Home,
  Leaf,
  HelpCircle,
  ClipboardList,
  BadgeCheck,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: 'Pilih jenis galang dana',
    description: 'Galang dana di KitaPeduli ada beberapa jenis, seperti kebutuhan medis, pendidikan, bencana, dan lainnya.',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Isi form pembuatan galang dana',
    description: 'Isi form secara lengkap dengan mengikuti instruksi yang diberikan.',
  },
  {
    number: 3,
    icon: BadgeCheck,
    title: 'Verifikasi galang dana kamu',
    description: 'Lakukan verifikasi identitas dan dokumen pendukung agar campaign lebih terpercaya.',
  },
]

const tips = [
  {
    icon: ShieldCheck,
    title: 'Verifikasi identitas & dokumen medis',
    description: 'Lakukan verifikasi agar galang danamu lebih meyakinkan orang-orang untuk berdonasi.',
  },
  {
    icon: Share2,
    title: 'Sebarkan galang dana kamu sesering mungkin',
    description: 'Makin sering disebarkan, makin besar peluang galang danamu mendapatkan donasi.',
  },
]

const faqs = [
  {
    question: 'Apakah KitaPeduli memberikan bantuan dana langsung?',
    answer: 'Tidak, KitaPeduli adalah platform crowdfunding yang menghubungkan penggalang dana dengan para donatur. Kami tidak memberikan bantuan dana langsung, tetapi memfasilitasi pengumpulan donasi dari masyarakat.',
  },
  {
    question: 'Apakah galang dana di KitaPeduli gratis?',
    answer: 'Ya, membuat galang dana di KitaPeduli 100% gratis. Tidak ada biaya pendaftaran atau biaya bulanan. Kami hanya mengenakan biaya administrasi kecil dari setiap donasi yang masuk.',
  },
  {
    question: 'Bagaimana jika donasi yang saya terima tidak mencapai target?',
    answer: 'Tidak masalah! Anda tetap bisa mencairkan dana yang sudah terkumpul meskipun belum mencapai target. Dana akan ditransfer ke rekening yang Anda daftarkan.',
  },
]

const categories = [
  { icon: Stethoscope, label: 'Kesehatan', slug: 'kesehatan', color: 'bg-red-500' },
  { icon: GraduationCap, label: 'Pendidikan', slug: 'pendidikan', color: 'bg-blue-500' },
  { icon: Home, label: 'Bencana Alam', slug: 'bencana-alam', color: 'bg-orange-500' },
  { icon: Leaf, label: 'Lingkungan', slug: 'lingkungan', color: 'bg-green-500' },
  { icon: Users, label: 'Sosial', slug: 'sosial-kemanusiaan', color: 'bg-purple-500' },
  { icon: Heart, label: 'Lainnya', slug: 'lainnya', color: 'bg-pink-500' },
]

export default function CreateCampaignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold text-primary">KitaPeduli</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-md text-center">
            {/* Illustration */}
            <div className="mb-8 relative">
              <div className="w-44 h-44 mx-auto relative">
                {/* Background blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-100 rounded-full" />
                {/* Main illustration */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative">
                    {/* People illustration */}
                    <div className="flex items-end justify-center gap-1">
                      <div className="w-14 h-20 bg-primary/70 rounded-t-full" />
                      <div className="w-16 h-24 bg-primary rounded-t-full" />
                      <div className="w-14 h-20 bg-primary/70 rounded-t-full" />
                    </div>
                    {/* Hearts */}
                    <Heart className="h-6 w-6 text-rose-400 fill-rose-400 absolute -top-4 left-0 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <Heart className="h-5 w-5 text-red-400 fill-red-400 absolute -top-2 right-0 animate-bounce" style={{ animationDelay: '0.3s' }} />
                    <Heart className="h-4 w-4 text-pink-400 fill-pink-400 absolute top-2 -right-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Galang dana untuk semua yang membutuhkan!
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Di KitaPeduli ada jutaan <span className="text-primary font-semibold">#OrangBaik</span> yang berdonasi ke segala jenis galang dana tiap harinya.
            </p>

            <Button size="lg" className="w-full rounded-full text-base font-semibold h-12" asChild>
              <Link href="/create/login">Galang dana sekarang!</Link>
            </Button>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Cara galang dana di KitaPeduli
            </h3>

            <div className="space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="flex gap-4">
                    {/* Step Number & Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary/20 my-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border border-emerald-100">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Tips galang dana</h3>
            <p className="text-gray-500 text-sm mb-5">
              Agar galang dana kamu lancar, kamu perlu memperhatikan beberapa hal berikut ini:
            </p>

            <div className="space-y-3">
              {tips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div key={index} className="bg-emerald-50 rounded-2xl p-4 flex gap-4 border border-emerald-100">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{tip.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-md text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Sudah tahu tata caranya, &apos;kan?
            </h3>
            <p className="text-white/90 mb-6 text-sm">
              Yuk, buat galang dana kamu dan dapatkan donasi dari jutaan <span className="font-semibold">#OrangBaik</span> di KitaPeduli!
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full font-semibold px-8 bg-white text-primary hover:bg-emerald-50 hover:text-primary border-white h-12"
              asChild
            >
              <Link href="/create/login">Galang Dana Sekarang</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-14 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-md">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Masih punya pertanyaan?</h3>
              <p className="text-white/60 text-sm">
                Lihat pertanyaan yang sering ditanyakan oleh penggalang dana lain.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden border border-emerald-100"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left text-gray-900 hover:bg-emerald-50 transition-colors"
                  >
                    <span className="font-medium text-sm pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 border-t border-emerald-100">
                      <p className="text-sm text-gray-600 pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Pilih Kategori Campaign
            </h3>
            <p className="text-gray-500 text-sm mb-8 text-center">
              Pilih kategori yang sesuai dengan kebutuhan galang dana kamu
            </p>

            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.slug}
                    href={`/create/form?category=${category.slug}`}
                    className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 hover:border-primary border-2 border-gray-100 transition-all group"
                  >
                    <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{category.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
