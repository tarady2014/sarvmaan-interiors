# Google Ads Conversion Tracking Implementation

## Overview
This document details the integration of Google Ads conversion tracking (Google Tag Manager - gtag.js) into the Sarvmaan Interiors website.

**Google Ads Conversion ID**: `AW-18417335374`

---

## Implementation Details

### 1. **Global Google Tag (gtag.js) - All Pages**

**File**: `/src/app/layout.tsx`

The global Google Tag has been added to the root layout's `<head>` section, ensuring it loads on every page of the website.

**What was added:**
```jsx
{/* Google Tag Manager (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18417335374"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18417335374');
    `,
  }}
/>
```

**How it works in Next.js**:
- Uses `dangerouslySetInnerHTML` to safely inject the Google Ads tracking script
- The async script tag loads Google's gtag library from CDN
- Sets up the global `gtag()` function and `dataLayer` for tracking events
- Applies to ALL pages across the website

---

### 2. **Contact Form Conversion Tracking**

**Files Modified**:
- `/src/app/(pages)/contact/ContactClient.tsx`

**New Hook Created**:
- `/src/hooks/useGoogleAdsConversion.ts`

#### **The Hook**: `useGoogleAdsConversion()`

```typescript
export const useGoogleAdsConversion = () => {
  const trackConversion = (conversionLabel: string) => {
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
```

**Location**: `/src/hooks/useGoogleAdsConversion.ts`

**Purpose**: 
- Provides a reusable function to track conversions from any component
- Checks if gtag is available before firing the event
- Includes console logging for debugging
- Type-safe with TypeScript

#### **Contact Form Integration**

**Location**: `/src/app/(pages)/contact/ContactClient.tsx`

**What happens**:
1. The hook is imported at the top of the component
2. When the contact form is successfully submitted (`if (response.ok)`), the conversion is tracked:

```typescript
const { trackConversion } = useGoogleAdsConversion();

// Inside handleSubmit, when form succeeds:
if (response.ok) {
  setSubmitted(true);
  
  // ✅ Track Google Ads conversion
  trackConversion('96_jCN2F2u8cEM74iM5E');
  
  // ... rest of success handling
}
```

**Conversion Details**:
- **Conversion Label**: `96_jCN2F2u8cEM74iM5E`
- **Full Send ID**: `AW-18417335374/96_jCN2F2u8cEM74iM5E`
- **Triggered**: When contact form submission succeeds
- **User Experience**: No disruption - happens silently in background

---

## How It Works (User Journey)

### On Page Load (All Pages)
1. ✅ Root layout loads
2. ✅ Google Ads gtag script loads asynchronously
3. ✅ `window.gtag()` function becomes available
4. ✅ Pageview is tracked automatically

### On Contact Form Submission
1. User fills out contact form
2. User clicks "Submit"
3. Form data is sent to `/api/contact`
4. **If successful**:
   - ✅ `submitted` state is set to true
   - ✅ Success message is displayed to user
   - ✅ `trackConversion('96_jCN2F2u8cEM74iM5E')` is called
   - ✅ Google Ads records a conversion event
   - ✅ Conversion appears in Google Ads dashboard (within 24-48 hours)

---

## Verification & Testing

### Browser Console Logs
When a conversion is tracked, you'll see:
```
✅ Google Ads conversion tracked: AW-18417335374/96_jCN2F2u8cEM74iM5E
```

### Google Ads Dashboard
1. Go to: https://ads.google.com → Conversions
2. Select the conversion action: "Contact"
3. You should see conversion events coming in within 24-48 hours

### Network Tab (DevTools)
Look for requests to:
- `googletagmanager.com/gtag/js` (script loading)
- `google-analytics.com/g/collect` (conversion tracking)

---

## Adding More Conversion Tracking Points

To track conversions on other pages/actions, use the hook:

```typescript
import { useGoogleAdsConversion } from '@/hooks/useGoogleAdsConversion';

export default function MyComponent() {
  const { trackConversion } = useGoogleAdsConversion();

  const handleAction = () => {
    // Do something...
    
    // Track conversion
    trackConversion('YOUR_CONVERSION_LABEL');
  };

  return (
    // component JSX
  );
}
```

Replace `'YOUR_CONVERSION_LABEL'` with the actual conversion label from your Google Ads account.

---

## Current Configuration

| Item | Value |
|------|-------|
| **Google Ads Account ID** | AW-18417335374 |
| **Conversion Type** | Contact Form Submission |
| **Conversion Label** | 96_jCN2F2u8cEM74iM5E |
| **Conversion Page** | /contact |
| **Global Tag Location** | /src/app/layout.tsx |
| **Hook Location** | /src/hooks/useGoogleAdsConversion.ts |
| **Implementation Method** | Next.js `dangerouslySetInnerHTML` |

---

## Important Notes

⚠️ **Privacy & Compliance**:
- Ensure your Privacy Policy mentions Google Ads tracking
- Comply with GDPR/CCPA if applicable to your users
- Verify consent management setup if required

✅ **Best Practices**:
- The gtag script loads asynchronously (non-blocking)
- Error handling is in place (checks if gtag is available)
- Console logging for debugging in development
- Type-safe TypeScript implementation

🔧 **Troubleshooting**:
- If conversions aren't showing up:
  1. Check browser console for error messages
  2. Verify Conversion ID (AW-18417335374) is correct
  3. Verify Conversion Label (96_jCN2F2u8cEM74iM5E) is correct
  4. Wait 24-48 hours for Google Ads to report conversions
  5. Check Network tab in DevTools for gtag requests

---

## Files Modified

1. **`/src/app/layout.tsx`**
   - Added Google Tag Manager script in `<head>`
   - Added gtag initialization script
   - Changes: +15 lines

2. **`/src/app/(pages)/contact/ContactClient.tsx`**
   - Added import for `useGoogleAdsConversion`
   - Added hook initialization
   - Added `trackConversion()` call in success handler
   - Changes: +2 lines (implementation code)

3. **`/src/hooks/useGoogleAdsConversion.ts`** (NEW FILE)
   - Custom React hook for conversion tracking
   - Reusable across entire application
   - Includes TypeScript type augmentation for `window.gtag`

---

## Next Steps

1. ✅ Verify conversions are being tracked in Google Ads dashboard
2. ⏳ Set up conversion value tracking (if needed)
3. ⏳ Add conversion tracking to other key actions (e.g., phone calls, WhatsApp clicks)
4. ⏳ Set up conversion optimization in Google Ads campaigns

---

**Implementation Date**: September 6, 2026
**Status**: ✅ Complete and tested
**Build Status**: ✅ Production ready
