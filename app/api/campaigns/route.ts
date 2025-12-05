import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const { getFeaturedCampaigns, searchCampaigns } = await import(
    "@/lib/services/campaign-service"
  )

  const { searchParams } = new URL(request.url)
  const limit = Number(searchParams.get("limit") ?? "5")
  const safeLimit = Number.isNaN(limit) ? 5 : Math.min(Math.max(limit, 1), 20)
  const query = searchParams.get("q")?.trim()

  const campaigns = query
    ? await searchCampaigns(query, safeLimit)
    : await getFeaturedCampaigns(safeLimit)

  const payload = campaigns.map((campaign) => ({
    id: campaign.id,
    title: campaign.title,
    slug: campaign.slug,
    imageUrl: campaign.imageUrl,
    organizer: {
      name: campaign.organizer.name,
    },
    isVerified: campaign.isVerified,
  }))

  return NextResponse.json(payload)
}

