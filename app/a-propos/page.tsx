import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Heart, Award } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: "À Propos | HantaProtect",
  description: "Découvrez l'histoire de HantaProtect, votre partenaire de confiance français pour la protection respiratoire (masques chirurgicaux et FFP2).",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Notre Mission : Votre Protection
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Chez HantaProtect, nous nous engageons à fournir des masques de haute qualité pour garantir la sécurité et la santé de tous, au quotidien comme en milieu professionnel.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'histoire de HantaProtect</h2>
            <div className="prose prose-blue prose-lg text-gray-500">
              <p>
                Fondée avec une vision claire — rendre la protection respiratoire de norme médicale accessible à tous — HantaProtect est née d'un besoin de confiance et de transparence.
              </p>
              <p>
                Face aux défis sanitaires mondiaux, nous avons constaté qu'il était parfois difficile de trouver des masques fiables, confortables et certifiés. Nous avons donc décidé de sélectionner rigoureusement nos partenaires fabricants pour vous offrir uniquement le meilleur : des masques chirurgicaux Type IIR et des masques FFP2 qui répondent aux normes européennes les plus strictes.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'accompagner des milliers de particuliers et de professionnels de santé dans leur protection quotidienne.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
               <span className="text-gray-400 font-medium">Image: Équipe ou Laboratoire</span>
            </div>
            {/* Fallback for when we add real image */}
            {/* <Image src="/about-us.jpg" alt="Équipe HantaProtect" fill className="object-cover" /> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualité Intransigeante</h3>
              <p className="text-gray-500">
                Tous nos produits sont testés et certifiés CE, garantissant un niveau de filtration optimal pour votre sécurité.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confort Avant Tout</h3>
              <p className="text-gray-500">
                Un masque n'est efficace que s'il est bien porté. Nous privilégions des matériaux doux et hypoallergéniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Client Dévoué</h3>
              <p className="text-gray-500">
                Basée en France, notre équipe est à votre écoute pour répondre à vos questions et expédier vos commandes en un temps record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
    </div>
  );
}
