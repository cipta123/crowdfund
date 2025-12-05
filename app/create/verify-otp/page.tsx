'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare, MessageCircle } from 'lucide-react'

export default function VerifyOtpPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone') || '+628xxxxxxx0189'
  
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isResending, setIsResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = [...otp]
    
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i]
    }
    
    setOtp(newOtp)
    
    // Focus last filled input or last input
    const lastIndex = Math.min(pastedData.length, 5)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpCode = otp.join('')
    
    if (otpCode.length !== 6) {
      alert('Masukkan kode OTP lengkap')
      return
    }

    // TODO: Verify OTP with backend
    console.log('Verifying OTP:', otpCode)
    
    // For demo, accept any 6-digit code
    router.push('/create/campaign-type')
  }

  const handleResend = async (method: 'whatsapp' | 'sms') => {
    setIsResending(true)
    setCountdown(60)
    
    // TODO: Call API to resend OTP
    console.log(`Resending OTP via ${method}`)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsResending(false)
    alert(`Kode OTP telah dikirim ulang via ${method === 'whatsapp' ? 'WhatsApp' : 'SMS'}`)
  }

  const isOtpComplete = otp.every(digit => digit !== '')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-sky-500 text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/create/register" className="flex items-center gap-2 hover:text-sky-100 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold">Masukkan kode OTP</h1>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-md">
          {/* OTP Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Pastikan kepemilikan akun ini
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Masukkan 6 digit kode verifikasi yang dikirimkan ke whatsapp{' '}
              <span className="font-semibold text-gray-900">{phone}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input */}
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              {/* Info */}
              <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-blue-800">
                  Jaga kerahasiaan kode OTP kamu dan hati-hati dengan penipuan mengatasnamakan Kitabisa.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isOtpComplete}
                className="w-full h-12 text-base font-semibold bg-sky-500 hover:bg-sky-600"
              >
                Verifikasi
              </Button>
            </form>

            {/* Resend Options */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-3">
                Kirim ulang kode melalui
              </p>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleResend('whatsapp')}
                  disabled={countdown > 0 || isResending}
                  className="flex-1 h-12 border-gray-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-sm">
                    WhatsApp
                    {countdown > 0 && ` (${countdown}s)`}
                  </span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleResend('sms')}
                  disabled={countdown > 0 || isResending}
                  className="flex-1 h-12 border-gray-300"
                >
                  <MessageSquare className="h-5 w-5 mr-2 text-sky-600" />
                  <span className="text-sm">
                    SMS
                    {countdown > 0 && ` (${countdown}s)`}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Tidak menerima kode? Pastikan nomor WhatsApp kamu aktif dan terhubung dengan internet
          </p>
        </div>
      </main>
    </div>
  )
}

