import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** className applied to the outer wrapper div */
  wrapperClassName?: string;
}

/**
 * Drop-in <img> replacement with:
 *  - native lazy loading + async decoding
 *  - animated shimmer skeleton while the image loads
 *  - graceful error fallback when the image fails to load
 */
const LazyImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Shimmer skeleton — visible until image finishes loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-mft-dark/20">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.8s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-mft-dark/30 flex flex-col items-center justify-center gap-2">
          <svg
            className="w-9 h-9 text-white/25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-white/30 text-xs font-sans">
            Image non disponible
          </span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
