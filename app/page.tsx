import Image from 'next/image'
import { site } from '@/lib/site'

export const dynamic = 'force-dynamic'

const defaultImage = {
  src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-De2blMa8SxFGulScwxYoM3kywHZT7Z.png',
  alt: 'Retro TV Emulator scene with a glowing vintage CRT television, classic game boxes, and a retro game console',
}

const halloweenImage = {
  src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-pmcK1kAZUmnJIK3dATOOBc9Kf5bKbO.png',
  alt: 'Halloween Retro TV Emulator scene with a glowing vintage CRT television, pumpkins, cobwebs, candles, a skull, and Halloween posters',
}

const thanksgivingImage = {
  src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-fpiNJfMExnahfjuKKhBTjHF5Qqr4F0.png',
  alt: 'Thanksgiving Retro TV Emulator scene with a glowing vintage CRT television, autumn leaves, pumpkins, candles, and a turkey sign',
}

const christmasImage = {
  src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-KSCAYZERsrN74wu1YEhqsnt82kWovj.png',
  alt: 'Christmas Retro TV Emulator scene with a glowing vintage CRT television, holiday lights, Santa, snowmen, and gifts',
}

function getFourthThursday(year: number) {
  const firstDay = new Date(Date.UTC(year, 10, 1)).getUTCDay()
  const firstThursday = 1 + ((4 - firstDay + 7) % 7)
  return firstThursday + 21
}

function getHomeImage() {
  const now = new Date()
  const year = now.getUTCFullYear()
  const currentTime = now.getTime()
  const halloweenModeEnabled = true
  const halloweenStart = Date.UTC(year, 9, 29)
  const halloweenEnd = Date.UTC(year, 10, 1)
  const thanksgivingDay = getFourthThursday(year)
  const thanksgivingStart = Date.UTC(year, 10, thanksgivingDay - 3)
  const thanksgivingEnd = Date.UTC(year, 10, thanksgivingDay + 1)
  const christmasStart = Date.UTC(year, 11, 23)
  const christmasEnd = Date.UTC(year, 11, 26)

  if (halloweenModeEnabled && currentTime >= halloweenStart && currentTime < halloweenEnd) {
    return halloweenImage
  }

  if (currentTime >= thanksgivingStart && currentTime < thanksgivingEnd) {
    return thanksgivingImage
  }

  return currentTime >= christmasStart && currentTime < christmasEnd
    ? christmasImage
    : defaultImage
}

export default function HomePage() {
  const homeImage = getHomeImage()

  return (
    <>
      <section className="home-page scanlines flex h-0 min-h-0 flex-1 flex-col justify-center overflow-hidden py-6 md:py-8">
        <div className="mx-auto flex h-0 min-h-0 w-full max-w-7xl flex-1 flex-col items-center justify-center gap-0 px-4 text-center md:px-6">
          <h1 className="sr-only">{site.name}</h1>
          <div className="relative mx-auto flex w-[min(100%,calc((100dvh-220px)*1.7778))] flex-col overflow-hidden rounded-lg border bg-card shadow-lg">
            <div className="aspect-video w-full">
              <Image
                src={homeImage.src}
                alt={homeImage.alt}
                width={2048}
                height={1152}
                priority
                sizes="(min-width: 1024px) 992px, 100vw"
                className="h-full w-full bg-black object-contain"
              />
            </div>
            <div className="bg-black/85 px-4 pb-4 pt-3 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:bg-gradient-to-t md:from-black/85 md:via-black/50 md:to-transparent md:pt-12">
              <p className="relative top-1 mx-auto max-w-xl text-base text-white text-pretty md:text-lg">
                Free to download, open-source Retro TV Emulator for Windows.
              </p>
              <p className="mx-auto mt-2 max-w-4xl text-sm text-white text-pretty md:text-base">
                TV Stations / Visualizers / TV Guide / Games / Media Player / DVD Player
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
