"use client";

import { useState } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { Minus, Plus, ShoppingCart, ShieldCheck } from 'lucide-react';

interface AddToCartBarProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartBar({ product }: AddToCartBarProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24 z-10">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-3xl font-bold text-secondary">{product.price.toFixed(2)}€</span>
          <span className="text-gray-500 text-sm ml-2">TTC</span>
        </div>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <ShieldCheck size={18} /> En stock - Prêt à être expédié
          </div>
          <div className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-red-100 flex items-center gap-2 uppercase tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Stock faible - Plus que quelques boîtes !
          </div>
          <p>Livraison gratuite à partir de 50€ d&apos;achat</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 h-14">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 h-full text-gray-500 hover:text-secondary hover:bg-gray-100 rounded-l-xl transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="w-10 text-center font-bold text-secondary bg-white h-full flex items-center justify-center border-x border-gray-300">
              {quantity}
            </span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 h-full text-gray-500 hover:text-secondary hover:bg-gray-100 rounded-r-xl transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-primary text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <ShoppingCart size={20} />
            Ajouter
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-4 border-t border-gray-100">
          <img src="/visa.png" alt="Visa" className="h-7 transition-all hover:scale-110" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-7 transition-all hover:scale-110" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-7 transition-all hover:scale-110" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="Google Pay" className="h-6 transition-all hover:scale-110" />
          <div className="bg-black px-2.5 py-1 rounded text-[11px] font-black text-white border border-black shadow-sm">REVOLUT PAY</div>
        </div>
      </div>
    </div>
  );
}
