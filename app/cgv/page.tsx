import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | HantaProtect",
  description: "Conditions Générales de Vente (CGV) de HantaProtect.",
};

export default function CGV() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8">
          Conditions Générales de Vente (CGV)
        </h1>

        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 1er Octobre 2023</p>
        
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente déterminent les droits et obligations des parties dans le cadre de la vente en ligne de produits proposés par la société HantaProtect.
        </p>

        <h2>2. Produits</h2>
        <p>
          Les caractéristiques essentielles des biens, des services et leurs prix respectifs sont mis à disposition de l'acheteur sur le site internet de la société. Le client atteste avoir reçu un détail des frais de livraison ainsi que les modalités de paiement, de livraison et d'exécution du contrat.
        </p>

        <h2>3. Prix</h2>
        <p>
          Les prix des produits vendus au travers des sites Internet sont indiqués en Euros toutes taxes comprises (TVA + autres taxes éventuelles) sur la page de commande des produits, et hors frais spécifiques d'expédition. La société se réserve la possibilité de modifier ses prix à tout moment pour l'avenir.
        </p>

        <h2>4. Conclusion du contrat en ligne</h2>
        <p>
          Le Client devra suivre une série d'étapes spécifiques à chaque Produit offert par le Vendeur pour pouvoir réaliser sa commande. La validation de la commande entraîne acceptation des présentes CGV.
        </p>

        <h2>5. Paiement</h2>
        <p>
          Le paiement est exigible immédiatement à la commande, y compris pour les produits en précommande. Le Client peut effectuer le règlement par carte de paiement via notre prestataire sécurisé Stripe.
        </p>

        <h2>6. Rétractation</h2>
        <p>
          Conformément à l'article L. 121-20 du Code de la consommation, le Consommateur dispose d'un délai de quatorze jours francs pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités. Note : pour des raisons d'hygiène, les masques dont l'emballage a été ouvert ne peuvent être retournés.
        </p>

        <h2>7. Litiges</h2>
        <p>
          Toutes les clauses figurant dans les présentes conditions générales de vente, ainsi que toutes les opérations d'achat et de vente qui y sont visées, seront soumises au droit français.
        </p>
      </div>
    </div>
  );
}
