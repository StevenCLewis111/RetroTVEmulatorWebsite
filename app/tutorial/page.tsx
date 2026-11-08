import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";
import { NumberedImageCarousel } from "./numbered-image-carousel";
import { findNumberedImages } from "@/lib/tutorial-images";

// Set to true to show the full tutorial, false to show the "Coming soon..." page.
const SHOW_TUTORIAL = true;

const description =
  "Set up Retro TV Emulator on Windows: TV and music stations, schedules, controls, retro games, DVDs, captions and troubleshooting.";

export const metadata: Metadata = {
  title: "Tutorial | Retro TV Emulator",
  description,
  openGraph: { title: "Tutorial | Retro TV Emulator", description, type: "website" },
  twitter: { card: "summary_large_image" },
};

// One picture spot. src is the base name of the spot, for example "/images/visualizer.png".
// The page looks in public/images for visualizer.png, visualizer1.png, visualizer2.png ... in that order
// (visualizer.png may be left out; upper and lower case do not matter) and lays out what it finds:
// none: a placeholder, one: one picture, two: side by side, three or more: one picture with arrows.
// alt is the description of the spot; alts (optional) describes each picture in order.
type CompareTable = { columns: string[]; rows: { label: string; values: string[] }[] };

type TutorialImage = { src: string; alt: string; alts?: string[] };

type TutorialTopic = {
  title?: string;
  intro?: string;
  points?: { label: string; text: string; compare?: CompareTable }[];
  image?: TutorialImage;
  stretchImages?: boolean;
  noPlaceholder?: boolean;
  video?: boolean;
  steps?: string[];
  example?: string;
  example2?: string;
  exampleIcon?: string;
};

type TutorialSection = { title: string; standalone?: boolean; noPlaceholder?: boolean; lead?: TutorialTopic; topics: TutorialTopic[] };

