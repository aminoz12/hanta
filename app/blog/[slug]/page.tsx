import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

import { getBlogPostBySlug } from '@/lib/blog';
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Article non trouvé' };
  }

  return {
    title: `${post.title} | Blog HantaProtect`,
    description: post.content.substring(0, 160) + '...',
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Retour au blog
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-green-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-4xl font-display font-extrabold text-secondary tracking-tight sm:text-5xl mb-8">
            {post.title}
          </h1>
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gray-100">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  );
}
