"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_NUMBERED_IMAGES = 50;

type Slide = { src: string; alt: string };

function numberedSrc(base: string, n: number) {
  if (n === 0) return base;
  const dot = base.lastIndexOf(".");
  return dot === -1 ? `${base}${n}` : `${base.slice(0, dot)}${n}${base.slice(dot)}`;
}

function imageExists(src: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/**
 * images: the slides to show.
 * discover: when true, only images[0] is used as a base name and the numbered
 * files next to it (name.png, name1.png, name2.png ...) are found automatically.
 */
export function NumberedImageCarousel({
  images,
  title,
  discover = false,
}: {
  images: Slide[];
  title: string;
  discover?: boolean;
}) {
  const [slides, setSlides] = useState<Slide[]>(discover ? [images[0]] : images);
  const [index, setIndex] = useState(0);
  const baseSrc = images[0].src;
  const baseAlt = images[0].alt;

  useEffect(() => {
    if (!discover) return;
    let cancelled = false;
    (async () => {
      const found: Slide[] = [{ src: baseSrc, alt: baseAlt }];
      for (let n = 1; n <= MAX_NUMBERED_IMAGES; n++) {
        const next = numberedSrc(baseSrc, n);
        if (!(await imageExists(next))) break;
        found.push({ src: next, alt: baseAlt });
      }
      if (!cancelled) setSlides(found);
    })();
    return () => {
      cancelled = true;
    };
  }, [discover, baseSrc, baseAlt]);

  const count = slides.length;
  const position = index % count;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);
  const current = slides[position];

  const arrowClass =
    "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-card/90 text-primary shadow-lg transition-colors duration-200 hover:border-primary disabled:invisible";

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Same width as every other tutorial image; arrows sit over the edges on
          phones and just outside the image on wider screens. */}
      <div className="relative w-full sm:w-[calc(50%-0.5rem)]">
        <img
          key={current.src}
          src={current.src}
          alt={count > 1 ? `${current.alt} (${position + 1} of ${count})` : current.alt}
          loading="lazy"
          className="aspect-video w-full rounded-lg border object-contain shadow-lg"
        />
        <button type="button" onClick={() => go(-1)} disabled={count < 2} aria-label={`Previous ${title} image`} className={`${arrowClass} left-2 sm:-left-14`}>
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(1)} disabled={count < 2} aria-label={`Next ${title} image`} className={`${arrowClass} right-2 sm:-right-14`}>
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
      {count > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {position + 1} / {count}
        </div>
      )}
    </div>
  );
}