const sections: TutorialSection[] = [
  {
    title: "Getting Started",
    standalone: true,
    topics: [
      { title: "Start Here - Watch or Read Below", video: true },
      {
        title: "What You Need",
        intro: "Retro TV Emulator will turn your own downloaded video and music library into scheduled TV Stations and Music Visualizer Stations on a Windows PC. Channel 03 adds retro games front end and a DVD/media player (need optical drive for DVDs), Channel 04 is a TV Guide, and there are plenty of theme and static options to have fun with.",
        points: [
          { label: "Computer", text: "A 64-bit Windows 10 or 11 PC. The app checks your hardware at every start and adjusts itself to run its best on any PC that can run windows 10 or 11. Linux and Mac can run Windows programs through compatibility tools; how well depends on the tool and your setup but you can run this on Linux and Mac with those tools." },
          { label: "Keyboard, mouse and controller", text: "A keyboard for the TV and menus controls, a mouse for the file explorer controls, and a compatible controller for playing games (launched games only use a controller). You can also remap a PC remote to control channel changing and menu navigation." },
          { label: "Your media", text: "You will need your own videos, music and commercials (including commercial bumpers). They can stay on any drive, internal or external (for app portability put the app on an external drive with the files you want to travel with it); the app will open a file explorer and you will point to the location of your media. The app will remember and pull from those locations. You can also create shortcuts to media so you can organize media per channel without duplicate files." },
          { label: "For games", text: "You will need your own ROMs, BIOS files and libretro emulator Cores. For now i just point my app at the System, Core, and Roms folders in my Retroarch folder. DVDs work from an optical drive or as .iso backups. You can use the same DVD player as a media player for any video file." },
          { label: "Included tools", text: "Everything you need to run this app is here. No side downloads, installs, or coding needed." },
        ],
        image: { src: "/images/whatyouneed.png", alt: "A desk setup showing the Retro TV Emulator screen with keyboard, mouse and controller", alts: ["A desk setup showing the Retro TV Emulator screen with keyboard, mouse and controller", "A desk setup with a Windows computer, monitor, keyboard, mouse and game controller"] },
      },
      {
        title: "Download & Install",
        stretchImages: true,
        intro: "Download the app from the Download page, unzip the app folder somewhere such as your Desktop, Program Files or portable storage drive for a portable build, and run \"Retro TV Emulator.exe\". Create a shortcut for desktop or pin it to your taskbar or start if you would like. Do not move, rename, or delete anything inside _internal.",
        points: [
          { label: "Your settings live beside the exe", text: "The app saves your channels, settings and schedule positions in retro_config.json next to the exe. Keep that file with the app; if it is missing, the app starts as if it had never been used." },
          { label: "Your media stays put", text: "Shows, movies, music and commercials can stay where they are on your computer. You will point the app at their location. Nothing is copied into the install folder. (For portable builds, make sure all media and files are on the same external drive. The project has folders for you to use but you dont have to)" },
        ],
        image: { src: "/images/Download.png", alt: "Downloading Retro TV Emulator and unzipping the app folder", alts: ["Downloading Retro TV Emulator and unzipping the app folder", "A computer screen showing a folder icon and the file explorer open to its contents"] },
      },
      {
        title: "Organize Your Media & Supported Files",
        noPlaceholder: true,
        intro: "Before adding media, keep each show in its own folder with season folders inside it. Clear folder and file names help the app recognize shows and fill in the guide. There are things in place that hide (dvdrip) type tags, but the clearer your naming and sorting, the better it will run.",
        example: "TV Shows/\n  Show Name/\n    Season 1/\n      Show Name S01E01.mkv\n      Show Name S01E02.mkv\n    Season 2/\n      Show Name S02E01.mkv",
        example2: "Movies/\n  Comedy/\n    Movie Name.mp4\n    Movie Name.mp4\n    Movie Name/\n      1. Movie Name The Rising.mp4\n      2. Movie Name The Falling.mp4",
        exampleIcon: "/images/folder.png",
        points: [
          { label: "Shows and movies", text: "Season 1 and Season 01 folders, and S01E01 or Season 1 Episode 1 file names, are recognized. Videos in folders tagged with \"Movies\" will be treated like movies. Movie parts stay together but need part 1/part 2 tags, and it will reject duplicate names with different file types. The names displayed in the TV Guide will drop season number and other extra text that is not a part of the title." },
          { label: "Caption files", text: "Place your captions file beside the video with the same name, such as Show S01E01.srt or Show S01E01.en.srt. The name must match or it will not grab it. (If you do not have caption files, Live Captions is available for computers with enough memory to run it)." },
          { label: "Video formats", text: "MP4, MKV, AVI, MOV, WEBM, M4V, WMV, FLV, MPG, MPEG, TS and M2TS." },
          { label: "Music formats", text: "MP3, WAV, OGG, FLAC, M4A, AAC and WMA." },
          { label: "Caption formats", text: "SRT, VTT, ASS, SSA, SUB and SMI files." },
        ],
      },
      {
        title: "Booting Up",
        intro: "Each start shows a loading screen while the app gets everything ready. It will build the proper cache files so the first channel plays straight away. It will find your computers hardware specs to adapt to your computer. The first time you boot the program has no channels yet, so every station shows static until you add media.",
        points: [
          { label: "Drives", text: "Internal and external media drives are woken up so a sleeping drive does not delay the first show." },
          { label: "Hardware check", text: "The app counts your CPU cores, threads, and memory. It finds your graphics cards and picks the best one. With this information it will pick your performance mode (Lite, Standard or Performance). It will throttle and adapt as needed to keep things running smoothly.", compare: {
          columns: ["Lite", "Standard", "Performance"],
          rows: [
            { label: "Menu and list speed", values: ["30 FPS", "60 FPS", "60 FPS"] },
            { label: "Warp Screen and Scan Lines", values: ["Greyed out", "Available", "Available"] },
            { label: "Background scans", values: ["Slower", "Normal", "Faster"] },
            { label: "Live captions", values: ["Slower", "Normal", "Faster"] },
            { label: "Music visualizer", values: ["Moves, does not follow the beat", "Follows the music", "Follows the music with full effects"] },
            { label: "Graphics card", values: ["Not needed", "Not needed", "Required"] },
          ],
        } },
          { label: "Saved information", text: "Show lengths, loudness, picture framing and the TV Guide schedule are loaded from the app’s media library, so channels open without waiting for scans or starts scans during boot for shows that may not have been scanned for a clean boot." },
          { label: "Windows Screen Resolution", text: "It scans windows screen resolution for a canvas size for proper letter-boxing across devices." },
          { label: "Real-TV clock", text: "Stations run on the clock like real TV. The program will find your computers clock on boot." },
          { label: "Boot Animation option", text: "If Boot Anim is turned on, the old-TV power-on animation plays as the app starts." },
        ],
        image: { src: "/images/tutorial-boot.png", alt: "Retro TV Emulator boot screen with loading progress" },
      },
    ],
  },
  {
    title: "The Controls",
    topics: [
      {
        title: "Controls Menu",
        intro: "The Controls Menu shows all the controls across the project and what each one does. It is on by default and shows up when you boot the program so you are greeted with a way to understand how to use the program. This can be turned off in the menu and at any time you can use the C key to bring it back up or close it.",
        points: [
          { label: "TV Controls", text: "The Up/Down arrow keys will change channels. The Left/Right arrow keys will change the volume, N mutes/unmute, M opens/closes the Main Menu, C opens/closes the Controls Menu. To minimize or full screen the program, hit Escape then Enter. If you want to go straight to a channel you can use the number keys to type it in." },
          { label: "TV Guide", text: "The W/S keys will move up and down between channels loading a preview window to view what is on each station, A/D move through the time slots moving left and right to see what is on later, Enter will take you to the highlighted channel." },
          { label: "Main Menu", text: "The W/S keys move up and down, A/D move sideways or change a value that adjusts up and down, Enter selects, Escape goes back from sub menus or quits menu. The file explorer is used with the mouse only." },
          { label: "Games", text: "Keyboard (W/A/S/D, Enter, Escape (to quit)) for the game menus navigation, and the controller uses (D-pad, A, B, Start + Select (to quit)). Launched games are played with a controller only." },
          { label: "DVD Player", text: "The DVD player’s keyboard keys and controller buttons are the same as the games for navigation of menus, select and quit but when menus are not open the controller left, down, and right are for rewind, pause/unpause, and fast-forward. The keyboard controls for this are keys with those symbols. Backspace or Y when playing a real DVD or DVD backup will take you back to the main menu." },
        ],
        image: { src: "/images/tutorial-controls.png", alt: "Retro TV Emulator Controls Menu showing keyboard and controller buttons" },
      },
    ],
  },
  {
    title: "System Tab",
    lead: {
        title: "System Menu",
        intro: "The Main Menu opens on the System tab.",
        points: [
          { label: "Games (Channel 03)", text: "Turns the game and DVD channel on or off. When it is off, Channel 03 is skipped while channel surfing and the Games tab is hidden." },
          { label: "TV Guide (Channel 04)", text: "Turns the TV Guide channel on or off." },
          { label: "Controls Menu", text: "The Controls Menu toggle decides if the app shows the Controls Menu when the program boots." },
          { label: "Kiosk", text: "This will lock the app for everyday viewing once it is set up: the scheduling and setup options are hidden so they can not be changed." },
          { label: "Loudness Scan", text: "This turns off if you are using the saved gain number that helps equalize audio from show to show, channel to channel. Turning this off does not stop scans." },
          { label: "Pixel Orbiter", text: "This option moves the on-screen picture and text very slightly over time so nothing sits on the same pixels, to help prevent burn-in. Turning it off shows a warning about burn in." },
          { label: "Closed Captions", text: "This shows captions on the TV stations. The small box beside the switch sets the caption color. The DVD player has its own captions switch. This option is not available in Lite Mode." },
          { label: "Mono Audio", text: "This mixes the left and right sound into one, for a single speaker or one ear. This is for TV's with only one speaker." },
          { label: "Reset All Settings", text: "Puts every setting back to its default and clears the saved scan results and TV Guide data after asking you to confirm. Your media files are not deleted even if moved to the app folders." },
          { label: "Exit Program", text: "This closes the app from the menu." },
        ],
        image: { src: "/images/SystemTab.png", alt: "Retro TV Emulator System tab with the on/off switches" },
    },
    topics: [
      {
        title: "System Menu - Advanced Settings",
        intro: "Advanced Settings from the System:",
        points: [
          { label: "Look for Updates", text: "Every time you boot it will show you if there are updates. If you keep it running or turned off update notifications you can check for a newer version here." },
          { label: "Remote Remapping", text: "Changes which key controls what. This is where you would change controls to work on a PC remote." },
          { label: "Performance Mode", text: "On boot a performance mode is chosen for you but you can change it. Lite has menus at 30 fps, greyed out options that wont work, and slower scans. Standard is all normal scans and access to anything that is not performance. Performance unlocks faster scanning, more games, and higher fps. You can change this manually but if you are booted as a Lite computer, you will not have a performance mode." },
          { label: "GPU/CPU", text: "The best options is chosen on boot but you can change the GPU at any time, even change to CPU only. Performance mode has to use a GPU though so any CPU only computer also will not have a performance mode." },
          { label: "Custom Shell Launcher", text: "This option will start the emulator in place of the Windows desktop so Windows can no longer be accessed. This option combined with Kiosk mode turns the computer into a cable box instead of a computer." },
          { label: "Server Mode", text: "Server Mode allows you to schedule the program and share that scheduling over your wifi with any other computer in the house that has this program on it." },
        ],
        image: { src: "/images/AdvancedSettings.png", alt: "Advanced Settings page" },
      },
      {
        title: "Advanced Settings - Remote Remapping",
        intro: "The Remote Remapping will show every action and the key it uses now. Remap Remote goes through the actions one by one. Press the key or PC remote button you want for each. Remap Numbers does the same for the number keys 0 to 9, these are here for any keyboard or remote not registering the number keys.",
        image: { src: "/images/Remapping.png", alt: "Remote Remapping and Number Remapping page" },
      },
    ],
  },
  {
    title: "Channels Tab",
    topics: [
      {
        title: "Channels Menu",
        intro: "Set up your stations here. You have 40 channels over two pages to choose from and schedule.",
        points: [
          { label: "Channel buttons", text: "Channels 05–44, twenty per page. A green dot means the channel is on and a red dot means it is off. Select a channel to open its settings. Once media is added each one of these channel buttons has its own loading bar to show the progress of media scans." },
          { label: "1/2 Arrow button", text: "This button reveals the other page of channels." },
        ],
        image: { src: "/images/ChannelsTab.png", alt: "Retro TV Emulator Channels tab showing Channels 05 to 24" },
      },
      {
        title: "Channels Menu - Settings",
        intro: "The settings sub menu in the Channels Menu holds options for Bezels and other filters.",
        points: [
          { label: "CRT TV Bezels", text: "Frames the picture inside a vintage TV set. There are 3 options." },
          { label: "Warp Screen", text: "Curves the picture and darkens its corners like the glass of a CRT. This option is only for the bezel and does not work if a bezel is not on. This option is not available in Lite mode." },
          { label: "Boot Anim", text: "This option plays an old CRT TV power-on animation when the app starts." },
          { label: "Static Noise", text: "This option is a fast-moving see-through snow filter over the picture. It mimics bad reception." },
          { label: "Reception Lines", text: "Bands of interference that roll down the picture now and then. It mimics bad reception." },
          { label: "Scan Lines", text: "This option is thin horizontal lines across the picture like a CRT TV. This is not available in Lite mode." },
        ],
        image: { src: "/images/ChannelsTabSettings.png", alt: "Channels Settings page with the CRT effect switches" },
      },
      {
        title: "Channel Menu - Scheduling Settings",
        intro: "Select a channel in the Channels tab. Changes affect what is coming up; what already aired stays as it was. The options, top to bottom:",
        points: [
          { label: "On/Off", text: "Turns the channel on or off. The last channel left on cannot be turned off, and turning off the channel you are watching tunes to the next one." },
          { label: "Music", text: "Makes the channel a music station with a visualizer instead of video; see Music Visualizer Stations." },
          { label: "Name", text: "Up to 12 letters, numbers or spaces, shown on the TV Guide and when you tune in. Enter saves, Escape cancels, Backspace deletes." },
          { label: "Number of Episodes", text: "How many episodes of one series play in a row before another show: One, Two, or Random (one to three, the show with the most episodes getting three). Marathon plays through one whole series or movie collection before moving to the next." },
          { label: "Episode Order", text: "In Order follows the episode numbers and remembers where each show is up to. Random plays every episode once before any repeats." },
          { label: "Pair Shorts Under", text: "Episodes shorter than this share one time slot with another short episode, so two 11-minute cartoons fill a half hour. 15 minutes by default, up to 30; 0 turns pairing off." },
          { label: "Commercials", text: "Turns commercial breaks on. Commercials (Add) opens the commercials page, and Mode picks where the breaks go." },
          { label: "Schedule Length", text: "24-Hour uses one Full Day block. 8-Hour uses Morning (4am–12pm), Evening (12pm–8pm) and Night (8pm–4am). 4-Hour uses six blocks: midnight–4am, 4–8am, 8am–noon, noon–4pm, 4–8pm and 8pm–midnight." },
          { label: "Block buttons", text: "One green button per block. Each opens the file explorer, where you pick that block’s folders and files with the mouse; the number shows how many are added." },
          { label: "Watermark and Holiday Schedule", text: "A channel logo and a set of holiday shows; both have their own sections below." },
          { label: "Current Playing Audio Settings", text: "The audio track and loudness gain of the show playing now; explained below." },
          { label: "Clear Media", text: "Removes all of this channel’s media from its schedule after asking you to confirm. Your files are not deleted." },
        ],
        image: { src: "/images/Scheduling.png", alt: "Channel scheduling settings with a 24-hour schedule", alts: ["Channel scheduling settings with a 24-hour schedule", "Channel scheduling settings with 8-hour blocks", "Channel scheduling settings with 4-hour blocks", "File explorer choosing video folders for a schedule block"] },
      },
      {
        title: "Scheduling Settings - Commercials",
        intro: "Turn Commercials on, then open Commercials (Add). Each button opens the file explorer for its clips.",
        points: [
          { label: "Commercials", text: "The commercial clips played in each break. A file longer than five minutes is not used as a commercial." },
          { label: "Fade-In", text: "A clip played at the start of every show, such as your own “now showing” bumper." },
          { label: "Fade-Out", text: "A clip played when a show ends, such as “we’ll be right back” or “thanks for watching”." },
          { label: "Mode", text: "Interrupt Show puts breaks inside a show at the half-hour marks, at least five minutes apart and no more than two in a half hour. End of Show plays them between shows." },
          { label: "Clear Media", text: "Removes this channel’s commercial clips." },
        ],
        image: { src: "/images/Commercials.png", alt: "Channel commercials page with Commercials, Fade-In and Fade-Out buttons" },
      },
      {
        title: "Scheduling Settings - Audio Settings",
        intro: "Current Playing Audio Settings works on the channel you are watching (tune to it first). It lists the show’s audio tracks, such as languages or a commentary, and its loudness gain.",
        points: [
          { label: "Audio track", text: "Pick a track with Enter; the channel remembers it for that show." },
          { label: "Loudness gain", text: "A and D make the show louder or quieter in 1 dB steps, from −12 to +12. Your change also teaches Smart Loudness, which uses it for the series’ other episodes." },
        ],
        image: { src: "/images/GainAdjustment.png", alt: "Gain button and Audio Track Button" },
      },
      {
        title: "Scheduling Settings - Holiday Schedule",
        intro: "Each channel can have its own Halloween, Christmas and Thanksgiving media. In the channel’s settings open Holiday Schedule; each holiday button opens the file explorer for that holiday’s shows.",
        points: [
          { label: "When they play", text: "A holiday schedule takes over for the three days up to and including the holiday; Thanksgiving is the fourth Thursday of November. Holiday media always plays in random order." },
          { label: "Force", text: "Plays that holiday’s schedule now, whatever the date, until you turn it off. It also shows that holiday’s bezel." },
          { label: "Clear Media", text: "Removes this channel’s holiday media." },
        ],
        image: { src: "/images/Holidays.png", alt: "Channel holiday schedule page with Force switches" },
      },
      {
        title: "Scheduling Settings - Watermark",
        intro: "In a channel’s settings, turn Watermark on and use Add to pick an image with the mouse; it shows in the corner of that station, like a TV network logo. The app keeps its own copy of the image in the channel’s folder. Keep it subtle: a logo that never moves adds burn-in risk.",
        image: { src: "/images/Watermark.png", alt: "Watermark on screen" },
      },
      {
        title: "Scheduling Settings - Visualizer",
        intro: "Turn Music on in a channel’s settings to make it a music station. Music plays on the clock like a TV station, with a visualizer on screen. The options, top to bottom:",
        points: [
          { label: "On/Off, Music and Name", text: "The same as for a TV channel." },
          { label: "Visualizer Engine Style", text: "A and D pick the design: Random (a new one each song) or one of Prism Shards, Liquid Chrome, Pulse Rings, Warp Tunnel, Glow Braid, Equalizer Grid, Particle Flow, Neon Starfield and Lightning. Locking one design shows a burn-in warning." },
          { label: "Audio Files", text: "Opens the file explorer to pick the station’s music; the number shows how many are added." },
          { label: "Loudness Gain", text: "Makes the playing song louder or quieter. It works only while this station is on screen and a song is playing; otherwise the row is greyed and says why." },
          { label: "Reactive Visualizer", text: "Makes the visualizer follow the beat, bass, mids and highs. Each song is analysed once and saved. In Lite mode the visualizer moves without following the music." },
          { label: "Reactive Strength", text: "How strongly the visualizer reacts, from subtle to strong." },
          { label: "Clear Media", text: "Removes the station’s music from its schedule." },
          { label: "On screen", text: "The song’s title shows in the top-left corner and disappears after 60 seconds." },
        ],
        image: { src: "/images/VisualizerSchedulingmenu.png", alt: "Music station settings with visualizer style and reactive strength" },
      },
      {
        title: "Visualizer Choices",
        intro: "In a music station’s settings, A and D pick the visualizer design. Choose Random for a new design with each song, or lock one design.",
        image: { src: "/images/visualizer.png", alt: "The visualizer designs you can choose for a music station", alts: ["The Prism Shards visualizer", "The Liquid Chrome visualizer", "The Pulse Rings visualizer", "The Warp Tunnel visualizer", "The Glow Braid visualizer", "The Equalizer Grid visualizer", "The Particle Flow visualizer", "The Neon Starfield visualizer", "The Lightning visualizer"] },
      },
      {
        title: "Media Scans",
        noPlaceholder: true,
        intro: "When you add media, the app scans each file once and saves the results in its media library, so the TV Guide, the station and a restart all use the same answers.",
        points: [
          { label: "What is scanned", text: "Each file’s length, its picture box (the real picture inside any black bars) and its loudness, in that order. Shows airing now come first, then upcoming commercials, then the next few shows, then everything further out." },
          { label: "Tuning to a channel", text: "The channel you tune to jumps the queue: its show is scanned first so it plays at the right size and volume." },
          { label: "Loudness", text: "With Loudness Scan on, every file is measured against the broadcast target of −24 LUFS so volume stays even between shows and commercials." },
          { label: "Saved results", text: "Unchanged files are never scanned again, even when moved or renamed. Files confirmed broken are taken out of the schedule; a short episode that loses its partner gets a new one." },
        ],
      },
    ],
  },
  {
    title: "Video Tab",
    lead: {
        title: "Video Settings",
        intro: "The Video tab sets the TV stations’ picture. Each slider runs from 0 to 100 with 50 as normal; A and D move it, and holding the key slides it all the way across.",
        points: [
          { label: "Brightness", text: "Lifts or darkens the whole picture." },
          { label: "Contrast", text: "Widens or narrows the gap between dark and bright." },
          { label: "Color", text: "How strong the colours are; all the way down gives a black-and-white broadcast." },
          { label: "Sharpness", text: "Sharpens or softens edges." },
          { label: "Tint", text: "Shifts the colours toward green or purple, like the tint knob on an old set." },
        ],
        image: { src: "/images/VideoTab.png", alt: "Retro TV Emulator Video tab with screen modes and picture sliders" },
    },
    topics: [
      {
        title: "Screen Modes",
        noPlaceholder: true,
        intro: "The buttons along the top of the Video tab decide how each show fills your screen. They apply to Channels 05–44; games and the DVD player have their own.",
        points: [
          { label: "Normal Mode", text: "Keeps the picture’s shape, with bars where it does not fill the screen (black or grey, set in the Theme tab)." },
          { label: "Stretch Fit", text: "Stretches the picture to fill the screen, even if that changes its shape." },
          { label: "Crop Fit", text: "Zooms in to fill the screen and trims the edges, without stretching." },
          { label: "Pan & Scan", text: "Fills the screen like Crop Fit, but the crop moves to follow the action instead of always keeping the middle." },
          { label: "Picture box (Normal Mode)", text: "Many files have black bars recorded into the video itself. Each file is scanned once to find the real picture inside them, and in Normal Mode the app cuts the recorded bars away and fits the real picture to your screen, so an old 4:3 show stored in a widescreen file does not end up as a small box in the middle. Until its scan lands, a file plays with its full frame." },
        ],
      },
    ],
  },
  {
    title: "Theme Tab",
    lead: {
        title: "Theme Settings",
        intro: "The Theme tab sets the look of the menus and the screens between channels. The options, top to bottom:",
        points: [
          { label: "Volume Bar", text: "Volume 1 or Volume 2: the style of the volume and mute display that appears when you press Left, Right or N." },
          { label: "Channel Static", text: "The colour of the static: White, Grey, Rainbow, or Theme (your background colour). It changes the static between channels and tints the Static Noise and Reception Lines effects." },
          { label: "Channel Transition", text: "What shows when you change channel: Static (a short burst of static) or Black (a quick grey TV screen). Either one falls back to the grey screen if the next show is not ready yet." },
          { label: "Letterboxing", text: "The colour of the bars beside a picture that does not fill the screen: Black or Grey." },
          { label: "Menu Opacity", text: "How see-through the menus are, so the show behind stays visible." },
          { label: "Background Color", text: "The colour of the menu backgrounds; slide along the rainbow." },
          { label: "Border/Text Color", text: "The colour of the borders, highlights and titles." },
        ],
        image: { src: "/images/ThemeTab.png", alt: "Retro TV Emulator Theme tab with colour and opacity sliders" },
    },
    topics: [

    ],
  },
  {
    title: "Channel 04",
    lead: {
        title: "TV Guide",
        intro: "Turn on TV Guide (Channel 04) in the System tab, then tune to Channel 04 to see every station’s schedule, with a live preview of the highlighted channel. The grid, the preview and the station all read the same saved information, so what the guide shows is what plays.",
        points: [
          { label: "Moving around", text: "W and S move between channels, A and D move through the time slots, and Enter tunes to the highlighted station." },
          { label: "Checking your schedule", text: "After building a station, look here to see what aired, what is on and what comes next." },
          { label: "Preview", text: "The preview shows what is playing on the highlighted station. If that station’s media cannot load, the preview shows static." },
        ],
        image: { src: "/images/TVGuide.png", alt: "Retro TV Emulator TV Guide showing the channel grid and live preview" },
    },
    topics: [

    ],
  },
  {
    title: "Game Channel (Channel 03)",
    lead: {
        noPlaceholder: true,
        intro: "Setting up in short: turn on Games (Channel 03) in the System tab, open the Games tab, scan for your cores and ROMs, turn on the consoles you want, then tune to Channel 03 and pick a game.",
        steps: [
          "System tab: turn on Games (Channel 03). Channel 03 then appears on the dial and the Games tab appears.",
          "Games tab > Menu Options: use Scan for Cores and Scan for ROMs and point them at your RetroArch folder or your retro collection. The app finds and sorts the emulator cores, ROMs and BIOS files. ZIP, 7Z and RAR archives work.",
          "Turn on the consoles you want (green dot) and open each one to check its core, controller mapping and save profile.",
          "PlayStation games need a BIOS. If the scan did not find one, use Add BIOS inside the PlayStation settings.",
          "Tune to Channel 03, pick a console with the arrows and Enter, pick a game, and play with a controller.",
        ],
    },
    topics: [
      {
        title: "Games Tab",
        intro: "The tiles are Menu Options, DVD Video Interactive and every console; a green dot means on, red off. The arrow turns the page. Below the tiles:",
        points: [
          { label: "All Consoles", text: "Turns every console on or off at once. The DVD player is not changed." },
          { label: "All Settings", text: "A setting you change on one console (controller mapping, screen size, splash screen) is copied to every console, for the save profile shown beside it." },
          { label: "Screen Saver", text: "Starts a moving screen saver when the game menus sit idle, so nothing stays fixed on the screen. Keep it on; turning it off shows a burn-in warning. A key press, controller button or stick move dismisses it." },
          { label: "Screen Saver Timer", text: "How long the menus wait before the screen saver starts (5 minutes by default)." },
          { label: "Game Music", text: "Plays music while you browse the game menus (not while a game or disc is playing)." },
          { label: "Set Music", text: "Picks your own tracks for the game menus; Add opens the file explorer. Without your own music the app plays its built-in track." },
        ],
        image: { src: "/images/GamesTab.png", alt: "Retro TV Emulator Games tab showing the console tiles" },
      },
      {
        title: "Menu Options",
        intro: "Menu Options holds the settings shared by every console:",
        points: [
          { label: "Controller Mapping", text: "Assigns your controller’s buttons for each player. XInput and DirectInput controllers both work." },
          { label: "Stick Deadzone", text: "How far the analogue stick must move before it counts, so a worn stick does not drift." },
          { label: "Background Image", text: "A picture behind the game menus." },
          { label: "Multitap (All Consoles)", text: "Adds players three and four on consoles that support them." },
          { label: "Game Screen Mode", text: "Normal Mode keeps the game’s shape; Stretch Fit fills the screen. Separate from the TV stations’ screen mode." },
          { label: "Scroll Style", text: "How the consoles move on Channel 03: Carousel, Side to Side or Up / Down. The colour box beside it sets the menu text colour." },
          { label: "Scan for Cores and Scan for ROMs", text: "Point them at your RetroArch folder or your retro collection; the app finds and sorts the emulator cores, ROMs and BIOS files." },
          { label: "Clear Cores, Clear BIOS and Clear ROMs", text: "Forget the app’s core, BIOS and ROM lists after asking you to confirm. Clearing cores and BIOS also deletes the copies the app made in main/cores; your own files elsewhere are never deleted." },
        ],
        image: { src: "/images/GameChannelMenu.png", alt: "Games Menu Options page" },
      },
      {
        title: "Menu Options - Controller Mapping",
        intro: "Menu Options > Controller Mapping shows your controller’s buttons, with the name each console uses on one side and the controller button on the other, so you can see what every button does in the game menus.",
        points: [
          { label: "Map Controller", text: "Goes through the buttons one by one: press the button you want for each one." },
          { label: "L-Stick as D-Pad", text: "Lets the left analogue stick move around the menus like the D-pad." },
          { label: "Pick Controller", text: "Chooses which connected controller you are mapping; the number beside it is the player." },
          { label: "Close", text: "Returns to the Games menu." },
        ],
        image: { src: "/images/ControllerMapping.png", alt: "Controller Mapping page showing the controller diagram and button names" },
      },
      {
        title: "Console Settings",
        intro: "Select a console and turn it On; its settings appear:",
        points: [
          { label: "Select Libretro Core (.dll)", text: "Picks the emulator core for this console when more than one was found. Cores are kept in _internal/main/cores/<CONSOLE>/." },
          { label: "Controller Mapping", text: "This console’s button layout." },
          { label: "Save Profiles", text: "Profile 1, 2 or 3 keeps different players’ saves apart; the active one is marked. Saves and save states are kept per game in main/roms/<CONSOLE>/saves/profile1, profile2 or profile3; back these folders up." },
          { label: "Splash Screen", text: "Shows your own loading picture or video while a game starts; Video and Image pick the file. Without one, the console’s normal loading screen shows." },
          { label: "Add BIOS (PlayStation)", text: "Picks a PlayStation BIOS if the scan did not find one. It is kept in cores/PSX/system/; a USA BIOS is used when there are several." },
          { label: "Add/Remove ROMs and Clear ROMs", text: "Add or remove this console’s games with the file explorer, or clear its list." },
          { label: "Change Disc (PlayStation)", text: "Swaps to the next disc of a multi-disc game while it is loaded." },
        ],
        image: { src: "/images/ConsoleSettings.png", alt: "PlayStation console settings with BIOS, save profiles and Change Disc", alts: ["PlayStation console settings with BIOS, save profiles and Change Disc", "Game Boy Advance console settings with core, save profiles and ROMs"] },
      },
      {
        title: "Save Profile Page",
        image: { src: "/images/SaveProfile.png", alt: "Save profile page with Active Profile, Save Now, Load Now, Auto-Save, Auto-Load, Screen Size and TV Bezel" },
        intro: "Open a console’s profile page to manage saves. Everything except Active Profile works on the active profile only.",
        points: [
          { label: "Active Profile", text: "Shows which profile you are on (Profile 1, 2 or 3) and makes it the active one." },
          { label: "Save Now and Load Now", text: "Write or load a save state for the running game in the active profile. If it cannot, a banner says why (for example NO GAME IS RUNNING or NO SAVE FOUND)." },
          { label: "Auto-Save and Auto-Load", text: "Auto Save writes a save state when you quit the game, leave Channel 03 or the screen saver starts. Auto Load loads that state when the game starts." },
          { label: "Screen Size and TV Bezel", text: "Screen Size (Full in the picture) is for handheld consoles. TV Bezel frames the game in a TV set (consoles with a bezel); turning it on shows a burn-in warning. It belongs to the profile and is not drawn while CRT TV Bezels is on for the TV stations." },
        ],
      },
      {
        title: "Console Picker",
        intro: "Tune to Channel 03 to see the console picker. It shows the consoles you turned on, plus the DVD player, one at a time over your background picture, and the line at the bottom shows the keys and controller buttons.",
        points: [
          { label: "Navigate", text: "Move between consoles with the D-pad or W/A/S/D. How they move follows the Scroll Style you chose in Menu Options." },
          { label: "Select", text: "A or Enter opens the console’s game list (or starts the DVD player)." },
          { label: "Back", text: "B or Escape goes back." },
        ],
        image: { src: "/images/ConsolePicker.png", alt: "Channel 03 console picker showing the Super Nintendo logo with the other consoles around it" },
      },
      {
        title: "Game List",
        intro: "Select a console to see its games. The highlighted game is shown in green with arrows beside it; the arrows at the right show that the list continues up or down.",
        points: [
          { label: "Navigate", text: "Move up and down the list with the D-pad or W/A/S/D." },
          { label: "Launch", text: "A or Enter starts the highlighted game." },
          { label: "Back", text: "B or Escape returns to the console picker." },
        ],
        image: { src: "/images/GameList.png", alt: "Channel 03 game list for the Super Nintendo with one game highlighted" },
      },
      {
        title: "Playing Games",
        image: { src: "/images/GameLoading.png", alt: "The game loading screen with a progress bar over a retro Super Nintendo scene" },
        intro: "While a game starts, this loading screen shows a progress bar.",
        points: [
          { label: "Game menus", text: "Keyboard: W/A/S/D move, Enter selects, Escape goes back. Controller: the D-pad moves, A selects, B goes back. The legend at the bottom of each game screen shows both." },
          { label: "Playing", text: "Launched games are played with a controller only." },
          { label: "Save and load hotkeys", text: "During a game, Left Bumper + Right Bumper + Back saves a state, and Left Trigger + Right Trigger + Back loads it." },
          { label: "Quitting", text: "Press Escape, or hold Start and Select together, to open EXIT GAME? with No selected. The game pauses behind it. Choose Yes to quit (the state is saved first when Auto Save is on) and return to the game list; choose No or press Back to keep playing. It closes itself after 30 seconds." },
        ],
      },
      {
        title: "Supported Consoles & Files",
        noPlaceholder: true,
        points: [
          { label: "Consoles", text: "Game Boy, Game Boy Color, Game Boy Advance, NES, SNES, Genesis, 32X, Master System, Game Gear, Nintendo 64, PlayStation, Atari 2600, Neo Geo Pocket and Neo Geo Pocket Color. Each needs a libretro .dll core." },
          { label: "Cartridge formats", text: "GB .gb; GBC .gbc/.gb; GBA .gba; NES .nes; SNES .smc/.sfc; Genesis .md/.gen/.bin/.smd; 32X .32x/.bin/.smd/.md; Master System .sms; Game Gear .gg." },
          { label: "Other formats", text: "N64 .n64/.z64/.v64; PlayStation .cue/.bin/.iso/.chd/.pbp/.img; Atari 2600 .a26/.bin; Neo Geo Pocket .ngp; Neo Geo Pocket Color .ngc." },
        ],
      },
      {
        title: "DVD & Media Player",
        intro: "Choose DVD on Channel 03 to play movie DVDs from your optical drive, DVD .iso backups, or plain video files. No core, BIOS or save profile is needed. Movie files and .iso files can go in main/roms/DVD/ inside _internal. Movie DVD menus work; interactive DVD games are not supported. Settings are in Games tab > DVD Video Interactive; the DVD player is always on.",
        points: [
          { label: "Button Mapping", text: "Changes which keys play, pause, skip and return to the disc menu." },
          { label: "Screen Mode", text: "Normal Mode, Stretch Fit, Crop Fit or Pan & Scan for movies, separate from the TV stations." },
          { label: "Change Audio Selection", text: "Picks the movie’s audio track (language or commentary) while a disc is playing; greyed otherwise." },
          { label: "Splash Screen", text: "Your own picture or video while a disc loads; Video and Image pick the file." },
          { label: "Captions", text: "Captions for movies, separate from the TV stations’ captions. Not available in Lite mode." },
          { label: "Resume", text: "Starts a disc again where you stopped it." },
          { label: "Keyboard", text: "Play pauses and plays. Tap Rewind or Fast Forward to skip, hold to seek. Backspace returns to the disc’s main menu. W/A/S/D navigate disc menus and Yes/No popups, Enter confirms. Escape asks Quit? with No selected." },
          { label: "Controller", text: "Down pauses and plays. Tap Left or Right to skip, hold to seek. The D-pad navigates, A selects, B goes back, and Y returns to the disc’s main menu. Hold Start and Select to open Quit?." },
        ],
        image: { src: "/images/DVDMenu.png", alt: "DVD Video Interactive settings" },
      },
    ],
  },
  {
    title: "Extras",
    topics: [
      {
        title: "TV and Game Bezels",
        intro: "A bezel for TV stations and game consoles is the frame of vintage TV sets and handheld consoles drawn around the picture. Turn on CRT TV Bezels in Channels > Settings and the stations play inside the screen of the TV set. This bezel is for the whole program. There are matching bezels you can turn on for each game console in each console’s sub menu, but it’s only for Channel 03 when that console launches. Game handheld consoles each have their own custom bezels that match their handheld’s screen.",
        points: [
          { label: "Bezel Style", text: "There are 3 CRT TV bezels. The first one matches the boot loading image. The second style is a zoomed in version of the first one for better viewing. The third one is an older TV set." },
          { label: "Warp Screen", text: "Warping the screen makes the bezels take on a real CRT TV feel, warping the image, menus, and other on screen UI. This option only works if the bezels are on." },
          { label: "Burn-in", text: "A fixed frame that never moves adds burn-in risk on long sessions, so turning a bezel on shows a warning." },
          { label: "Console bezels", text: "Each console sub menu has a bezel it can use while that console is launched. All game consoles use the CRT TV bezels but each handheld console has a bezel that matches the screen of that handheld." },
        ],
        image: { src: "/images/Bezel.png", alt: "TV stations playing inside the TV bezel styles", alts: ["A retro TV bezel with a blue glow and the channel number in its window, shown in a room scene", "A close-up of the retro TV bezel with the channel number window", "The wood-cabinet TV bezel style with static on its screen"] },
      },
      {
        title: "Holiday Bezels - Halloween",
        image: { src: "/images/HalloweenBezel.png", alt: "The TV bezels in their Halloween versions", alts: ["The blue-glow TV bezel in its Halloween version, shown in a room scene", "A close-up of the blue-glow TV bezel in its Halloween version", "The wood-cabinet TV bezel in its Halloween version"] },
      },
      {
        title: "Holiday Bezels - Thanksgiving",
        image: { src: "/images/ThanksgivingBezel.png", alt: "The TV bezels in their Thanksgiving versions", alts: ["The blue-glow TV bezel in its Thanksgiving version, shown in a room scene", "A close-up of the blue-glow TV bezel in its Thanksgiving version", "The wood-cabinet TV bezel in its Thanksgiving version"] },
      },
      {
        title: "Holiday Bezels - Christmas",
        image: { src: "/images/ChristmasBezel.png", alt: "The TV bezels in their Christmas versions", alts: ["The blue-glow TV bezel in its Christmas version, shown in a room scene", "A close-up of the blue-glow TV bezel in its Christmas version", "The wood-cabinet TV bezel in its Christmas version"] },
      },
      {
        title: "Holiday Bezels",
        noPlaceholder: true,
        intro: "Each bezel style can have a Halloween, Christmas and Thanksgiving version. During a holiday the app swaps the bezel for that style’s holiday 3 days in advance of the holiday, and puts the normal one back when the holiday is over. You can also force on a channel’s Holiday Scheduling either for testing or for longer holiday runs (more than 3 days).",
      },
      {
        title: "Captions",
        image: { src: "/images/Captions.png", alt: "A TV station showing captions along the bottom of the picture" },
        intro: "Captions use subtitles inside the video or a caption file beside it. When a video has neither, live speech captions will produce text for you instead. This option is limited to your memory, if you do not have enough memory to use it, the program will grey out that option.",
      },
      {
        title: "When a Channel Can’t Play",
        image: { src: "/images/CantPlay.png", alt: "Static with a red banner at the bottom explaining why the channel cannot play" },
        intro: "A channel with no media shows moving static. When the program boots for the first time with no media it starts with a static screen. If a station’s media cannot load, a drive is missing or stalls, or a file is broken, the station shows the same static with a short red banner explaining why. The banner goes away after a while to protect the screen, and the app keeps retrying in the background. Check that the files still exist and external drives are connected and awake.",
      },
      {
        title: "Updates",
        image: { src: "/images/UpdatePopup.png", alt: "The update pop-up asking Update and Restart with Yes and No buttons" },
        intro: "The app checks for a new version when it boots and asks before installing. You can check a box that will stop these notifications on boot. There is a manual Update button in Advanced Settings that you can use to check if you have notifications off. If you manually check Updates, you can uncheck the box at any time and get notifications again. If you accept the update, a load bar will start and when done, it will restart the app with updates installed.",
      },
      {
        title: "Burn-In Safeguards",
        noPlaceholder: true,
        intro: "Every menu, pop up, or channel has some kind of burn in protection. Menus close after 60 seconds idle, the Pixel Orbiter moves on-screen elements, the game menu screen saver starts when idle for the set time in menu, the TV Guide will take you to the previewed station when idle, all channels fall back to static, the app reboots if it crashes (only helps burn in, if Kiosk mode is on and it launches full screen), and song titles disappear after 60 seconds.",
        points: [
          { label: "Warnings", text: "Turning off the Pixel Orbiter or the screen saver, turning on a bezel, or locking a music station to one visualizer shows a warning about burn in. There is a do not show this again box you can check for each one if you don't want to be reminded later." },
          { label: "Display care", text: "These help reduce the risk; they cannot remove it. Follow your display maker’s advice, especially for OLED, plasma and CRT screens. All burn in is on by default, with warnings when turned off or using features that increase the risk of burn in. I am not responsible for burn in." },
        ],
      },
      {
        title: "Kiosk Mode",
        noPlaceholder: true,
        intro: "Once everything is set up, you can turn on Kiosk Mode. Scheduling and setup are hidden while the picture, theme and game choices stay available, and the C key no longer opens the Controls Menu and it launches in full screen. In Kiosk Mode the System tab shows only the Kiosk switch and Exit Program. It hides the Channels Tab. Turn Kiosk off to make changes again.",
      },
      {
        title: "Files, Backups & Problem Reports",
        noPlaceholder: true,
        points: [
          { label: "Settings", text: "retro_config.json in the app folder holds your settings, channels and schedule positions; back it up before big changes or you can delete it to start fresh but there is a setting in the app that does the same thing." },
          { label: "Media library", text: "main/media_library/library.sqlite3 holds the scan results. Files are recognized by their content, so moved or renamed files keep their results." },
          { label: "Other app data", text: "main/cores (cores and BIOS), main/roms (games, DVD files and saves), main/images (bezels, logos, backgrounds, watermarks, splash art and the key pictures), main/videos, main/audio, main/captions and main/models/whisper." },
          { label: "Problem reports", text: "Close the app, then send the files from the logs\\temp folder: app_log.txt, crash_log.txt, crash_log_previous.txt, vlc-debug.log, vlc-debug_previous.log and tester_report.txt, plus retro_config.json for settings problems and logs\\update_helper.log for update problems. Say what you did and roughly when. Send this to the Contact/Bug Reports button below." },
        ],
      },
    ],
  },
];

