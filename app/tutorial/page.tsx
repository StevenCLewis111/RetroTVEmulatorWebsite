import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";
import { NumberedImageCarousel } from "./numbered-image-carousel";

// Set to true to show the full tutorial, false to show the "Coming soon..." page.
const SHOW_TUTORIAL = false;

const description =
  "Set up Retro TV Emulator on Windows: TV and music stations, schedules, controls, retro games, DVDs, captions and troubleshooting.";

export const metadata: Metadata = {
  title: "Tutorial | Retro TV Emulator",
  description,
  openGraph: { title: "Tutorial | Retro TV Emulator", description, type: "website" },
  twitter: { card: "summary_large_image" },
};

type TutorialTopic = {
  title: string;
  intro?: string;
  points?: { label: string; text: string }[];
  images?: { src: string; alt: string }[];
  carousel?: boolean;
  stretchImages?: boolean;
  noPlaceholder?: boolean;
  video?: boolean;
  steps?: string[];
  example?: string;
};

type TutorialSection = { title: string; standalone?: boolean; noPlaceholder?: boolean; topics: TutorialTopic[] };

const sections: TutorialSection[] = [
  {
    title: "Getting Started",
    standalone: true,
    topics: [
      { title: "Start Here - Watch or Read Below", video: true },
      {
        title: "What You Need",
        intro: "Retro TV Emulator turns your own video and music library into scheduled television and Visualizer stations on a Windows PC. Channel 03 adds retro games and a DVD/media player. There is also a TV Guide and plenty of theme options and static options",
        points: [
          { label: "Computer", text: "A 64-bit Windows 10 or 11 PC. The app checks your hardware at every start and adjusts itself to run its best on each PC. Linux and Mac can run Windows programs through compatibility tools; how well depends on the tool and your setup." },
          { label: "Keyboard, mouse and controller", text: "A keyboard for the TV and menus, a mouse for the file explorer, and a compatible controller for playing games. A PC remote can be mapped to the TV controls." },
          { label: "Your games and media", text: "Your own videos, music, ROMs, BIOS files and emulator cores. DVDs work from an optical drive or as .iso backups. Point the Games tab at your RetroArch folder and it finds and sorts the ROMs, BIOS and cores for you." },
          { label: "Included tools", text: "VLC, ffmpeg and 7-Zip come with the app; nothing else needs installing." },
        ],
        images: [{ src: "/images/whatyouneed1.png", alt: "A desk setup with a Windows computer, monitor, keyboard, mouse and game controller" }, { src: "/images/whatyouneed2.png", alt: "A desk setup showing the Retro TV Emulator screen with keyboard, mouse and controller" }],
      },
      {
        title: "Installing & First Start",
        stretchImages: true,
        intro: "Unzip the app folder somewhere such as your Desktop, keep everything in it together, and run Retro TV Emulator.exe. Do not move or rename anything inside _internal.",
        points: [
          { label: "Your media stays put", text: "Shows, movies, music and commercials can stay on any drive. You choose their folders inside the app; nothing is copied into the install folder." },
          { label: "First setup order", text: "Press M for the Main Menu. Check the System tab and Advanced Settings first, then open Channels to build your first station. This tutorial follows that order." },
        ],
        images: [{ src: "/images/Download1.png", alt: "Downloading Retro TV Emulator and unzipping the app folder" }, { src: "/images/Download2.png", alt: "A computer screen showing a folder icon and the file explorer open to its contents" }],
      },
      {
        title: "The Boot Process",
        intro: "Each start shows a loading screen while the app gets everything ready, so the first channel plays straight away.",
        points: [
          { label: "Drives", text: "Internal and external media drives are woken up so a sleeping drive does not delay the first show." },
          { label: "Hardware check", text: "The app counts your CPU cores and threads, finds your graphics cards and picks Lite, Standard or Performance mode. It keeps back only what Windows needs and turns the background work up and down while you watch, so playback always comes first." },
          { label: "Saved information", text: "Show lengths, loudness, picture framing and the TV Guide schedule are loaded from the app’s media library, so channels open without waiting for scans." },
          { label: "Screen layout", text: "Screens shaped 4:3, 5:4 or 16:10 use the 4:3 layout; 16:9, 21:9 and 32:9 screens use the 16:9 layout." },
        ],
        images: [{ src: "/images/tutorial-boot.png", alt: "Retro TV Emulator boot screen with loading progress" }],
      },
    ],
  },
  {
    title: "The Controls Menu",
    topics: [
      {
        carousel: true,
        intro: "The Controls Menu shows every key and controller button as a picture, one page per area. It opens at start unless you turn Controls Menu (Nav Info) off in the System tab. Press C or Escape to close it and A or D to turn the pages; the line at the bottom of every page reminds you.",
        points: [
          { label: "Page 1: TV Controls", text: "Up/Down change channel, Left/Right change volume, N mutes, M opens the Main Menu, C opens and closes this menu, Escape then Enter minimizes or goes full screen, and the number keys tune straight to a channel." },
          { label: "Page 2: TV Guide", text: "W/S move between channels, A/D move through the time slots, Enter tunes to the highlighted channel." },
          { label: "Page 3: Main Menu", text: "W/S move up and down, A/D move sideways or change a value, Enter selects, Escape goes back or minimizes. The file explorer is used with the mouse only." },
          { label: "Pages 4 and 5: Games", text: "Keyboard (W/A/S/D, Enter, Escape) for the game menus, and the controller page (D-pad, A, B, Start + Select). Launched games are played with a controller only." },
          { label: "Pages 6 and 7: DVD Player", text: "The DVD player’s keyboard keys and controller buttons; see DVD Controls below." },
        ],
        images: [{ src: "/images/tutorial-controls.png", alt: "Retro TV Emulator Controls Menu showing keyboard and controller buttons" }],
      },
      {
        title: "Watching TV",
        points: [
          { label: "Changing channels", text: "Up and Down change the channel. Flip as fast as you like: the screen stays dark and only the channel you stop on loads." },
          { label: "Direct tuning", text: "Type two digits, such as 0 then 7 for Channel 07. A single digit tunes after a short pause." },
          { label: "Volume", text: "Left and Right change the volume; N mutes and unmutes. The volume bar style is set in the Theme tab." },
          { label: "Window", text: "Escape, then Enter, switches between a minimized window and full screen." },
          { label: "Channel dial", text: "Channel 03 is Games/DVD, Channel 04 is the TV Guide, and Channels 05–44 are your 40 stations. Channels that are turned off are skipped." },
          { label: "Idle menus", text: "Menus and the Controls Menu close by themselves after 60 seconds without a key press." },
        ],
 	images: [{ src: "/images/ChannelNumber.png", alt: "Static screen with channel number" }],
      },
    ],
  },
  {
    title: "System Menu & Advanced Settings",
    topics: [
      {
        title: "System Menu",
        intro: "Press M; the Main Menu opens on the System tab. Each switch is turned on or off with Enter. Set these before building your stations.",
        points: [
          { label: "Games (Channel 03)", text: "Turns the game and DVD channel on or off. When it is off, Channel 03 is skipped and the Games tab is hidden." },
          { label: "TV Guide (Channel 04)", text: "Turns the TV Guide channel on or off." },
          { label: "Controls Menu (Nav Info)", text: "Whether the Controls Menu opens every time the app starts. You can still open it any time with C." },
          { label: "Kiosk (Hide Scheduling)", text: "Locks the app for everyday viewing once it is set up: the scheduling and setup options are hidden. See Kiosk Mode at the end." },
          { label: "Loudness Scan", text: "Measures every file’s loudness so shows, commercials and music play at the same volume. Leave it on; with it off, no gain is applied and the loudness gain rows are greyed." },
          { label: "Pixel Orbiter", text: "Moves the on-screen picture and text very slightly over time so nothing sits on the same pixels, to help prevent burn-in. Turning it off shows a warning." },
          { label: "Closed Captions", text: "Shows captions on the TV stations. The small box beside the switch sets the caption colour. The DVD player has its own captions switch. Not available in Lite mode." },
          { label: "Mono Audio", text: "Mixes the left and right sound into one, for a single speaker or one ear." },
          { label: "Advanced Settings", text: "Opens the next page of options." },
          { label: "Reset All Settings", text: "Puts every setting back to its default after asking you to confirm. Your media files and the saved scan results are not deleted." },
          { label: "Exit Program", text: "Closes the app." },
        ],
        images: [{ src: "/images/SystemTab.png", alt: "Retro TV Emulator System tab with the on/off switches" }],
      },
      {
        title: "Advanced Settings",
        intro: "Open Advanced Settings from the System tab for the hardware choices and a dedicated TV setup. The options, top to bottom:",
        points: [
          { label: "Look for Updates", text: "Checks for a newer version now and offers to install it; see Updates at the end." },
          { label: "Remote Remapping", text: "Changes which key or remote button does each action; explained below." },
          { label: "Performance Mode", text: "Enter steps through Lite, Standard and Performance. Lite keeps background work light, moves the music visualizer without following the beat, and turns off Warp Screen, Scan Lines and captions. Standard is the normal mode. Performance allows more background work, faster scans and the full reactive visualizer. A PC rated as weak at start cannot pick Performance. In every mode the background work slows down by itself when playback needs the PC." },
          { label: "GPU/CPU", text: "Enter steps through your graphics cards (largest memory first) and CPU Only. The chosen card draws the picture; pick a laptop’s dedicated graphics card here. If the card has problems, the app switches to the CPU by itself." },
          { label: "Custom Shell Launcher", text: "Starts the emulator in place of the Windows desktop when the PC turns on, for a PC used only as a TV. With it on, the System tab also shows Turn Off Computer, which shuts Windows down." },
          { label: "Server Mode", text: "Greyed out; not available in this version." },
        ],
        images: [{ src: "/images/AdvancedSettings.png", alt: "Advanced Settings page" }],
      },
      {
        title: "Remote Remapping",
        intro: "Open Advanced Settings > Remote Remapping to see every action and the key it uses now. Remap Remote goes through the actions one by one: press the key or PC remote button you want for each, or Backspace to skip one. Remap Numbers does the same for the number keys 0 to 9, so a remote’s number buttons can tune channels.",
        points: [
          { label: "Actions you can remap", text: "Nav Up, Nav Down, Nav Left, Nav Right, Select, Channel Up, Channel Down, Volume Up, Volume Down, Mute, Menu, Controls Menu and Back/Minimize." },
          { label: "Defaults", text: "W, S, A, D, Enter, Up, Down, Right, Left, N, M, C and Escape. The controls in this tutorial are the default keys." },
        ],
        images: [{ src: "/images/Remapping1.png", alt: "Remote Remapping and Number Remapping page" }],
      },
    ],
  },
  {
    title: "Channels Menu",
    topics: [
      {
        title: "The Channel List",
        intro: "Open the Channels tab to see Channels 05–44 over two pages; the arrow at the bottom right turns the page. A green dot means the channel is on, red means off. Select a channel to open its settings, or Settings (bottom left) for the effects shared by all stations.",
        images: [{ src: "/images/ChannelsTab.png", alt: "Retro TV Emulator Channels tab showing Channels 05 to 24" }],
      },
      {
        title: "Channel Settings (Effects)",
        intro: "Channels > Settings sets the look of every station. Each switch turns its effect on or off.",
        points: [
          { label: "CRT TV Bezels", text: "Frames the picture inside a vintage TV set. A fixed frame on screen adds burn-in risk on long sessions, so a warning reminds you." },
          { label: "Warp Screen", text: "Curves the picture and darkens its corners like the glass of a CRT. Not available in Lite mode." },
          { label: "Boot Anim", text: "Plays the old-TV power-on animation when the app starts." },
          { label: "Static Noise", text: "Light snow over the picture, stronger or weaker with the reception, like an aerial signal." },
          { label: "Reception Lines", text: "Bands of interference that roll down the picture now and then." },
          { label: "Scan Lines", text: "Thin horizontal lines across the picture like a CRT. Not available in Lite mode." },
        ],
        images: [{ src: "/images/ChannelsTabSettings.png", alt: "Channels Settings page with the CRT effect switches" }],
      },
      {
        title: "Organize Your Media & Supported Files",
        noPlaceholder: true,
        intro: "Keep each show in its own folder with season folders inside it. Clear folder and file names help the app recognise shows and fill in the guide.",
        example: "TV Shows/\n  Show Name/\n    Season 1/\n      Show Name S01E01.mkv\n      Show Name S01E02.mkv\n    Season 2/\n      Show Name S02E01.mkv",
        points: [
          { label: "Shows and movies", text: "Season 1 and Season 01 folders, and S01E01 or Season 1 Episode 1 file names, are recognised. Videos over 80 minutes are treated as movies. Movie parts stay together, and duplicate copies of an episode are scheduled once." },
          { label: "Video formats", text: "MP4, MKV, AVI, MOV, WEBM, M4V, WMV, FLV, MPG, MPEG, TS and M2TS." },
          { label: "Music formats", text: "MP3, WAV, OGG, FLAC, M4A, AAC and WMA." },
          { label: "Caption files", text: "SRT, VTT, ASS, SSA, SUB and SMI files beside the video with the same name, such as Show S01E01.srt or Show S01E01.en.srt." },
        ],
      },
      {
        title: "Media Scans",
        noPlaceholder: true,
        intro: "When you add media, the app scans each file once and saves the results in its media library, so the TV Guide, the station and a restart all use the same answers.",
        points: [
          { label: "What is scanned", text: "Each file’s length, its picture box (the real picture inside any black bars) and its loudness, in that order. Shows airing now come first, then upcoming commercials, then the next few shows, then everything further out." },
          { label: "Tuning to a channel", text: "The channel you tune to jumps the queue: its show is scanned first so it plays at the right size and volume, and background scans wait until its picture is steady." },
          { label: "Loudness", text: "With Loudness Scan on, every file is measured against the broadcast target of −24 LUFS so volume stays even between shows and commercials." },
          { label: "Saved results", text: "Unchanged files are never scanned again, even when moved or renamed. Files confirmed broken are taken out of the schedule; a short episode that loses its partner gets a new one." },
        ],
      },
    ],
  },
  {
    title: "Each Channel’s Settings",
    topics: [
      {
        title: "The Channel’s Settings Page",
        intro: "Select a channel in the Channels tab. Stations run on the clock like real TV: tune in halfway through a show and you join it halfway through, and after the app has been closed the schedule catches up to real time. Changes affect what is coming up; what already aired stays as it was. The options, top to bottom:",
        points: [
          { label: "On/Off", text: "Turns the channel on or off. The last channel left on cannot be turned off, and turning off the channel you are watching tunes to the next one." },
          { label: "Music", text: "Makes the channel a music station with a visualizer instead of video; see Music Visualizer Stations." },
          { label: "Name", text: "Up to 12 letters, numbers or spaces, shown on the TV Guide and when you tune in. Enter saves, Escape cancels, Backspace deletes." },
          { label: "Number of Episodes", text: "How many episodes of one series play in a row before another show: One, Two, or Random (one to three, the show with the most episodes getting three). Marathon plays through one whole series or movie collection before moving to the next." },
          { label: "Episode Order", text: "In Order follows the episode numbers and remembers where each show is up to. Random plays every episode once before any repeats." },
          { label: "Pair Shorts Under", text: "Episodes shorter than this share one time slot with another short episode, so two 11-minute cartoons fill a half hour. 15 minutes by default, up to 30; 0 turns pairing off." },
          { label: "Commercials", text: "Turns commercial breaks on. Commercials (Add) opens the commercials page below, and Mode picks where the breaks go." },
          { label: "Schedule Length", text: "24-Hour uses one Full Day block. 8-Hour uses Morning (4am–12pm), Evening (12pm–8pm) and Night (8pm–4am). 4-Hour uses six blocks: midnight–4am, 4–8am, 8am–noon, noon–4pm, 4–8pm and 8pm–midnight." },
          { label: "Block buttons", text: "One green button per block. Each opens the file explorer, where you pick that block’s folders and files with the mouse; the number shows how many are added." },
          { label: "Watermark", text: "Shows a channel logo in the corner; Add picks the image." },
          { label: "Holiday Schedule", text: "Opens the holiday page below." },
          { label: "Current Playing Audio Settings", text: "The audio track and loudness gain of the show playing now; explained below." },
          { label: "Clear Media", text: "Removes all of this channel’s media from its schedule after asking you to confirm. Your files are not deleted." },
        ],
        images: [
          { src: "/images/Scheduling.png", alt: "Channel scheduling settings with a 24-hour schedule" },
          { src: "/images/scheduling1.png", alt: "Channel scheduling settings with 8-hour blocks" },
          { src: "/images/Scheduling2.png", alt: "Channel scheduling settings with 4-hour blocks" },
          { src: "/images/Scheduling3.png", alt: "File explorer choosing video folders for a schedule block" },
        ],
      },
      {
        title: "Commercials",
        intro: "Turn Commercials on, then open Commercials (Add). Each button opens the file explorer for its clips.",
        points: [
          { label: "Commercials", text: "The commercial clips played in each break. A file longer than five minutes is not used as a commercial." },
          { label: "Fade-In", text: "A clip played going into a break, such as your own “we’ll be right back” bumper." },
          { label: "Fade-Out", text: "A clip played coming out of a break, such as “now back to our show”." },
          { label: "Mode", text: "Interrupt Show puts breaks inside a show at the half-hour marks, at least five minutes apart and no more than two in a half hour. End of Show plays them between shows." },
          { label: "Clear Media", text: "Removes this channel’s commercial clips." },
        ],
        images: [{ src: "/images/Commercials.png", alt: "Channel commercials page with Commercials, Fade-In and Fade-Out buttons" }],
      },
      {
        title: "Holiday Schedules",
        intro: "Holiday Schedule gives the channel its own Halloween, Christmas and Thanksgiving media. Each holiday button opens the file explorer for that holiday’s shows.",
        points: [
          { label: "When they play", text: "A holiday schedule takes over for the three days up to and including the holiday; Thanksgiving is the fourth Thursday of November. Holiday media always plays in random order." },
          { label: "Force", text: "Plays that holiday’s schedule now, whatever the date, until you turn it off." },
          { label: "Clear Media", text: "Removes this channel’s holiday media." },
        ],
        images: [{ src: "/images/Holidays.png", alt: "Channel holiday schedule page with Force switches" }],
      },
      {
        title: "Watermark",
        intro: "Turn Watermark on and use Add to pick an image with the mouse; it shows in the corner of that station, like a TV network logo. Keep it subtle: a logo that never moves adds burn-in risk.",
        images: [{ src: "/images/Watermark.png", alt: "Watermark on screen" }],
      },
      {
        title: "Audio Track & Loudness Gain",
        intro: "Current Playing Audio Settings works on the channel you are watching (tune to it first). It lists the show’s audio tracks, such as languages or a commentary, and its loudness gain.",
        points: [
          { label: "Audio track", text: "Pick a track with Enter; the channel remembers it for that show." },
          { label: "Loudness gain", text: "A and D make the show louder or quieter in 1 dB steps, from −12 to +12. Your change also teaches Smart Loudness, which uses it for the series’ other episodes." },
        ],
        images: [{ src: "/images/GainAdjustment.png", alt: "Gain button and Audio Track Button" }],

      },
    ],
  },
  {
    title: "Music Visualizer Stations",
    topics: [
      {
        title: "Music Station Settings",
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
        images: [{ src: "/images/VisualizerSchedulingmenu.png", alt: "Music station settings with visualizer style and reactive strength" }],
      },
    ],
  },
  {
    title: "Game Channel (Channel 03)",
    topics: [
      {
        title: "The Games Tab",
        intro: "Turn on Games (Channel 03) in the System tab, then open the Games tab. The tiles are Menu Options, DVD Video Interactive and every console; a green dot means on, red off. The arrow turns the page. Below the tiles:",
        points: [
          { label: "All Consoles", text: "Turns every console on or off at once. The DVD player is not changed." },
          { label: "All Settings", text: "A setting you change on one console (controller mapping, screen size, splash screen) is copied to every console, for the save profile shown beside it." },
          { label: "Screen Saver", text: "Starts a moving screen saver when the game menus sit idle, so nothing stays fixed on the screen. Keep it on; turning it off shows a burn-in warning." },
          { label: "Screen Saver Timer", text: "How long the menus wait before the screen saver starts (5 minutes by default)." },
          { label: "Game Music", text: "Plays music while you browse the game menus." },
          { label: "Set Music", text: "Picks your own music track for the game menus; Add opens the file explorer." },
        ],
        images: [{ src: "/images/GamesTab.png", alt: "Retro TV Emulator Games tab showing the console tiles" }],
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
          { label: "Scan for Cores and Scan for ROMs", text: "Point them at your RetroArch folder or your retro collection; the app finds and sorts the emulator cores, ROMs and BIOS files. ZIP, 7Z and RAR archives work." },
          { label: "Clear Cores and Clear ROMs", text: "Empty the app’s core and ROM lists after asking you to confirm. Your own files elsewhere are not deleted." },
        ],
        images: [{ src: "/images/GameChannelMenu.png", alt: "Games Menu Options page" }],
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
        images: [
          { src: "/images/PSXMenu.png", alt: "PlayStation console settings with BIOS, save profiles and Change Disc" },
          { src: "/images/GBAMenu.png", alt: "Game Boy Advance console settings with core, save profiles and ROMs" },
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
        title: "Playing Games",
        noPlaceholder: true,
        points: [
          { label: "Game menus", text: "Keyboard: W/A/S/D move, Enter selects, Escape goes back. Controller: the D-pad moves, A selects, B goes back. The legend at the bottom of each game screen shows both." },
          { label: "Playing", text: "Launched games are played with a controller only." },
          { label: "Quitting", text: "Hold Start and Select together for about half a second, or press Escape, to quit the game." },
        ],
      },
    ],
  },
  {
    title: "Video Settings",
    topics: [
      {
        title: "Picture Adjustments",
        intro: "The Video tab sets the TV stations’ picture. Each slider runs from 0 to 100 with 50 as normal; A and D move it.",
        points: [
          { label: "Brightness", text: "Lifts or darkens the whole picture." },
          { label: "Contrast", text: "Widens or narrows the gap between dark and bright." },
          { label: "Color", text: "How strong the colours are; all the way down gives a black-and-white broadcast." },
          { label: "Sharpness", text: "Sharpens or softens edges." },
          { label: "Tint", text: "Shifts the colours toward green or purple, like the tint knob on an old set." },
        ],
        images: [{ src: "/images/VideoTab.png", alt: "Retro TV Emulator Video tab with screen modes and picture sliders" }],
      },
      {
        title: "Screen Modes",
        noPlaceholder: true,
        intro: "The buttons along the top decide how each show fills your screen. They apply to Channels 05–44; games and the DVD player have their own.",
        points: [
          { label: "Normal Mode", text: "Keeps the picture’s shape, with bars where it does not fill the screen (black or grey, set in the Theme tab)." },
          { label: "Stretch Fit", text: "Stretches the picture to fill the screen, even if that changes its shape." },
          { label: "Crop Fit", text: "Zooms in to fill the screen and trims the edges, without stretching." },
          { label: "Pan & Scan", text: "Fills the screen like Crop Fit, but the crop moves to follow the action instead of always keeping the middle." },
        ],
      },
      {
        title: "Picture Box in Normal Mode",
        noPlaceholder: true,
        intro: "Many files have black bars recorded into the video itself: bars top and bottom, at the sides, or all the way round (a picture inside a box). The picture-box scan finds the real picture inside those bars. In Normal Mode the app cuts the recorded bars away and fits the real picture to your screen, so an old 4:3 show stored in a widescreen file does not end up as a small box in the middle. Each file is scanned once; until its scan lands it plays with its full frame.",
      },
    ],
  },
  {
    title: "Theme Settings",
    topics: [
      {
        title: "Theme Options",
        intro: "The Theme tab sets the look of the menus and the screens between channels. The options, top to bottom:",
        points: [
          { label: "Volume Bar", text: "Volume 1 or Volume 2: the style of the volume and mute display that appears when you press Left, Right or N." },
          { label: "Channel Static", text: "The colour of the static between channels: White, Grey, Rainbow, or Theme (your background colour)." },
          { label: "Channel Transition", text: "What shows between channels: Static or Black. This is separate from the static shown when a channel cannot play." },
          { label: "Letterboxing", text: "The colour of the bars beside a picture that does not fill the screen: Black or Grey." },
          { label: "Menu Opacity", text: "How see-through the menus are, so the show behind stays visible." },
          { label: "Background Color", text: "The colour of the menu backgrounds; slide along the rainbow." },
          { label: "Border/Text Color", text: "The colour of the borders, highlights and titles." },
        ],
        images: [{ src: "/images/ThemeTab.png", alt: "Retro TV Emulator Theme tab with colour and opacity sliders" }],
      },
    ],
  },
  {
    title: "TV Guide (Channel 04)",
    topics: [
      {
        title: "Using the TV Guide",
        intro: "Tune to Channel 04 to see every station’s schedule, with a live preview of the highlighted channel. The grid, the preview and the station all read the same saved information, so what the guide shows is what plays.",
        points: [
          { label: "Moving around", text: "W and S move between channels, A and D move through the time slots, and Enter tunes to the highlighted station." },
          { label: "Checking your schedule", text: "After building a station, look here to see what aired, what is on and what comes next." },
          { label: "Idle", text: "After 60 seconds without a key press the guide closes and tunes to the station it was previewing." },
        ],
	images: [{ src: "/images/TVGuide.png", alt: "Retro TV Emulator Theme tab with colour and opacity sliders" }],
      },
    ],
  },
  {
    title: "DVD & Media Player",
    topics: [
      {
        title: "Using the DVD Player",
        noPlaceholder: true,
        intro: "Choose DVD on Channel 03 to play movie DVDs from your optical drive, DVD .iso backups, or video files. No core, BIOS or save profile is needed. Movie files and .iso files can go in main/roms/DVD/ inside _internal. Movie DVD menus work; interactive DVD games are not supported.",
      },
      {
        title: "DVD Settings",
        intro: "Games tab > DVD Video Interactive. The DVD player is always on.",
        points: [
          { label: "Button Mapping", text: "Changes which keys play, pause, skip and return to the disc menu." },
          { label: "Screen Mode", text: "Normal Mode, Stretch Fit, Crop Fit or Pan & Scan for movies, separate from the TV stations." },
          { label: "Change Audio Selection", text: "Picks the movie’s audio track (language or commentary) while a disc is playing; greyed otherwise." },
          { label: "Splash Screen", text: "Your own picture or video while a disc loads; Video and Image pick the file." },
          { label: "Captions", text: "Captions for movies, separate from the TV stations’ captions. Not available in Lite mode." },
          { label: "Resume", text: "Starts a disc again where you stopped it." },
        ],
        images: [{ src: "/images/DVDMenu.png", alt: "DVD Video Interactive settings" }],
      },
      {
        title: "DVD Controls",
        noPlaceholder: true,
        points: [
          { label: "Keyboard", text: "Play pauses and plays. Tap Rewind or Fast Forward to skip, hold to seek. Backspace returns to the disc’s main menu. W/A/S/D navigate disc menus and Yes/No popups, Enter confirms. Escape quits the DVD." },
          { label: "Controller", text: "Down pauses and plays. Tap Left or Right to skip, hold to seek. The D-pad navigates, A selects, B goes back, and Y returns to the disc’s main menu. Hold Start and Select to quit the DVD." },
        ],
      },
    ],
  },
  {
    title: "Extras",
    noPlaceholder: true,
    topics: [
      {
        title: "Captions",
        intro: "Captions use subtitles inside the video or a caption file beside it. When a video has neither, live speech captions are made with the model in _internal/main/models/whisper/ and saved in main/captions/ so they are made once. Captions (TV and DVD) are not available in Lite mode.",
      },
      {
        title: "Burn-In Safeguards",
        intro: "Menus close after 60 seconds idle, the Pixel Orbiter moves on-screen elements, the game menu screen saver starts when idle, and song titles disappear after 60 seconds.",
        points: [
          { label: "Warnings", text: "Turning off the Pixel Orbiter or the screen saver, keeping a bezel on, or locking a music station to one visualizer shows a warning with a Don’t show this again box. Dismissing it does not remove the risk." },
          { label: "Display care", text: "These help reduce the risk; they cannot remove it. Follow your display maker’s advice, especially for OLED, plasma and CRT screens." },
        ],
      },
      {
        title: "When a Channel Can’t Play",
        intro: "If a station’s media cannot load, a drive is missing or stalls, or a file is broken, the station shows moving static with a short banner explaining why, and keeps retrying in the background. Check that the files still exist and external drives are connected and awake.",
      },
      {
        title: "Kiosk Mode",
        intro: "Once everything is set up, turn on Kiosk (Hide Scheduling) in the System tab. Scheduling and setup are hidden while the picture, theme and game choices stay available. In Kiosk Mode the System tab shows only the Kiosk switch and Exit Program; turn Kiosk off there to make changes again.",
      },
      {
        title: "Updates",
        intro: "The app checks for a new version at start and asks before installing; Advanced Settings > Look for Updates checks now. Don’t show this again stops the start-up question; checking by hand still asks. Updates keep your settings and data and restart the app, but back up your settings and game saves first.",
      },
      {
        title: "Files, Backups & Problem Reports",
        points: [
          { label: "Settings", text: "retro_config.json in the app folder holds your settings, channels and schedule positions; back it up before big changes. Leave .retro_tv_device_id alone." },
          { label: "Media library", text: "main/media_library/library.sqlite3 holds the scan results. Files are recognised by their content, so moved or renamed files keep their results." },
          { label: "Other app data", text: "main/cores (cores and BIOS), main/roms (games, DVD files and saves), main/images (bezels, logos, backgrounds, watermarks, splash art and the key pictures), main/videos, main/audio, main/captions and main/models/whisper." },
          { label: "Problem reports", text: "Close the app, then send the files from the logs\\temp folder: app_log.txt, crash_log.txt, crash_log_previous.txt, vlc-debug.log, vlc-debug_previous.log and tester_report.txt, plus retro_config.json for settings problems and logs\\update_helper.log for update problems. Say what you did and roughly when. Logs can contain folder names from your PC, so look them over before sharing." },
        ],
      },
    ],
  },
];

