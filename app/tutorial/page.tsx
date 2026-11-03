import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Tutorial | Retro TV Emulator",
  description: "Set up Retro TV Emulator on Windows: TV and music stations, schedules, controls, retro games, DVDs, captions and troubleshooting.",
}

// Images live in /public/images. Change a path here if a file name differs.
const whatYouNeed1 = { url: "/images/whatyouneed1.png" };
const whatYouNeed2 = { url: "/images/whatyouneed2.png" };

// Put your real tutorial video link here.
const VIDEO_URL = "https://youtube.com";

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

type TutorialTopic = {
  title: string;
  intro?: string;
  points?: { label: string; text: string }[];
  images?: { src: string; alt: string }[];
  video?: boolean;
  steps?: string[];
  example?: string;
};

type TutorialSection = { title: string; standalone?: boolean; topics: TutorialTopic[] };

const section1: TutorialSection = {
  title: "Starting the Program",
  standalone: true,
  topics: [
    { title: "Start Here - Watch or Read Below", video: true },
    {
      title: "What You Need",
      intro: "Retro TV Emulator turns your own video and music library into scheduled television on a Windows PC. Channel 03 also provides retro games and a DVD/media player.",
      points: [
        { label: "Computer", text: "Use a Windows 10 or 11 computer, 64-bit. Linux and Mac have compatibility programs that can run Windows applications; compatibility with Retro TV Emulator depends on the program and your setup." },
        { label: "Keyboard, mouse and controller", text: "Have a keyboard and mouse for setup. Video games require a compatible controller. A PC remote can also be mapped for TV controls." },
        { label: "Your games and media", text: "You need your own ROMs, BIOS files, Emulation Cores, videos and music. You can also use DVDs (if you have an optical drive) or DVD .iso backups. Point the emulator at your RetroArch folder and it will find and organize the ROMs, BIOS and cores for you." },
        { label: "Included tools", text: "VLC, ffmpeg and 7-Zip are included; no separate installation of these tools is needed." },
      ],
      images: [
        { src: whatYouNeed1.url, alt: "A desk setup with a Windows computer, monitor, keyboard, mouse and game controller" },
        { src: whatYouNeed2.url, alt: "A second desk setup photo showing the Retro TV Emulator screen with keyboard, mouse and controller" }
      ],
    },
    {
      title: "Installing & First Start",
      intro: "Unzip the app folder to a location such as your Desktop, keep all of its contents together, and run Retro TV Emulator.exe. Do not move or rename files inside _internal.",
      points: [
        { label: "First launch", text: "Wait for the loading screen to finish. The Controls screen appears by default; C shows or hides it." },
        { label: "First setup", text: "Press M to open the Main Menu. Review System and Advanced Settings, then open Channels to configure your first station. The remaining sections follow this setup order." },
        { label: "Media location", text: "TV shows, movies, music and commercials can stay on any drive. Select their folders in the app rather than moving them into the installation folder." },
      ],
    },
    {
      title: "The Boot Process",
      intro: "Launch Retro TV Emulator on your Windows computer. During startup, it prepares your media drives, checks your hardware, and loads cached TV Guide and menu information before opening the television experience.",
      points: [
        { label: "Drive preparation", text: "Internal and external media drives are woken up so sleeping storage does not delay the first playback." },
        { label: "Automatic hardware setup", text: "The program detects CPU cores, processing threads, and available GPUs, then selects Lite, Standard, or Performance mode for your computer." },
        { label: "Display and guide scaling", text: "Your Windows screen size determines the menu and TV Guide layout. Screens shaped 4:3, 5:4 or 16:10 use the 4:3 layout; 16:9, 21:9 or 32:9 screens use the 16:9 layout." },
      ],
      images: [{ src: "/images/tutorial-boot.png", alt: "Retro TV Emulator boot screen with loading progress" }],
    },
    {
      title: "The Controls Menu",
      intro: "The Controls Menu appears on startup by default and shows the controls for the area you are using. Press C at any time to show or hide it. You can turn off its startup appearance in the System Tab.",
      points: [
        { label: "Watching TV", text: "Up/Down changes channels, Left/Right adjusts volume, and N toggles mute. M opens or closes the Main Menu; C opens or closes Controls. Escape minimizes the window while watching TV." },
        { label: "Direct tuning", text: "Type two digits, such as 0 then 7 for Channel 07. A single digit tunes after a short pause." },
        { label: "Settings menus", text: "W/S moves up or down; A/D moves sideways or changes a value. Enter selects or confirms. Escape goes back to the previous menu. Escape’s action depends on where you are." },
        { label: "Channel dial", text: "Channel 03 is Games/DVD, Channel 04 is the TV Guide, and Channels 05–44 are your 40 TV or music stations. Disabled channels are skipped when surfing." },
      ],
      images: [{ src: "/images/tutorial-controls.png", alt: "Retro TV Emulator control menu showing keyboard controls" }],
    },
  ],
};

