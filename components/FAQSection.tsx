"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quelle est la différence entre un masque chirurgical et un masque FFP2 ?",
    answer: "Le masque chirurgical (Type IIR) protège principalement l'entourage en retenant les gouttelettes émises par le porteur. Le masque FFP2, plus filtrant et hermétique, protège à la fois le porteur contre l'inhalation d'agents infectieux et son entourage."
  },
  {
    question: "Combien de temps puis-je porter mon masque ?",
    answer: "Un masque chirurgical doit être changé toutes les 4 heures maximum, ou dès qu'il est humide. Un masque FFP2 peut être porté jusqu'à 8 heures en continu."
  },
  {
    question: "Vos masques sont-ils certifiés CE ?",
    answer: "Oui, tous nos masques répondent aux normes européennes en vigueur. Les masques chirurgicaux sont conformes à la norme EN 14683:2019+AC:2019 et les masques FFP2 à la norme EN 149:2001+A1:2009."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Toute commande passée avant 14h est expédiée le jour même. La livraison en France métropolitaine s'effectue généralement sous 24 à 48 heures via nos partenaires logistiques."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center text-secondary mb-10">
          Questions Fréquentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-white text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-secondary text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={clsx(
                    "text-primary transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                  size={24} 
                />
              </button>
              
              <div 
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-5 text-gray-600 bg-gray-50 pt-2 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
