import "reflect-metadata"
import path from "path"
import { config as loadEnv } from "dotenv"
import { getDataSource } from "../lib/db/data-source-cli"
import { OrganizerEntity } from "../lib/entities/organizer.entity"
import { CampaignEntity } from "../lib/entities/campaign.entity"
import { DonationEntity } from "../lib/entities/donation.entity"
import { CampaignUpdateEntity } from "../lib/entities/campaign-update.entity"

loadEnv({ path: path.resolve(process.cwd(), ".env.local") })
loadEnv({ path: path.resolve(process.cwd(), ".env") })

const DAY = 24 * 60 * 60 * 1000

type CampaignSeed = Omit<
  CampaignEntity,
  | "id"
  | "organizer"
  | "donations"
  | "updates"
  | "createdAt"
  | "endDate"
> & {
  organizer: Omit<OrganizerEntity, "id" | "campaigns">
  createdDaysAgo?: number
}

const campaignSeeds: CampaignSeed[] = [
  {
    title: "Bantu Ibu Siti Operasi Jantung",
    slug: "bantu-ibu-siti-operasi-jantung",
    description:
      "Ibu Siti membutuhkan bantuan untuk operasi jantung yang mendesak. Mari kita bantu beliau untuk mendapatkan kesempatan hidup yang lebih baik.",
    story: `Assalamualaikum warahmatullahi wabarakatuh,

Perkenalkan, saya Budi, anak dari Ibu Siti yang saat ini sedang membutuhkan bantuan untuk operasi jantung. Ibu saya didiagnosis mengalami penyakit jantung koroner yang membutuhkan operasi bypass segera.

Kondisi ibu semakin memburuk dalam beberapa bulan terakhir. Biaya operasi mencapai Rp 150.000.000. Sebagai keluarga sederhana, kami sudah berusaha mengumpulkan dana namun masih jauh dari cukup.`,
    category: "kesehatan",
    imageUrl: "https://picsum.photos/seed/health1/800/600",
    images: [
      "https://picsum.photos/seed/health1/800/600",
      "https://picsum.photos/seed/health2/800/600",
    ],
    targetAmount: 150_000_000,
    currentAmount: 87_500_000,
    donorCount: 1247,
    daysRemaining: 15,
    createdDaysAgo: 30,
    status: "active",
    isVerified: true,
    isUrgent: true,
    organizer: {
      name: "Budi Santoso",
      avatarUrl: "https://ui-avatars.com/api/?name=Budi+Santoso&background=22c55e&color=fff&size=100",
      isVerified: true,
      type: "individual",
      description: undefined,
    },
  },
  {
    title: "Bangun Sekolah untuk Anak-anak Desa Terpencil",
    slug: "bangun-sekolah-anak-desa-terpencil",
    description:
      "Mari bersama membangun sekolah untuk anak-anak di desa terpencil agar mereka bisa mendapatkan pendidikan yang layak.",
    story: `Yayasan Pendidikan Nusantara mengajak Anda untuk berpartisipasi dalam pembangunan sekolah di Desa Sukamakmur, Papua.`,
    category: "pendidikan",
    imageUrl: "https://picsum.photos/seed/school1/800/600",
    images: [
      "https://picsum.photos/seed/school1/800/600",
      "https://picsum.photos/seed/school2/800/600",
    ],
    targetAmount: 500_000_000,
    currentAmount: 325_000_000,
    donorCount: 2156,
    daysRemaining: 45,
    createdDaysAgo: 20,
    status: "active",
    isVerified: true,
    isUrgent: false,
    organizer: {
      name: "Yayasan Pendidikan Nusantara",
      avatarUrl: "https://ui-avatars.com/api/?name=Yayasan+Pendidikan&background=3b82f6&color=fff&size=100",
      isVerified: true,
      type: "organization",
      description: "Yayasan yang fokus pada pendidikan anak-anak di daerah terpencil",
    },
  },
  {
    title: "Bantuan Darurat Korban Banjir Bandang",
    slug: "bantuan-korban-banjir-bandang",
    description:
      "Ribuan keluarga kehilangan rumah dan harta benda akibat banjir bandang. Mari kita bantu mereka untuk bangkit kembali.",
    story: `Banjir bandang yang melanda Kabupaten Sukabumi telah menyebabkan ribuan keluarga kehilangan tempat tinggal.`,
    category: "bencana-alam",
    imageUrl: "https://picsum.photos/seed/flood1/800/600",
    targetAmount: 300_000_000,
    currentAmount: 245_000_000,
    donorCount: 3421,
    daysRemaining: 20,
    createdDaysAgo: 5,
    status: "active",
    isVerified: true,
    isUrgent: true,
    organizer: {
      name: "Tim Relawan Bencana Indonesia",
      avatarUrl: "https://ui-avatars.com/api/?name=Tim+Relawan&background=ef4444&color=fff&size=100",
      isVerified: true,
      type: "organization",
      description: undefined,
    },
  },
  {
    title: "Operasi Katarak untuk 100 Lansia",
    slug: "operasi-katarak-100-lansia",
    description:
      "Program operasi katarak gratis untuk lansia kurang mampu agar mereka bisa melihat kembali dengan jelas.",
    story: `Yayasan Mata Sehat Indonesia mengadakan program operasi katarak gratis untuk 100 lansia kurang mampu.`,
    category: "kesehatan",
    imageUrl: "https://picsum.photos/seed/cataract1/800/600",
    targetAmount: 500_000_000,
    currentAmount: 125_000_000,
    donorCount: 856,
    daysRemaining: 60,
    createdDaysAgo: 10,
    status: "active",
    isVerified: true,
    isUrgent: false,
    organizer: {
      name: "Yayasan Mata Sehat Indonesia",
      avatarUrl: "https://ui-avatars.com/api/?name=Yayasan+Mata&background=f59e0b&color=fff&size=100",
      isVerified: true,
      type: "organization",
      description: undefined,
    },
  },
  {
    title: "Beasiswa untuk Anak Yatim Berprestasi",
    slug: "beasiswa-anak-yatim-berprestasi",
    description:
      "Berikan kesempatan anak yatim berprestasi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.",
    story: `Program beasiswa untuk 50 anak yatim berprestasi yang ingin melanjutkan pendidikan ke SMA/SMK.`,
    category: "pendidikan",
    imageUrl: "https://picsum.photos/seed/scholarship1/800/600",
    targetAmount: 500_000_000,
    currentAmount: 180_000_000,
    donorCount: 1024,
    daysRemaining: 30,
    createdDaysAgo: 15,
    status: "active",
    isVerified: true,
    isUrgent: false,
    organizer: {
      name: "Yayasan Peduli Anak Yatim",
      avatarUrl: "https://ui-avatars.com/api/?name=Yayasan+Anak&background=8b5cf6&color=fff&size=100",
      isVerified: true,
      type: "organization",
      description: undefined,
    },
  },
  {
    title: "Pelestarian Hutan Mangrove",
    slug: "pelestarian-hutan-mangrove",
    description:
      "Program penanaman dan pelestarian hutan mangrove untuk melindungi pesisir dan ekosistem laut.",
    story: `Mari bergabung dalam program pelestarian hutan mangrove di pesisir Jawa Timur!`,
    category: "lingkungan",
    imageUrl: "https://picsum.photos/seed/mangrove1/800/600",
    targetAmount: 2_500_000_000,
    currentAmount: 450_000_000,
    donorCount: 2847,
    daysRemaining: 90,
    createdDaysAgo: 25,
    status: "active",
    isVerified: true,
    isUrgent: false,
    organizer: {
      name: "Yayasan Hijau Indonesia",
      avatarUrl: "https://ui-avatars.com/api/?name=Yayasan+Hijau&background=10b981&color=fff&size=100",
      isVerified: true,
      type: "organization",
      description: undefined,
    },
  },
]