const section2: TutorialSection = {
  title: "System Settings & Advanced Settings",
  topics: [
    {
      title: "System Menu",
      intro: "Press M to open Settings and select the System Tab. Set up the program’s startup behavior, special channels, and screen protection before building your stations.",
      points: [
        { label: "Startup controls", text: "Controls Menu (Nav Info) chooses whether the Controls screen appears at startup. The Main Menu has five tabs: System, Channels, Games, Video and Theme." },
        { label: "Sound and captions", text: "Loudness Scan measures files to help keep playback volume consistent. Mono Audio mixes sound to mono. Closed Captions controls TV-station captions separately from the DVD player." },
        { label: "Presentation settings", text: "Kiosk (Hide Scheduling) hides detailed setup and scheduling after you finish configuring the app. CRT TV Bezels adds a frame around the picture." },
        { label: "Channels 03 and 04", text: "Enable or disable the Games/DVD hub on Channel 03 and the interactive TV Guide on Channel 04. Your programmable stations occupy Channels 05–44." },
        { label: "Pixel Orbiter and screen saver", text: "Keep the Pixel Orbiter enabled to subtly shift screen elements over time. Keep Channel 03’s screen saver enabled for idle game and hub menus. These features help reduce burn-in risk; they cannot guarantee protection from display damage." },
      ],
      images: [{ src: "/images/tutorial-system.png", alt: "Retro TV Emulator system settings menu" }],
    },
    {
      title: "Advanced Settings",
      intro: "Use the advanced settings when you need to change the automatic hardware choices or prepare a dedicated TV or arcade computer.",
      points: [
        { label: "GPU/CPU", text: "Select the graphics card that draws the picture, such as a laptop’s dedicated GPU, or choose CPU-only drawing. The app can fall back to CPU drawing if the GPU encounters problems." },
        { label: "Performance mode", text: "Lite limits background jobs and uses non-reactive visualizer movement. Standard is the normal mode. Performance allows more background work, faster scans and the full 24-band reactive visualizer. A PC rated as slow at startup cannot force Performance Mode. Background work is reduced if playback struggles." },
        { label: "Look for Updates", text: "Check manually for a newer version. See Updates in Extras for the startup prompt and installation behavior." },
        { label: "Shell Mode", text: "For a dedicated setup, Shell Mode launches the emulator in place of the normal Windows desktop on system startup. Enable this only when you want the computer to operate primarily as an emulator." },
        { label: "Server Mode", text: "This option is greyed out and is not available in this build." },
      ],
    },
    {
      title: "Remap Controls & PC Remotes",
      intro: "Open System > Advanced Settings > Remote Remapping to customize navigation for your keyboard or PC remote. Select an action, press the key or remote button you want to assign, and save the binding. Map channel changes, volume, menus, and shortcuts to suit your setup. Include the number keys if you want direct channel entry from your remote. The controls listed in this tutorial are the default bindings.",
    },
  ],
};

