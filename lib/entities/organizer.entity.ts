import "reflect-metadata"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "organizers" })
export class OrganizerEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 255 })
  name!: string

  @Column({ type: "varchar", length: 500, nullable: true })
  avatarUrl?: string

  @Column({ type: "boolean", default: false })
  isVerified!: boolean

  @Column({ type: "varchar", length: 32, default: "individual" })
  type!: "individual" | "organization"

  @Column({ type: "text", nullable: true })
  description?: string

  @OneToMany("CampaignEntity", "organizer")
  campaigns!: any[]
}
