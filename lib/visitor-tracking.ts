import { createHash } from 'node:crypto'
import { headers } from 'next/headers'
import { db } from '@/lib/db'
import { sql } from 'drizzle-orm'

function visitorKey(ip: string, userAgent: string) {
  return createHash('sha256')
    .update(`retro-tv-emulator:${ip}:${userAgent}`)
    .digest('hex')
}

export async function recordVisitor() {
  const requestHeaders = await headers()
  const forwardedFor = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim()
  const ip = requestHeaders.get('x-real-ip')?.trim() || forwardedFor || 'unknown'
  const userAgent = requestHeaders.get('user-agent') || 'unknown'
  const key = visitorKey(ip, userAgent)

  try {
    await db.execute(sql`
      INSERT INTO site_visitors (visitor_key)
      VALUES (${key})
      ON CONFLICT (visitor_key)
      DO UPDATE SET last_seen_at = now(), visit_count = site_visitors.visit_count + 1
    `)
  } catch (error) {
    console.error('[v0] Visitor tracking failed:', error)
  }
}
