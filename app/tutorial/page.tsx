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
      intro: "Enable commercials for a TV station and select the folder containing your commercial clips. With commercials enabled, assign intros, outros, or station bumpers to create transitions into and out of breaks. These can include your own “we will be right back” and “we are returning” clips with fade-in and fade-out transitions.",
      points: [
        { label: "Break placement", text: "Choose breaks within the show at half-hour points or at the end of each show. Internal breaks have at least five minutes between them and no more than two breaks in a half hour." },
        { label: "Clip length", text: "A file longer than five minutes is not treated as a commercial." },
      ],
    },
    {
      title: "Holiday Schedules",
      intro: "Each channel can have separate Halloween, Christmas and Thanksgiving programming. Add the holiday content in the channel’s schedule settings.",
      points: [
        { label: "Automatic holiday window", text: "Holiday schedules run for the three days up to and including the holiday. Thanksgiving is the fourth Thursday of November." },
        { label: "Order and manual selection", text: "Holiday programming always uses Random order. You can also force a holiday schedule on manually." },
      ],
    },
    {
      title: "Media Scans, Loudness & Audio Tracks",
      intro: "When you assign content, media scans gather the information needed for playback and scheduling.",
      points: [
        { label: "Letterboxing and duration", text: "The scans identify picture framing and file length so playback scaling and TV Guide blocks can be organized correctly." },
        { label: "Loudness normalization", text: "With Loudness Scan enabled, files are measured against a broadcast target of −24 LUFS to reduce sudden volume jumps. Let scans finish before judging volume balance." },
        { label: "Smart Loudness", text: "Smart Loudness learns from manual volume or gain adjustments while a show plays and applies a series preference to its other episodes." },
        { label: "Saved scan results", text: "Duration, picture framing, loudness and playback checks run in the background. Results are cached in the media library so unchanged files do not need another full scan. A channel message may appear during its first scans. Confirmed broken files are removed from scheduling; paired short episodes receive a new partner." },
        { label: "Audio track memory", text: "Switch the active audio track while a show is playing to select another language or commentary track. The emulator remembers that selection for the show when it returns to the schedule." },
      ],
    },
    {
      title: "MUSIC Visualizer Stations",
      intro: "Choose MUSIC mode for a programmable channel, give it a name, then select your audio folder. Music plays on the clock like a TV station. Supported formats include MP3, WAV, OGG, FLAC, M4A, AAC and WMA.",
      points: [
        { label: "Visualizer selection", text: "Use random rotation to cycle through designs, or select one design. Random changes the design with each song. Styles include Prism Shards, Liquid Chrome, Pulse Rings, Warp Tunnel, Glow Braid, Equalizer Grid, Particle Flow, Neon Starfield and Lightning." },
        { label: "Reactivity and pulse", text: "Standard and Performance modes can react to the beat, bass, mids and highs. Each song is analysed once and the result is saved. Adjust the strength slider for subtler or stronger movement. Lite mode moves the visualizer without following the audio." },
        { label: "Music gain", text: "Adjust the music station’s manual gain independently of the video channels." },
        { label: "Song information", text: "Track information appears in the top-left corner and disappears after 60 seconds of playback to reduce persistent on-screen text." },
      ],
      images: [{ src: "/images/tutorial-music.png", alt: "Retro TV Emulator music visualizer channel settings" }],
    },
  ],
};
const section4: TutorialSection = {
  title: "Channel Effects & CRT Appearance",
  topics: [
    {
      title: "Static Noise, Scanlines & Reception",
      intro: "Open Channels > Channel Settings to adjust how clean or analogue your stations look. Scanlines add horizontal lines across the picture. Static noise adds fuzz or snow, while reception lines add rolling interference. Tune these effects independently to suit the era of television you want to recreate.",
    },
    {
      title: "Boot Animation",
      intro: "Use Boot Anim in Channel Settings to turn the retro boot animation on or off. This appearance option is separate from showing the Controls screen at startup.",
    },
    {
      title: "Bezels & Screen Warp",
      intro: "Enable CRT TV Bezels and choose a bezel style to frame the picture with a vintage television border. Screen Warp curves the display corners to suggest the glass shape of a CRT. Static borders can increase burn-in risk during long viewing sessions, so pay attention to the safeguard warning and keep screen protection enabled.",
    },
  ],
};

