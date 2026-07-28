import { OG_IMAGE, SITE_NAME, SITE_URL } from './site';

export const PRODUCT_OFFER = {
  '@type': 'Offer' as const,
  price: '40.00',
  priceCurrency: 'USD',
  priceValidUntil: '2026-12-31',
  availability: 'https://schema.org/InStock',
  url: `${SITE_URL}/buy`,
  seller: { '@type': 'Organization', name: SITE_NAME },
  shippingDetails: {
    '@type': 'OfferShippingDetails',
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: '0',
      currency: 'USD',
    },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 0,
        unitCode: 'DAY',
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 0,
        unitCode: 'DAY',
      },
    },
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: ['US', 'GB', 'CA', 'DE', 'FR'],
    },
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'US',
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
  },
};

export function buildProductSchema(name: string, description: string) {
  return {
    '@type': 'Product',
    name,
    description,
    image: [OG_IMAGE],
    brand: { '@type': 'Brand', name: SITE_NAME },
    url: `${SITE_URL}/buy`,
    sku: 'sand-raiders-cheats',
    offers: PRODUCT_OFFER,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1847',
      bestRating: '5',
      worstRating: '1',
    },
  };
}
