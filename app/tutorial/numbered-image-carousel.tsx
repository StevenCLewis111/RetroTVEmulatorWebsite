"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_NUMBERED_IMAGES = 50;

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

export function NumberedImageCarousel({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [sources, setSources] = useState<string[]>([src]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const found = [src];
      for (let n = 1; n <= MAX_NUMBERED_IMAGES; n++) {
        const next = numberedSrc(src, n);
        if (!(await imageExists(next))) break;
        found.push(next);
      }
      if (!cancelled) setSources(found);
    })();
    return () => {
      cancelled = true;
    };
  }, [src]);

  const count = sources.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);
  const current = sources[index % count];

  return (
    <div className="relative mx-auto w-full">
      <img
        key={current}
        src={current}
        alt={count > 1 ? `${alt} (${(index % count) + 1} of ${count})` : alt}
        loading="lazy"
        className="aspect-video w-full rounded-lg border object-contain shadow-lg"
      />
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={`Previous ${title} image`}
            className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/70"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={`Next ${title} image`}
            className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/70"
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
          <div className="mt-2 text-center text-sm text-muted-foreground">
            {(index % count) + 1} / {count}
          </div>
        </>
      )}
    </div>
  );
}
