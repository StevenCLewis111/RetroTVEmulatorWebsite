import type { Metadata } from 'next'
import { Code, Download, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getLatestRelease } from '@/lib/releases'
import { site } from '@/lib/site'

// Force Next.js to build this page as a lightning-fast static page
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
                <Button size="lg" className="h-9 shrink-0 px-3 text-sm sm:h-10 sm:px-4 sm:text-base" nativeButton={false} render={<a href={result.release.downloadUrl} />}>
                  <Download aria-hidden="true" />
                  Download for Windows
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                The latest version can&apos;t be loaded right now. You can still get it from the release folder.
              </p>
              <Button
                size="lg"
                className="self-start"
                nativeButton={false}
                render={<a href={site.releasesFolderUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <FolderOpen aria-hidden="true" />
                Open release folder
              </Button>
            </div>
          )}
        </section>

        <section className="mt-3 flex flex-col gap-1.5 sm:mt-3 sm:gap-2">
          <h2 className="font-display text-2xl sm:text-3xl">Updating</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            The app checks for a newer version each time it starts and updates itself automatically.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              className="h-8 self-start px-2 text-xs sm:h-10 sm:px-4 sm:text-sm"
              nativeButton={false}
              render={
                <a 
                  href="https://discord.gg/6vrk8tnuPn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                />
              }
            >
              Discord Link
            </Button>
            <span className="text-xs text-muted-foreground sm:text-sm">(For More Information)</span>
          </div>
        </section>

        <section className="mt-3 flex flex-col gap-1.5 sm:mt-3 sm:gap-2">
          <h2 className="font-display text-2xl sm:text-3xl">Source code</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="h-8 px-2 text-xs sm:h-10 sm:px-4 sm:text-sm"
              nativeButton={false}
              render={<a href={site.sourceCodeUrl} target="_blank" rel="noopener noreferrer" />}
            >
              <Code aria-hidden="true" />
              Open Source Code Folder
            </Button>
            <span className="text-xs text-muted-foreground sm:text-sm">Whole Project</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="h-8 px-2 text-xs sm:h-10 sm:px-4 sm:text-sm"
              nativeButton={false}
              render={<a href="https://github.com" />}
            >
              <Code aria-hidden="true" />
              Download Source Code : GitHub
            </Button>
            <span className="text-xs text-muted-foreground sm:text-sm">Missing Faster_Whisper files</span>
          </div>
        </section>
      </div>
    </div>
  )
}
