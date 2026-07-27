import { useState, useEffect } from 'react';

const SCREENSHOTS = [
  'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/hvajyimmb0u0wy4w2usv.jpg',
  'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/n1kotviezoyo7vlafvns.jpg',
  'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/vhkxsic40inhce1oiqbn.jpg',
];

interface ScreenshotSliderProps {
  interval?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export function ScreenshotSlider({ interval = 3500, style, imgStyle }: ScreenshotSliderProps) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(cur => {
        setPrev(cur);
        return (cur + 1) % SCREENSHOTS.length;
      });
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {SCREENSHOTS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`SAND Raiders cheat screenshot ${i + 1} — ESP aimbot wallhack`}
          loading="lazy"
          decoding="async"
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.9s ease',
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : i === prev ? 1 : 0,
            display: 'block',
            ...imgStyle,
          }}
        />
      ))}

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '6px',
        zIndex: 10,
      }}>
        {SCREENSHOTS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(active); setActive(i); }}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              border: 'none',
              background: i === active ? 'rgba(168,85,247,0.9)' : 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
