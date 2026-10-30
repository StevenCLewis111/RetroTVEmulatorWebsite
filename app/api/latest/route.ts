import { getLatestRelease } from '@/lib/releases'

export async function GET(request: Request) {
  const result = await getLatestRelease()

  if (!result.ok) {
    return Response.json(
      { error: result.reason },
      { status: result.reason === 'no-release' ? 404 : 503 },
    )
  }

  const { release } = result
  return Response.json(
    {
      version: release.version,
      fileName: release.fileName,
      size: release.size,
      sha256: release.sha256,
      releasedAt: release.releasedAt,
      url: new URL('/api/download', request.url).toString(),
      downloadUrl: release.downloadUrl,
    },
    { headers: { 'Cache-Control': 'public, max-age=60, s-maxage=300' } },
  )
}
