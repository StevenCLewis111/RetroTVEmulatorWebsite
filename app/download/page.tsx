import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, FolderOpen } from 'lucide-react'
import { getLatestRelease } from '@/lib/releases'
import { site } from '@/lib/site'

// Your icon files in public/images/. Change these two names if yours differ.
const DISCORD_ICON = '/images/discord.png'
const GITHUB_ICON = '/images/github.png'

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

const modes = ['Lite', 'Standard', 'Performance'] as const

const requirements: { label: string; values: [string, string, string] }[] = [
  {
    label: 'Processor',
    values: [
      '4 cores / 4 threads, 4th-generation Intel Core i5 or equivalent',
      '6 cores / 12 threads, such as AMD Ryzen 5 3600 or Intel Core i7 (8th gen)',
      '8 cores / 16 threads or better, such as AMD Ryzen 7 5700X or Intel Core i7 (12th gen)',
    ],
  },
  { label: 'Memory', values: ['8 GB RAM', '16 GB RAM', '16 GB RAM or more'] },
  {
    label: 'Graphics',
    values: ['CPU only, or any graphics hardware', 'CPU only, or any graphics hardware', 'Graphics card required'],
  },
]

const primaryButton =
  'inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90'
const outlineButton =
  'inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground'
export default async function DownloadPage() {
  const result = await getLatestRelease()

  return (
    <div className="download-page scanlines flex flex-1 flex-col pb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-2 py-4 sm:px-4 sm:py-6">
        <h1 className="font-display text-3xl text-primary sm:text-5xl text-center underline decoration-2 underline-offset-[0.3em]">Download</h1>

        <section className="mt-4 rounded-lg border bg-card p-3.5 sm:mt-6 sm:p-7">
          {result.ok ? (
            <div className="flex flex-col gap-3.5 sm:gap-5">
              <p className="-mt-1 text-center text-sm text-muted-foreground sm:-mt-3 sm:text-base">Latest Version</p>
              <div className="mx-auto -mt-1 flex w-fit flex-col gap-3 sm:-mt-1.5 sm:gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/folder.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-8 sm:size-10 [image-rendering:pixelated]"
                />
                <p className="font-display text-2xl sm:text-3xl">{result.release.version}</p>
              </div>
              <dl className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-[auto_1fr]">
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
              </div>
              <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3">
                <a href={result.release.downloadUrl} className={primaryButton}>
                  <Download className="size-5" aria-hidden="true" />
                  Download for Windows
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5 sm:gap-5">
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
        <section className="mt-[1.125rem] flex flex-col gap-3 sm:mt-6 sm:gap-3.5" aria-labelledby="system-requirements">
          <h2 id="system-requirements" className="font-display mb-1.5 text-2xl text-primary sm:mb-2.5 sm:text-3xl text-center underline decoration-2 underline-offset-[0.3em]">
            System Requirements
          </h2>
          <div className="overflow-hidden rounded-lg border bg-card text-sm">
            <div className="relative grid gap-y-1 border-b px-4 py-3">
              <span className="font-medium text-foreground">Operating system</span>
              <span className="text-muted-foreground sm:absolute sm:inset-x-0 sm:top-3 sm:text-center">
                Windows 10 or 11 (64-bit)
              </span>
            </div>
            <div className="hidden grid-cols-[8.5rem_1fr_1fr_1fr] gap-x-5 border-b bg-muted/40 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:grid">
              <span />
              {modes.map((mode) => (
                <span key={mode}>{mode}</span>
              ))}
            </div>
            {requirements.map((row) => (
              <div
                key={row.label}
                className="grid gap-x-5 gap-y-1 border-b px-4 py-3 last:border-b-0 sm:grid-cols-[8.5rem_1fr_1fr_1fr]"
              >
                <span className="font-medium text-foreground">{row.label}</span>
                {row.values.map((value, i) => (
                  <span key={modes[i]} className="text-muted-foreground">
                    <span className="mr-1 text-xs uppercase tracking-wider text-foreground/70 sm:hidden">
                      {modes[i]}:
                    </span>
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[1.125rem] flex flex-col gap-3 sm:mt-6 sm:gap-3.5">
          <h2 className="font-display mb-1.5 text-2xl text-primary sm:mb-2.5 sm:text-3xl text-center underline decoration-2 underline-offset-[0.3em]">Updating</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            The app checks for a newer version each time it is booted or you can look for updates in the Advanced Settings.
          </p>
        </section>

        <section className="mt-[1.125rem] flex flex-col gap-3 sm:mt-6 sm:gap-3.5">
          <h2 className="font-display mb-1.5 text-2xl text-primary sm:mb-2.5 sm:text-3xl text-center underline decoration-2 underline-offset-[0.3em]">Links</h2>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButton}
            >
              <Image
                src={DISCORD_ICON}
                alt=""
                width={28}
                height={28}
                className="mr-1 object-contain"
              />
              Discord Link
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">(For More Info)</span>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <a href={site.sourceZipGithubUrl} className={outlineButton}>
              <Image
                src={GITHUB_ICON}
                alt=""
                width={20}
                height={20}
                className="mr-2 invert object-contain"
              />
              Download Source Code : GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
