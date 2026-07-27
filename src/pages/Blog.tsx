import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { BLOG_POSTS, type BlogPost } from '../seo/blog-posts';
import { BUY_URL } from '../seo/site';

export { BLOG_POSTS };

const CATEGORIES = ['All', 'ESP', 'Aimbot', 'Guide', 'Safety'];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="glass-card feature-card" style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
      }}>
        <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
        <div style={{ padding: 'clamp(16px, 2.5vw, 24px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '3px 8px',
              background: 'rgba(168,85,247,0.12)',
              borderRadius: 'var(--radius-sm)',
            }}>{post.category}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.date}</span>
            <span style={{ color: 'var(--border-dim)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '10px',
          }}>{post.title}</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--accent)',
          }}>Read Article →</span>
        </div>
      </article>
    </Link>
  );
}

export function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <main>
      <section style={{
        position: 'relative',
        background: 'var(--bg-void)',
        padding: 'clamp(100px, 15vw, 140px) max(16px, 4vw) clamp(40px, 6vw, 60px)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 'clamp(200px, 30vw, 400px)',
          height: 'clamp(200px, 30vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          animation: 'orb-drift 20s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Knowledge Base</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.0,
            marginBottom: '16px',
          }}>
            SAND Raiders{' '}
            <span className="gradient-text">Cheats Blog</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}>
            Guides on SAND ESP, aimbot setup, DMA cheats, best settings, cheat safety, and update guides for SAND: Raiders of Sophie.
          </p>
        </div>
      </section>

      <div style={{
        background: 'var(--bg-deep)',
        borderBottom: '1px solid var(--border-ghost)',
        padding: '16px max(16px, 4vw)',
        position: 'sticky',
        top: 44,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'rgba(168,85,247,0.4)' : 'var(--border-ghost)'}`,
                background: activeCategory === cat ? 'rgba(168,85,247,0.15)' : 'transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: activeCategory === cat ? 700 : 500,
                color: activeCategory === cat ? 'var(--accent-bright)' : 'var(--text-muted)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section style={{
        background: 'var(--bg-base)',
        padding: 'clamp(40px, 6vw, 64px) max(16px, 4vw)',
        minHeight: '60vh',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', textAlign: 'center' }}>No posts in this category yet.</p>
          ) : (
            <AnimatedSection>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'clamp(16px, 2.5vw, 24px)',
              }}>
                {filtered.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </AnimatedSection>
          )}

          <nav aria-label="Blog internal links" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-ghost)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>Popular SAND Guides</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
              {BLOG_POSTS.slice(0, 5).map(post => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--accent)', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/buy" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--accent)', textDecoration: 'none' }}>
                  Get SAND Raiders Cheats →
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}

function renderBody(body: string) {
  const lines = body.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          marginTop: '32px',
          lineHeight: 1.2,
        }}>{line.replace('## ', '')}</h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          marginTop: '24px',
        }}>{line.replace('### ', '')}</h3>
      );
    } else if (line.startsWith('- **')) {
      const match = line.match(/^- \*\*(.+?)\*\*:(.*)/);
      if (match) {
        elements.push(
          <li key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '8px',
            paddingLeft: '16px',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>{match[1]}</strong>:{match[2]}
          </li>
        );
      }
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '8px',
          paddingLeft: '16px',
        }}>{line.replace(/^- /, '')}</li>
      );
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <li key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '8px',
          paddingLeft: '16px',
        }}>{line.replace(/^\d+\.\s/, '')}</li>
      );
    } else {
      const parts = line.split(/(\*\*.+?\*\*)/g);
      elements.push(
        <p key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          marginBottom: '16px',
        }}>
          {parts.map((part, pi) =>
            part.startsWith('**') ? (
              <strong key={pi} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.replace(/\*\*/g, '')}</strong>
            ) : part
          )}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ padding: '100px max(16px, 4vw)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: '24px' }}>Post not found.</p>
        <Link to="/blog" className="btn-ghost">← Back to Blogs</Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);
  if (related.length < 2) {
    const extras = BLOG_POSTS.filter(p => p.slug !== slug && !related.includes(p)).slice(0, 2 - related.length);
    related.push(...extras);
  }

  return (
    <main>
      <div style={{
        width: '100%',
        height: 'clamp(200px, 35vw, 420px)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={post.image}
          alt={post.title}
          loading="eager"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, var(--bg-void) 100%)',
        }} />
      </div>

      <section style={{
        background: 'var(--bg-void)',
        padding: '0 max(16px, 4vw) clamp(60px, 8vw, 100px)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 10px',
            background: 'rgba(168,85,247,0.12)',
            border: '1px solid rgba(168,85,247,0.2)',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            marginTop: '-12px',
            position: 'relative',
          }}>{post.category}</span>

          <div style={{ marginBottom: '12px' }}>
            <Link
              to="/blog"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              ← Back to Blogs
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{post.date}</span>
            <span style={{ color: 'var(--border-dim)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>{post.title}</h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            borderLeft: '3px solid var(--accent)',
            paddingLeft: '16px',
            marginBottom: '40px',
          }}>{post.excerpt}</p>

          <div>{renderBody(post.body)}</div>

          <div style={{
            marginTop: '48px',
            padding: '32px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-dim)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}>Get SAND Raiders Cheats</h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>SAND aimbot, ESP, triggerbot, wallhack, radar, and loot ESP. Undetected and updated every patch.</p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Cheats
            </a>
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Related Articles</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                {related.map(p => <BlogCard key={p.slug} post={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
