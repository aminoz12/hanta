import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hantaprotect.fr';

  // Core pages
  const corePages = [
    '',
    '/a-propos',
    '/contact',
    '/faq',
    '/blog',
    '/masque-chirurgical-type-2r',
    '/masque-ffp2'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal pages
  const legalPages = [
    '/mentions-legales',
    '/cgv',
    '/politique-de-confidentialite'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...corePages, ...blogUrls, ...legalPages];
}