const section5: TutorialSection = {
  title: "Games, DVD & Media Player Settings",
  topics: [
    {
      title: "Channel 03 & the Games Menu",
      intro: "Enable Channel 03 in the System Tab to open the Games/DVD hub. The DVD module is active by default; use the Games Tab to enable the consoles you want to play.",
      points: [
        { label: "Game files, cores and BIOS", text: "Use the directory selection tool to point the program at the main folder containing your retro files. Automatic discovery identifies ROMs, emulator cores, and BIOS files for their systems. Some consoles require a compatible core and BIOS before games can run." },
        { label: "Console and controller settings", text: "Select a console, choose a core where needed, set a save profile, and configure the controller. The keyboard navigates the hub; a compatible controller is required for gameplay. XInput and DirectInput controllers are supported, with controllers assigned per player." },
        { label: "Hub appearance", text: "Choose a custom background image, text colors, and console-selection animation. Enable only the consoles you use and toggle Game Music for music while browsing the hub." },
        { label: "Idle protection", text: "Keep the Channel 03 screen saver active so idle menus do not remain fixed on the display." },
      ],
      images: [{ src: "/images/tutorial-games.png", alt: "Retro TV Emulator games and DVD menu" }],
    },
    {
      title: "Console Cores, ROMs & BIOS",
      intro: "The Games tab supports Game Boy, Game Boy Color, Game Boy Advance, NES, SNES, Sega Genesis, Sega 32X, Master System, Game Gear, Nintendo 64, PlayStation, Atari 2600, Neo Geo Pocket and Neo Geo Pocket Color.",
      points: [
        { label: "Find and organize your files", text: "Point the directory selection tool at your RetroArch folder or the folder containing your retro collection. The emulator finds and organizes your ROMs, BIOS and emulation cores; you do not need to sort them manually first." },
        { label: "Core choice", text: "Each console needs a compatible libretro .dll core. Use Scan for Cores and select a core in the console’s options if more than one is available. The app’s organized core location is _internal/main/cores/<CONSOLE>/." },
        { label: "ROM discovery", text: "Scan for ROMs finds games in your selected collection. ZIP, 7Z and RAR archives are supported using the included tools. Clear ROMs and Clear Cores clear the corresponding lists." },
        { label: "PlayStation BIOS", text: "Automatic discovery can find your BIOS files. If needed, use Add BIOS in the console menu to select a compatible PlayStation BIOS. The organized location is cores/PSX/system/; when several BIOS files are available, a USA BIOS is preferred." },
        { label: "Cartridge formats", text: "GB: .gb; GBC: .gbc/.gb; GBA: .gba; NES: .nes; SNES: .smc/.sfc; Genesis: .md/.gen/.bin/.smd; 32X: .32x/.bin/.smd/.md; Master System: .sms; Game Gear: .gg." },
        { label: "Other formats", text: "N64: .n64/.z64/.v64; PlayStation: .cue/.bin/.iso/.chd/.pbp/.img; Atari 2600: .a26/.bin; Neo Geo Pocket: .ngp; Neo Geo Pocket Color: .ngc." },
      ],
    },
    {
      title: "Game Menu, Controllers & Save Profiles",
      intro: "Use the Games tab for shared hub settings and each console’s menu for system-specific choices.",
      points: [
        { label: "Hub settings", text: "Choose carousel, side-to-side or up-and-down console scrolling, list text colour, a menu background, game screen mode and Game Music. Adjust controller mapping, stick deadzone and multitap for players three and four where supported." },
        { label: "Console settings", text: "Choose the core, map controls, set the ROM folder, add BIOS, clear that console’s ROM list and enable or customize its splash image and video." },
        { label: "Splash artwork", text: "Without a selected image, the app uses <CONSOLE>SplashScreen.png in main/images/splash screen images/<CONSOLE>/. Selecting an image copies it into the console’s splash folder." },
        { label: "Saves", text: "Choose one of three save profiles to keep players’ progress separate. In-game saves and save states are stored per game in main/roms/<CONSOLE>/saves/profile1, profile2 or profile3. Back up these folders to protect your progress." },
      ],
    },
    {
      title: "Game Navigation & Exit Controls",
      points: [
        { label: "Keyboard", text: "W/A/S/D navigates the game menus; Enter selects. Escape goes back or quits a running game." },
        { label: "Controller", text: "The D-pad navigates, A selects and B goes back. Hold Start + Select together for about half a second to quit a game." },
      ],
    },
  ],
};
const section5Cont: TutorialSection = {
  title: "Games, DVD & Media Player Settings (Continued)",
  topics: [
    {
      title: "DVD & Media Player",
      intro: "Choose DVD on Channel 03 to use the media player for video files, physical movie DVDs, and digital DVD ISO backups. Insert a movie DVD into your computer’s optical drive or select the stored media or ISO file. The DVD player does not need an emulator core, game BIOS, or save profile.",
      points: [
        { label: "Files and disc menus", text: "Movie files and DVD ISO files can be stored in main/roms/DVD/ inside _internal. Movie DVD menus are supported. Available player options include resume, button mapping, screen mode, captions and audio track selection." },
        { label: "DVD compatibility", text: "The DVD module supports movie DVDs, not interactive DVD-based games." },
        { label: "Independent display settings", text: "Adjust movie framing, aspect ratio, and screen alignment inside the DVD/media player menus. Games also have their own display settings. Neither uses the TV-station framing choices in the main Video Tab." },
        { label: "DVD/media player captions", text: "Configure DVD/Media Player Live Captions separately from TV Station Live Captions, so your movie caption preference does not change your broadcast stations." },
      ],
    },
    {
      title: "DVD Playback Controls",
      points: [
        { label: "Keyboard playback", text: "Use the Play key for play/pause. Tap Rewind or Fast-forward to skip; hold either to seek. Backspace returns to the disc’s main menu for disc images. Escape opens a quit confirmation; Enter confirms the Yes/No choice. Check the player’s mapping menu for your assigned playback keys." },
        { label: "Controller playback", text: "Down plays/pauses. Tap Left/Right to skip or hold to seek. Y returns to a disc image’s main menu, A selects, and holding Start + Select for about half a second quits." },
      ],
    },
  ],
};

