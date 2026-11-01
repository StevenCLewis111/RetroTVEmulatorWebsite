import type { Metadata } from 'next'
import { Code, Download, FolderOpen } from 'lucide-react'
import { getLatestRelease } from '@/lib/releases'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tutorial',
  description: 'How to install and use Retro TV Emulator.',
}

const primaryButton =
  'inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90'
const outlineButton =
  'inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground'

const steps = [
  {
    title: 'Start Here - Watch or Read Below',
    kind: 'video',
  },
  {
    title: 'The Boot Process',
    kind: 'image',
    text: 'When Retro TV Emulator starts, it prepares the experience for your Windows computer. It wakes up your drives, caches tv guide and menu information. It scans your system and selects the proper amount of system cores, threads, and detects your best GPU when one is available. It places your computer on one of three performance modes (lite, standard, and performance) and reads your Windows screen resolution to choose the correct canvas size. The TV Guide layout also adjusts to that screen size so channel information stays readable.',
  },
  {
    title: 'The Controls Menu',
    kind: 'placeholder',
    text: 'The Controls Menu is on by default. It is the first thing you see when the program loads. It can be turned off in the System Tab so it no longer starts on boot and can be brought up at any time with C. It will tell you the controls for each area of the program.',
  },
  {
    title: 'System Menu',
    kind: 'placeholder',
    text: 'The System Menu provides access to global configurations and advanced emulations. From this panel, users can configure screen layout behaviors, toggle automatic update protocols, adjust rendering performance profiles, and modify file system directory paths to sync your multimedia content accurately.',
  },
]
const stepsPartTwo = [
  {
    title: 'Set up your channels',
    kind: 'placeholder',
    text: 'Open Settings with M and choose Channels. Channels 05–44 are your programmable stations. Turn a channel on, give it a name, and choose TV or MUSIC mode. TV mode plays your video folders on a schedule. MUSIC mode creates a visualizer station from an audio folder. Channel 03 is the Games and DVD deck, and Channel 04 is the TV Guide. A fresh install starts with Channel 05 active; enable a channel and add content before turning off the last active channel.',
  },
  {
    title: 'Schedule TV stations',
    kind: 'placeholder',
    text: 'In a TV channel, choose the content folders and scheduling mode. Random Slots fills the day with scheduled content, One Slot and Two Slots give you a smaller daily lineup, and Marathon creates a continuous marathon-style channel. Use Pair Shorts Under to combine short episodes into a block. Episode Order can be Sequential or Random. Block Length can use a full 24-hour pool or separate 8-hour Morning, Evening, and Night folders. You can also add commercials, intros, outros, and holiday schedule overrides. Long files are automatically treated as movies when they are over about 80 minutes.',
  },
  {
    title: 'Use MUSIC Visualizer Channels',
    kind: 'placeholder',
    text: 'MUSIC channels are different from TV stations: they play audio and show an audio-reactive visualizer instead of scheduled video. Choose an engine style such as PrismShards, LiquidChrome, PulseRings, WarpTunnel, GlowBraid, EqualizerGrid, ParticleFlow, or NeonStarfield, then select the folder containing your music. Supported audio includes MP3, WAV, OGG, FLAC, M4A, AAC, and WMA.',
  },
  {
    title: 'Games, DVD, and Media Player',
    kind: 'placeholder',
    text: 'Channel 03 opens the Games deck. Add cores under main/cores/<CONSOLE>, games under main/roms/<CONSOLE>, and PSX BIOS files under main/bios. Select a console, choose its core if needed, set a save profile, and configure the controller. The DVD option is a media player for video files and discs; it does not need an emulator core, BIOS, or save profile. A controller is required for playing games, while keyboard controls navigate the Games menu and DVD player.',
  },
  {
    title: 'TV Guide and Everyday Controls',
    kind: 'placeholder',
    text: 'Channel 04 shows the schedule across your stations. Use W and S to move between channels, A and D to move through time slots, and Enter to tune to the selected channel. On any channel, Up and Down change channels, Left and Right adjust volume, N mutes, and two-digit channel numbers jump directly to a station. Press Escape to minimize the window.',
  },
]

const allSteps = [...steps, ...stepsPartTwo]

const tutorialImages: Record<string, { src: string; alt: string }[]> = {
  'The Boot Process': [{ src: '/images/tutorial-boot.png', alt: 'Retro TV Emulator boot screen with loading progress' }],
  'The Controls Menu': [{ src: '/images/tutorial-controls.png', alt: 'Retro TV Emulator control menu showing keyboard controls' }],
  'System Menu': [{ src: '/images/tutorial-system.png', alt: 'Retro TV Emulator system settings menu' }],
  'Set up your channels': [{ src: '/images/tutorial-channels.png', alt: 'Retro TV Emulator channel selection menu' }],
  'Schedule TV stations': [
    { src: '/images/tutorial-schedule.png', alt: 'Retro TV Emulator channel scheduling settings' },
    { src: '/images/tutorial-file-picker.png', alt: 'Retro TV Emulator video file selection screen' },
  ],
  'Use MUSIC Visualizer Channels': [{ src: '/images/tutorial-music.png', alt: 'Retro TV Emulator music visualizer channel settings' }],
  'Games, DVD, and Media Player': [{ src: '/images/tutorial-games.png', alt: 'Retro TV Emulator games and DVD menu' }],
  'TV Guide and Everyday Controls': [
    { src: '/images/tutorial-video.png', alt: 'Retro TV Emulator video settings sliders' },
    { src: '/images/tutorial-theme.png', alt: 'Retro TV Emulator theme settings with volume bar and color controls' },
    { src: '/images/tutorial-volume.png', alt: 'Retro TV Emulator volume indicator' },
    { src: '/images/tutorial-mute.png', alt: 'Retro TV Emulator muted indicator' },
  ],
}
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

function TutorialContent() {
  return (
    <div className="tutorial-page scanlines flex-1">
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <h1 className="text-center font-display text-5xl text-primary">Tutorial</h1>

        <div className="mt-8 flex flex-col gap-10">
          {allSteps.map((step) => (
            <section key={step.title} className="flex flex-col gap-3 border-b border-border/60 pb-10 last:border-0">
              <h2 className="text-center font-display text-3xl text-primary">{step.title}</h2>
              {tutorialImages[step.title] ? (
                <div className={tutorialImages[step.title].length === 1 ? 'flex justify-center' : 'grid gap-4 sm:grid-cols-2'}>
                  {tutorialImages[step.title].map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={1280}
                      height={720}
                      className={tutorialImages[step.title].length === 1 ? 'h-auto w-full rounded-lg border shadow-lg sm:w-[calc(50%-0.5rem)]' : 'w-full rounded-lg border shadow-lg'}
                    />
                  ))}
                </div>
              ) : (
                <div className="scanlines flex aspect-video items-center justify-center gap-3 rounded-lg border bg-card text-muted-foreground">
                  <ImageIcon className="size-8" aria-hidden="true" />
                  <span>{step.kind === 'video' ? 'Video placeholder' : 'Tutorial image placeholder'}</span>
                </div>
              )}
              {step.kind !== 'video' && <p className="leading-7 text-muted-foreground">{step.text}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

// Shows the coming soon screen. When ready to launch, change 'return' to: return <TutorialContent />
export default function TutorialPage() {
  return <TutorialContent />
}
