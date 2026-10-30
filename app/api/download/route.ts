import { sql } from 'drizzle-orm'
import { db } from '@/lib/db'
import { getLatestRelease } from '@/lib/releases'
export async function GET(request: Request) {
  const result = await getLatestRelease()

  if (!result.ok) {
    return Response.json({ error: result.reason }, { status: 503 })
  }

  const githubResponse = await fetch(result.release.downloadUrl, {
    headers: { Accept: 'application/octet-stream', 'User-Agent': 'RetroTVEmulator-Website' },
  })

  if (!githubResponse.ok || !githubResponse.body) {
    return Response.json({ error: 'github-error' }, { status: 503 })
  }

  await db.execute(sql`
    INSERT INTO download_counts (id, windows_count)
    VALUES (1, 1)
    ON CONFLICT (id) DO UPDATE
      SET windows_count = download_counts.windows_count + 1,
          updated_at = now()
  `)

  return new Response(githubResponse.body, {
    headers: {
      'Content-Disposition': `attachment; filename="${result.release.fileName}"`,
      'Content-Type': 'application/octet-stream',
      ...(result.release.size
        ? { 'Content-Length': String(result.release.size) }
        : githubResponse.headers.get('Content-Length')
          ? { 'Content-Length': githubResponse.headers.get('Content-Length')! }
          : {}),
    },
  })
}
