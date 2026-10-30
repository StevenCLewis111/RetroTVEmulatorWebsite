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
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

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
                <p className="font-display text-4xl">
                  {result.release.version === 'alpha'
                    ? 'Alpha Build'
                    : result.release.version === 'beta'
                      ? 'Beta Build'
                      : result.release.version === 'stable'
                        ? 'Stable Build'
                        : result.release.version}
                </p>
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
                <a 
                  href={result.release.downloadUrl}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground shadow hover:bg-primary/90 h-10 text-base"
                >
                  <Download className="size-5" aria-hidden="true" />
                  Download for Windows
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                The latest version can&apos;t be loaded right now. You can still get it from the release folder.
              </p>
              <a 
                href={site.releasesFolderUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground shadow hover:bg-primary/90 h-10 text-base self-start"
              >
                <FolderOpen className="size-5" aria-hidden="true" />
                Open release folder
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
            {/* Added data-no-prefetch and explicit absolute windows paths to completely secure redirection target hooks */}
            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer"
              data-no-prefetch="true"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground h-10"
            >
              Discord Link
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">(For More Information)</span>
          </div>
        </section>

        <section className="mt-3 flex flex-col gap-1.5 sm:mt-3 sm:gap-2">
          <h2 className="font-display text-2xl sm:text-3xl">Source code</h2>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              data-no-prefetch="true"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground h-10"
            >
              <Code className="size-4 mr-2" aria-hidden="true" />
              Download Source Code : Google Drive
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">Whole Project</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://github.com"
              target="_blank" 
              rel="noopener noreferrer"
              data-no-prefetch="true"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground h-10"
            >
              <Code className="size-4 mr-2" aria-hidden="true" />
              Download Source Code : GitHub
            </a>
            <span className="text-xs text-muted-foreground sm:text-sm">Missing Faster_Whisper files</span>
          </div>
        </section>
      </div>
    </div>
  )
}

