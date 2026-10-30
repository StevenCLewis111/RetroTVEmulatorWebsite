import 'server-only'
import { site } from './site'

export type Release = {
  version: string
  fileName: string
  fileId: string
  size: number | null
  sha256: string | null
  releasedAt: string | null
  downloadUrl: string
}

type DriveFile = {
  id: string
  name: string
  size?: string
  sha256Checksum?: string
  modifiedTime?: string
}

const RELEASE_EXTENSIONS = /\.(exe|zip|rar)$/i

export type ReleaseResult =
  | { ok: true; release: Release }
  | { ok: false; reason: 'missing-api-key' | 'no-release' | 'drive-error' | 'github-error' }

export async function getDriveFileByName(folderId: string, fileName: string) {
  const apiKey = process.env.GCP_API_KEY
  if (!apiKey) return { ok: false as const, reason: 'missing-api-key' as const }

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and name = '${fileName.replace(/'/g, "\\'")}' and trashed = false`,
    fields: 'files(id,name,size,sha256Checksum,modifiedTime)',
    pageSize: '10',
    key: apiKey,
  })

  try {
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return { ok: false as const, reason: 'drive-error' as const }
    const data = (await res.json()) as { files?: DriveFile[] }
    const file = data.files?.[0]
    return file ? { ok: true as const, file } : { ok: false as const, reason: 'no-release' as const }
  } catch {
    return { ok: false as const, reason: 'drive-error' as const }
  }
}

const GITHUB_REPOSITORY = 'StevenCLewis111/RetroTVEmulator'
const GITHUB_VERSION_PATTERN = /v(\d+\.\d+\.\d+)/i

type GitHubAsset = {
  id: number
  name: string
  size: number
  browser_download_url: string
  digest?: string | null
}

type GitHubRelease = {
  draft?: boolean
  assets?: GitHubAsset[]
  published_at?: string | null
  body?: string | null
}

function compareVersionText(a: string, b: string) {
  const left = a.split('.').map(Number)
  const right = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if ((left[i] ?? 0) !== (right[i] ?? 0)) return (left[i] ?? 0) - (right[i] ?? 0)
  }
  return 0
}

function githubVersion(name: string) {
  return name.match(GITHUB_VERSION_PATTERN)?.[1] ?? null
}

function githubDisplayVersion(name: string, version: string) {
  const lower = name.toLowerCase()
  if (lower.includes('alpha')) return `Alpha V${version}`
  if (lower.includes('beta')) return `Beta V${version}`
  return `V${version}`
}

export async function getLatestRelease(): Promise<ReleaseResult> {
  let releases: GitHubRelease[]
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPOSITORY}/releases?per_page=30`,
      {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'RetroTVEmulator-Website' },
        cache: 'no-store',
      },
    )
    if (!response.ok) return { ok: false, reason: 'github-error' }
    releases = (await response.json()) as GitHubRelease[]
  } catch {
    return { ok: false, reason: 'github-error' }
  }

  let selected: { asset: GitHubAsset; version: string; release: GitHubRelease } | null = null
  for (const release of releases) {
    if (release.draft) continue
    for (const asset of release.assets ?? []) {
      if (!/\.zip$/i.test(asset.name) || /source|源码|code/i.test(asset.name)) continue
      const version = githubVersion(asset.name)
      if (!version) continue
      if (!selected || compareVersionText(version, selected.version) > 0) {
        selected = { asset, version, release }
      }
    }
  }

  if (!selected) return { ok: false, reason: 'no-release' }
  const digest = selected.asset.digest?.toLowerCase() ?? null
  return {
    ok: true,
    release: {
      version: githubDisplayVersion(selected.asset.name, selected.version),
      fileName: selected.asset.name,
      fileId: String(selected.asset.id),
      size: selected.asset.size || null,
      sha256: digest?.startsWith('sha256:') ? digest.slice(7) : null,
      releasedAt: selected.release.published_at ?? null,
      downloadUrl: selected.asset.browser_download_url,
    },
  }
}

