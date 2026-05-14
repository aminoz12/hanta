import { ShieldCheck, Truck, Clock, Headphones } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-full shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary">Paiement Sécurisé</h4>
              <p className="text-xs text-gray-500">SSL 256 bits</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary">Livraison Gratuite</h4>
              <p className="text-xs text-gray-500">Dès 50€ d&apos;achat</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary">Expédition 24h</h4>
              <p className="text-xs text-gray-500">Depuis la France</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full shrink-0">
              <Headphones size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary">Service Client</h4>
              <p className="text-xs text-gray-500">Réponse sous 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
