import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Foire Aux Questions",
  description: "Retrouvez les réponses à toutes vos questions concernant nos masques chirurgicaux, FFP2, livraisons et normes CE.",
};

export default function FAQPage() {
  return (
    <>
      <div className="bg-primary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-extrabold text-white tracking-tight sm:text-5xl">
            Foire Aux Questions
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
            Nous avons rassemblé ici les questions les plus fréquentes pour vous aider dans votre choix.
          </p>
        </div>
      </div>

      <FAQSection />
      
      <div className="bg-gray-50 py-16 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold text-secondary mb-4">Vous ne trouvez pas votre réponse ?</h2>
        <p className="text-gray-600 mb-8">Notre équipe de service client est à votre disposition.</p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-blue-700 transition-colors shadow-md"
        >
          Nous Contacter
        </a>
      </div>

      <TrustBadges />
    </>
  );
}
