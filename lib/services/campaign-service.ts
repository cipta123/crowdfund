import "reflect-metadata"
import "server-only"
import { Like } from "typeorm"
import { Campaign } from "@/lib/types"
import { getDataSource } from "@/lib/db/data-source"
// Import entities to ensure metadata is registered
import { CampaignEntity } from "@/lib/entities/campaign.entity"
import { DonationEntity } from "@/lib/entities/donation.entity"
import { CampaignUpdateEntity } from "@/lib/entities/campaign-update.entity"

function mapCampaign(entity: CampaignEntity): Campaign {
  return {
    id: entity.id,
    title: entity.title,
    slug: entity.slug,
    description: entity.description,
    story: entity.story,
    category: entity.category as Campaign["category"],
    imageUrl: entity.imageUrl,
    images: entity.images ?? undefined,
    targetAmount: entity.targetAmount,
    currentAmount: entity.currentAmount,
    donorCount: entity.donorCount,
    daysRemaining: entity.daysRemaining,
    endDate: entity.endDate.toISOString(),
    createdAt: entity.createdAt.toISOString(),
    organizer: {
      id: entity.organizer?.id ?? "",
      name: entity.organizer?.name ?? "Organisasi",
      avatarUrl: entity.organizer?.avatarUrl,
      isVerified: Boolean(entity.organizer?.isVerified),
      type: (entity.organizer?.type as "individual" | "organization") ?? "individual",
      description: entity.organizer?.description,
    },
    status: entity.status as Campaign["status"],
    isVerified: entity.isVerified,
    isUrgent: entity.isUrgent,
    updates: entity.updates?.map(mapUpdate),
    donations: entity.donations?.map(mapDonation),
  }
}

function mapDonation(entity: DonationEntity) {
  return {
    id: entity.id,
    campaignId: (entity.campaign as CampaignEntity | { id: string }).id,
    donorName: entity.donorName,
    amount: entity.amount,
    message: entity.message ?? undefined,
    isAnonymous: entity.isAnonymous,
    createdAt: entity.createdAt.toISOString(),
  }
}

function mapUpdate(entity: CampaignUpdateEntity) {
  return {
    id: entity.id,
    campaignId: (entity.campaign as CampaignEntity | { id: string }).id,
    title: entity.title,
    content: entity.content,
    imageUrl: entity.imageUrl ?? undefined,
    createdAt: entity.createdAt.toISOString(),
  }
}

export async function getAllCampaigns() {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignEntity)
  const campaigns = await repo.find({
    order: { createdAt: "DESC" },
  })
  return campaigns.map(mapCampaign)
}

export async function getFeaturedCampaigns(limit = 6) {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignEntity)
  const campaigns = await repo.find({
    order: { createdAt: "DESC" },
    take: limit,
  })
  return campaigns.map(mapCampaign)
}

export async function getUrgentCampaigns(limit = 5) {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignEntity)
  const campaigns = await repo.find({
    where: { isUrgent: true },
    order: { endDate: "ASC" },
    take: limit,
  })
  return campaigns.map(mapCampaign)
}

export async function getCampaignBySlug(slug: string) {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignEntity)
  const campaign = await repo.findOne({
    where: { slug },
  })
  return campaign ? mapCampaign(campaign) : undefined
}

export async function getDonationsByCampaignId(campaignId: string) {
  const ds = await getDataSource()
  const repo = ds.getRepository(DonationEntity)
  const donations = await repo.find({
    where: { campaign: { id: campaignId } },
    order: { createdAt: "DESC" },
    relations: ["campaign"],
  })
  return donations.map(mapDonation)
}

export async function getUpdatesByCampaignId(campaignId: string) {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignUpdateEntity)
  const updates = await repo.find({
    where: { campaign: { id: campaignId } },
    order: { createdAt: "DESC" },
    relations: ["campaign"],
  })
  return updates.map(mapUpdate)
}

export async function searchCampaigns(query: string, limit = 5) {
  const ds = await getDataSource()
  const repo = ds.getRepository(CampaignEntity)
  const campaigns = await repo.find({
    where: [
      { title: Like(`%${query}%`) },
      { description: Like(`%${query}%`) },
      { category: Like(`%${query}%`) },
    ],
    order: { createdAt: "DESC" },
    take: limit,
  })
  return campaigns.map(mapCampaign)
}

