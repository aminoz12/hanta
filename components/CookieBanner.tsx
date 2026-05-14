"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-secondary">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser notre trafic et vous proposer des offres pertinentes.
            En cliquant sur &quot;Accepter&quot;, vous consentez à l&apos;utilisation de ces cookies.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={rejectCookies}
            className="px-4 py-2 text-sm font-medium text-secondary hover:bg-gray-100 rounded-md transition-colors"
          >
            Refuser
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-blue-700 rounded-md transition-colors shadow-sm"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
