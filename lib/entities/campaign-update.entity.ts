import "reflect-metadata"
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity({ name: "campaign_updates" })
export class CampaignUpdateEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 255 })
  title!: string

  @Column({ type: "text" })
  content!: string

  @Column({ type: "varchar", length: 500, nullable: true })
  imageUrl?: string

  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date

  @ManyToOne("CampaignEntity", "updates", {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "campaignId" })
  campaign!: any
}
