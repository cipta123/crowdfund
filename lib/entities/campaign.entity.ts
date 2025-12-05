import "reflect-metadata"
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm"
import { bigintNumberTransformer } from "./transformers"

@Entity({ name: "campaigns" })
@Unique(["slug"])
export class CampaignEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 255 })
  title!: string

  @Column({ type: "varchar", length: 255 })
  slug!: string

  @Column({ type: "text" })
  description!: string

  @Column({ type: "longtext" })
  story!: string

  @Column({ type: "varchar", length: 64 })
  category!: string

  @Column({ type: "varchar", length: 500 })
  imageUrl!: string

  @Column({ type: "json", nullable: true })
  images?: string[]

  @Column({ type: "bigint", transformer: bigintNumberTransformer })
  targetAmount!: number

  @Column({ type: "bigint", transformer: bigintNumberTransformer })
  currentAmount!: number

  @Column({ type: "int", default: 0 })
  donorCount!: number

  @Column({ type: "int", default: 0 })
  daysRemaining!: number

  @Column({ type: "datetime" })
  endDate!: Date

  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date

  @Column({ type: "varchar", length: 32, default: "active" })
  status!: string

  @Column({ type: "boolean", default: false })
  isVerified!: boolean

  @Column({ type: "boolean", default: false })
  isUrgent!: boolean

  @ManyToOne("OrganizerEntity", "campaigns", {
    eager: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "organizerId" })
  organizer!: any

  @OneToMany("DonationEntity", "campaign")
  donations!: any[]

  @OneToMany("CampaignUpdateEntity", "campaign")
  updates!: any[]
}
