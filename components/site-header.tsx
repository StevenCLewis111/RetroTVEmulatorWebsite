'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="relative z-40 shrink-0 border-b bg-background/90 backdrop-blur md:sticky md:top-0">
      <div className="mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 px-1.5 py-2 sm:gap-2 sm:px-3 md:h-20 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:px-4 md:py-0">
        <div className="pointer-events-none relative col-start-2 row-start-1 h-10 min-w-0 w-full md:h-16 md:min-w-[24rem] md:max-w-[32rem]">
          <Image
            src="/images/logo-text.png"
            alt={site.name}
            fill
            sizes="(min-width: 1280px) 32rem, (min-width: 768px) 24rem, 16rem"
            priority
            className="object-contain"
          />
        </div>
        <Link
          href="/"
          aria-label="Home"
          aria-current={pathname === '/' ? 'page' : undefined}
          className="flex min-w-0 shrink-0 items-center gap-1 justify-self-start rounded-md px-1 py-1.5 transition-colors hover:bg-accent sm:gap-2 sm:px-2 md:col-start-1 md:row-start-1"
        >
          <Image src="/images/icon.png" alt="" width={40} height={40} className="size-8 rounded-md sm:size-10" />
          <span className={cn('text-xs sm:text-sm', pathname === '/' ? 'text-primary' : 'text-muted-foreground')}>Home</span>
        </Link>
        <nav aria-label="Main" className="justify-self-end md:col-start-3 md:row-start-1">
          <ul className="flex items-center gap-0 sm:gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-md px-1 py-1.5 text-xs transition-colors hover:bg-accent sm:px-2 sm:text-sm md:px-3',
                      active ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
