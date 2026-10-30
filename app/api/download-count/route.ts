import { sql } from 'drizzle-orm'
import { db } from '@/lib/db'

export async function GET() {
  const result = await db.execute<{ windows_count: number }>(sql`
    SELECT windows_count FROM download_counts WHERE id = 1
  `)
  return Response.json({ count: Number(result.rows[0]?.windows_count ?? 0) })
}

export async function POST() {
  const result = await db.execute<{ windows_count: number }>(sql`
    INSERT INTO download_counts (id, windows_count)
    VALUES (1, 1)
    ON CONFLICT (id) DO UPDATE
      SET windows_count = download_counts.windows_count + 1,
          updated_at = now()
    RETURNING windows_count
  `)
  return Response.json({ count: Number(result.rows[0]?.windows_count ?? 0) })
}
