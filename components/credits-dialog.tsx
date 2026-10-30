'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const credits = {
  tools: [
    'Next.js & React Frameworks',
    'Tailwind CSS Styling Engine',
    'GitHub Actions Automation Engine',
    'Google Gemini AI Migration Assistant'
  ],
  licenses: ['Placeholder — licenses go here'],
  thanks: ['Placeholder — names go here'],
}

function CreditSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="font-display text-xl text-primary">{title}</h3>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function CreditsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>Credits</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Credits</DialogTitle>
          <DialogDescription>Tools, licenses, and the people who helped.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <CreditSection title="Tools & libraries" items={credits.tools} />
          <CreditSection title="Licenses" items={credits.licenses} />
          <CreditSection title="Thank you" items={credits.thanks} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
