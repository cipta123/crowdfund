'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  ArrowLeft,
  Upload,
  Info,
  CheckCircle2,
} from 'lucide-react'

const categories = [
  { value: 'kesehatan', label: 'Kesehatan' },
  { value: 'pendidikan', label: 'Pendidikan' },
  { value: 'bencana-alam', label: 'Bencana Alam' },
  { value: 'lingkungan', label: 'Lingkungan' },
  { value: 'sosial-kemanusiaan', label: 'Sosial & Kemanusiaan' },
  { value: 'lainnya', label: 'Lainnya' },
]

export default function CreateCampaignFormPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    category: categoryParam || '',
    title: '',
    targetAmount: '',
    endDate: '',
    description: '',
    story: '',
    imageUrl: '',
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to API
    console.log('Form submitted:', formData)
    alert('Campaign berhasil dibuat! (Demo)')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/create" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold text-primary">KitaPeduli</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      step > s ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span className={step === 1 ? 'font-bold text-primary' : ''}>Info Dasar</span>
              <span className={step === 2 ? 'font-bold text-primary' : ''}>Detail Campaign</span>
              <span className={step === 3 ? 'font-bold text-primary' : ''}>Info Penggalang</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            {/* Step 1: Info Dasar */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Informasi Dasar</h2>
                  <p className="text-sm text-gray-600">Mari mulai dengan informasi dasar campaign kamu</p>
                </div>

                <div className="space-y-4">
                  {/* Category */}
                  <div>
                    <Label htmlFor="category" className="text-sm font-semibold mb-2 block">
                      Kategori Campaign <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Pilih kategori</option>
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title" className="text-sm font-semibold mb-2 block">
                      Judul Campaign <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Contoh: Bantu Rina Melawan Kanker"
                      required
                      className="h-12"
                    />
                    <p className="text-xs text-gray-500 mt-1">Buat judul yang menarik dan jelas</p>
                  </div>

                  {/* Target Amount */}
                  <div>
                    <Label htmlFor="targetAmount" className="text-sm font-semibold mb-2 block">
                      Target Dana <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                      <Input
                        id="targetAmount"
                        name="targetAmount"
                        type="number"
                        value={formData.targetAmount}
                        onChange={handleChange}
                        placeholder="5000000"
                        required
                        className="h-12 pl-12"
                        min="100000"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Minimal Rp 100.000</p>
                  </div>

                  {/* End Date */}
                  <div>
                    <Label htmlFor="endDate" className="text-sm font-semibold mb-2 block">
                      Tanggal Berakhir <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                      className="h-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <p className="text-xs text-gray-500 mt-1">Pilih tanggal berakhirnya campaign</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="flex-1"
                  >
                    Batal
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.category || !formData.title || !formData.targetAmount || !formData.endDate}
                    className="flex-1"
                  >
                    Lanjutkan
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Detail Campaign */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Detail Campaign</h2>
                  <p className="text-sm text-gray-600">Ceritakan lebih detail tentang campaign kamu</p>
                </div>

                <div className="space-y-4">
                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-sm font-semibold mb-2 block">
                      Deskripsi Singkat <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tulis deskripsi singkat (max 200 karakter)"
                      required
                      rows={3}
                      maxLength={200}
                      className="resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.description.length}/200 karakter</p>
                  </div>

                  {/* Story */}
                  <div>
                    <Label htmlFor="story" className="text-sm font-semibold mb-2 block">
                      Cerita Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="story"
                      name="story"
                      value={formData.story}
                      onChange={handleChange}
                      placeholder="Ceritakan secara lengkap tentang campaign kamu. Semakin detail, semakin meyakinkan untuk donatur."
                      required
                      rows={8}
                      className="resize-none"
                    />
                    <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-lg flex gap-2">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-blue-700">
                        <p className="font-semibold mb-1">Tips menulis cerita yang baik:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          <li>Jelaskan latar belakang dan kondisi saat ini</li>
                          <li>Sebutkan untuk apa dana akan digunakan</li>
                          <li>Tulis dengan jujur dan tulus</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image URL */}
                  <div>
                    <Label htmlFor="imageUrl" className="text-sm font-semibold mb-2 block">
                      URL Gambar Campaign <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      type="url"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                      required
                      className="h-12"
                    />
                    <p className="text-xs text-gray-500 mt-1">Gunakan URL gambar yang relevan dengan campaign kamu</p>
                  </div>

                  {formData.imageUrl && (
                    <div className="border rounded-lg overflow-hidden">
                      <img src={formData.imageUrl} alt="Preview" className="w-full h-48 object-cover" />
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.description || !formData.story || !formData.imageUrl}
                    className="flex-1"
                  >
                    Lanjutkan
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Info Penggalang */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Informasi Penggalang Dana</h2>
                  <p className="text-sm text-gray-600">Data ini akan digunakan untuk verifikasi</p>
                </div>

                <div className="space-y-4">
                  {/* Organizer Name */}
                  <div>
                    <Label htmlFor="organizerName" className="text-sm font-semibold mb-2 block">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organizerName"
                      name="organizerName"
                      type="text"
                      value={formData.organizerName}
                      onChange={handleChange}
                      placeholder="Nama lengkap sesuai KTP"
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Organizer Email */}
                  <div>
                    <Label htmlFor="organizerEmail" className="text-sm font-semibold mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organizerEmail"
                      name="organizerEmail"
                      type="email"
                      value={formData.organizerEmail}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Organizer Phone */}
                  <div>
                    <Label htmlFor="organizerPhone" className="text-sm font-semibold mb-2 block">
                      Nomor Telepon <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organizerPhone"
                      name="organizerPhone"
                      type="tel"
                      value={formData.organizerPhone}
                      onChange={handleChange}
                      placeholder="08123456789"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                    <div className="flex gap-2">
                      <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-700">
                        <p className="font-semibold mb-1">Informasi penting:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          <li>Data ini akan digunakan untuk verifikasi identitas</li>
                          <li>Pastikan data yang diisi sesuai dengan KTP</li>
                          <li>Kami akan mengirim email konfirmasi setelah campaign dibuat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    Kembali
                  </Button>
                  <Button
                    type="submit"
                    disabled={!formData.organizerName || !formData.organizerEmail || !formData.organizerPhone}
                    className="flex-1"
                  >
                    Buat Campaign
                  </Button>
                </div>
              </div>
            )}
          </form>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Dengan membuat campaign, kamu menyetujui{' '}
              <Link href="/terms" className="text-primary hover:underline">
                Syarat & Ketentuan
              </Link>{' '}
              serta{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Kebijakan Privasi
              </Link>{' '}
              KitaPeduli
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}




