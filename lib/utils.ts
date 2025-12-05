import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
})

const numberFormatter = new Intl.NumberFormat("id-ID")

/**
 * Format angka menjadi Rupiah (contoh: Rp 150.000.000)
 */
export function formatCurrency(value: number) {
  if (Number.isNaN(value)) return "Rp 0"
  return currencyFormatter.format(value)
}

/**
 * Format angka biasa dengan pemisah ribuan (contoh: 1.250 -> 1.250)
 */
export function formatNumber(value: number) {
  if (Number.isNaN(value)) return "0"
  return numberFormatter.format(value)
}

/**
 * Hitung persentase progress dari current vs target (0 - 100)
 */
export function calculateProgress(current: number, target: number) {
  if (target <= 0) return 0
  const percent = (current / target) * 100
  return Math.min(Math.max(percent, 0), 100)
}

/**
 * Hitung sisa hari dari tanggal akhir campaign
 */
export function getDaysRemaining(endDate: string | Date) {
  const end = new Date(endDate).getTime()
  if (Number.isNaN(end)) return 0

  const now = Date.now()
  const diff = end - now
  return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0)
}

/**
 * Format tanggal ke format lokal Indonesia (contoh: 12 Maret 2025)
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions) {
  const dt = new Date(date)
  if (Number.isNaN(dt.getTime())) return "-"

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(dt)
}
