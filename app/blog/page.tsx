import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog & Actualités",
  description: "Découvrez nos derniers articles sur la protection respiratoire, les normes en vigueur et des conseils santé.",
};

import { blogPosts } from '@/lib/blog';
export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-extrabold text-secondary tracking-tight sm:text-5xl mb-4">
            Blog & Actualités
          </h1>
          <p className="max-w-2xl text-xl text-gray-500 mx-auto">
            Restez informés sur les meilleures pratiques de protection respiratoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-gray-100 shrink-0">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-green-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-display font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 transition-colors">
                  Lire l&apos;article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
