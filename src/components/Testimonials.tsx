import { useState, useEffect, useRef, useCallback } from 'react';
import { BUY_URL } from '../seo/site';

const MOBILE_MQ = '(max-width: 900px)';
const SCROLL_SECTION_VH = 42;
const CARD_PROGRESS_WINDOW = 0.95;

export const CUSTOMER_REVIEWS = [
  { name: 'Sway', quote: 'Support solved my SAND loader issue quick and easy. Fast response times every time — ESP and aimbot run great in raids.', date: 'July 20, 2026' },
  { name: 'Joey Scalia', quote: 'Answered fast. Most reliable for answers and info on SAND Raiders cheat setup. Great experience overall.', date: 'July 19, 2026' },
  { name: 'Ash', quote: 'Had trouble with first launch so I opened a ticket. Support walked me through it in under five minutes. Wallhack ESP is clean.', date: 'July 18, 2026' },
  { name: 'Adian Hipsz', quote: 'Fast to respond with solid solutions. They answered every question in detail and did not rush me off the line.', date: 'July 17, 2026' },
  { name: 'Tony WoW', quote: 'Patch dropped and something broke on my side — team pointed me to the right build and it was working again same day.', date: 'July 16, 2026' },
  { name: 'taj taj', quote: 'Support and the dev updates are the real deal. SAND cheat has been stable for me for weeks.', date: 'July 15, 2026' },
  { name: 'Alex Moreno', quote: 'Best support I have used for a game tool. They fixed my HWID question fast and explained what to do next time.', date: 'July 14, 2026' },
  { name: 'Fuzzy JD', quote: 'Very willing to help. Someone stayed with me for well over an hour until the overlay and setup were sorted.', date: 'July 13, 2026' },
  { name: 'CQB_Gamer', quote: 'Very good support — they took their time and stayed until my SAND Raiders issue was fully solved. Would use again.', date: 'July 12, 2026' },
];

function PixelAvatar({ seed, size = 48 }: { seed: number; size?: number }) {
  const palettes = [
    ['#e91e8c', '#ff6bbd', '#1a0010'],
    ['#00e5ff', '#0097a7', '#001a1f'],
    ['#76ff03', '#33691e', '#0d1a00'],
    ['#ff6d00', '#ffab40', '#1a0d00'],
    ['#7c4dff', '#b388ff', '#0d0020'],
    ['#f44336', '#ff8a80', '#1a0000'],
    ['#ffd600', '#fff176', '#1a1500'],
    ['#00bcd4', '#80deea', '#001a1f'],
    ['#ff4081', '#ff80ab', '#1a0010'],
    ['#64dd17', '#ccff90', '#0a1a00'],
  ];
  const [bg, fg, dark] = palettes[seed % palettes.length];
  const grid: boolean[][] = Array.from({ length: 8 }, (_, r) =>
    Array.from({ length: 8 }, (_, c) => {
      const mc = c < 4 ? c : 7 - c;
      return (((seed * 17 + r * 11 + mc * 5 + seed * r) ^ (r * mc + seed * 3 + 7)) % 19) > 8;
    })
  );
  const px = size / 10;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ borderRadius: '50%', flexShrink: 0 }} aria-hidden="true">
      <rect width={size} height={size} fill={dark} />
      {grid.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect key={`${r}-${c}`} x={c * px + px} y={r * px + px} width={px} height={px} fill={r < 3 ? fg : bg} />
          ) : null
        )
      )}
    </svg>
  );
}

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e879f9" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, idx, visible }: { review: (typeof CUSTOMER_REVIEWS)[number]; idx: number; visible: boolean }) {
  return (
    <article
      className={`testimonials-review-card${visible ? ' testimonials-review-card--visible' : ''}`}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <PixelAvatar seed={idx + 1} size={48} />
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.9375rem',
          color: '#fff',
          letterSpacing: '-0.01em',
          wordBreak: 'break-word',
          margin: 0,
        }}>{review.name}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9375rem', color: '#fff' }}>5.0</span>
        <StarRating />
      </div>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 1.6,
        marginBottom: 10,
        wordBreak: 'break-word',
      }}>&ldquo;{review.quote}&rdquo;</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
        {review.date}
      </p>
    </article>
  );
}

