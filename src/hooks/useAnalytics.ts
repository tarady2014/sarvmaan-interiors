'use client';

/**
 * Google Analytics 4 & Google Ads Tracking Hook
 * Use this hook to track events, page views, and user interactions
 */

export function useAnalytics() {
  /**
   * Track a custom event
   * @param eventName - Name of the event (e.g., 'contact_inquiry', 'phone_click')
   * @param eventData - Optional data object with event properties
   */
  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventData || {});
      console.log(`📊 Analytics Event: ${eventName}`, eventData);
    }
  };

  /**
   * Track Google Ads conversion
   * @param conversionLabel - The conversion label from Google Ads
   */
  const trackConversion = (conversionLabel: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': `AW-18417335374/${conversionLabel}`,
      });
      console.log(`💰 Google Ads Conversion: ${conversionLabel}`);
    }
  };

  /**
   * Track page view
   * @param pageName - Name of the page
   */
  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        'page_title': pageName,
        'page_location': window.location.href,
      });
      console.log(`📄 Page View: ${pageName}`);
    }
  };

  /**
   * Track user engagement time
   * @param value - Duration in seconds
   */
  const trackEngagement = (value: number) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'user_engagement', {
        'engagement_time_msec': value * 1000,
      });
    }
  };

  return {
    trackEvent,
    trackConversion,
    trackPageView,
    trackEngagement,
  };
}
