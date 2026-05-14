import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import AddToCartBar from '@/components/AddToCartBar';
import TrustBadges from '@/components/TrustBadges';
import FAQSection from '@/components/FAQSection';
import { Check, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MASQUE UNIR FFP2 – Boite de 20 masques – Sans Graphène – ou Auriol",
  description: "Masques FFP2 haute protection (Boite de 20) avec 5 couches de filtration. Sans Graphène. Conformes à la norme EN 149:2001+A1:2009. Achat en ligne.",
};

export default function MasqueFFP2Page() {
  const product = getProductById('masque-ffp2');

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><span>/</span></li>
              <li className="text-secondary font-medium" aria-current="page">Masques FFP2</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Product Gallery */}
          <div className="mb-10 lg:mb-0">
            <ProductGallery images={product.images || [product.image]} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              {product.badges && (
                <div className="flex gap-2 mb-4">
                  {product.badges.map((badge, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-secondary mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 underline cursor-pointer">{product.reviews} avis vérifiés</span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Caractéristiques clés
                </h3>
                <ul className="space-y-3">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <AddToCartBar product={{ id: product.id, name: product.name, price: product.price, image: product.image }} />
            </div>
          </div>
        </div>
      </div>

      <TrustBadges />
      <FAQSection />
    </>
  );
}
