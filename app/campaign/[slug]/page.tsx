import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  getCampaignBySlug, 
  getDonationsByCampaignId, 
  getUpdatesByCampaignId 
} from '@/lib/services/campaign-service'
import { formatCurrency, calculateProgress, getDaysRemaining, formatDate } from '@/lib/utils'
import { 
  Heart, 
  Share2, 
  Flag, 
  Clock, 
  Users, 
  CheckCircle2,
  Calendar,
  TrendingUp,
  MessageCircle
} from 'lucide-react'

export default async function CampaignDetailPage({ params }: { params: { slug: string } }) {
  const campaign = await getCampaignBySlug(params.slug)
  
  if (!campaign) {
    notFound()
  }

  const [donations, updates] = await Promise.all([
    getDonationsByCampaignId(campaign.id),
    getUpdatesByCampaignId(campaign.id),
  ])
  const progress = calculateProgress(campaign.currentAmount, campaign.targetAmount)
  const daysLeft = getDaysRemaining(campaign.endDate)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Campaign Image */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  fill
                  className="object-cover"
                  priority
                />
                {campaign.isUrgent && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                    Mendesak
                  </Badge>
                )}
              </div>

              {/* Campaign Title & Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">
                    {campaign.category.replace('-', ' ').toUpperCase()}
                  </Badge>
                  {campaign.isVerified && (
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Terverifikasi</span>
                    </div>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaign.title}</h1>
                <p className="text-lg text-muted-foreground">{campaign.description}</p>
              </div>

              {/* Organizer Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {campaign.organizer.avatarUrl && (
                      <Image
                        src={campaign.organizer.avatarUrl}
                        alt={campaign.organizer.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{campaign.organizer.name}</h3>
                        {campaign.organizer.isVerified && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {campaign.organizer.type === 'organization' ? 'Organisasi' : 'Individu'}
                      </p>
                    </div>
                    <Button variant="outline">Lihat Profil</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Story */}
              <Card>
                <CardHeader>
                  <CardTitle>Cerita Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none whitespace-pre-line">
                    {campaign.story}
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              {updates.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Update Campaign</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {updates.map((update) => (
                      <div key={update.id} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(update.createdAt)}</span>
                        </div>
                        <h4 className="font-semibold mb-2">{update.title}</h4>
                        <p className="text-muted-foreground">{update.content}</p>
                        {update.imageUrl && (
                          <div className="relative w-full h-48 mt-3 rounded-lg overflow-hidden">
                            <Image
                              src={update.imageUrl}
                              alt={update.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Donations List */}
              <Card>
                <CardHeader>
                  <CardTitle>Donatur ({campaign.donorCount})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {donations.map((donation) => (
                    <div key={donation.id} className="flex items-start gap-4 border-b last:border-0 pb-4 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold truncate">
                            {donation.isAnonymous ? 'Hamba Allah' : donation.donorName}
                          </p>
                          <p className="font-semibold text-primary flex-shrink-0 ml-2">
                            {formatCurrency(donation.amount)}
                          </p>
                        </div>
                        {donation.message && (
                          <p className="text-sm text-muted-foreground">{donation.message}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(donation.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Donation Card */}
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {formatCurrency(campaign.currentAmount)}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        terkumpul dari {formatCurrency(campaign.targetAmount)}
                      </p>
                      <Progress value={progress} className="h-3 mb-2" />
                      <p className="text-sm font-medium">{progress}% tercapai</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y">
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">Donatur</span>
                        </div>
                        <p className="text-xl font-bold">{campaign.donorCount}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">Hari Lagi</span>
                        </div>
                        <p className="text-xl font-bold">{daysLeft}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        <Heart className="mr-2 h-5 w-5" />
                        Donasi Sekarang
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <Share2 className="mr-2 h-4 w-4" />
                          Bagikan
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <Flag className="mr-2 h-4 w-4" />
                          Laporkan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Campaign Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informasi Campaign</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Dibuat</span>
                      <span className="font-medium">{formatDate(campaign.createdAt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Berakhir</span>
                      <span className="font-medium">{formatDate(campaign.endDate)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge variant="secondary">{campaign.status}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Kategori</span>
                      <span className="font-medium capitalize">
                        {campaign.category.replace('-', ' ')}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Campaign Terverifikasi</p>
                          <p className="text-xs text-muted-foreground">
                            Telah diverifikasi oleh tim kami
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Transparan</p>
                          <p className="text-xs text-muted-foreground">
                            Laporan penggunaan dana tersedia
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Update Rutin</p>
                          <p className="text-xs text-muted-foreground">
                            Penggalang dana aktif memberikan update
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
