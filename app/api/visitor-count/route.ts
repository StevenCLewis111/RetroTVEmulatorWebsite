import { db } from '@/lib/db'
import { sql } from 'drizzle-orm'

export async function GET() {
  const result = await db.execute<{ visitors: number }>(sql`
    SELECT COUNT(*)::int AS visitors FROM site_visitors
  `)

  return Response.json({ visitors: Number(result.rows[0]?.visitors ?? 0) })
}
