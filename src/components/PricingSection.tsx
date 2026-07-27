import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { BUY_URL } from '../seo/site';

type Plan = {
  id: 'monthly' | 'lifetime';
  label: string;
  price: number;
  detail: string;
  badge?: string;
};

const PLANS: Plan[] = [
  { id: 'monthly', label: 'Monthly', price: 40, detail: '31 days of access', badge: 'Best' },
  { id: 'lifetime', label: 'Lifetime', price: 150, detail: 'Unlimited access' },
];

export function PricingSection() {
  const [selected, setSelected] = useState<Plan['id']>('monthly');
  const plan = PLANS.find(p => p.id === selected) ?? PLANS[0];

  return (
    <AnimatedSection>
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Pricing</span>
          <h2
            id="pricing-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}
          >
            Choose Your Duration
          </h2>

          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-dim)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(20px, 4vw, 28px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {PLANS.map(item => {
                const isActive = selected === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '16px 18px',
                      borderRadius: 'var(--radius-lg)',
                      border: isActive ? '1px solid rgba(168,85,247,0.55)' : '1px solid var(--border-ghost)',
                      background: isActive ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'border-color 0.2s ease, background 0.2s ease',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                        }}>{item.label}</span>
                        {item.badge && (
                          <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color: '#052e16',
                            background: '#4ade80',
                            borderRadius: '100px',
                            padding: '2px 8px',
                          }}>{item.badge}</span>
                        )}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                      }}>{item.detail}</span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      flexShrink: 0,
                    }}>${item.price}</span>
                  </button>
                );
              })}
            </div>

            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '14px 20px',
                borderRadius: 'var(--radius-md)',
                background: '#ffffff',
                color: '#0a0710',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textDecoration: 'none',
                marginBottom: '20px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Buy Now — ${plan.price}
            </a>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '18px',
              paddingTop: '4px',
            }}>
              {[
                ['delivery', 'instant'],
                ['duration', plan.label],
                ['support', '24/7'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', textTransform: 'lowercase' }}>{label}</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Secure Payment
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
