# 🔧 Google Analytics 4 Setup & Testing Guide

## ⚡ Quick Setup (2 steps)

### Step 1: Get Your GA4 ID
1. Go to: https://analytics.google.com
2. Create new property → Sarvmaan Interiors
3. Copy your **Measurement ID** (starts with `G-`)

### Step 2: Add GA4 ID to layout
Edit `src/app/layout.tsx` line 77-78:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
```
Replace `G-YOUR_ID_HERE` with your actual GA4 ID.

---

## 🧪 Testing Before Push

### Start Dev Server
```bash
npm run dev
```

### Quick Test (In Browser Console)
```javascript
// Check if gtag loaded
typeof window.gtag  // Should return "function"

// Test event tracking
window.gtag('event', 'test_event', { value: 1 });
```

**See**: `GOOGLE_ANALYTICS_TESTING.md` for detailed testing checklist

---

## Current Status

| Component | Status | Location |
|-----------|--------|----------|
| **gtag Script** | ✅ Ready (awaiting GA4 ID) | `src/app/layout.tsx` line 77 |
| **Analytics Hook** | ✅ Created | `src/hooks/useAnalytics.ts` |
| **Google Ads** | ✅ Active | Conversion tracking: `AW-18417335374` |
| **Contact Form** | ✅ Active | `src/app/(pages)/contact/ContactClient.tsx` |

---

## Using the Analytics Hook

### Track Custom Events
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

export function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  return (
    <button onClick={() => trackEvent('button_click', { button_name: 'CTA' })}>
      Click Me
    </button>
  );
}
```

### Track Form Submissions
```tsx
const { trackConversion } = useAnalytics();

if (response.ok) {
  trackConversion('96_jCN2F2u8cEM74iM5E'); // Google Ads
  trackEvent('form_submitted', { form_type: 'contact' }); // GA4
}
```

### Track Page Views
```tsx
const { trackPageView } = useAnalytics();
trackPageView('Contact Page');
```

### Track Engagement
```tsx
const { trackEngagement } = useAnalytics();
trackEngagement(45); // 45 seconds on page
```

---

## Available Events

```typescript
// Track any custom event
trackEvent('event_name', { 
  property1: 'value1',
  property2: 'value2' 
})

// Common events to track:
trackEvent('phone_click')                    // Phone button clicked
trackEvent('whatsapp_click')                 // WhatsApp button clicked
trackEvent('portfolio_view', { project_id: '123' })
trackEvent('download_brochure')
trackEvent('form_started')                   // When user starts form
trackEvent('form_abandoned')                 // When user leaves form
```

---

## What's Tracked Automatically

✅ Page views (when GA4 ID is added)  
✅ Session duration  
✅ Device & browser info  
✅ User location  
✅ Traffic source  

---

## Where to Find Data

### Google Analytics Dashboard
1. Go to: https://analytics.google.com
2. Select your property: Sarvmaan Interiors
3. View → Real-time events (live tracking)
4. View → Engagement (user behavior)

### Google Ads Dashboard
1. Go to: https://ads.google.com
2. Tools → Conversions
3. See contact form submissions tracked

---

## Testing (Local)

1. Open DevTools (F12)
2. Console tab
3. Type: `window.gtag('event', 'test_event')`
4. Should log: `📊 Analytics Event: test_event`

Once GA4 ID is added, events will appear in real-time dashboard within seconds.

---

## Next: Add GA4 ID

**Your GA4 Property ID (G-XXXXXXXXXX):** ____________________

Once you have it, update line 77 in `src/app/layout.tsx` and you're done! ✅
