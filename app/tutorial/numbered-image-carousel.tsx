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

  const arrowClass =
    "flex size-10 shrink-0 items-center justify-center rounded-full border bg-card text-primary shadow-lg transition-colors duration-200 hover:border-primary disabled:invisible";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full items-center justify-center gap-3">
        <button type="button" onClick={() => go(-1)} disabled={count < 2} aria-label={`Previous ${title} image`} className={arrowClass}>
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>
        <img
          key={current}
          src={current}
          alt={count > 1 ? `${alt} (${(index % count) + 1} of ${count})` : alt}
          loading="lazy"
          className="aspect-video min-w-0 flex-1 rounded-lg border object-contain shadow-lg sm:w-[calc(50%-0.5rem)] sm:flex-none"
        />
        <button type="button" onClick={() => go(1)} disabled={count < 2} aria-label={`Next ${title} image`} className={arrowClass}>
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
      {count > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {(index % count) + 1} / {count}
        </div>
      )}
    </div>
  );
}
