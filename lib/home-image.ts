export type HomeImage = {
  src: string
  alt: string
  width: number
  height: number
}

const size = { width: 2048, height: 1152 }

const defaultImage: HomeImage = {
  src: '/images/default.png',
  alt: 'Retro TV Emulator scene with a glowing vintage CRT television, classic game boxes, and a retro game console',
  ...size,
}

const halloweenImage: HomeImage = {
  src: '/images/halloween.png',
  alt: 'Halloween Retro TV Emulator scene with a glowing vintage CRT television, pumpkins, cobwebs, candles, a skull, and Halloween posters',
  ...size,
}

const thanksgivingImage: HomeImage = {
  src: '/images/thanksgiving.png',
  alt: 'Thanksgiving Retro TV Emulator scene with a glowing vintage CRT television, autumn leaves, pumpkins, candles, and a turkey sign',
  ...size,
}

const christmasImage: HomeImage = {
  src: '/images/christmas.png',
  alt: 'Christmas Retro TV Emulator scene with a glowing vintage CRT television, holiday lights, Santa, snowmen, and gifts',
  ...size,
}

function getFourthThursday(year: number) {
  const firstDay = new Date(Date.UTC(year, 10, 1)).getUTCDay()
  const firstThursday = 1 + ((4 - firstDay + 7) % 7)
  return firstThursday + 21
}

export function getHomeImage(): HomeImage {
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
