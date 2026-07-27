import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const FAQ_ITEMS = [
  {
    q: 'Is this SAND cheat safe to use?',
    a: 'Our SAND Raiders cheat runs externally with BattlEye-focused protection, stream-proof mode, and screenshot protection. No third-party tool is risk-free, but we prioritize external architecture, auto-updates, and transparent support so you know exactly what you are running.',
  },
  {
    q: 'Will I get banned for using the cheat?',
    a: 'Any cheat carries ban risk. We maintain undetected status with rapid patch updates, spectator protection, and conservative feature defaults — but no provider can guarantee permanent immunity. Play smart, use stream-proof mode, and avoid obvious behavior in front of other players.',
  },
  {
    q: 'How often are updates released?',
    a: 'Updates ship automatically through the loader after every SAND: Raiders of Sophie patch — usually within hours of a new game build. No re-download required. You always get the latest compatible version from your order page.',
  },
  {
    q: 'Can I customize the cheat features?',
    a: 'Yes. Full control over aimbot hotkey, FOV, bone selection, smoothing, ESP colors, glow intensity, radar size, loot range, team filters, and stream-proof mode. Every feature is toggleable so you can tune your setup for raids or PvP.',
  },
  {
    q: 'Is there customer support available?',
    a: 'Yes. 24/7 support via Discord and ticket system. Our team helps with setup, HWID transfers, post-patch compatibility, and configuration — average response time under 30 minutes.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 'var(--radius-lg)',
        border: open ? '1px solid rgba(168,85,247,0.35)' : '1px solid var(--border-ghost)',
        marginBottom: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          padding: '18px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.45,
        }}>{q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          padding: '0 20px 18px',
          margin: 0,
        }}>{a}</p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <AnimatedSection>
      <section
        id="faq"
        aria-labelledby="faq-heading"
        style={{
          background: 'var(--bg-base)',
          padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(24px, 4vw, 32px)',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div>
            {FAQ_ITEMS.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
