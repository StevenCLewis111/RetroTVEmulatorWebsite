import type { Metadata } from 'next'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tutorial',
  description: 'How to install and use Retro TV Emulator.',
}

type TutorialTopic = {
  title: string;
  intro?: string;
  points?: { label: string; text: string }[];
  images?: { src: string; alt: string }[];
  video?: boolean;
};

type TutorialSection = { title: string; topics: TutorialTopic[] };

const sectionsPartOne: TutorialSection[] = [
  {
    title: "1. Starting the Program",
    topics: [
      { title: "Start Here - Watch or Read Below", video: true },
      {
        title: "The Boot Process",
        intro: "Launch Retro TV Emulator on your Windows computer. During startup, it prepares your media drives, checks your hardware, and loads cached TV Guide and menu information before opening the television experience.",
        points: [
          { label: "Drive preparation", text: "Internal and external media drives are woken up so sleeping storage does not delay the first playback." },
          { label: "Automatic hardware setup", text: "The program detects CPU cores, processing threads, and available GPUs, then selects Lite, Standard, or Performance mode for your computer." },
          { label: "Display and guide scaling", text: "Your Windows screen resolution determines the canvas size and the 4:3 or 16:9 interface layout, keeping TV Guide information readable." },
        ],
        images: [{ src: "/images/tutorial-boot.png", alt: "Retro TV Emulator boot screen with loading progress" }],
      },
      {
        title: "The Controls Menu",
        intro: "The Controls Menu appears on startup by default and shows the controls for the area you are using. Press C at any time to show or hide it. You can turn off its startup appearance in the System Tab.",
        images: [{ src: "/images/tutorial-controls.png", alt: "Retro TV Emulator control menu showing keyboard controls" }],
      },
    ],
  },
  {
    title: "2. System Settings & Advanced Settings",
    topics: [
      {
        title: "System Menu",
        intro: "Press M to open Settings and select the System Tab. Set up the program’s startup behavior, special channels, and screen protection before building your stations.",
        points: [
          { label: "Startup controls and animation", text: "Choose whether the Controls Menu appears when the program starts and whether the retro boot animation plays." },
          { label: "Channels 03 and 04", text: "Enable or disable the Games/DVD hub on Channel 03 and the interactive TV Guide on Channel 04. Your programmable stations occupy Channels 05–44." },
          { label: "Pixel Orbiter and screen saver", text: "Keep the Pixel Orbiter enabled to subtly shift screen elements over time. Keep Channel 03’s screen saver enabled for idle game and hub menus. These features help reduce burn-in risk; they cannot guarantee protection from display damage." },
        ],
        images: [{ src: "/images/tutorial-system.png", alt: "Retro TV Emulator system settings menu" }],
      },
      {
        title: "Advanced Settings",
        intro: "Use the advanced settings when you need to change the automatic hardware choices or prepare a dedicated TV or arcade computer.",
        points: [
          { label: "GPU override", text: "If your computer has more than one graphics processor, select the GPU you want the emulator to use instead of the automatic choice." },
          { label: "Performance mode", text: "Choose Lite, Standard, or Performance where your hardware allows it. A computer assigned to Lite Mode is restricted from forcing full Performance Mode." },
          { label: "Updates", text: "Check for software updates from the advanced settings." },
          { label: "Shell Mode", text: "For a dedicated setup, Shell Mode launches the emulator in place of the normal Windows desktop on system startup. Enable this only when you want the computer to operate primarily as an emulator." },
        ],
      },
      {
        title: "Remap Controls & PC Remotes",
        intro: "Open the Remap Menu in Settings to customize navigation for your keyboard or PC remote. Select an action, press the key or remote button you want to assign, and save the binding. Map channel changes, volume, menus, and shortcuts to suit your setup. The controls listed in this tutorial are the default bindings.",
      },
    ],
  },
]
const sectionsPartTwo: TutorialSection[] = [
  {
    title: "3. Channel Settings",
    topics: [
      {
        title: "Set Up Your Channels",
        intro: "Open the Channels Tab and choose a station from Channels 05–44. Enable it, give it a name, and choose TV/video mode or MUSIC visualizer mode. Use the directory browser to assign the folders holding that station’s content.",
        points: [
          { label: "Channel lineup", text: "Disable unused stations to shorten the channel dial. Keep at least one broadcast station active; the program blocks you from disabling the last one." },
          { label: "TV stations", text: "Assign video folders and scheduling choices to create a station that runs on an automated broadcast timeline." },
          { label: "Music stations", text: "Assign an audio folder to create a station that plays music with a visualizer instead of scheduled video." },
        ],
        images: [{ src: "/images/tutorial-channels.png", alt: "Retro TV Emulator channel selection menu" }],
      },
      {
        title: "Schedule TV Stations",
        intro: "Choose the programming blocks, episode order, and slot pattern for each TV station. The resulting schedule appears in the TV Guide.",
        points: [
          { label: "Programming blocks", text: "24-Hour Mode uses a full-day media pool. 8-Hour Mode lets you assign separate Morning, Evening, and Night folders. 4-Hour Mode divides the day into smaller programming blocks." },
          { label: "Episode order", text: "Sequential follows episode order; Random shuffles the available episodes." },
          { label: "One Slot and Two Slots", text: "Play one episode or two back-to-back episodes from a series before moving to another show." },
          { label: "Random Slots", text: "Schedule up to three consecutive episodes from a series, depending on the content available." },
          { label: "Marathon", text: "Run through a series or movie collection before moving on to the next collection." },
          { label: "Pair short episodes", text: "Use the short-file pairing option to combine episodes under 30 minutes into a single programming block." },
        ],
        images: [
          { src: "/images/tutorial-schedule.png", alt: "Retro TV Emulator channel scheduling settings" },
          { src: "/images/tutorial-file-picker.png", alt: "Retro TV Emulator video file selection screen" },
        ],
      },
      {
        title: "Commercials & Station Bumpers",
        intro: "Enable commercials for a TV station and select the folder containing your commercial clips. With commercials enabled, assign intros, outros, or station bumpers to create transitions into and out of breaks. These can include your own “we will be right back” and “we are returning” clips with fade-in and fade-out transitions.",
      },
      {
        title: "Media Scans, Loudness & Audio Tracks",
        intro: "When you assign content, media scans gather the information needed for playback and scheduling.",
        points: [
          { label: "Letterboxing and duration", text: "The scans identify picture framing and file length so playback scaling and TV Guide blocks can be organized correctly." },
          { label: "Loudness normalization", text: "Audio scanning helps balance volume between files and channels, reducing sudden volume jumps." },
          { label: "Smart Loudness", text: "If global audio scanning is disabled, adjust the manual gain slider while watching. Repeated gain adjustments for the same series help the program learn a gain preference for the remaining episodes." },
          { label: "Audio track memory", text: "Switch the active audio track while a show is playing to select another language or commentary track. The emulator remembers that selection for the show when it returns to the schedule." },
        ],
      },
      {
        title: "MUSIC Visualizer Stations",
        intro: "Choose MUSIC mode for a programmable channel, then select your audio folder. Supported formats include MP3, WAV, OGG, FLAC, M4A, AAC, and WMA.",
        points: [
          { label: "Visualizer selection", text: "Use random rotation to cycle through designs, or select one design. Styles include PrismShards, LiquidChrome, PulseRings, WarpTunnel, GlowBraid, EqualizerGrid, ParticleFlow, and NeonStarfield." },
          { label: "Reactivity and pulse", text: "Turn audio-reactive movement on or off and adjust its sensitivity to make the visualizer respond more subtly or strongly to the music." },
          { label: "Music gain", text: "Adjust the music station’s manual gain independently of the video channels." },
          { label: "Song information", text: "Track information appears in the top-left corner and disappears after 60 seconds of playback to reduce persistent on-screen text." },
        ],
        images: [{ src: "/images/tutorial-music.png", alt: "Retro TV Emulator music visualizer channel settings" }],
      },
    ],
  },
  {
    title: "4. Channel Effects & CRT Appearance",
    topics: [
      {
        title: "Static Noise, Scanlines & Reception",
        intro: "Adjust the television effects to choose how clean or analogue your stations look. Scanlines add horizontal lines across the picture. Static noise adds fuzz or snow, while reception lines add rolling interference. Tune these effects independently to suit the era of television you want to recreate.",
      },
      {
        title: "Bezels & Screen Warp",
        intro: "Enable a bezel to frame the picture with a vintage television border. Screen Warp curves the display corners to suggest the glass shape of a CRT. Static borders can increase burn-in risk during long viewing sessions, so pay attention to the safeguard warning and keep screen protection enabled.",
      },
    ],
  },
  {
    title: "5. Games, DVD & Media Player Settings",
    topics: [
      {
        title: "Channel 03 & the Games Menu",
        intro: "Enable Channel 03 in the System Tab to open the Games/DVD hub. The DVD module is active by default; use the Games Tab to enable the consoles you want to play.",
        points: [
          { label: "Game files, cores and BIOS", text: "Use the directory selection tool to point the program at the main folder containing your retro files. Automatic discovery identifies ROMs, emulator cores, and BIOS files for their systems. Some consoles require a compatible core and BIOS before games can run." },
          { label: "Console and controller settings", text: "Select a console, choose a core where needed, set a save profile, and configure the controller. A controller is required for gameplay; the keyboard navigates the hub and its menus." },
          { label: "Hub appearance", text: "Choose a custom background image, text colors, and console-selection animation. Enable only the consoles you use and toggle Game Music for music while browsing the hub." },
          { label: "Idle protection", text: "Keep the Channel 03 screen saver active so idle menus do not remain fixed on the display." },
        ],
        images: [{ src: "/images/tutorial-games.png", alt: "Retro TV Emulator games and DVD menu" }],
      },
      {
        title: "DVD & Media Player",
        intro: "Choose DVD on Channel 03 to use the media player for video files, physical movie DVDs, and digital DVD ISO backups. Insert a movie DVD into your computer’s optical drive or select the stored media or ISO file. The DVD player does not need an emulator core, game BIOS, or save profile.",
        points: [
          { label: "DVD compatibility", text: "The DVD module supports movie DVDs, not interactive DVD-based games." },
          { label: "Independent display settings", text: "Adjust movie framing, aspect ratio, and screen alignment inside the DVD/media player menus. Games also have their own display settings. Neither uses the TV-station framing choices in the main Video Tab." },
          { label: "DVD/media player captions", text: "Configure DVD/Media Player Live Captions separately from TV Station Live Captions, so your movie caption preference does not change your broadcast stations." },
        ],
      },
    ],
  },
]
const sectionsPartThree: TutorialSection[] = [
  {
    title: "6. Video Settings",
    topics: [
      {
        title: "TV Station Screen Modes",
        intro: "Open the Video Tab to adjust picture framing for TV stations on Channels 05–44. These screen modes do not change the independent DVD or game displays.",
        points: [
          { label: "Normal Aspect Ratio", text: "Preserve the picture’s proportions and add letterboxing or sidebars where needed to fit the canvas." },
          { label: "Stretch to Fit", text: "Expand the picture to fill the canvas, even when that changes the source proportions." },
          { label: "Crop", text: "Fill the canvas by zooming in and trimming the edges without stretching the picture." },
          { label: "Pan and Scan", text: "Use a moving crop to keep the main action framed while trimming the outer edges." },
        ],
      },
      {
        title: "Picture Adjustments & TV Captions",
        intro: "Use the Brightness, Contrast, Sharpness, Tint, and Color sliders to tune the TV picture. Lower Color all the way for a black-and-white broadcast look. Set TV Station Live Captions independently of the DVD/media player caption option.",
        images: [{ src: "/images/tutorial-video.png", alt: "Retro TV Emulator video settings sliders" }],
      },
    ],
  },
  {
    title: "7. Theme Settings",
    topics: [
      {
        title: "Colors, Borders & Volume Style",
        intro: "Open the Themes Tab to choose your interface background, border and highlight colors, and volume indicator style. Set letterboxing bars to black or grey to match your preferred screen appearance.",
        images: [{ src: "/images/tutorial-theme.png", alt: "Retro TV Emulator theme settings with volume bar and color controls" }],
      },
      {
        title: "Channel Transitions",
        intro: "Choose analogue static or a solid grey screen between channels. For static transitions, select white, grey, retro rainbow, or a color that matches your interface background. These transition choices are separate from the static used when media cannot play.",
      },
      {
        title: "Watermarks & Channel Logos",
        intro: "Open the Watermarks options to enable or customize corner channel logos and status overlays. Select your image, then adjust its position, scale, and opacity to suit the station. Keep persistent graphics subtle and consider burn-in risk during long viewing sessions.",
      },
    ],
  },
  {
    title: "8. Extras",
    topics: [
      {
        title: "TV Guide & Everyday Controls",
        intro: "Tune to Channel 04 to browse your stations’ schedules. Use W and S to move between channels, A and D to move through time slots, and Enter to tune to the selected station. After 60 seconds without input, the guide closes and returns to the station it was previewing.",
        points: [
          { label: "Channel surfing", text: "Up and Down change channels. Type a two-digit channel number to jump directly to a station." },
          { label: "Volume and mute", text: "Left and Right adjust volume; N toggles mute." },
          { label: "Menus and window", text: "M opens Settings, C toggles the Controls Menu, and Escape minimizes the window." },
        ],
        images: [
          { src: "/images/tutorial-volume.png", alt: "Retro TV Emulator volume indicator" },
          { src: "/images/tutorial-mute.png", alt: "Retro TV Emulator muted indicator" },
        ],
      },
      {
        title: "Burn-In Safeguards & Menu Timers",
        intro: "Settings menus and control overlays close after 60 seconds without input to reduce static on-screen elements. Screen protection also includes the Pixel Orbiter, Channel 03 screen saver, and disappearing music metadata.",
        points: [
          { label: "Safeguard warnings", text: "A warning appears when you disable the Pixel Orbiter or Channel 03 screen saver, leave static bezels enabled, or lock a music station to one visualizer instead of random rotation." },
          { label: "Display care", text: "These safeguards help reduce risk rather than eliminate it. Follow your display manufacturer’s guidance, especially for OLED, plasma, and CRT screens." },
        ],
      },
      {
        title: "Static Fallback & Media Recovery",
        intro: "If a TV or music station cannot load media, a drive is unavailable or stalled, or playback encounters a confirmed problem, the station falls back to moving static. An error banner explains the problem for 60 seconds, then disappears. Static remains while the program retries the media, avoiding a fixed error screen during recovery.",
      },
      {
        title: "Kiosk Mode",
        intro: "Once your channels and settings are ready, enable Kiosk Mode for a restricted presentation setup. It hides the main structural settings and detailed scheduling options while leaving essential game choices, video adjustments, and theme changes available.",
      },
    ],
  },
];