const allSections = sections;

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

function TutorialContent() {
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
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group mx-auto aspect-video w-full rounded-lg border bg-card shadow-lg overflow-hidden flex items-center justify-center relative hover:border-primary transition-colors duration-200">
                      <img src="/images/default.png" alt="Retro TV Emulator Video Tutorial" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                      <div className="relative z-10 size-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:bg-red-700 transition-colors duration-200">
                        <svg className="size-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <div className="absolute top-3 right-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                        <img src="/images/youtube-logo.png" alt="YouTube Logo" className="h-7 w-auto object-contain" />
                      </div>
                    </a>
                  ) : topic.images && (topic.carousel || topic.images.length > 2) ? (
                    <NumberedImageCarousel images={topic.images} title={topic.title} discover={topic.carousel} />
                  ) : topic.images ? (
                    <div className={`flex flex-wrap justify-center gap-4 ${topic.images.length > 1 ? "sm:-mx-10" : ""}`}>
                      {topic.images.map((image) => (
                        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className={`aspect-video w-full rounded-lg border ${topic.stretchImages ? "object-fill" : "object-contain"} shadow-lg ${topic.images!.length > 1 ? "sm:w-[calc(50%-0.5rem)]" : "sm:w-[70%]"}`} />
                      ))}
                    </div>
                  ) : section.noPlaceholder || topic.noPlaceholder ? null : (
                    <div className={`scanlines mx-auto flex aspect-video w-full items-center justify-center gap-3 rounded-lg border bg-card px-4 text-muted-foreground ${topic.video ? "" : "sm:w-[calc(50%-0.5rem)]"}`}>
                      <ImageIcon className="size-8 shrink-0" aria-hidden="true" />
                      <span>{topic.video ? "Video placeholder" : "Tutorial image placeholder"}</span>
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
export default function TutorialPage() {
  return SHOW_TUTORIAL ? <TutorialContent /> : <TutorialComingSoon />;
}