const section6: TutorialSection = {
  title: "Video Settings",
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
};

const section7: TutorialSection = {
  title: "Theme Settings",
  topics: [
    {
      title: "Colors, Borders & Volume Style",
      intro: "Open the Themes Tab to choose menu and background colours, border and highlight colours, menu transparency and the volume indicator style. Set letterboxing bars to black or grey to match your preferred screen appearance.",
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
};
const section8: TutorialSection = {
  title: "Extras",
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
      title: "Captions & Speech Model",
      intro: "TV stations and the DVD player have separate caption switches. The app uses captions embedded in a video or matching sidecar caption files when available.",
      points: [
        { label: "Live speech captions", text: "When a video has no captions, speech-generated captions need the model in _internal/main/models/whisper/. Generated captions are saved in main/captions/ so they do not need to be made again." },
        { label: "TV versus DVD", text: "Use Closed Captions in System for stations and the DVD player’s own captions option for movies. Neither switch changes the other." },
      ],
    },
    {
      title: "Burn-In Safeguards & Menu Timers",
      intro: "Settings menus and control overlays close after 60 seconds without input to reduce static on-screen elements. Screen protection also includes the Pixel Orbiter, Channel 03 screen saver, and disappearing music metadata.",
      points: [
        { label: "Safeguard warnings", text: "A warning appears when you disable the Pixel Orbiter or Channel 03 screen saver, leave static bezels enabled, or lock a music station to one visualizer instead of random rotation." },
        { label: "Warning preferences", text: "Safeguard warnings include a Don’t show this again checkbox. Dismissing a warning does not remove the underlying display risk." },
        { label: "Display care", text: "These safeguards help reduce risk rather than eliminate it. Follow your display manufacturer’s guidance, especially for OLED, plasma, and CRT screens." },
      ],
    },
    {
      title: "Static Fallback & Media Recovery",
      intro: "If a TV or music station cannot load media, a drive is unavailable or stalled, or playback encounters a confirmed problem, the station falls back to moving static. A temporary error banner explains the problem, then disappears. Static remains while the program retries the media, avoiding a fixed error screen during recovery.",
    },
    {
      title: "Files, Backups & Reset Settings",
      intro: "Keep the installation folder intact. App data lives under _internal/main/; your TV and music library can remain on other drives.",
      points: [
        { label: "Settings backup", text: "Back up retro_config.json from the app folder before major changes. It contains settings, channel setup and schedule positions. Leave .retro_tv_device_id alone." },
        { label: "Media library", text: "main/media_library/library.sqlite3 stores scan results, including duration, loudness, framing and playback checks. Files are recognized by content, so moved or renamed files can retain their results." },
        { label: "Other app data", text: "main/cores holds cores and BIOS; main/roms holds games, DVD files and save profiles. main/images holds bezels, logos, backgrounds, watermarks and splash art. main/videos holds splash videos, main/audio holds sounds and game-menu music, and main/captions and main/models/whisper hold caption data." },
        { label: "Reset All Settings", text: "System > Reset All Settings restores settings to defaults. It does not delete your media or clear the media library’s scan results." },
        { label: "Exit and shutdown", text: "Exit Program closes the app. Turn Off Computer shuts down Windows, not just the emulator." },
      ],
    },
    {
      title: "Updates",
      intro: "The app checks for a newer version at startup and asks before installing. You can also open System > Advanced Settings > Look for Updates.",
      points: [
        { label: "Startup prompt", text: "Don’t show this again disables the startup question; checking manually still prompts you." },
        { label: "Installation", text: "The updater is designed to keep your settings and data and restart the app after installation. Back up important settings and game saves before an update." },
      ],
    },
    {
      title: "Troubleshooting & Problem Reports",
      intro: "Let initial scans finish before judging picture framing or volume. Check that assigned files still exist and that external drives are connected and awake. Channel 04 lets you inspect what aired, what is playing and what comes next.",
      points: [
        { label: "Collect logs", text: "After closing the app normally, collect the temp folder’s app_log.txt, crash_log.txt, crash_log_previous.txt, vlc-debug.log, vlc-debug_previous.log and tester_report.txt. An empty crash log means no crash was recorded." },
        { label: "Settings or update issues", text: "Include retro_config.json for settings problems and update_helper.log for update problems. Describe what you did and roughly when the issue happened so the relevant log entries can be found." },
        { label: "Privacy", text: "Review reports before sharing them: logs and settings may include local folder names or other details about your computer." },
      ],
    },
    {
      title: "Kiosk Mode",
      intro: "Once your channels and settings are ready, enable Kiosk Mode for a restricted presentation setup. It hides the main structural settings and detailed scheduling options while leaving essential game choices, video adjustments, and theme changes available.",
    },
  ],
};

