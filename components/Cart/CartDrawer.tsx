"use client";

import { useState } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { X, Plus, Minus, ShoppingBag, Trash2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isDrawerOpen, setDrawerOpen, removeItem, updateQuantity } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Une erreur est survenue lors de la redirection vers le paiement. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-secondary/40 backdrop-blur-sm transition-opacity"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col transform transition-transform animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <ShoppingBag className="text-primary" />
            Votre Panier
          </h2>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-gray-400 hover:text-secondary transition-colors rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                <ShoppingBag size={48} />
              </div>
              <p className="text-gray-500">Votre panier est vide.</p>
              <button 
                onClick={() => setDrawerOpen(false)}
                className="text-primary font-bold hover:text-blue-700 underline"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white">
                  <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100 p-2">
                    <Image src={item.image} alt={item.name} fill className="object-contain" sizes="80px" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-secondary text-sm line-clamp-2">{item.name}</h3>
                        {item.packSize && <p className="text-xs text-gray-500 mt-1">{item.packSize}</p>}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="text-gray-500 hover:text-secondary"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-secondary"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-primary">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex justify-between text-base font-bold text-secondary mb-4">
              <p>Sous-total</p>
              <p>{total.toFixed(2)}€</p>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">
              Frais de port et taxes calculés à l&apos;étape suivante.
            </p>
            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-primary text-white py-4 px-6 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-700 transition-all shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Redirection...
                </>
              ) : (
                'Commander'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
