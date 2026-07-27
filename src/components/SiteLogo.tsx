import type { CSSProperties } from 'react';
import { LOGO_URL, SITE_NAME } from '../seo/site';

type SiteLogoProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
  loading?: 'eager' | 'lazy';
};

export function SiteLogo({ size = 32, className, style, loading = 'lazy' }: SiteLogoProps) {
  return (
    <img
      src={LOGO_URL}
      alt={`${SITE_NAME} logo`}
      width={size}
      height={size}
      loading={loading}
      decoding="async"
      className={className}
      style={{
        display: 'block',
        objectFit: 'contain',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
