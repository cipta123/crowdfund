import "reflect-metadata"
import "server-only"
import { DataSource } from "typeorm"

// Import entities directly to ensure decorators are executed and metadata is registered
// This must be done at the top level, not inside functions
// CRITICAL: These imports must happen before any DataSource is created
import { OrganizerEntity } from "@/lib/entities/organizer.entity"
import { CampaignEntity } from "@/lib/entities/campaign.entity"
import { DonationEntity } from "@/lib/entities/donation.entity"
import { CampaignUpdateEntity } from "@/lib/entities/campaign-update.entity"

declare global {
  // eslint-disable-next-line no-var
  var _appDataSource: DataSource | undefined
  // eslint-disable-next-line no-var
  var _dsInitPromise: Promise<DataSource> | undefined
}

// Force entity classes to be evaluated (this ensures decorators run)
const ENTITIES = [
  OrganizerEntity,
  CampaignEntity,
  DonationEntity,
  CampaignUpdateEntity,
] as const

function createDataSource() {
  return new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "crowdfund",
    entities: [...ENTITIES],
    synchronize: false,
    logging: process.env.TYPEORM_LOGGING === "true",
  })
}

function hasEntityMetadata(ds: DataSource, entityClass: Function): boolean {
  try {
    ds.getMetadata(entityClass)
    return true
  } catch {
    return false
  }
}

async function initializeDataSource(): Promise<DataSource> {
  // Destroy old connection if exists
  if (globalThis._appDataSource) {
    try {
      if (globalThis._appDataSource.isInitialized) {
        await globalThis._appDataSource.destroy()
      }
    } catch (e) {
      // ignore
    }
    globalThis._appDataSource = undefined
  }

  // Create fresh connection
  const ds = createDataSource()
  await ds.initialize()
  
  // Verify all entities have metadata
  for (const entityClass of ENTITIES) {
    if (!hasEntityMetadata(ds, entityClass)) {
      throw new Error(`Metadata for ${entityClass.name} not found after initialization`)
    }
  }
  
  globalThis._appDataSource = ds
  return ds
}

export async function getDataSource(): Promise<DataSource> {
  // Force evaluation of entity classes to ensure decorators run
  void ENTITIES
  
  // Check if we have a valid initialized connection with metadata
  if (globalThis._appDataSource?.isInitialized) {
    // Verify metadata is still valid (can be lost during hot reload)
    const hasAllMetadata = ENTITIES.every(e => hasEntityMetadata(globalThis._appDataSource!, e))
    if (hasAllMetadata) {
      return globalThis._appDataSource
    }
    // Metadata lost, need to reinitialize
    console.warn("Entity metadata lost, reinitializing DataSource...")
  }
  
  // Use singleton promise to prevent multiple simultaneous initializations
  if (!globalThis._dsInitPromise) {
    globalThis._dsInitPromise = initializeDataSource()
      .catch((error) => {
        console.error("Failed to initialize data source:", error)
        globalThis._dsInitPromise = undefined
        throw error
      })
      .finally(() => {
        // Clear promise after successful init to allow reinit on next hot reload
        globalThis._dsInitPromise = undefined
      })
  }
  
  return globalThis._dsInitPromise
}

