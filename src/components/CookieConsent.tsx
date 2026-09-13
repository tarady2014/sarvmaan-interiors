'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run on client side
    setIsClient(true);
    
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie_consent');
    if (!hasConsent) {
      // Show consent banner after 1 second
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    // Grant all consent
    localStorage.setItem('cookie_consent', 'accepted');
    
    // Update GA4 consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });

      // Track consent event
      (window as any).gtag('event', 'cookie_consent_accepted', {
        'consent_type': 'all'
      });
    }
    
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    // Reject all
    localStorage.setItem('cookie_consent', 'rejected');
    
    // Update GA4 consent - deny storage
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });

      // Track rejection
      (window as any).gtag('event', 'cookie_consent_rejected', {
        'consent_type': 'none'
      });
    }
    
    setShowConsent(false);
  };

  if (!isClient || !showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-2xl border-t-4 border-primary animate-in slide-in-from-bottom">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary mb-2">🍪 Cookie Consent</h3>
            <p className="text-gray-700 text-sm">
              We use cookies and analytics to enhance your browsing experience, track site performance, and improve our services. By accepting, you consent to Google Analytics and Google Ads tracking.{' '}
              <a href="/legal" className="text-secondary font-semibold hover:underline">
                Learn more
              </a>
            </p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleRejectAll}
              className="flex-1 md:flex-none px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 md:flex-none px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
