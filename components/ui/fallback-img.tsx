"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

const DEFAULT_FALLBACK_SRC = "https://via.placeholder.com/400x300?text=Food";
const LOCAL_FALLBACK_SRC = "/images/fallback-event.svg";

type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "onError"
> & {
  src: string;
  fallbackSrc?: string;
  localFallbackSrc?: string;
};

export function FallbackImg({
  src,
  fallbackSrc = DEFAULT_FALLBACK_SRC,
  localFallbackSrc = LOCAL_FALLBACK_SRC,
  alt,
  ...props
}: Props) {
  const resolvedFallback = useMemo(() => fallbackSrc, [fallbackSrc]);
  const resolvedLocalFallback = useMemo(
    () => localFallbackSrc,
    [localFallbackSrc],
  );

  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      loading={props.loading ?? "lazy"}
      decoding={props.decoding ?? "async"}
      onError={(e) => {
        if (currentSrc !== resolvedFallback) {
          setCurrentSrc(resolvedFallback);
          e.currentTarget.src = resolvedFallback;
          return;
        }

        if (currentSrc !== resolvedLocalFallback) {
          setCurrentSrc(resolvedLocalFallback);
          e.currentTarget.src = resolvedLocalFallback;
        }
      }}
    />
  );
}
