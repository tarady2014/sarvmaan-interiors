/**
 * Hook for tracking Google Ads conversions
 * This hook provides a utility function to fire conversion events to Google Ads
 */

export const useGoogleAdsConversion = () => {
  const trackConversion = (conversionLabel: string) => {
    // Check if gtag is available (loaded via layout.tsx)
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': `AW-18417335374/${conversionLabel}`,
      });
      console.log(`✅ Google Ads conversion tracked: AW-18417335374/${conversionLabel}`);
    } else {
      console.warn('⚠️ Google Ads (gtag) not available yet. Conversion not tracked.');
    }
  };

  return { trackConversion };
};

// Type augmentation for window.gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}
