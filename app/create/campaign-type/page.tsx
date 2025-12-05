'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Heart,
  Stethoscope,
  ChevronRight,
  X,
  FileText,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CampaignTypePage() {
  const router = useRouter()
  const [showMedicalModal, setShowMedicalModal] = useState(false)

  const handleSelectType = (type: string) => {
    if (type === 'medical') {
      setShowMedicalModal(true)
    } else {
      router.push('/create/select-category?type=other')
    }
  }

  const handleContinueMedical = () => {
    setShowMedicalModal(false)
    router.push('/create/medical-form')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/create/verify-otp" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold text-primary">KitaPeduli</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-md">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Hai, #OrangBaik!
            </h2>
            <p className="text-gray-600">
              Kamu ingin menggalang dana untuk...
            </p>
          </div>

          {/* Campaign Type Options */}
          <div className="space-y-4">
            {/* Medical/Health Campaign */}
            <button
              onClick={() => handleSelectType('medical')}
              className="w-full bg-white rounded-2xl border-2 border-emerald-100 p-6 text-left transition-all hover:border-primary hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Stethoscope className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-between">
                    Galang dana bantuan orang sakit
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Khusus biaya pengobatan atau perawatan penyakit tertentu.
                  </p>
                </div>
              </div>

              {/* CTA Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  Buat galang dana orang sakit
                </span>
              </div>
            </button>

            {/* Other Campaign Types */}
            <button
              onClick={() => handleSelectType('other')}
              className="w-full bg-white rounded-2xl border-2 border-emerald-100 p-6 text-left transition-all hover:border-primary hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-between">
                    Galang dana bantuan lainnya
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Untuk bantuan pendidikan, kemanusiaan, bencana alam, dsb.
                  </p>
                </div>
              </div>

              {/* CTA Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  Buat galang dana bantuan lainnya
                </span>
              </div>
            </button>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex gap-2">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-xs text-blue-800">
                <p className="font-semibold mb-1">💡 Tips:</p>
                <p>Pilih jenis yang sesuai agar campaign kamu mendapat dukungan maksimal dari para donatur.</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary mb-1">10K+</div>
              <div className="text-xs text-gray-600">Campaign Sukses</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary mb-1">2.5M+</div>
              <div className="text-xs text-gray-600">Donatur Aktif</div>
            </div>
          </div>
        </div>
      </main>

      {/* Medical Documents Modal - Slide from Bottom */}
      {showMedicalModal && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
            onClick={() => setShowMedicalModal(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-300">
            <div className="bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
              {/* Handle Bar */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  Dokumen yang Diperlukan
                </h3>
                <button
                  onClick={() => setShowMedicalModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Pastikan kamu orang yang berhak membuat galang dana dengan memiliki dokumen berikut:
                </p>

                {/* Document List */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">KTP kamu</p>
                      <p className="text-sm text-gray-600">sebagai penggalang dana</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Kartu Keluarga pasien</p>
                      <p className="text-sm text-gray-600">
                        Jika pasien belum ada di KK, sertakan <span className="font-medium">akta/Surat Keterangan Lahir</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Surat keterangan medis</p>
                      <p className="text-sm text-gray-600">dengan keterangan diagnosis/penyakit</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Hasil pemeriksaan</p>
                      <p className="text-sm text-gray-600">(lab, rontgen, dsb.)</p>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-xs text-gray-700 leading-relaxed">
                      <p className="font-semibold mb-1">Disclaimer:</p>
                      <p>
                        Pastikan bahwa setiap dokumen yang diunggah dalam galang dana ini telah melalui proses validasi. 
                        Dengan demikian, dokumen yang disetorkan adalah asli dan dapat dipertanggungjawabkan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    onClick={handleContinueMedical}
                    className="w-full h-12 text-base font-semibold rounded-full"
                  >
                    Mengerti
                  </Button>
                  
                  <button
                    onClick={() => window.open('#', '_blank')}
                    className="w-full h-12 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Lihat contoh dokumen medis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