const donationSeeds = [
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    donorName: "Hamba Allah",
    amount: 500_000,
    message: "Semoga Ibu Siti cepat sembuh. Aamiin.",
    isAnonymous: true,
    hoursAgo: 2,
  },
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    donorName: "Ahmad Rizki",
    amount: 1_000_000,
    message: "Semoga operasinya lancar dan ibu cepat pulih",
    isAnonymous: false,
    hoursAgo: 5,
  },
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    donorName: "Siti Nurhaliza",
    amount: 250_000,
    message: "Ikut membantu, semoga berkah",
    isAnonymous: false,
    hoursAgo: 8,
  },
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    donorName: "Orang Baik",
    amount: 2_000_000,
    isAnonymous: true,
    hoursAgo: 12,
  },
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    donorName: "Budi Santoso",
    amount: 500_000,
    message: "Semangat! Semoga lekas sembuh",
    isAnonymous: false,
    hoursAgo: 24,
  },
]

const updateSeeds = [
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    title: "Update Kondisi Ibu Siti",
    content:
      "Alhamdulillah, kondisi ibu sudah semakin membaik. Dokter sudah menjadwalkan operasi untuk minggu depan. Terima kasih untuk semua yang sudah membantu!",
    daysAgo: 3,
  },
  {
    slug: "bantu-ibu-siti-operasi-jantung",
    title: "Terima Kasih Para Donatur",
    content:
      "Kami sekeluarga mengucapkan terima kasih yang sebesar-besarnya kepada semua donatur yang sudah membantu. Dana yang terkumpul sudah mencapai 58% dari target. Mari kita terus berjuang bersama!",
    imageUrl: "https://picsum.photos/seed/update1/800/600",
    daysAgo: 7,
  },
]

