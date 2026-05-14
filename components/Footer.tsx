import Link from 'next/link';
import { ShieldCheck, Truck, Clock, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-700 pb-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold text-sm">Qualité Médicale</h4>
            <p className="text-gray-400 text-xs">Conforme EN 14683 & EN 149</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <Truck size={32} />
            </div>
            <h4 className="font-bold text-sm">Livraison Rapide</h4>
            <p className="text-gray-400 text-xs">Expédié sous 24h depuis la France</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <Clock size={32} />
            </div>
            <h4 className="font-bold text-sm">Service Client</h4>
            <p className="text-gray-400 text-xs">Disponible 5j/7 par email</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <CreditCard size={32} />
            </div>
            <h4 className="font-bold text-sm">Paiement Sécurisé</h4>
            <p className="text-gray-400 text-xs">Stripe & Protocoles SSL 256 bits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-[#0b1528] rounded shadow-[2px_2px_0px_rgba(220,38,38,1)]">
                <span className="font-extrabold text-[#0b1528] text-xl">HP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-xl leading-none tracking-tight">HANTA PROTECT</span>
                <span className="text-red-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-1">LA RÉVOLUTION DU MASQUE</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Votre partenaire de confiance pour la protection respiratoire médicale. Masques certifiés CE, expédiés depuis nos entrepôts en France.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Nos Produits</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/masque-chirurgical-type-2r" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Masques Chirurgicaux Type IIR
                </Link>
              </li>
              <li>
                <Link href="/masque-ffp2" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Masques FFP2
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Foire Aux Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog & Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nous Contacter
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HantaProtect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
