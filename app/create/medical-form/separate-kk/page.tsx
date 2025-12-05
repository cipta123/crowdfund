'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
} from 'lucide-react'

const steps = [
  { number: 1, label: 'Tujuan', active: true },
  { number: 2, label: 'Detail pasien', active: true },
  { number: 3, label: 'Riwayat medis', active: false },
  { number: 4, label: 'Target donasi', active: false },
  { number: 5, label: 'Judul', active: false },
  { number: 6, label: 'Cerita', active: false },
  { number: 7, label: 'Ajakan', active: false },
]

export default function SeparateKKPage() {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    patientPhone: '',
    familyPhone: '',
    bankAccount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.patientPhone || !formData.familyPhone || !formData.bankAccount) {
      alert('Silakan lengkapi semua field yang wajib diisi')
      return
    }

    // TODO: Save form data and proceed to next step
    console.log('Form data:', formData)
    router.push('/create/medical-form/patient-details?relation=separate-kk')
  }

  const handleBack = () => {
    router.push('/create/medical-form')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-bold">Bantuan Medis & Kesehatan</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress Steps - Horizontal Scrollable */}
          <div className="mb-8">
            <div className="overflow-x-auto -mx-4 px-4 pb-2">
              <div className="flex items-center gap-2 min-w-max">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-all ${
                        step.active 
                          ? 'bg-primary text-white shadow-lg scale-110' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step.active ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span className={`text-xs font-medium whitespace-nowrap transition-colors ${
                        step.active ? 'text-primary font-bold' : 'text-gray-400'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-1 mx-2 -mt-6 transition-colors ${
                        step.active ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            {/* Selected Relation - Editable */}
            <div className="pb-4 border-b">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Siapa yang sakit?
                </Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="text-primary hover:text-primary/80 h-8"
                >
                  Ubah
                </Button>
              </div>
              <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">
                  Keluarga inti (ayah/ibu/kakak/adik/anak) yang sudah pisah KK dengan saya
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number - User */}
              <div>
                <Label htmlFor="patientPhone" className="text-sm font-semibold mb-2 block">
                  Masukkan no. ponsel kamu <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-gray-600 mb-2">
                  Seluruh notifikasi akan dikirim melalui nomor ini
                </p>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="patientPhone"
                    name="patientPhone"
                    type="tel"
                    value={formData.patientPhone}
                    onChange={handleChange}
                    placeholder="6282258490189"
                    required
                    className="h-12 pl-10"
                  />
                </div>
              </div>

              {/* Phone Number - Patient/Family */}
              <div>
                <Label htmlFor="familyPhone" className="text-sm font-semibold mb-2 block">
                  Masukkan no. ponsel pasien/keluarga pasien <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-gray-600 mb-2">
                  Pastikan nomor aktif untuk telepon
                </p>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="familyPhone"
                    name="familyPhone"
                    type="tel"
                    value={formData.familyPhone}
                    onChange={handleChange}
                    placeholder="Masukkan nomor ponsel"
                    required
                    className="h-12 pl-10"
                  />
                </div>
              </div>

              {/* Bank Account Selection */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">
                  Pilih rekening bank penggalangan dana <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-gray-600 mb-3">
                  Donasi hanya bisa dicairkan ke rekening ini.
                </p>
                
                <div className="space-y-2">
                  {[
                    { value: 'patient', label: 'Pasien langsung' },
                    { value: 'same-kk', label: 'Keluarga satu KK' },
                    { value: 'different-kk', label: 'Keluarga inti berbeda KK' },
                    { value: 'hospital', label: 'Rumah sakit' },
                    { value: 'other', label: 'Selain pilihan di atas' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-primary hover:bg-emerald-50/50"
                    >
                      <input
                        type="radio"
                        name="bankAccount"
                        value={option.value}
                        checked={formData.bankAccount === option.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        required
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  Sebelumnya
                </Button>
                <Button
                  type="submit"
                  disabled={!formData.patientPhone || !formData.familyPhone || !formData.bankAccount}
                  className="flex-1"
                >
                  Selanjutnya
                </Button>
              </div>
            </form>

            {/* Save for Later Link */}
            <div className="text-center pt-2">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Simpan dan lanjutkan nanti
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}