function ReviewsIntro() {
  return (
    <>
      <span className="section-label" style={{ marginBottom: 20, display: 'flex' }}>Happy Clients</span>
      <h2 className="testimonials-title">
        What Our<br />
        <span className="gradient-text">Customers Say</span>
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9375rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
        maxWidth: 420,
        marginBottom: 28,
      }}>
        Trusted by thousands of SAND Raiders players worldwide. Real reviews from real players, unfiltered.
      </p>
      <div className="testimonials-stats-grid">
        {[
          { value: '1000+', label: 'Happy clients' },
          { value: '50K+', label: 'Orders completed' },
          { value: '4.9', label: 'Average rating' },
        ].map(stat => (
          <div key={stat.label} className="testimonials-stat-card">
            <div className="testimonials-stat-value">{stat.value}</div>
            <div className="testimonials-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '14px 28px', fontSize: '0.875rem', width: '100%', maxWidth: 320 }}
        >
          Get Cheats
        </a>
      </div>
    </>
  );
}

function useInViewCards(count: number) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => Array(count).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(index)) return;
          setVisible(prev => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  return { cardRefs, visible };
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progresses, setProgresses] = useState(() => CUSTOMER_REVIEWS.map(() => 0));
  const [cardSpacing, setCardSpacing] = useState(38);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_MQ).matches : false
  );
  const { cardRefs, visible } = useInViewCards(CUSTOMER_REVIEWS.length);

  const updateScrollProgress = useCallback(() => {
    const el = sectionRef.current;
    if (!el || isMobile) return;

    const rect = el.getBoundingClientRect();
    const scrollRange = el.scrollHeight - window.innerHeight;
    if (scrollRange <= 0) return;

    const scrollProgress = Math.max(0, -rect.top);
    const step = scrollRange / (CUSTOMER_REVIEWS.length + 1);

    setProgresses(
      CUSTOMER_REVIEWS.map((_, index) => {
        const threshold = index * step;
        return Math.min(1, Math.max(0, (scrollProgress - threshold) / (step * CARD_PROGRESS_WINDOW)));
      })
    );
  }, [isMobile]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateSpacing = () => {
      const available = window.innerHeight - 280;
      setCardSpacing(
        Math.min(38, Math.max(26, Math.floor(available / (CUSTOMER_REVIEWS.length - 1))))
      );
    };

    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [isMobile, updateScrollProgress]);

  const padX = {
    paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
    paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
  } as const;

  if (isMobile) {
    return (
      <section id="reviews" className="testimonials-mobile" style={padX} aria-labelledby="testimonials-heading">
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div id="testimonials-heading">
            <ReviewsIntro />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CUSTOMER_REVIEWS.map((review, idx) => (
              <div
                key={review.name}
                ref={el => { cardRefs.current[idx] = el; }}
                data-index={idx}
              >
                <ReviewCard review={review} idx={idx} visible={visible[idx]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const stackHeight = (CUSTOMER_REVIEWS.length - 1) * cardSpacing + 190;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="testimonials-scroll-section"
      style={{ minHeight: `${(CUSTOMER_REVIEWS.length + 2) * SCROLL_SECTION_VH}vh` }}
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials-sticky" style={padX}>
        <div className="testimonials-sticky-left" id="testimonials-heading">
          <ReviewsIntro />
        </div>

        <div id="reviews-right" className="testimonials-stack-viewport">
          <div
            className="testimonials-stack-inner"
            style={{ height: `${stackHeight}px` }}
          >
            {CUSTOMER_REVIEWS.map((review, index) => {
              const progress = progresses[index];
              const translateY = (1 - progress) * 120;
              const cardVisible = progress > 0.05;

              return (
                <div
                  key={review.name}
                  ref={el => { cardRefs.current[index] = el; }}
                  data-index={index}
                  className={`testimonials-stack-card${cardVisible ? ' testimonials-stack-card--visible' : ''}`}
                  style={{
                    top: index * cardSpacing,
                    transform: `translateY(${translateY}px)`,
                    zIndex: index + 1,
                  }}
                >
                  <ReviewCard review={review} idx={index} visible={cardVisible || visible[index]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
