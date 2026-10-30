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
  modules: [
    'Python Development Environment',
    'Pygame Engine Core',
    'FFmpeg Audio & Video Processor',
    'OpenCV (CV2) Computer Vision Library',
    'VLC Media Architecture Player'
  ],
  licenses: [
    'Pixabay License — Content Summary',
    'MondaMusic — Content Licensing Credit'
  ],
  thanks: [
    'eyekl0pz420 / EYECLOPS — Christmas Bezel Artwork & Splash Screen Image Creator',
    'ashthornegaming — Discord Moderator, Project Tester, and Archivist'
  ],
}

function CreditSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="font-display text-xl text-primary mt-3 first:mt-0">{title}</h3>
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
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Credits</DialogTitle>
          <DialogDescription>Tools, frameworks, licenses, and the people who helped.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-2">
          <CreditSection title="Application Frameworks & Engines" items={credits.modules} />
          <CreditSection title="Web Development Tools" items={credits.tools} />
          <CreditSection title="Media & Content Licenses" items={credits.licenses} />
          <CreditSection title="Special Thanks" items={credits.thanks} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
