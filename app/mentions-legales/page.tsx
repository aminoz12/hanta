import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | HantaProtect",
  description: "Mentions légales du site HantaProtect.",
};

export default function MentionsLegales() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8">
          Mentions Légales
        </h1>
        
        <h2>1. Éditeur du site</h2>
        <p>
          Le site HantaProtect (ci-après "le Site") est édité par la société HantaProtect SAS, au capital de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.
        </p>
        <p>
          Siège social : 123 Avenue de la République, 75011 Paris, France.<br />
          Numéro de TVA intracommunautaire : FR 12 345678900.<br />
          Email : contact@hantaprotect.fr<br />
          Téléphone : 01 23 45 67 89
        </p>

        <h2>2. Directeur de la publication</h2>
        <p>
          Le Directeur de la publication du Site est Monsieur Jean Dupont, en qualité de Président de HantaProtect SAS.
        </p>

        <h2>3. Hébergement</h2>
        <p>
          Le Site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>

        <h2>5. Données personnelles</h2>
        <p>
          Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
        </p>
      </div>
    </div>
  );
}
