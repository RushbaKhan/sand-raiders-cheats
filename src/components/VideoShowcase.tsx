import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';

export function VideoShowcase() {
  return (
    <AnimatedSection>
      <section
        aria-label="SAND Raiders of Sophie screenshots"
        style={{
          background: 'var(--bg-base)',
          padding: 'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
            aspectRatio: '16/9',
            background: 'var(--bg-void)',
          }}>
            <ScreenshotSlider
              interval={4000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
