import fs from "node:fs";
import path from "node:path";

// The most numbered pictures one spot can have (name1.png ... name50.png).
const MAX_NUMBERED_IMAGES = 50;

/**
 * Finds the pictures of one tutorial picture spot while the site is built.
 * base is the spot's name, for example "/images/visualizer.png". The pictures are
 * visualizer.png, visualizer1.png, visualizer2.png ... in that order; visualizer.png may be
 * left out, and the list ends at the first number that is missing. Upper and lower case do not
 * matter (Scheduling.png and scheduling1.png belong together); the file names returned are the
 * real ones, so they also work on a host that cares about case.
 */
export function findNumberedImages(base: string): string[] {
  const slash = base.lastIndexOf("/");
  const dir = base.slice(0, slash + 1);
  const file = base.slice(slash + 1);
  if (dir.includes("..") || !file) return [];
  const dot = file.lastIndexOf(".");
  const stem = dot === -1 ? file : file.slice(0, dot);
  const ext = dot === -1 ? "" : file.slice(dot);

  const real = new Map<string, string>();
  try {
    for (const name of fs.readdirSync(path.join(process.cwd(), "public", dir))) {
      real.set(name.toLowerCase(), name);
    }
  } catch {
    return [];
  }

  const found: string[] = [];
  for (let n = 0; n <= MAX_NUMBERED_IMAGES; n++) {
    const actual = real.get(`${n === 0 ? stem : stem + n}${ext}`.toLowerCase());
    if (actual) found.push(dir + actual);
    else if (n > 0) break;
  }
  return found;
}
