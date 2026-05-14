import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import * as motion from 'framer-motion/client';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import ComparisonTable from '@/components/ComparisonTable';
import FAQSection from '@/components/FAQSection';
import BlogTeaser from '@/components/BlogTeaser';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-white">
        {/* Deep Mesh Background */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] bg-blue-50/70 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-green-50/60 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-50/20 rounded-full blur-[180px] pointer-events-none" />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ backgroundImage: 'linear-gradient(#0b1528 1px, transparent 1px), linear-gradient(90deg, #0b1528 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating Particles (Clean Air Concept) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2, scale: 0.5, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
              animate={{ 
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-2 h-2 bg-blue-200 rounded-full blur-[2px]"
            />
          ))}
        </div>

        {/* Refined Hexagonal Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons-hero" width="80" height="69.2" patternUnits="userSpaceOnUse" patternTransform="scale(1.2) rotate(15)">
                <path d="M40 0 L80 23 L80 69 L40 92 L0 69 L0 23 Z" fill="none" stroke="#0b1528" strokeWidth="1" strokeDasharray="4 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons-hero)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f0f9f4] text-[#2d7a4d] text-sm font-bold mb-10 border border-[#e1f0e7]">
                <span className="text-xs">🔒</span>
                <span>100% Certifiés CE</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl tracking-tight font-display font-extrabold text-[#0b1528] leading-[1.1]">
                <span className="block">Protégez-vous avec</span>
                <span className="block font-serif italic font-black">
                  la qualité <span className="text-[#3b82f6]">médicale</span>
                </span>
              </h1>
              
              <p className="mt-8 text-xl text-[#4b5563] font-medium leading-relaxed max-w-lg">
                Boutique officielle HantaProtect. Masques chirurgicaux Type IIR et masques FFP2 haute filtration. Livraison rapide depuis nos entrepôts en France.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
                <Link
                  href="/masque-chirurgical-type-2r"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#3b82f6] text-white font-black text-lg rounded-2xl transition-all shadow-[0_15px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Découvrir nos masques
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </span>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>
                
                <Link
                  href="/masque-ffp2"
                  className="text-xl font-black text-[#0b1528] hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                >
                  Voir les FFP2
                </Link>
              </div>
            </div>
            
            {/* Right Image Content */}
            <div className="mt-20 lg:mt-0 lg:col-span-6">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-100">
                <Image
                  src="/images/hero.png"
                  alt="Protection HantaProtect"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Trust Badges listed below - Minimalist Style */}
              <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8 max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="text-blue-500 bg-blue-50/50 p-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Standard</span>
                    <span className="text-sm font-black text-[#0b1528]">EN 149:2001+A1:2009</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-blue-500 bg-blue-50/50 p-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Haute Filtration</span>
                    <span className="text-sm font-black text-[#0b1528]">≥ 99%</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-green-500 bg-green-50/50 p-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Certifié</span>
                    <span className="text-sm font-black text-[#0b1528]">CE</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-[#b59461] bg-[#b59461]/10 p-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Trusted</span>
                    <span className="text-sm font-black uppercase text-[#0b1528]">Brand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Featured Products Section */}
      {/* Category CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link 
              href="/masque-chirurgical-type-2r"
              className="group relative h-64 rounded-3xl overflow-hidden flex items-center justify-center text-center p-8 transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-black text-white mb-3 uppercase tracking-wider">Masques Chirurgicaux</h3>
                <p className="text-blue-100 text-sm mb-6 max-w-xs mx-auto">Protection quotidienne certifiée Type IIR - EFB ≥ 98%</p>
                <span className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg group-hover:bg-blue-50 transition-colors">
                  Acheter Maintenant <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            <Link 
              href="/masque-ffp2"
              className="group relative h-64 rounded-3xl overflow-hidden flex items-center justify-center text-center p-8 transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-[#1e293b] transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-black text-white mb-3 uppercase tracking-wider">Masques FFP2</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-xs mx-auto">Haute filtration 5 couches - Protection respiratoire maximale</p>
                <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg group-hover:bg-blue-700 transition-colors">
                  Acheter Maintenant <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary sm:text-4xl">Nos Produits Phares</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Sélectionnez la protection adaptée à vos besoins. Tous nos masques respectent les normes européennes les plus strictes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Comparison Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary sm:text-4xl">Quel masque choisir ?</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Comparez rapidement les caractéristiques de nos masques pour faire le meilleur choix.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <ComparisonTable />
            <div className="mt-8 text-center">
              <Link href="/blog/comment-choisir-son-masque" className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors">
                Lire notre guide complet <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <BlogTeaser />
    </>
  );
}
