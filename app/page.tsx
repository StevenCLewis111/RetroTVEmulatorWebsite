import type { Metadata } from 'next'
import Image from 'next/image'
import { site } from '@/lib/site'
import { getHomeImage } from '@/lib/home-image'

// Force this page to compile as a 100% static file for GitHub Pages
export const dynamic = 'force-static'

const description = 'Retro TV Emulator — Free, open-source Retro TV Emulator for Windows.'

// Link-preview (Facebook, X, Discord, etc.) image follows the same holiday rules as the page.
// Page-level openGraph/twitter replace the layout's objects entirely, so shared fields are repeated.
export function generateMetadata(): Metadata {
  const image = getHomeImage()

  return {
    openGraph: {
      type: 'website',
      siteName: 'Retro TV Emulator',
      title: 'Retro TV Emulator',
      description,
      url: 'https://retrotvemulator.com/',
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Retro TV Emulator',
      description,
      images: [image.src],
    },
  }
}

export default function HomePage() {
  const homeImage = getHomeImage()

  return (
    <>
      <section className="home-page scanlines flex h-0 min-h-0 flex-1 flex-col justify-center overflow-hidden py-6 md:py-8">
        <div className="mx-auto flex h-0 min-h-0 w-full max-w-7xl flex-1 flex-col items-center justify-center gap-0 px-4 text-center md:px-6">
          <h1 className="sr-only">{site.name}</h1>
          <div className="@container relative mx-auto flex w-[min(100%,calc((100dvh-220px)*1.7778))] flex-col overflow-hidden rounded-lg border bg-card shadow-lg">
            <div className="aspect-video w-full">
              <Image
                src={homeImage.src}
                alt={homeImage.alt}
                width={homeImage.width}
                height={homeImage.height}
                priority
                sizes="(min-width: 1024px) 992px, 100vw"
                className="h-full w-full object-fill"
              />
            </div>
            {/* The words sit on the picture only when the picture is wide enough for them to stay inside its bottom 25%, and they shrink with the picture; narrower than that they go in the black box under it. */}
            <div className="bg-black/85 px-4 pb-4 pt-3 @2xl:absolute @2xl:inset-x-0 @2xl:bottom-0 @2xl:max-h-[25%] @2xl:overflow-hidden @2xl:bg-transparent @2xl:bg-gradient-to-t @2xl:from-black/85 @2xl:via-black/50 @2xl:to-transparent @2xl:px-[2cqw] @2xl:pb-[1cqw] @2xl:pt-[3cqw]">
              <p className="mx-auto text-pretty text-base text-white @2xl:text-[clamp(11px,1.9cqw,22px)] @2xl:leading-snug">
                Free to download, open-source Retro TV Emulator for Windows.
              </p>
              <p className="mx-auto mt-2 text-pretty text-sm text-white @2xl:mt-[0.4cqw] @2xl:text-[clamp(10px,1.6cqw,19px)] @2xl:leading-snug">
                TV Stations / Visualizers / TV Guide / Games / Media Player / DVD Player
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
