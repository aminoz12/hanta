import { Check } from 'lucide-react';
import clsx from 'clsx';

interface PricingTier {
  title: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
}

export default function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
      {tiers.map((tier, index) => (
        <div 
          key={index}
          className={clsx(
            "relative rounded-3xl p-8 bg-white border flex flex-col h-full transition-transform hover:-translate-y-1 duration-300",
            tier.isPopular ? "border-primary shadow-xl shadow-primary/10" : "border-gray-200 shadow-sm"
          )}
        >
          {tier.isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
              Meilleur Choix
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="font-display font-bold text-xl text-secondary mb-2">{tier.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-secondary">{tier.price}€</span>
              <span className="text-gray-500 font-medium">/{tier.unit}</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={20} className="text-accent shrink-0" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            className={clsx(
              "w-full py-4 rounded-xl font-bold transition-all mt-auto",
              tier.isPopular 
                ? "bg-primary text-white hover:bg-blue-700 shadow-md hover:shadow-lg" 
                : "bg-gray-100 text-secondary hover:bg-gray-200"
            )}
          >
            {tier.ctaText}
          </button>
        </div>
      ))}
    </div>
  );
}
