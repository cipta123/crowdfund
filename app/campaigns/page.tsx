import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CampaignCard } from '@/components/campaign-card'
import { getAllCampaigns } from '@/lib/services/campaign-service'

export const dynamic = 'force-dynamic'

export default async function CampaignsPage() {
  const campaigns = await getAllCampaigns()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Semua Campaign</h1>
            <p className="text-muted-foreground">
              Temukan campaign yang ingin Anda dukung dan bantu wujudkan impian mereka
            </p>
          </div>

          {/* Filters - Placeholder for future implementation */}
          <div className="mb-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Filter: Semua Kategori | Semua Status
            </p>
          </div>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
