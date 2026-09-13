'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SpinWheelPromotion() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Show promo after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !isVisible) return null;

  return (
    <>
      {/* Overlay - simple div without motion */}
      <div
        onClick={() => setIsVisible(false)}
        className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Pop-up Modal - simple div without motion */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-auto px-4 max-h-[90vh] overflow-y-auto">
        <div 
          className="relative rounded-2xl shadow-2xl p-6 md:p-8 space-y-4 md:space-y-6 overflow-hidden bg-[#faf8f6]"
          style={{ borderTop: '4px solid #d4af37' }}
        >
          {/* Decorative background elements */}
          <div 
            className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 rounded-full blur-3xl -mr-16 md:-mr-20 -mt-16 md:-mt-20" 
            style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} 
          />
          <div 
            className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 rounded-full blur-3xl -ml-16 md:-ml-20 -mb-16 md:-mb-20" 
            style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} 
          />

          {/* Decorative top accent */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-24 h-20 md:h-24 rounded-full shadow-lg flex items-center justify-center border-4"
            style={{ backgroundColor: '#faf8f6', borderColor: '#d4af37' }}
          >
            <span className="text-3xl md:text-4xl animate-spin">🎡</span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 transition-colors z-10"
            style={{ color: '#666' }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative z-10 pt-6 md:pt-8">
            <div className="text-center space-y-1 md:space-y-2 mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-black leading-tight" style={{ color: '#1a1410' }}>
                Spin to Win!
              </h2>
              <p className="text-base md:text-lg font-semibold" style={{ color: '#d4af37' }}>
                Exclusive Offer Inside
              </p>
            </div>

            <div 
              className="space-y-2 md:space-y-3 mb-4 md:mb-6 p-4 md:p-5 rounded-lg md:rounded-xl border-l-4" 
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)', borderColor: '#d4af37' }}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-xl md:text-2xl">💰</div>
                <div>
                  <p className="font-bold text-sm md:text-base" style={{ color: '#1a1410' }}>5% Discount</p>
                  <p className="text-xs" style={{ color: '#666' }}>On your entire project</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-xl md:text-2xl">🎁</div>
                <div>
                  <p className="font-bold text-sm md:text-base" style={{ color: '#1a1410' }}>FREE ₹5,000 Consultation</p>
                  <p className="text-xs" style={{ color: '#666' }}>Expert design guidance</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-xl md:text-2xl">⚡</div>
                <div>
                  <p className="font-bold text-sm md:text-base" style={{ color: '#1a1410' }}>Instant Results</p>
                  <p className="text-xs" style={{ color: '#666' }}>Know your offer right away</p>
                </div>
              </div>
            </div>

            <p 
              className="text-xs md:text-sm mb-4 md:mb-6 text-center p-3 md:p-4 rounded-lg" 
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)', color: '#333' }}
            >
              Enter your society name and spin the wheel to claim your exclusive offer on premium interior design services.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex gap-2 md:gap-3">
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg font-bold hover:opacity-80 transition-opacity border text-sm md:text-base"
              style={{ backgroundColor: '#f0f0f0', color: '#1a1410', borderColor: '#d4af37' }}
            >
              Maybe Later
            </button>
            <Link
              href="/spin-to-win"
              className="flex-1 px-3 md:px-4 py-2 md:py-3 text-white rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 text-center text-sm md:text-base"
              style={{ backgroundColor: '#d4af37' }}
            >
              Spin Now →
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-xs text-center" style={{ color: '#666' }}>
            No credit card required. One spin per visitor!
          </p>
        </div>
      </div>
    </>
  );
}
