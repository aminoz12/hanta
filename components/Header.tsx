"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, X, Clock, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/cartStore';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setDrawerOpen } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-sm z-50 relative">
      {/* Top Banner - Blue Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-bold tracking-wide">
        <span className="uppercase text-center">NOS MASQUES FRANÇAIS VENDUS AUX PRO ET PARTICULIERS !</span>
        <Link href="/masque-chirurgical-type-2r" className="bg-white text-blue-500 px-4 py-1.5 rounded text-xs font-bold uppercase hover:bg-gray-100 transition-colors shadow-sm">
          VOIR NOS MASQUES
        </Link>
      </div>

      {/* Middle Banner - Dark Blue */}
      <div className="bg-[#0b1528] text-white text-sm py-2.5 px-4 hidden md:flex items-center justify-center w-full">
        <div className="max-w-7xl w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Livraison En 24/48h en France 📦 🚚</span>
          </div>
          <div className="text-center">
            <span>Une Question ? contact@hantaprotect.fr</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="bg-[#3b5998] p-1.5 rounded-full hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-1.5 rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between gap-6 lg:gap-12">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-[#0b1528] rounded shadow-[2px_2px_0px_rgba(220,38,38,1)]">
              <span className="font-extrabold text-[#0b1528] text-xl">HP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[#0b1528] text-2xl leading-none tracking-tight">HANTA PROTECT</span>
              <span className="text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">LA RÉVOLUTION DU MASQUE</span>
            </div>
          </Link>

          {/* Center Area (Logo text or slogan) */}
          <div className="hidden lg:flex flex-col flex-1 max-w-2xl items-center">
            <span className="text-[13px] font-bold text-[#0b1528] mb-1.5 uppercase tracking-wide">Protegez Vous et vos famille</span>
            <div className="flex w-full max-w-sm h-1.5 mb-4 rounded-full overflow-hidden shadow-inner">
              <div className="flex-1 bg-blue-600"></div>
              <div className="flex-1 bg-gray-100"></div>
              <div className="flex-1 bg-red-600"></div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-shrink-0 items-center gap-8">


            <button 
              onClick={() => setDrawerOpen(true)} 
              className="flex flex-col items-center group relative"
            >
              <div className="relative mb-1.5">
                <ShoppingCart size={26} className="text-[#38bdf8] group-hover:text-[#0ea5e9] transition-colors" strokeWidth={1.5} />
                {mounted && (
                  <span className="absolute -top-2 -right-3 flex items-center justify-center w-[18px] h-[18px] text-[10px] font-bold text-white bg-[#38bdf8] rounded-full border border-white shadow-sm">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold text-[#0b1528]">MON PANIER</span>
            </button>

            <button 
              className="lg:hidden text-[#0b1528] hover:text-[#38bdf8] transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links (Desktop) */}
      <div className="hidden lg:block border-t border-gray-100 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-12 py-3">
          <Link href="/masque-chirurgical-type-2r" className="text-[13px] font-bold text-[#0b1528] hover:text-[#38bdf8] transition-colors tracking-wide uppercase">
            Masques Chirurgicaux
          </Link>
          <Link href="/masque-ffp2" className="text-[13px] font-bold text-[#0b1528] hover:text-[#38bdf8] transition-colors tracking-wide uppercase">
            Masques FFP2
          </Link>
          <Link href="/faq" className="text-[13px] font-bold text-[#0b1528] hover:text-[#38bdf8] transition-colors tracking-wide uppercase">
            FAQ
          </Link>
          <Link href="/blog" className="text-[13px] font-bold text-[#0b1528] hover:text-[#38bdf8] transition-colors tracking-wide uppercase">
            Blog
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">

          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            <Link 
              href="/masque-chirurgical-type-2r" 
              className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wide text-[#0b1528] hover:text-[#38bdf8] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masques Chirurgicaux
            </Link>
            <Link 
              href="/masque-ffp2" 
              className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wide text-[#0b1528] hover:text-[#38bdf8] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masques FFP2
            </Link>
            <Link 
              href="/faq" 
              className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wide text-[#0b1528] hover:text-[#38bdf8] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wide text-[#0b1528] hover:text-[#38bdf8] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

