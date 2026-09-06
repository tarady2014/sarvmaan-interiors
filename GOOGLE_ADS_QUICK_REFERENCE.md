# 🎯 Google Ads Conversion Tracking - Quick Reference

## Implementation Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    SARVMAAN INTERIORS                       │
│              Google Ads Conversion Tracking                 │
└─────────────────────────────────────────────────────────────┘

LAYER 1: ROOT LAYOUT (All Pages)
┌──────────────────────────────────────────────────────────┐
│ /src/app/layout.tsx                                      │
│ ├─ Google Tag Script                                   │
│ │  └─ AW-18417335374 (Conversion ID)                   │
│ │     └─ Loads on ALL pages automatically             │
│ └─ gtag() function available globally                  │
│    └─ window.gtag('event', 'conversion', {...})        │
└──────────────────────────────────────────────────────────┘
                          ↓
LAYER 2: CONVERSION HOOK
┌──────────────────────────────────────────────────────────┐
│ /src/hooks/useGoogleAdsConversion.ts                     │
│                                                          │
│ export const useGoogleAdsConversion = () => {          │
│   const trackConversion = (label) => {                 │
│     gtag('event', 'conversion', {                      │
│       'send_to': `AW-18417335374/${label}`            │
│     });                                                │
│   };                                                   │
│   return { trackConversion };                          │
│ };                                                     │
└──────────────────────────────────────────────────────────┘
                          ↓
LAYER 3: CONTACT FORM (Specific Page)
┌──────────────────────────────────────────────────────────┐
│ /src/app/(pages)/contact/ContactClient.tsx              │
│                                                          │
│ const { trackConversion } = useGoogleAdsConversion();   │
│                                                          │
│ if (response.ok) {                                      │
│   trackConversion('96_jCN2F2u8cEM74iM5E');            │
│   ↓                                                     │
│   Conversion sent to Google Ads! ✅                     │
│ }                                                       │
└──────────────────────────────────────────────────────────┘
```

---

## 🔗 Data Flow

```
1. USER VISITS WEBSITE
   └─→ layout.tsx loads
       └─→ Google Tag script loads
           └─→ gtag() function available
               └─→ Pageview tracked

2. USER SUBMITS CONTACT FORM
   └─→ Form validates
       └─→ API request sent
           └─→ Success response received
               └─→ trackConversion() called
                   └─→ Google Ads receives conversion
                       └─→ Shows in dashboard (24-48h)
```

---

## 📊 Conversion Configuration

```
Account ID:        AW-18417335374
Conversion Type:   Contact Form Submission
Conversion Label:  96_jCN2F2u8cEM74iM5E
Page:             /contact
Trigger:          Form success
```

---

## 🛠️ Code Snippets

### In Root Layout
```tsx
// /src/app/layout.tsx
<head>
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
</head>
```

### In Any Component
```tsx
// Any component that needs conversion tracking
import { useGoogleAdsConversion } from '@/hooks/useGoogleAdsConversion';

export default function MyComponent() {
  const { trackConversion } = useGoogleAdsConversion();

  const handleSuccess = () => {
    trackConversion('96_jCN2F2u8cEM74iM5E');
  };

  return (
    <button onClick={handleSuccess}>
      Track Conversion
    </button>
  );
}
```

---

## ✅ Verification Checklist

- [x] Global gtag script loaded in root layout
- [x] gtag function initialized on all pages
- [x] Contact form conversion tracking implemented
- [x] useGoogleAdsConversion hook created
- [x] Error handling and console logging added
- [x] TypeScript types augmented for window.gtag
- [x] Build tested and passes
- [x] Code committed to GitHub
- [x] Documentation created

---

## 🚀 Testing Steps

### 1. Test Script Loading
```bash
# Open browser DevTools → Console
# Type: window.gtag
# Should show: ƒ gtag(){dataLayer.push(arguments);}
```

### 2. Test Form Conversion
```bash
# Visit: http://localhost:3000/contact
# Fill form and submit
# Check console for: ✅ Google Ads conversion tracked
```

### 3. Verify in Google Ads
```
1. Visit: https://ads.google.com
2. Go to: Conversions
3. Look for: Contact conversions
4. Wait 24-48 hours for data
```

---

## 📁 Files Structure

```
sarvmaan-interiors/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← ✅ Global gtag added
│   │   └── (pages)/
│   │       └── contact/
│   │           └── ContactClient.tsx     ← ✅ Conversion tracking added
│   └── hooks/
│       └── useGoogleAdsConversion.ts     ← ✨ NEW conversion hook
├── GOOGLE_ADS_TRACKING.md                ← 📚 Full documentation
├── GOOGLE_ADS_IMPLEMENTATION_SUMMARY.md  ← 📚 Quick summary
└── [other files...]
```

---

## 🎯 Use Cases

### Track Any Event
```typescript
// Phone call click
const { trackConversion } = useGoogleAdsConversion();
trackConversion('PHONE_CLICK_LABEL');

// WhatsApp click
trackConversion('WHATSAPP_CLICK_LABEL');

// Inquiry submission
trackConversion('INQUIRY_LABEL');
```

### Add Conversion Value
```typescript
// Future enhancement (when needed)
window.gtag('event', 'conversion', {
  'send_to': 'AW-18417335374/96_jCN2F2u8cEM74iM5E',
  'value': 5000,
  'currency': 'INR'
});
```

---

## 🔒 Security & Privacy

- ✅ Script loads asynchronously (no performance impact)
- ✅ Error handling built-in
- ✅ Type-safe TypeScript implementation
- ✅ No sensitive data tracked
- ✅ GDPR/CCPA ready (add consent management as needed)

---

## 📞 Support Resources

- **Google Ads Help**: https://support.google.com/google-ads
- **Google Tag Manager Docs**: https://developers.google.com/tag-platform/gtagjs
- **Next.js Script Component**: https://nextjs.org/docs/app/api-reference/components/script
- **Conversion Tracking Setup**: https://support.google.com/google-ads/answer/3103387

---

## 🎉 Status

```
✅ Implementation:  COMPLETE
✅ Testing:        PASSED
✅ Build:          SUCCESSFUL
✅ Git:            PUSHED
✅ Production:     READY
```

**Let's track those conversions! 🚀**
