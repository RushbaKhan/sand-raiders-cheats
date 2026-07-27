import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { BUY_URL } from '../seo/site';

const CONTENT_BLOCKS = [
  {
    title: 'What Are SAND Raiders Cheats?',
    body: `SAND Raiders cheats are external software tools built for SAND: Raiders of Sophie, the extraction shooter where every raid counts. Our package combines aimbot, ESP, wallhack, triggerbot, radar, loot ESP, and no-recoil controls in one loader with instant delivery and automatic updates after every patch. Whether you run solo extractions or squad raids, SAND cheats give you the information and precision needed to survive longer, extract more loot, and win more fights without guessing enemy positions.`,
  },
  {
    title: 'SAND Aimbot — Precision for Every Engagement',
    body: `The SAND aimbot is fully configurable for PvP and PvE. Set your activation hotkey, field of view, target bone, smoothing, and maximum distance. Visibility checks prevent snapping to targets behind cover, while humanized trajectories keep movement natural. Dynamic FOV scaling, focus-team filters, and prediction for moving targets make the aimbot effective in close-quarters bunker fights and long-range desert engagements alike. Every setting is toggleable so you can run conservative configs in high-traffic zones or aggressive setups in low-population raids.`,
  },
  {
    title: 'SAND ESP & Wallhack — Full Raid Awareness',
    body: `SAND ESP reveals players, health, armor, distance, and team status through walls and terrain. Box ESP, snaplines, skeleton overlays, and glow intensity controls help you track threats before they see you. Loot ESP highlights weapons, gear, and valuables inside buildings and containers so you route efficiently toward high-value extractions. Wallhack rendering exposes enemy positions through solid geometry, giving you a decisive edge when pushing contested areas or holding choke points during extraction timers.`,
  },
  {
    title: 'Radar, Triggerbot & Combat Utilities',
    body: `The built-in 2D radar displays nearby players on a minimap-style overlay with adjustable range and size. Triggerbot fires when your crosshair crosses a valid target, with delay and team-check options for fine control. No-recoil compensation stabilizes weapon kick during automatic fire. Spectator list alerts you when others are watching your gameplay. Stream-proof mode hides overlays from OBS, Discord, and capture software — essential for content creators who want privacy while using SAND Raiders cheats.`,
  },
  {
    title: 'Undetected, Stream-Proof & Patch-Ready',
    body: `Our SAND Raiders cheat runs externally with BattlEye-focused protection, screenshot protection, and rapid post-patch updates delivered through the loader. No full re-download is required when the game updates — compatibility fixes ship within hours of new builds. Cloud-DMA support on AWS is available for users who want maximum hardware isolation. While no cheat can guarantee permanent immunity from bans, we prioritize external architecture, conservative defaults, transparent support, and active maintenance so you always know what you are running.`,
  },
  {
    title: 'System Requirements & Getting Started',
    body: `SAND Raiders cheats support Windows 10 and Windows 11 on Intel and AMD systems with 8 GB RAM or more. After purchase you receive instant access to the loader, setup guide, and 24/7 Discord support. Configuration takes under two minutes: adjust Windows settings, launch the loader, open SAND: Raiders of Sophie, and enable ESP, aimbot, or triggerbot from the overlay menu. Read our blog for detailed SAND ESP guides, aimbot setup tutorials, DMA configuration, and safety tips for staying updated after every patch.`,
  },
];

export function SeoContentSection() {
  return (
    <AnimatedSection>
      <section
        id="sand-cheats-guide"
        aria-labelledby="seo-content-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Complete Guide</span>
          <h2
            id="seo-content-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            SAND Raiders Cheats — Aimbot, ESP & Wallhack Explained
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            Everything you need to know about undetected SAND cheats for SAND: Raiders of Sophie — features, setup, safety, and why thousands of players trust our software for extraction raids.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {CONTENT_BLOCKS.map(block => (
              <article key={block.title}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: 10,
                }}>
                  {block.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {block.body}
                </p>
              </article>
            ))}
          </div>

          <div style={{
            marginTop: 36,
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(168,85,247,0.06)',
            border: '1px solid rgba(168,85,247,0.18)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}>
              Ready to dominate SAND: Raiders of Sophie? Explore our{' '}
              <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>SAND cheats blog guides</Link>
              {' '}for in-depth ESP and aimbot tutorials, or{' '}
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                purchase SAND Raiders cheats
              </a>
              {' '}with instant delivery and 24/7 support.
            </p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Purchase SAND Cheats
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
