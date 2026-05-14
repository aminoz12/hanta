import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Star, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  href: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  rating: number;
  reviews: number;
  badges?: string[];
}

export default function ProductCard({ id, name, href, price, originalPrice, image, hoverImage, rating, reviews, badges }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
        {badges && badges.length > 0 && (
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index} 
                className={`px-2 py-0.5 text-white text-[11px] font-black rounded-md uppercase tracking-tighter shadow-md w-fit block text-center ${badge.startsWith('-') ? 'bg-red-600 animate-bounce' : 'bg-accent'}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <Link href={href} className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={name} 
            fill
            className={`object-contain transition-all duration-500 ${hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {hoverImage && (
            <Image 
              src={hoverImage} 
              alt={`${name} hover`} 
              fill
              className="object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </Link>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < Math.floor(rating) ? "currentColor" : "none"} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-500 text-xs ml-2">({reviews} avis)</span>
        </div>

        <Link href={href}>
          <h3 className="font-display font-bold text-xl text-secondary mb-2 hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
            <ShieldCheck size={16} />
            <span>En stock - Expédié sous 24h</span>
          </div>
          <div className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded border border-red-100 flex items-center justify-center gap-1 uppercase tracking-tighter w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Stock faible - Commandez vite
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl text-secondary">{price.toFixed(2)}€</span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">{originalPrice.toFixed(2)}€</span>
              )}
            </div>
            <span className="text-xs text-gray-500 block">TTC (TVA incluse)</span>
          </div>

          <button className="bg-primary hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition-colors transform hover:scale-105">
            <ShoppingCart size={20} />
            <span className="sr-only">Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
