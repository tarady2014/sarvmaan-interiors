// Hook for Google Analytics event tracking
// Usage: const { trackEvent, trackPageView } = useGoogleAnalytics();

interface GTagEventParams {
  [key: string]: string | number | boolean | undefined;
}

export function useGoogleAnalytics() {
  /**
   * Track a custom event in Google Analytics
   * @param eventName - Name of the event (e.g., 'contact_inquiry', 'phone_click')
   * @param eventParams - Additional parameters to send with the event
   */
  const trackEvent = (eventName: string, eventParams?: GTagEventParams) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
      console.log(`📊 Analytics Event: ${eventName}`, eventParams || '');
    } else {
      console.warn('⚠️ gtag not available for event tracking');
    }
  };

  /**
   * Track a page view
   * @param pagePath - Path of the page
   * @param pageTitle - Title of the page
   */
  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID || '', {
        page_path: pagePath,
        page_title: pageTitle,
      });
      console.log(`📊 Analytics Page View: ${pageTitle} (${pagePath})`);
    } else {
      console.warn('⚠️ gtag not available for page view tracking');
    }
  };

  /**
   * Track user properties/demographics
   * @param userId - Unique user identifier
   */
  const setUserProperties = (userId?: string, properties?: GTagEventParams) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID || '', {
        user_id: userId,
        ...properties,
      });
      console.log(`📊 Analytics User Properties Set`, { userId, ...properties });
    } else {
      console.warn('⚠️ gtag not available for user properties');
    }
  };

  return {
    trackEvent,
    trackPageView,
    setUserProperties,
  };
}
