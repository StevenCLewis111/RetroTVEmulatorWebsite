"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

/**
 * Three or more pictures of one tutorial picture spot: one picture with arrows that cycle through them.
 * The page finds the pictures (name.png, name1.png, name2.png ...) while the site is built.
 */
export function NumberedImageCarousel({ images, title }: { images: Slide[]; title: string }) {
  const [index, setIndex] = useState(0);

  const count = images.length;
  const position = index % count;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);
  const current = images[position];

  const arrowClass =
    "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-card/90 text-primary shadow-lg transition-colors duration-200 hover:border-primary disabled:invisible";

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Same width as every other tutorial image; arrows sit over the edges on
          phones and just outside the image on wider screens. */}
      <div className="relative w-full sm:w-[70%]">
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
