import { Product } from './products';

export function getProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'HantaProtect',
    },
    offers: {
      '@type': 'Offer',
      url: `https://hantaprotect.fr${product.href}`,
      priceCurrency: 'EUR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HantaProtect',
    url: 'https://hantaprotect.fr',
    logo: 'https://hantaprotect.fr/icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@hantaprotect.fr',
      contactType: 'customer service',
      availableLanguage: ['French'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue de la République',
      addressLocality: 'Paris',
      postalCode: '75011',
      addressCountry: 'FR',
    },
  };
}
