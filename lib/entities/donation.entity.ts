import "reflect-metadata"
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { bigintNumberTransformer } from "./transformers"

@Entity({ name: "donations" })
export class DonationEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 255 })
  donorName!: string

  @Column({ type: "bigint", transformer: bigintNumberTransformer })
  amount!: number

  @Column({ type: "text", nullable: true })
  message?: string

  @Column({ type: "boolean", default: false })
  isAnonymous!: boolean

  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date

  @ManyToOne("CampaignEntity", "donations", {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "campaignId" })
  campaign!: any
}
