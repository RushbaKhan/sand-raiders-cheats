import { useRef, useEffect } from 'react';

type VideoEmbedProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  ariaLabel?: string;
};

export function VideoEmbed({ src, className, style, priority = false, ariaLabel }: VideoEmbedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload={priority ? 'auto' : 'metadata'}
      aria-label={ariaLabel}
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block', ...style }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
