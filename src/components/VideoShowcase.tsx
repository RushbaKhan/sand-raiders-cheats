import { AnimatedSection } from './AnimatedSection';
import { VideoEmbed } from './VideoEmbed';
import { VIDEO_FEATURES } from '../seo/site';

export function VideoShowcase() {
  return (
    <AnimatedSection>
      <section
        aria-label="SAND Raiders gameplay preview"
        style={{
          background: 'var(--bg-base)',
          padding: 'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 36px)' }}>
            <span className="section-label" style={{ marginBottom: '16px', justifyContent: 'center', display: 'flex' }}>
              Gameplay Preview
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}>
              SAND Raiders ESP &amp; Aimbot{' '}
              <span className="gradient-text">In Action</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              Watch undetected SAND cheats featuring wallhack ESP, 2D radar, triggerbot, and loot ESP in real raid gameplay.
            </p>
          </div>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
            aspectRatio: '16/9',
            background: 'var(--bg-void)',
          }}>
            <VideoEmbed
              src={VIDEO_FEATURES}
              ariaLabel="SAND Raiders cheat demonstration with ESP and aimbot"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
