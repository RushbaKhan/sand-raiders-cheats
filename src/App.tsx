import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { StorePage } from './pages/Store';
import { BLOG_POSTS, BlogListPage, BlogPostPage } from './pages/Blog';
import { I18nProvider } from './i18n';
import { DEFAULT_OG_IMAGE, Seo } from './components/Seo';
import { CUSTOMER_REVIEWS } from './components/Testimonials';
import { SmoothScroll } from './components/SmoothScroll';
import { HOME_TITLE, HOME_DESCRIPTION } from './seo/constants';
import { HOME_FAQ, LOGO_URL, SITE_NAME, SITE_URL } from './seo/site';
import './globals.css';

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

const BUY_FAQ_ITEMS = HOME_FAQ.map(({ q, a }) => ({ q, a }));

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  if (currentPath === '/blog') {
    return (
      <Seo
        title="SAND Raiders Cheats Blog – ESP Guides, Aimbot Setup & Safety Tips"
        description="Expert guides on SAND ESP, aimbot setup, DMA cheats, best settings, cheat safety, and update guides for SAND: Raiders of Sophie."
        path="/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'SAND Raiders Cheats Blog',
          description: 'SAND ESP guides, aimbot configs, DMA cheats, and safety tips for SAND: Raiders of Sophie',
          url: `${SITE_URL}/blog`,
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: { '@type': 'ImageObject', url: LOGO_URL },
          },
        }}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_POSTS.find(entry => entry.slug === slug);
    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = `${SITE_URL}${canonicalPath}`;
      return (
        <Seo
          title={`${post.title} | SAND Raiders Cheats Blog`}
          description={post.excerpt}
          path={canonicalPath}
          image={post.image}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                datePublished: toIsoDate(post.date),
                author: { '@type': 'Organization', name: SITE_NAME },
                publisher: {
                  '@type': 'Organization',
                  name: SITE_NAME,
                  logo: { '@type': 'ImageObject', url: LOGO_URL },
                },
                url: canonicalUrl,
                image: post.image || DEFAULT_OG_IMAGE,
                mainEntityOfPage: canonicalUrl,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
                  { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
                ],
              },
            ],
          }}
        />
      );
    }
  }

  if (currentPath === '/buy') {
    return (
      <Seo
        title="Get SAND Raiders Cheats – Aimbot, ESP, Triggerbot & Radar | Best SAND Cheats"
        description="Get the best SAND Raiders cheats. Includes aimbot, ESP, triggerbot, wallhack, radar, loot ESP, no recoil, and stream-proof mode. Undetected. Instant access."
        path="/buy"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              name: 'SAND Raiders Cheats Subscription',
              description: 'Undetected SAND Raiders cheat with aimbot, ESP, triggerbot, wallhack, radar, and loot ESP',
              brand: { '@type': 'Brand', name: SITE_NAME },
              offers: {
                '@type': 'Offer',
                price: '40.00',
                priceCurrency: 'USD',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}/buy`,
                seller: { '@type': 'Organization', name: SITE_NAME },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1847',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: BUY_FAQ_ITEMS.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Get Cheats', item: `${SITE_URL}/buy` },
              ],
            },
          ],
        }}
      />
    );
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      structuredData={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: HOME_DESCRIPTION,
            publisher: { '@type': 'Organization', name: SITE_NAME, logo: LOGO_URL },
          },
          {
            '@type': 'WebPage',
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            url: `${SITE_URL}/`,
            inLanguage: 'en-US',
          },
          {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: LOGO_URL,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '1000',
              bestRating: '5',
              worstRating: '1',
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: BUY_FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
          ...CUSTOMER_REVIEWS.map(review => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: review.name },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody: review.quote,
            datePublished: toIsoDate(review.date),
            itemReviewed: {
              '@type': 'SoftwareApplication',
              name: 'SAND Raiders Cheats',
              applicationCategory: 'GameApplication',
            },
          })),
        ],
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <SmoothScroll />
        <RouteSeo />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<StorePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </I18nProvider>
    </BrowserRouter>
  );
}
