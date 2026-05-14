import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité | HantaProtect",
  description: "Politique de confidentialité et gestion des données personnelles de HantaProtect.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8">
          Politique de Confidentialité
        </h1>

        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 1er Octobre 2023</p>

        <h2>1. Introduction</h2>
        <p>
          La présente politique de confidentialité a pour but de vous informer sur la manière dont HantaProtect collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web.
        </p>

        <h2>2. Données collectées</h2>
        <p>
          Nous pouvons collecter les données suivantes lorsque vous naviguez sur notre site, passez une commande ou nous contactez :
        </p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale et de livraison</li>
          <li>Données de navigation et de cookies</li>
        </ul>

        <h2>3. Utilisation des données</h2>
        <p>
          Les données personnelles collectées sont utilisées pour :
        </p>
        <ul>
          <li>Traiter et expédier vos commandes</li>
          <li>Vous envoyer des informations sur votre commande</li>
          <li>Répondre à vos questions et demandes via le support client</li>
          <li>Améliorer l'expérience utilisateur de notre site</li>
          <li>Envoyer des newsletters (si vous y avez consenti)</li>
        </ul>

        <h2>4. Partage des données</h2>
        <p>
          Vos données personnelles ne sont ni vendues, ni louées, ni échangées avec des tiers. Elles peuvent être transmises à des partenaires tiers exclusivement pour l'exécution de vos commandes (transporteurs, prestataires de paiement sécurisé comme Stripe).
        </p>

        <h2>5. Sécurité</h2>
        <p>
          Nous mettons en œuvre toutes les mesures de sécurité nécessaires pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée. Les paiements sont entièrement sécurisés par notre partenaire Stripe.
        </p>

        <h2>6. Vos droits (RGPD)</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul>
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement (droit à l'oubli)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
        </ul>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter à l'adresse e-mail suivante : <a href="mailto:privacy@hantaprotect.fr" className="text-primary hover:underline">privacy@hantaprotect.fr</a>.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Vous pouvez à tout moment paramétrer vos préférences en matière de cookies via la bannière prévue à cet effet ou les réglages de votre navigateur.
        </p>
      </div>
    </div>
  );
}
