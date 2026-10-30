import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, VT323 } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-vt323' })

export const metadata: Metadata = {
  metadataBase: new URL('https://retrotvemulator.com'),
  title: {
    default: 'Retro TV Emulator',
    template: '%s | Retro TV Emulator',
  },
  description: 'Retro TV Emulator — Free, open-source Retro TV Emulator for Windows.',
  openGraph: {
    type: 'website',
    siteName: 'Retro TV Emulator',
    title: 'Retro TV Emulator',
    description: 'Retro TV Emulator — Free, open-source Retro TV Emulator for Windows.',
    url: 'https://retrotvemulator.com/',
    images: [
      {
        url: '/images/retro-tv-loading.jpg',
        width: 2560,
        height: 1440,
        alt: 'Retro TV Emulator boot screen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retro TV Emulator',
    description: 'Retro TV Emulator — Free, open-source Retro TV Emulator for Windows.',
    images: ['/images/retro-tv-loading.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/images/icon.png',
    apple: '/images/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#16181d',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${vt323.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <main className="flex min-h-0 w-full flex-1 flex-col">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
