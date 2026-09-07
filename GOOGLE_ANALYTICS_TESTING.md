# 🧪 Google Analytics Testing Guide

## ✅ Pre-Flight Testing (Before Pushing to Git)

### Step 1: Start Dev Server
```bash
npm run dev
```
Wait for: `ready - started server on 0.0.0.0:3000`

---

## 🔍 Testing Checklist

### 1. **Verify Scripts Load** ✅
**Open DevTools → Console tab**

**Check 1: Google Tag Manager (gtag.js)**
```javascript
// Paste in console:
typeof window.gtag
```
- ✅ Should return: `"function"`
- ❌ If `undefined`: Script didn't load

**Check 2: Data Layer**
```javascript
// Paste in console:
window.dataLayer
```
- ✅ Should return: Array with events
- ❌ If `undefined`: gtag not initialized

**Check 3: GA4 Property ID**
```javascript
// Paste in console:
// Look for: gtag('config', 'G-XXXXXXXXXX')
// The ID should match your GA4 property ID
```

---

### 2. **Test Page View Tracking** ✅
**In Console, paste:**
```javascript
window.gtag('event', 'page_view', {
  page_title: 'Test Page',
  page_location: window.location.href
});
```

**Expected output:**
```
📊 Analytics Event: page_view {page_title: "Test Page", ...}
```

---

### 3. **Test Custom Event Tracking** ✅
**In Console, paste:**
```javascript
window.gtag('event', 'test_event', {
  event_category: 'engagement',
  event_label: 'manual_test',
  value: 1
});
```

**Expected output:**
```
📊 Analytics Event: test_event
```

---

### 4. **Test Hook in Component** ✅
Navigate to any page (e.g., `/contact`)

**Open DevTools → Console**

Trigger an interaction (submit form, click button) and watch for:
```
📊 Analytics Event: [event_name]
```

---

## 🧪 Real-World Testing Scenarios

### Scenario 1: Contact Form Submission
1. Go to `/contact`
2. Open DevTools Console
3. Fill form and submit
4. You should see TWO logs:
   ```
   💰 Google Ads Conversion: 96_jCN2F2u8cEM74iM5E
   📊 Analytics Event: form_submit (GA4)
   ```

### Scenario 2: Page Navigation
1. Open DevTools Console
2. Navigate between pages (/about, /services, /portfolio)
3. Watch for:
   ```
   📄 Page View: [Page Name]
   ```

### Scenario 3: Custom Events
1. Open any page
2. Paste in Console:
   ```javascript
   const { trackEvent } = useAnalytics(); // Won't work directly in console
   // Instead, use window.gtag directly:
   window.gtag('event', 'test_click', { button: 'cta_button' });
   ```
3. Should see:
   ```
   📊 Analytics Event: test_click
   ```

---

## 🔗 Network Testing (Advanced)

**DevTools → Network tab:**

1. Refresh page (F5)
2. Look for requests to `www.googletagmanager.com`
   - ✅ `gtag/js?id=G-XXXXXXXXXX` should be there
   - ✅ Status should be `200` (success)
   - ✅ Size should be ~50-100KB

---

## 📊 Real-Time Testing in Google Analytics

### 1. **Get your GA4 Property ID**
If you don't have one:
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Create Property"
3. Set up new property for Sarvmaan Interiors
4. Copy your Property ID (starts with `G-`)

### 2. **Update the Placeholder**
In `src/app/layout.tsx`, replace:
```
G-XXXXXXXXXX
```
With your actual GA4 Property ID (e.g., `G-1A2B3C4D5E`)

### 3. **Check Real-Time Dashboard**
1. Go to Google Analytics dashboard
2. Click "Real-time" → "Overview"
3. You should see:
   - ✅ Active users: 1 (you)
   - ✅ Events appearing in real-time
   - ✅ Page views tracked

---

## ✅ Testing Checklist

- [ ] Dev server running (`npm run dev`)
- [ ] `window.gtag` is a function
- [ ] `window.dataLayer` exists and is an array
- [ ] Can track events from console
- [ ] Contact form shows Google Ads conversion + GA4 event
- [ ] Page navigation shows page_view events
- [ ] Network requests show gtag.js loading
- [ ] GA4 dashboard shows real-time activity
- [ ] No console errors
- [ ] No TypeScript errors (`npm run build` passes)

---

## 🚨 Troubleshooting

### Issue: `window.gtag` is undefined
**Solutions:**
1. Hard refresh: `Cmd+Shift+R`
2. Clear site data in DevTools
3. Check Network tab - gtag.js script should load
4. Wait 2-3 seconds for async script to load

### Issue: Events not showing in GA4 dashboard
**Solutions:**
1. Your GA4 Property ID might be wrong in layout.tsx
2. Replace `G-XXXXXXXXXX` with real ID
3. Wait 30-60 seconds - GA4 has a delay
4. Check GA4 property settings - should be "Web"

### Issue: Console shows errors
**Solutions:**
1. Clear browser cache (`Cmd+Shift+Delete`)
2. Check DevTools Console for specific errors
3. Ensure all scripts are from googleapis.com/googletagmanager.com

---

## 🎯 What to Look For

### ✅ Good Signs
- `typeof window.gtag === 'function'` returns true
- Events appear in console logs
- Network shows gtag.js loading
- GA4 dashboard shows real-time data
- No red errors in console

### ❌ Bad Signs
- `window.gtag` is undefined
- Script failing to load (Network tab)
- Console shows CSP violations
- GA4 dashboard shows 0 users/events
- Red errors in console

---

## 📋 Testing Timeline

| Time | Action | Expected Result |
|------|--------|-----------------|
| T+0 | Start dev server | Server running on :3000 |
| T+5s | Refresh page | gtag script loads |
| T+10s | Check DevTools | window.gtag exists |
| T+15s | Interact on page | Events logged |
| T+20s | Check GA4 dashboard | Real-time data visible |

---

## ✨ When Ready to Push

Once all tests pass:
```bash
git add -A
git commit -m "feat: Add Google Analytics 4 (GA4) integration"
git push origin main
```

---

**Ready to test? Follow the checklist above! 🚀**