const allSections = sections;

function TutorialImages({ spot, title, stretch }: { spot: TutorialImage; title: string; stretch?: boolean }) {
  const files = findNumberedImages(spot.src);
  const alts = files.map((_, i) => spot.alts?.[i] ?? (files.length > 1 ? `${spot.alt} (${i + 1} of ${files.length})` : spot.alt));

  if (files.length === 0) {
    return (
      <div className="scanlines mx-auto flex aspect-video w-full items-center justify-center gap-3 rounded-lg border bg-card px-4 text-muted-foreground sm:w-[calc(50%-0.5rem)]">
        <ImageIcon className="size-8 shrink-0" aria-hidden="true" />
        <span>Tutorial image placeholder</span>
      </div>
    );
  }
  if (files.length > 2) {
    return <NumberedImageCarousel images={files.map((src, i) => ({ src, alt: alts[i] }))} title={title} />;
  }
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${files.length > 1 ? "sm:-mx-10" : ""}`}>
      {files.map((src, i) => (
        <img key={src} src={src} alt={alts[i]} loading="lazy" className={`aspect-video w-full rounded-lg border object-fill shadow-lg ${files.length > 1 ? "sm:w-[calc(50%-0.5rem)]" : "sm:w-[70%]"}`} />
      ))}
    </div>
  );
}

function TutorialComingSoon() {
  return (
    <div className="tutorial-page scanlines flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-lg border bg-card px-6 py-12 text-center shadow-lg sm:px-12">
        <h1 className="font-display text-4xl text-primary sm:text-5xl">Tutorial</h1>
        <p className="mt-6 text-2xl text-foreground">Coming soon...</p>
      </div>
    </div>
  );
}

function TopicBody({ topic, noPlaceholder }: { topic: TutorialTopic; noPlaceholder?: boolean }) {
  const label = topic.title ?? "Tutorial";
  return (
    <>
      {topic.video ? (
        <a href="https://youtu.be/EW4z56b0Lag?si=cGGTjEIkHyKgvlcn" target="_blank" rel="noopener noreferrer" className="group mx-auto aspect-video w-full rounded-lg border bg-card shadow-lg overflow-hidden flex items-center justify-center relative hover:border-primary transition-colors duration-200">
          <img src="/images/default.png" alt="Retro TV Emulator Video Tutorial" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="relative z-10 size-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:bg-red-700 transition-colors duration-200">
            <svg className="size-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <div className="absolute top-3 right-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            <img src="/images/youtube-logo.png" alt="YouTube Logo" className="h-3.5 w-auto object-contain" />
          </div>
        </a>
      ) : topic.image ? (
        <TutorialImages spot={topic.image} title={label} stretch={topic.stretchImages} />
      ) : noPlaceholder || topic.noPlaceholder ? null : (
        <div className="scanlines mx-auto flex aspect-video w-full items-center justify-center gap-3 rounded-lg border bg-card px-4 text-muted-foreground sm:w-[calc(50%-0.5rem)]">
          <ImageIcon className="size-8 shrink-0" aria-hidden="true" />
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
        <div className="flex flex-wrap justify-center gap-4">
          {[topic.example, topic.example2].filter((box): box is string => Boolean(box)).map((box) => (
            <div key={box} className="min-w-[21rem] max-w-full flex-1 overflow-x-auto rounded-lg border bg-card font-mono text-sm leading-6 text-muted-foreground" style={{ padding: "1rem 1.25rem" }}>
              {box.split("\n").map((line, i) => {
                const indent = line.length - line.trimStart().length;
                const isFolder = line.trim().endsWith("/");
                return (
                  <div key={i} className="flex items-center gap-2 whitespace-pre" style={{ paddingLeft: `${indent / 2 * 1.25}rem` }}>
                    {topic.exampleIcon && isFolder ? <img src={topic.exampleIcon} alt="" aria-hidden="true" className="size-5 shrink-0 object-contain" /> : topic.exampleIcon ? <span className="size-5 shrink-0" aria-hidden="true" /> : null}
                    <span>{line.trim().replace(/\/$/, "")}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      {topic.points && (
        <ul className="flex list-disc flex-col gap-3 pl-5 text-muted-foreground">
          {topic.points.map((point) => (
            <li key={point.label} className="pl-1 leading-7">
              <strong className="font-medium text-foreground">{point.label}: </strong>{point.text}
              {point.compare && (
                <div className="mt-3 overflow-hidden rounded-lg border bg-card text-sm">
                  <div className="hidden grid-cols-[8.5rem_1fr_1fr_1fr] gap-x-5 border-b bg-muted/40 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:grid">
                    <span />
                    {point.compare.columns.map((column) => (
                      <span key={column}>{column}</span>
                    ))}
                  </div>
                  {point.compare.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-x-5 gap-y-1 border-b px-4 py-3 last:border-b-0 sm:grid-cols-[8.5rem_1fr_1fr_1fr]"
                    >
                      <span className="font-medium text-foreground">{row.label}</span>
                      {row.values.map((value, i) => (
                        <span key={point.compare!.columns[i]} className="text-muted-foreground">
                          <span className="mr-1 text-xs uppercase tracking-wider text-foreground/70 sm:hidden">
                            {point.compare!.columns[i]}:
                          </span>
                          {value}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function TutorialContent() {
  return (
    <div className="tutorial-page scanlines flex-1">
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <h1 className="text-center font-display text-5xl text-primary">Tutorial</h1>
        <div className="mt-8 flex flex-col gap-5">
          {allSections.map((section) => (
            <section key={section.title} className={`flex flex-col ${section.standalone ? "gap-10" : "gap-8"} border-b border-border/60 pb-10 last:border-0`}>
              {!section.standalone && <h2 className="text-center font-display text-3xl text-primary" style={{ textDecoration: "underline", textUnderlineOffset: "0.3em", textDecorationThickness: "2px" }}>{section.title}</h2>}
              {section.lead && (
                <div className="flex min-w-0 flex-col gap-3">
                  {section.lead.title && <h3 className="text-center font-display text-2xl text-primary">{section.lead.title}</h3>}
                  <TopicBody topic={section.lead} noPlaceholder={section.noPlaceholder} />
                </div>
              )}
              {section.topics.map((topic, topicIndex) => (
                <div key={topic.title} className={`flex min-w-0 flex-col gap-3 ${section.standalone && topicIndex > 0 ? "border-t border-border/60 pt-5" : ""}`}>
                  {section.standalone ? (
                    <h2 className="text-center font-display text-3xl text-primary" style={{ textDecoration: "underline", textUnderlineOffset: "0.3em", textDecorationThickness: "2px" }}>{topic.title}</h2>
                  ) : (
                    <h3 className="text-center font-display text-2xl text-primary">{topic.title}</h3>
                  )}
                  <TopicBody topic={topic} noPlaceholder={section.noPlaceholder} />
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function TutorialPage() {
  return SHOW_TUTORIAL ? <TutorialContent /> : <TutorialComingSoon />;
}