const section3: TutorialSection = {
  title: "Channel Settings",
  topics: [
    {
      title: "Set Up Your Channels",
      intro: "Open the Channels Tab and choose a station from Channels 05–44. Enable it, give it a name, and choose TV/video mode or MUSIC visualizer mode. Use the directory browser to assign the folders holding that station’s content.",
      points: [
        { label: "Channel lineup", text: "Disable unused stations to shorten the channel dial. The app prevents you from disabling the last active station. Turning off the station you are watching tunes to the next enabled channel." },
        { label: "TV stations", text: "Assign video folders and scheduling choices to create a station that runs on an automated broadcast timeline." },
        { label: "Music stations", text: "Assign an audio folder to create a station that plays music with a visualizer instead of scheduled video." },
      ],
      images: [{ src: "/images/tutorial-channels.png", alt: "Retro TV Emulator channel selection menu" }],
    },
    {
      title: "Build Your First TV Station",
      intro: "Press M, open Channels, select a channel number, choose TV mode and give the station a name.",
      steps: [
        "Choose a 24-Hour, 8-Hour or 4-Hour block mode to split the day.",
        "Use the built-in file browser to add folders or files to each programming block.",
        "Choose the slot pattern and Sequential or Random episode order. Adjust Pair Shorts Under if needed.",
        "Optionally enable commercials and add commercial, fade-in, fade-out, intro or outro clips.",
        "Optionally add holiday programming and a corner watermark. Let the first media scans finish, then check Channel 04 to review your schedule.",
      ],
    },
    {
      title: "Organize Your Media & Supported Files",
      intro: "Keep each show in its own folder, with season folders beneath it. Clear folder and episode names help the app identify shows and build the guide.",
      example: "TV Shows/\n  Show Name/\n    Season 1/\n      Show Name S01E01.mkv\n      Show Name S01E02.mkv\n    Season 2/\n      Show Name S02E01.mkv",
      points: [
        { label: "Show and movie recognition", text: "Season 1 and Season 01 folder names are understood, as are S01E01 and Season 1 Episode 1 filenames. Videos longer than 80 minutes are treated as movies. Movie parts are kept together, and duplicate copies of an episode are scheduled only once." },
        { label: "Video formats", text: "MP4, MKV, AVI, MOV, WEBM, M4V, WMV, FLV, MPG, MPEG, TS and M2TS." },
        { label: "Caption files", text: "SRT, VTT, ASS, SSA, SUB and SMI can sit beside the matching video. Use the same base name, such as Show S01E01.srt or Show S01E01.en.srt." },
      ],
    },
  ],
};

const section3Cont: TutorialSection = {
  title: "Channel Settings (Continued)",
  topics: [
    {
      title: "Schedule TV Stations",
      intro: "Stations run on the clock like real TV: tuning in halfway through a show joins it halfway through. After the app has been closed, the schedule catches up to real time rather than resuming where you left off. Changes affect upcoming programming; what already aired stays unchanged.",
      points: [
        { label: "Programming blocks", text: "24-Hour uses one Full Day block. 8-Hour uses Morning (4am–12pm), Evening (12pm–8pm) and Night (8pm–4am). 4-Hour uses six blocks: midnight–4am, 4–8am, 8am–noon, noon–4pm, 4–8pm and 8pm–midnight. Add content separately to each block." },
        { label: "Episode order", text: "Sequential follows episode order and remembers each show’s position. Random shuffles episodes and plays each once before repeating." },
        { label: "One Slot and Two Slots", text: "Play one episode or two back-to-back episodes from a series before moving to another show." },
        { label: "Random Slots", text: "Play one to three consecutive episodes: the show with the most episodes gets three, while smaller shows get fewer." },
        { label: "Marathon", text: "Run through a series or movie collection before moving on to the next collection." },
        { label: "Pair short episodes", text: "Pair Shorts Under combines two short episodes into one time slot. The default threshold is 15 minutes, adjustable up to 30; set it to 0 to disable pairing. In Random order, an unpaired short episode plays first in the next round." },
      ],
      images: [
        { src: "/images/tutorial-schedule.png", alt: "Retro TV Emulator channel scheduling settings" },
        { src: "/images/tutorial-file-picker.png", alt: "Retro TV Emulator video file selection screen" },
      ],
    },
    {
      title: "Commercials & Station Bumpers",
      intro: "Enable commercials for a TV station and select the folder 