const allSections = [...sectionsPartOne, ...sectionsPartTwo, ...sectionsPartThree];

function TutorialContent() {
  return (
    <div className="tutorial-page scanlines flex-1">
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <h1 className="text-center font-display text-5xl text-primary">Tutorial</h1>
        <div className="mt-8 flex flex-col gap-10">
          {allSections.map((section) => (
            <section key={section.title} className="flex flex-col gap-8 border-b border-border/60 pb-10 last:border-0">
              <h2 className="text-center font-display text-3xl text-primary">{section.title}</h2>
              {section.topics.map((topic) => (
                <div key={topic.title} className="flex min-w-0 flex-col gap-3">
                  <h3 className="text-center font-display text-2xl text-primary">{topic.title}</h3>
                  {topic.images ? (
                    <div className={topic.images.length === 1 ? 'flex justify-center' : 'grid gap-4 sm:grid-cols-2'}>
                      {topic.images.map((image) => (
                        <Image
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          width={1280}
                          height={720}
                          className={topic.images.length === 1 ? 'h-auto w-full rounded-lg border shadow-lg sm:w-[calc(50%-0.5rem)]' : 'w-full rounded-lg border shadow-lg'}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="scanlines mx-auto flex aspect-video w-full items-center justify-center gap-3 rounded-lg border bg-card px-4 text-muted-foreground">
                      <ImageIcon className="size-8 shrink-0" aria-hidden="true" />
                      <span>{topic.video ? "Video placeholder" : "Tutorial image placeholder"}</span>
                    </div>
                  )}
                  {topic.intro && <p className="leading-7 text-muted-foreground">{topic.intro}</p>}
                  {topic.points && (
                    <ul className="flex list-disc flex-col gap-3 pl-5 text-muted-foreground">
                      {topic.points.map((point) => (
                        <li key={point.label} className="pl-1 leading-7">
                          <strong className="font-medium text-foreground">{point.label}: </strong>{point.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

// Shows the coming soon screen. When ready to launch, change 'return' to: return <TutorialContent />
export default function TutorialPage() {
  return <TutorialContent />
}
