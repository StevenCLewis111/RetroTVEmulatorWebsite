import { Mail } from 'lucide-react'
import { CreditsDialog } from '@/components/credits-dialog'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="shrink-0 border-t">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-6 text-sm text-muted-foreground sm:gap-4">
        <a
          href={`mailto:${site.email}`}
          className="flex min-w-0 items-center gap-2 text-left hover:text-primary"
        >
          <Mail className="size-4" aria-hidden="true" />
          <span className="min-w-0 [overflow-wrap:anywhere]">
            Contact / bug reports: <span className="text-foreground">{site.email}</span>
          </span>
        </a>
        <div className="justify-self-end whitespace-nowrap">
          <CreditsDialog />
        </div>
      </div>
    </footer>
  )
}
