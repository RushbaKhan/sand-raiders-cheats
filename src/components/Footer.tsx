import { Link } from 'react-router-dom';
import { BUY_URL, SITE_NAME } from '../seo/site';

const NAV = [
  { label: 'SAND Cheats Home', to: '/' as const },
  { label: 'Guides & Blog', to: '/blog' as const },
];

const footLink = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.18s ease',
} as const;

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border-ghost)',
      padding: `clamp(40px, 5vw, 56px) max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(24px, 4vw, 40px)',
          paddingBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 'min(100%, 240px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="https://zadeyo.com/_next/image?url=%2Frt-removebg-preview.png&w=64&q=75"
                alt={`${SITE_NAME} logo`}
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                style={{ borderRadius: '6px' }}
              />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>SAND</span>
                <span style={{ color: '#ffffff' }}>Cheats</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '320px',
              margin: 0,
            }}>
              SAND Raiders cheats — aimbot, ESP, triggerbot, wallhack, radar, and loot ESP. Updated after every patch.
            </p>
          </div>

          <nav
            aria-label="Footer"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px 22px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
            }}
          >
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{ ...footLink }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
              >
                {label}
              </Link>
            ))}
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footLink }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              Buy SAND Cheats
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsandraiderscheat.com%2F&text=SAND%20Raiders%20Cheats%20%E2%80%93%20Aimbot%2C%20ESP%20%26%20Wallhack"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footLink }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              Share on X
            </a>
            <a
              href="https://www.reddit.com/submit?url=https%3A%2F%2Fsandraiderscheat.com%2F&title=SAND%20Raiders%20Cheats%20%E2%80%93%20Aimbot%2C%20ESP%20%26%20Wallhack"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footLink }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              Share on Reddit
            </a>
          </nav>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-ghost)',
          padding: '16px 0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 {SITE_NAME}. Not affiliated with the developers of SAND: Raiders of Sophie.
          </span>
        </div>
      </div>
    </footer>
  );
}
