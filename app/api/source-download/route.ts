import { site } from '@/lib/site'
import { getDriveFileByName } from '@/lib/releases'

export async function GET() {
  const result = await getDriveFileByName(site.sourceCodeFolderId, 'RetroTVEmulator Source Code.zip')

  if (!result.ok) {
    return Response.json({ error: result.reason }, { status: result.reason === 'no-release' ? 404 : 503 })
  }

  const apiKey = process.env.GCP_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'missing-api-key' }, { status: 503 })
  }

  const driveResponse = await fetch(
    `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(result.file.id)}?alt=media&key=${encodeURIComponent(apiKey)}`,
  )

  if (!driveResponse.ok || !driveResponse.body) {
    return Response.json({ error: 'drive-error' }, { status: 503 })
  }

  return new Response(driveResponse.body, {
    headers: {
'Content-Disposition': 'attachment; filename="RetroTVEmulator Source Code.zip"',
    'Content-Type': 'application/zip',
      ...(driveResponse.headers.get('Content-Length')
        ? { 'Content-Length': driveResponse.headers.get('Content-Length')! }
        : {}),
    },
  })
}
