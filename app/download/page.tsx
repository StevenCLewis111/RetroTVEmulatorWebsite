import type { Metadata } from 'next'
import { Code, Download, FolderOpen } from 'lucide-react'
import { getLatestRelease } from '@/lib/releases'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download the latest version of Retro TV Emulator for Windows.',
}

function formatSize(bytes: number) {
  const gb = bytes / 1024 / 1024 / 1024
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const primaryButton =
  'inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90'
const outlineButton =
  'inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground'

// Drive API direct download: skips Google's "too large to scan" page for public files.
// The key is read at build time (GitHub Actions secret) and must be restricted in Google Cloud.
const driveApiKey = process.env.GCP_API_KEY
const driveDownloadUrl = driveApiKey
  ? `https://www.googleapis.com/drive/v3/files/${site.sourceZipDriveId}?alt=media&key=${driveApiKey}`
  : site.sourceZipDriveFallbackUrl

export default async function DownloadPage() {
  const result = await getLatestRelease()

  return (
    <div className="download-page scanlines flex flex-1 flex-col pb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-2 py-0 sm:px-4 sm:py-2">
        <h1 className="font-display text-3xl text-primary sm:text-5xl">Download</h1>

        <section className="mt-3 rounded-lg border bg-card p-3 sm:mt-3 sm:p-6">
          {result.ok ? (
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Latest version</p>
                <p className="font-display text-4xl">{result.release.version}</p>
              </div>
              <dl className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-[auto_1fr]">
                <dt className="text-muted-foreground">File</dt>
                <dd className="min-w-0 [overflow-wrap:anywhere]">{result.release.fileName}</dd>
                {result.release.size !== null && (
                  <>
                    <dt className="text-muted-foreground">Size</dt>
                    <dd>{formatSize(result.release.size)}</dd>
                  </>
                )}
                {result.release.releasedAt && (
                  <>
                    <dt className="text-muted-foreground">Released</dt>
                    <dd>{formatDate(result.release.releasedAt)}</dd>
                  </>
                )}
                <dt className="text-muted-foreground">Platform</dt>
                <dd>Windows 10 + 11</dd>
              </dl>
              <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-3">
                <a href={result.release.downloadUrl} className={primaryButton}>
                  <Download className="size-5" aria-hidden="true" />
                  Download for Windows
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                The latest version can&apos;t be loaded right now. You can still get it from the releases page.
              </p>
              <a href={site.githubReleasesUrl} className={`${primaryButton} self-start`}>
                <FolderOpen className="size-5" aria-hidden="true" />
                Open releases page
              </a>
            </div>
          )}
        </section>

        <section className="mt-3 flex flex-col gap-1.5 sm:mt-3 sm:gap-2">
          <h2 className="font-display text-2xl sm:text-3xl">Updating</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            The app checks for a newer version each time it starts and updates itself automatically.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButton}
            >
              Discord Link
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">(For More Information)</span>
          </div>
        </section>

        <section className="mt-3 flex flex-col gap-1.5 sm:mt-3 sm:gap-2">
          <h2 className="font-display text-2xl sm:text-3xl">Source code</h2>
          <div className="flex flex-wrap items-center gap-3">
            <a href={driveDownloadUrl} className={outlineButton}>
              <Code className="mr-2 size-4" aria-hidden="true" />
              Download Source Code : Google Drive
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">Whole Project</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={site.sourceZipGithubUrl} className={outlineButton}>
              <Code className="mr-2 size-4" aria-hidden="true" />
              Download Source Code : GitHub
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">Missing Faster_Whisper files</span>
          </div>
        </section>
      </div>
    </div>
  )
}
