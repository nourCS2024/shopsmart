import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: string; // e.g. "aspect-[3/4]"
  rounded?: string; // e.g. "rounded-3xl"
};

/**
 * LazyImage — native lazy-loading with a soft blur-up reveal.
 * Mobile-first: width-100% by default, intrinsic ratio via Tailwind.
 */
export default function LazyImage({
  aspect = "aspect-[3/4]",
  rounded = "rounded-3xl",
  className = "",
  alt = "",
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`relative overflow-hidden ${aspect} ${rounded} bg-ink/5 ${className}`}
    >
      <img
        {...rest}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={[
          "absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out",
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md",
        ].join(" ")}
      />
    </div>
  );
}