const allSections = [section1, section2, section3, section3Cont, section4, section5, section5Cont, section6, section7, section8];
export default function TutorialPage() {
  return (
    <div className="tutorial-page scanlines flex-1">
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <h1 className="text-center font-display text-5xl text-primary">Tutorial</h1>
        <div className="mt-8 flex flex-col gap-10">
          {allSections.map((section) => (
            <section key={section.title} className="flex flex-col gap-8 border-b border-border/60 pb-10 last:border-0">
              {!section.standalone && <h2 className="text-center font-display text-3xl text-primary">{section.title}</h2>}
              {section.topics.map((topic) => (
                <div key={topic.title} className="flex min-w-0 flex-col gap-3">
                  {section.standalone ? (
                    <h2 className="text-center font-display text-3xl text-primary">{topic.title}</h2>
                  ) : (
                    <h3 className="text-center font-display text-2xl text-primary">{topic.title}</h3>
                  )}

                  {topic.video ? (
                    <a 
                      href={VIDEO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mx-auto aspect-video w-full rounded-lg border bg-card shadow-lg overflow-hidden flex items-center justify-center relative hover:border-primary transition-colors duration-200"
                    >
                      {/* Video Thumbnail Background */}
                      <img 
                        src="/images/default.png" 
                        alt="Retro TV Emulator Video Tutorial"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                      />
                      
                      {/* Central Action Play Icon */}
                      <div className="relative z-10 size-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:bg-red-700 transition-colors duration-200">
                        <svg className="size-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>

                      {/* YouTube Custom Logo Graphic - Top Right Corner */}
                      <div className="absolute top-3 right-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                        <img 
                          src="/images/youtube-logo.png" 
                          alt="YouTube Logo" 
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                    </a>
                  ) : topic.images ? (
                    <div className="flex flex-wrap justify-center gap-4">
                      {topic.images.map((image) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          width={1280}
                          height={720}
                          loading="lazy"
                          className="aspect-video w-full rounded-lg border object-contain shadow-lg sm:w-[calc(50%-0.5rem)]"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="scanlines mx-auto flex aspect-video w-full items-center justify-center gap-3 rounded-lg border bg-card px-4 text-muted-foreground sm:w-[calc(50%-0.5rem)]">
                      <ImageIcon className="size-8 shrink-0" />
                      <span>Tutorial image placeholder</span>
                    </div>
                  )}

                  {topic.intro && <p className="leading-7 text-muted-foreground">{topic.intro}</p>}
                  
                  {topic.steps && (
                    <ol className="flex list-decimal flex-col gap-3 pl-5 text-muted-foreground">
                      {topic.steps.map((step) => <li key={step} className="pl-1 leading-7">{step}</li>)}
                    </ol>
                  )}

                  {topic.example && (
                    <pre className="overflow-x-auto rounded-lg border bg-card p-4 text-sm leading-6 text-muted-foreground"><code>{topic.example}</code></pre>
                  )}

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
