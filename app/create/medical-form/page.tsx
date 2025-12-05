'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
} from 'lucide-react'

const steps = [
  { number: 1, label: 'Tujuan', active: true },
  { number: 2, label: 'Detail pasien', active: false },
  { number: 3, label: 'Riwayat medis', active: false },
  { number: 4, label: 'Target donasi', active: false },
  { number: 5, label: 'Judul', active: false },
  { number: 6, label: 'Cerita', active: false },
  { number: 7, label: 'Ajakan', active: false },
]

const patientOptions = [
  {
    value: 'self',
    label: 'Saya sendiri',
    description: 'Saya yang membutuhkan bantuan medis',
  },
  {
    value: 'same-kk',
    label: 'Keluarga yang satu KK dengan saya',
    description: 'Anggota keluarga yang masih dalam Kartu Keluarga yang sama',
  },
  {
    value: 'separate-kk',
    label: 'Keluarga inti (ayah/ibu/kakak/adik/anak) yang sudah pisah KK dengan saya',
    description: 'Keluarga inti yang sudah memiliki Kartu Keluarga terpisah',
  },
  {
    value: 'other',
    label: 'Selain pilihan di atas',
    description: 'Pilihan lain yang tidak termasuk kategori di atas',
  },
]

export default function MedicalFormPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedOption) {
      alert('Silakan pilih salah satu opsi')
      return
    }

    // TODO: Save to state/context and proceed to next step
    console.log('Selected option:', selectedOption)
    
    // Redirect based on selected option
    if (selectedOption === 'other') {
      router.push('/create/medical-form/other-relation')
    } else if (selectedOption === 'separate-kk') {
      router.push('/create/medical-form/separate-kk')
    } else {
      router.push(`/create/medical-form/patient-details?relation=${selectedOption}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/create/campaign-type" className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Siapa yang sakit?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Pilih hubungan kamu dengan pasien yang membutuhkan bantuan medis
            </p>

            <form onSubmit={handleSubmit}>
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3">
                {patientOptions.map((option) => (
                  <div key={option.value}>
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option.value}
                      className="flex items-start gap-4 p-4 rounded-xl border-2 border-gray-200 cursor-pointer transition-all hover:border-primary hover:bg-emerald-50/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-emerald-50"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {selectedOption === option.value ? (
                          <div className="w-5 h-5 rounded-full bg-primary border-4 border-primary flex items-center justify-center">
                            <Circle className="h-2 w-2 fill-white text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 mb-1">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {option.description}
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Submit Button */}
              <div className="mt-8 pt-6 border-t">
                <Button
                  type="submit"
                  disabled={!selectedOption}
                  className="w-full h-12 text-base font-semibold rounded-full"
                >
                  Konfirmasi
                </Button>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex gap-2">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-xs text-gray-700">
                <p className="font-semibold mb-1 text-primary">Informasi Penting:</p>
                <p>
                  Pastikan kamu memiliki dokumen yang diperlukan sesuai dengan pilihan yang kamu pilih. 
                  Dokumen akan diminta pada langkah selanjutnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

