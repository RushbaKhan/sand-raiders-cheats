import { AnimatedSection } from './AnimatedSection';

const DISCORD_URL = 'https://discord.gg/Vu85F8auQS';

function DiscordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function DiscordSupport() {
  return (
    <AnimatedSection>
      <section className="discord-cta-section" aria-labelledby="discord-support-heading">
        <div className="discord-cta-card">
          <div style={{ paddingLeft: '8px', flex: 1, minWidth: 0 }}>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '10px',
            }}>
              <span aria-hidden="true" style={{ color: 'var(--accent-bright)' }}>✦</span>
              Need help or have questions?
            </p>
            <h2 id="discord-support-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              Talk to our support team — fast, friendly, and always online.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
            }}>
              Whether it&apos;s about your order, payments, or anything else — we&apos;re here to help you instantly.
            </p>
          </div>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="discord-cta-btn"
          >
            <DiscordIcon />
            Join Discord
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
}
