# 🧪 Quick Testing Reference

## Start Testing
```bash
npm run dev
```
Open: http://localhost:3000

---

## DevTools Console Tests (Ctrl+Shift+J or Cmd+Option+J)

### Test 1: Check gtag loaded
```javascript
typeof window.gtag
```
✅ Expected: `"function"`

### Test 2: Check data layer
```javascript
window.dataLayer.length
```
✅ Expected: Number > 0

### Test 3: Track test event
```javascript
window.gtag('event', 'test', { value: 1 });
```
✅ Expected: Console shows event logged

---

## What You Should See

### ✅ Console Output (On Page Load)
```
📊 Analytics Event: page_view
```

### ✅ Console Output (On Interaction)
```
📊 Analytics Event: [event_name]
💰 Google Ads Conversion: 96_jCN2F2u8cEM74iM5E  (Contact form only)
```

### ✅ Network Tab
- gtag/js script loads from `www.googletagmanager.com`
- Status: 200
- Size: ~50-100KB

---

## Real-Time Validation

### In Google Analytics Dashboard
1. Go to: https://analytics.google.com
2. Click: "Real-time" → "Overview"
3. Should show: 1 active user (you)

---

## ✨ Ready to Push When:
- [x] `npm run dev` works
- [x] `window.gtag` is a function
- [x] Events appear in console
- [x] No errors in DevTools
- [x] GA4 shows real-time data (optional, can wait)

```bash
git add -A
git commit -m "feat: Add Google Analytics 4 integration"
git push origin main
```
