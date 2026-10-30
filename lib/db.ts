import 'server-only'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const globalForDb = globalThis as unknown as { downloadPool?: Pool }

const databaseUrl = new URL(process.env.DATABASE_URL!)
databaseUrl.searchParams.set('sslmode', 'verify-full')

const pool = globalForDb.downloadPool ?? new Pool({ connectionString: databaseUrl.toString() })

if (process.env.NODE_ENV !== 'production') globalForDb.downloadPool = pool

export const db = drizzle(pool)
