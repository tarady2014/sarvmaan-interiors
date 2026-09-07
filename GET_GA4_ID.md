# 📊 How to Get Your Google Analytics 4 ID

## Step-by-Step Guide

### Step 1: Go to Google Analytics
1. Open: https://analytics.google.com
2. Sign in with your Google account (same one you use for Google Ads)

---

### Step 2: Create a New Property
If you don't have a property yet:

1. Click **"Admin"** (bottom left gear icon)
2. Click **"Create Property"** (blue button)
3. Fill in:
   - **Property name**: `Sarvmaan Interiors` (or your preference)
   - **Timezone**: Select your timezone (e.g., Asia/Kolkata for India)
   - **Currency**: Select your currency (e.g., INR)
4. Click **"Create"**

---

### Step 3: Set Up Data Stream
1. Select **"Web"** platform
2. Enter website details:
   - **Website URL**: `https://sarvmaan.com` (or your domain)
   - **Stream name**: `Sarvmaan Website`
3. Click **"Create Stream"**

---

### Step 4: Find Your Measurement ID ⭐

After creating the stream, you'll see a screen with:

```
📊 Measurement ID: G-XXXXXXXXXX
```

**This is what you need!** Copy this ID. It will look like:
- ✅ `G-1A2B3C4D5E`
- ✅ `G-ABC123DEF456`
- ✅ Similar format starting with `G-`

---

## Visual Guide

```
Google Analytics Dashboard
    ↓
Click "Admin" (gear icon)
    ↓
Click "Create Property"
    ↓
Fill property details
    ↓
Select "Web" platform
    ↓
Enter website URL
    ↓
Copy Measurement ID (G-XXXXXXXXXX)
    ↓
✅ Done!
```

---

## Option 2: Find ID in Existing Property

If you already have a GA4 property:

1. Click **"Admin"** (gear icon, bottom left)
2. Click on your **property name** (under "Property")
3. Look for **"Data Streams"**
4. Click on your **website stream**
5. You'll see **"Measurement ID: G-XXXXXXXXXX"** at the top

Copy this ID!

---

## Step 5: Add ID to Your Website

Once you have your ID (e.g., `G-1A2B3C4D5E`):

### Edit: `src/app/layout.tsx`

**Line 78:** Replace `G-XXXXXXXXXX` with your ID

**Before:**
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**After:**
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1A2B3C4D5E"></script>
```

---

**Line 86:** Also replace in the gtag config

**Before:**
```tsx
gtag('config', 'G-XXXXXXXXXX');
```

**After:**
```tsx
gtag('config', 'G-1A2B3C4D5E');
```

---

## ✅ Verify It Works

1. Save the file
2. Refresh your website in browser
3. Open DevTools Console: `Cmd+Option+J`
4. Type:
   ```javascript
   typeof window.gtag
   ```
5. Should return: `"function"` ✅

---

## 🎯 Quick Reference

| What | Where |
|------|-------|
| **Create GA4** | https://analytics.google.com |
| **My ID** | Admin → Data Streams → View |
| **ID Format** | Starts with `G-` |
| **Add to Code** | `src/app/layout.tsx` lines 78 & 86 |
| **Verify** | `typeof window.gtag === 'function'` |

---

## ❓ Still have questions?

- **No Google Account?** Create one at https://accounts.google.com
- **Multiple properties?** Each needs its own ID
- **Problem adding ID?** Open an issue with your error message

---

**Once you add your GA4 ID, you're all set! 🚀**
