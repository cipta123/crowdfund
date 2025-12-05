export interface Campaign {
  id: string
  title: string
  slug: string
  description: string
  story: string
  category: CampaignCategory
  imageUrl: string
  images?: string[]
  targetAmount: number
  currentAmount: number
  donorCount: number
  daysRemaining: number
  endDate: string
  createdAt: string
  organizer: Organizer
  status: CampaignStatus
  isVerified: boolean
  isUrgent?: boolean
  updates?: CampaignUpdate[]
  donations?: Donation[]
}

export interface Organizer {
  id: string
  name: string
  avatarUrl?: string
  isVerified: boolean
  type: 'individual' | 'organization'
  description?: string
}

export interface CampaignUpdate {
  id: string
  campaignId: string
  title: string
  content: string
  imageUrl?: string
  createdAt: string
}

export interface Donation {
  id: string
  campaignId: string
  donorName: string
  amount: number
  message?: string
  isAnonymous: boolean
  createdAt: string
}

export type CampaignCategory = 
  | 'kesehatan'
  | 'pendidikan'
  | 'bencana-alam'
  | 'sosial-kemanusiaan'
  | 'lingkungan'
  | 'hewan'
  | 'kreatif'
  | 'lainnya'

export type CampaignStatus = 'active' | 'completed' | 'expired' | 'draft'

export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  phoneNumber?: string
  isVerified: boolean
  createdAt: string
}
