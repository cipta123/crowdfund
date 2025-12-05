import "reflect-metadata"
import { DataSource } from "typeorm"
import { OrganizerEntity } from "../entities/organizer.entity"
import { CampaignEntity } from "../entities/campaign.entity"
import { DonationEntity } from "../entities/donation.entity"
import { CampaignUpdateEntity } from "../entities/campaign-update.entity"

const entities = [
  OrganizerEntity,
  CampaignEntity,
  DonationEntity,
  CampaignUpdateEntity,
]

let dataSource: DataSource | null = null

export async function getDataSource() {
  if (dataSource?.isInitialized) {
    return dataSource
  }

  dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "crowdfund",
    entities,
    synchronize: true,
    logging: process.env.TYPEORM_LOGGING === "true",
  })

  return dataSource.initialize()
}