async function main() {
  const ds = await getDataSource()
  const campaignRepo = ds.getRepository(CampaignEntity)
  const organizerRepo = ds.getRepository(OrganizerEntity)
  const donationRepo = ds.getRepository(DonationEntity)
  const updateRepo = ds.getRepository(CampaignUpdateEntity)

  const campaignCount = await campaignRepo.count()
  if (campaignCount > 0) {
    console.log("Campaign table already has data. Skipping seed.")
    process.exit(0)
  }

  const organizerCache = new Map<string, OrganizerEntity>()

  for (const seed of campaignSeeds) {
    let organizer = organizerCache.get(seed.organizer.name)
    if (!organizer) {
      organizer = organizerRepo.create(seed.organizer)
      organizer = await organizerRepo.save(organizer)
      organizerCache.set(seed.organizer.name, organizer)
    }

    const campaign = campaignRepo.create({
      title: seed.title,
      slug: seed.slug,
      description: seed.description,
      story: seed.story,
      category: seed.category,
      imageUrl: seed.imageUrl,
      images: seed.images,
      targetAmount: seed.targetAmount,
      currentAmount: seed.currentAmount,
      donorCount: seed.donorCount,
      daysRemaining: seed.daysRemaining,
      endDate: new Date(Date.now() + seed.daysRemaining * DAY),
      createdAt: seed.createdDaysAgo
        ? new Date(Date.now() - seed.createdDaysAgo * DAY)
        : new Date(),
      status: seed.status,
      isVerified: seed.isVerified,
      isUrgent: seed.isUrgent,
      organizer,
    })

    const savedCampaign = await campaignRepo.save(campaign)

    const donations = donationSeeds.filter((donation) => donation.slug === seed.slug)
    for (const donationSeed of donations) {
      const donation = donationRepo.create({
        donorName: donationSeed.donorName,
        amount: donationSeed.amount,
        message: donationSeed.message,
        isAnonymous: donationSeed.isAnonymous,
        createdAt: new Date(Date.now() - donationSeed.hoursAgo * 60 * 60 * 1000),
        campaign: savedCampaign,
      })
      await donationRepo.save(donation)
    }

    const updates = updateSeeds.filter((update) => update.slug === seed.slug)
    for (const updateSeed of updates) {
      const update = updateRepo.create({
        title: updateSeed.title,
        content: updateSeed.content,
        imageUrl: updateSeed.imageUrl,
        createdAt: new Date(Date.now() - updateSeed.daysAgo * DAY),
        campaign: savedCampaign,
      })
      await updateRepo.save(update)
    }
  }

  console.log("Database seed complete ✅")
  process.exit(0)
}

main().catch((error) => {
  console.error("Failed to seed database", error)
  process.exit(1)
})

