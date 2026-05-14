import Link from 'next/link';
import { CheckCircle, ArrowRight, Package, Truck, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commande Confirmée | HantaProtect",
  description: "Merci pour votre commande chez HantaProtect.",
};

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // We can eventually use searchParams.session_id to fetch the order details from Stripe
  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-xl text-center border border-gray-100">
        <div className="mx-auto w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
          Merci pour votre commande !
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Votre paiement a bien été reçu et votre commande est en cours de préparation. 
          Vous allez recevoir un email de confirmation d'ici quelques minutes.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 mb-10 text-left border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
            Prochaines étapes
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                  <Package className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Préparation (24h ouvrées)</h3>
                <p className="mt-1 text-gray-500">Nous préparons soigneusement vos masques dans notre entrepôt.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                  <Truck className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Expédition</h3>
                <p className="mt-1 text-gray-500">Votre colis est confié à notre transporteur avec un numéro de suivi.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Livraison (48h/72h)</h3>
                <p className="mt-1 text-gray-500">Vous recevez votre commande directement chez vous, en toute sécurité.</p>
              </div>
            </li>
          </ul>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
        >
          Retour à la boutique
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
