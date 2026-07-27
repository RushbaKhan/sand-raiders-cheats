import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { VideoEmbed } from './VideoEmbed';
import { VIDEO_FEATURES } from '../seo/site';

const espFeatures = [
  { name: 'Box, Snapline & Skeleton', desc: 'Players ESP through walls with box outlines, snaplines, and full bone structure for precise tracking.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>) },
  { name: 'Health & Armor ESP', desc: 'See opponent health and armor status before engaging — know when to push or hold.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>) },
  { name: 'Distance Display', desc: 'Exact range to every player and loot item so you control engagement distance.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="12" x2="22" y2="12"/><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>) },
  { name: 'Glow Players', desc: 'Customizable glow intensity highlights threats through walls and smoke.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>) },
  { name: 'Team Checks & Filters', desc: 'Filter allies from enemies and configure team-aware ESP for coordinated raids.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>) },
  { name: 'Visibility Check', desc: 'ESP visibility filters keep overlays accurate and configurable for every raid scenario.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
];

const lootFeatures = [
  { label: 'Loot ESP', desc: 'Highlights weapons, gear, and valuables through walls in every SAND raid zone.' },
  { label: 'Glow Items & Loot', desc: 'Custom glow intensity distinguishes high-value extraction loot instantly.' },
  { label: '2D Radar Overlay', desc: 'Customizable radar size with enemy and item positions on a mini-map overlay.' },
  { label: 'Maximum Distance Control', desc: 'Separate range sliders for players, loot, and radar to keep your HUD clean.' },
];

const aimbotFeatures = [
  { name: 'Customizable Hotkey & FOV', desc: 'Bind activation to any key and set your aimbot field-of-view radius.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>) },
  { name: 'Bone Selection', desc: 'Target nearest bone or pick specific bones (head, chest, neck) for precision.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="14"/></svg>) },
  { name: 'Humanized Trajectories', desc: 'Advanced prediction and smoothing curves make aim movement look natural.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/></svg>) },
  { name: 'Dynamic FOV & Smoothing', desc: 'FOV adjusts by distance. Smoothing prevents suspicious snap behavior in PvP.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>) },
  { name: 'Focus Team & Distance', desc: 'Focus team mode and maximum distance control for safe squad play.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/></svg>) },
  { name: 'SAND Triggerbot', desc: 'Automatic firing when crosshair contacts enemy hitbox — pairs perfectly with ESP.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>) },
];

const safetyFeatures = [
  { label: 'BattlEye Undetected', desc: 'External architecture designed for BattlEye compatibility with rapid patch updates.' },
  { label: 'Fully Streamproof', desc: 'Overlay hidden from OBS, Discord, and capture software.' },
  { label: 'Screenshot Protection', desc: 'Prevents overlay from appearing in screenshots and certain capture APIs.' },
  { label: 'Spectator List', desc: 'See who is watching and disable aimbot when observed.' },
  { label: 'Auto-Update Loader', desc: 'No re-download required — updates delivered automatically after patches.' },
  { label: 'Cloud-DMA (AWS)', desc: 'Optional remote execution on AWS for maximum local isolation.' },
];

interface FeatureCardProps {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accentColor?: string;
}

function FeatureCard({ name, desc, icon, accentColor = 'var(--accent)' }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card feature-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(20px, 2.5vw, 28px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        borderColor: hovered ? 'var(--border-bright)' : 'var(--border-ghost)',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'rgba(168,85,247,0.12)',
        border: '1px solid rgba(168,85,247,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accentColor,
        marginBottom: '14px',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '8px',
      }}>{name}</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}>{desc}</p>
    </div>
  );
}

function BulletItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li style={{
      display: 'flex',
      gap: '8px',
      paddingBottom: '10px',
      borderBottom: '1px solid var(--border-ghost)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      listStyle: 'none',
    }}>
      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>•</span>
      <span>
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</strong>
        {' – '}
        {desc}
      </span>
    </li>
  );
}

export function FeaturesGrid() {
  return (
    <>
      <section id="esp" style={{
        background: 'var(--bg-base)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Wallhack ESP</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                SAND ESP Features{' '}
                <span className="gradient-text">Total Awareness</span>
                {' '}in Every Raid
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                SAND Raiders ESP gives you full control over what you see. Player ESP through walls, loot ESP, health and armor display, and customizable glow — all with team checks and maximum distance control.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="features-split-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>Player ESP Features</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}>
                  Full visual control over every player in SAND: Raiders of Sophie. See threats through walls, track bones, measure distance, and stay notified — all customizable.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {espFeatures.map(f => (
                    <li key={f.name} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{f.name}</strong>
                        {' – '}
                        {f.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
              }}>
                {espFeatures.map(f => <FeatureCard key={f.name} {...f} />)}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Loot ESP &amp; 2D Radar – <span className="gradient-text">Never Miss High-Value Gear</span></h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>SAND: Raiders of Sophie is about extracting with the best loot. Why waste time searching empty rooms?</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {lootFeatures.map(f => <BulletItem key={f.label} label={f.label} desc={f.desc} />)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(40px, 6vw, 64px) max(16px, env(safe-area-inset-right), 4vw)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16/9',
            }}>
              <VideoEmbed
                src={VIDEO_FEATURES}
                ariaLabel="SAND wallhack ESP and radar feature demonstration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Aimbot</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                SAND Aimbot Features{' '}
                <span className="gradient-text">Aim to Win</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                The SAND aimbot is built to feel smooth and natural. Customizable hotkey, bone selection, humanized trajectories, advanced prediction, and SAND triggerbot — all with visibility check and focus team mode.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              {aimbotFeatures.map(f => (
                <FeatureCard key={f.name} name={f.name} desc={f.desc} icon={f.icon} accentColor="var(--accent-bright)" />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Undetected &amp; Safe – <span className="gradient-text">Built for BattlEye</span></h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {safetyFeatures.map(f => <BulletItem key={f.label} label={f.label} desc={f.desc} />)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
