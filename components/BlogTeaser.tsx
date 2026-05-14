import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const mockPosts: BlogPost[] = [
  {
    slug: 'comment-choisir-son-masque',
    title: 'Comment bien choisir son masque selon la situation ?',
    excerpt: 'FFP2, chirurgical, en tissu... Découvrez notre guide complet pour faire le bon choix en fonction de vos besoins et de votre environnement.',
    date: '12 Mai 2026',
    imageUrl: '/images/ar1.png',
    category: 'Guide Pratique'
  },
  {
    slug: 'nouvelles-normes-2026',
    title: 'Les nouvelles normes européennes pour les masques médicaux',
    excerpt: 'Tout ce que vous devez savoir sur la réglementation EN 14683:2019+AC:2019 et ce que cela change pour votre protection quotidienne.',
    date: '28 Avril 2026',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    category: 'Actualités'
  },
  {
    slug: 'duree-vie-masque-ffp2',
    title: 'Quelle est la véritable durée de vie d\'un masque FFP2 ?',
    excerpt: 'Au-delà des 8 heures recommandées, quels sont les signes qui montrent que votre masque FFP2 n\'est plus efficace ?',
    date: '15 Mars 2026',
    imageUrl: '/images/ar3.png',
    category: 'Conseils Santé'
  }
];

export default function BlogTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Actualités & Conseils</h2>
            <p className="text-gray-600 max-w-2xl">Restez informés sur les meilleures pratiques de protection respiratoire et les actualités santé.</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors">
            Voir tout le blog <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-gray-100">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-green-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-display font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 transition-colors">
                  Lire l&apos;article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-50 text-secondary font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
            Voir tout le blog
          </Link>
        </div>
      </div>
    </section>
  );
}
