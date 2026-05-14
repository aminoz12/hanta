import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contactez-nous | HantaProtect",
  description: "Une question ? Besoin d'aide ? Contactez l'équipe HantaProtect. Nous sommes à votre disposition pour toute demande concernant nos masques.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Contactez-nous</h1>
          <p className="mt-4 text-lg text-gray-500">
            Notre équipe est à votre écoute. Remplissez le formulaire ci-dessous ou utilisez nos coordonnées.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-primary p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <p className="text-primary-100 mb-10">
                Nous nous engageons à vous répondre dans les plus brefs délais, généralement sous 24h ouvrées.
              </p>

              <div className="space-y-6">

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-primary-100">contact@hantaprotect.fr</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-primary-100">123 Avenue de la République<br />75011 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-white mr-4" />
                  <div>
                    <p className="font-medium">Horaires d'ouverture</p>
                    <p className="text-primary-100">Lun - Ven : 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="jean.dupont@exemple.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border bg-white"
                  >
                    <option>Information sur un produit</option>
                    <option>Suivi de commande</option>
                    <option>Demande de devis B2B</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
