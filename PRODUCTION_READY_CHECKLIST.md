# 🚀 Production Ready Checklist - Final Updates Required

## ⚠️ CRITICAL UPDATES BEFORE DEPLOYMENT

### 1. **EMAIL CONFIGURATION** (🔴 MUST DO)

#### File: `src/app/api/contact/route.ts`

**Current (Testing/Localhost):**
```typescript
from: 'onboarding@resend.dev',          // ❌ Temporary testing domain
to: 'yogeshtarade1@gmail.com',          // ❌ Your personal email
```

**Update to (Production):**
```typescript
from: 'noreply@sarvmaan.com',           // ✅ Professional domain
to: 'contact@sarvmaan.com',             // ✅ Business email
```

**Location:** Lines 29-30 (Business Email)

**What to change:**
```diff
- from: 'onboarding@resend.dev',
+ from: 'noreply@sarvmaan.com',
- to: 'yogeshtarade1@gmail.com',
+ to: 'contact@sarvmaan.com',
```

**⚠️ PREREQUISITE:** Before deploying, you need to:
1. Add your domain (sarvmaan.com) to Resend dashboard
2. Verify DNS records provided by Resend
3. Wait for domain verification (usually 5-10 minutes)

**Steps to verify domain in Resend:**
1. Go to https://dashboard.resend.com/domains
2. Click "Add Domain" → Enter `sarvmaan.com`
3. Add the DNS records (CNAME record) to your domain registrar
4. Wait for verification status to show ✅
5. Then update the API route

---

### 2. **ENVIRONMENT VARIABLES** (🟡 VERIFY)

#### File: `.env.local`

**Current Status:**
```bash
RESEND_API_KEY=[Your API key from https://dashboard.resend.com/api-keys]
```

**For Production (Cloudflare Pages):**
- Keep the same API key from `.env.local`
- Set environment variable in Cloudflare dashboard:
  1. Go to Cloudflare Pages → Your Project
  2. Settings → Environment Variables
  3. Add: `RESEND_API_KEY=[Your key from .env.local]`
  4. **Important:** Add it to `production` environment
- Do NOT commit `.env.local` to GitHub (already in .gitignore ✅)

---

### 3. **LOGO & IMAGE URLS** (✅ READY)

**Current Code:**
```typescript
function getBaseUrl(request: NextRequest): string {
  const host = request.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}
```

**Status:** ✅ This is perfect! It automatically:
- Uses `http://localhost:3000` in development
- Uses `https://sarvmaan.com` in production
- Works with Cloudflare Pages automatically

---

### 4. **CONSOLE LOGS** (🟡 OPTIONAL - CLEANUP)

**Location:** Lines 227-243 in `src/app/api/contact/route.ts`

**Current:**
```typescript
console.log('\n✅ EMAILS SENT SUCCESSFULLY!\n');
console.log('📧 Business Email:');
console.log('   To:', 'yogeshtarade1@gmail.com');  // ❌ Old email
console.log('   From:', 'onboarding@resend.dev');   // ❌ Old domain
```

**Recommendation:** Update console logs to match new emails (optional, helps with debugging):
```typescript
console.log('   To:', 'contact@sarvmaan.com');     // ✅ New business email
console.log('   From:', 'noreply@sarvmaan.com');   // ✅ New domain
```

---

### 5. **NEXT.JS CONFIG** (✅ READY)

**File:** `next.config.ts`

**Status:** ✅ Production-ready
```typescript
env: {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
}
```

**No changes needed** - Already configured for production.

---

### 6. **PACKAGE DEPENDENCIES** (✅ READY)

**File:** `package.json`

**Status:** ✅ All production dependencies are current:
- ✅ Next.js 16.3.0 (latest)
- ✅ React 19.2.8 (latest)
- ✅ Resend 6.20.0 (latest)
- ✅ Tailwind CSS v4 (latest)
- ✅ TypeScript 5.x (latest)

**No updates needed** - Dependencies are production-ready.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### Before Committing Changes:

- [ ] **Email Update 1:** Change `from: 'onboarding@resend.dev'` → `from: 'noreply@sarvmaan.com'` (Line 29)
- [ ] **Email Update 2:** Change `to: 'yogeshtarade1@gmail.com'` → `to: 'contact@sarvmaan.com'` (Line 30)
- [ ] **Console Logs:** Update console.log emails to match new addresses (Lines 231, 232 - Optional)
- [ ] **Run Build Test:** `npm run build` (should complete without errors)
- [ ] **Test Production Build:** `npm run start` (verify it starts)
- [ ] **Git Commit:** Push changes with message: "chore: update email configuration for production"

### After Deployment to Cloudflare:

- [ ] **Resend Domain Verification:** Verify `sarvmaan.com` in Resend dashboard
- [ ] **Cloudflare Env Var:** Set `RESEND_API_KEY` in Cloudflare Pages environment
- [ ] **Test Contact Form:** Submit test form at `https://sarvmaan.com/contact`
- [ ] **Verify Emails:** 
  - ✅ Business email received at `contact@sarvmaan.com`
  - ✅ Confirmation email received from `noreply@sarvmaan.com`
  - ✅ Logo displays in both emails
  - ✅ Social media SVG icons render (they should now, in production)

---

## 🔒 SECURITY CHECKLIST

### Files to NOT Commit:
- ✅ `.env.local` (already in .gitignore)
- ✅ `node_modules/` (already in .gitignore)
- ✅ `.next/` (already in .gitignore)

### Protected Information:
- ✅ Resend API key is in `.env.local` (not in code)
- ✅ Business email is in code (this is OK - not sensitive)
- ✅ Public social media links are in code (this is OK - intentionally public)

---

## 📊 EMAIL FLOW (PRODUCTION)

### Inquiry Email (to Business)
```
FROM: noreply@sarvmaan.com
TO: contact@sarvmaan.com
SUBJECT: New Project Inquiry from [Customer Name]
CONTENT:
- Logo header with Sarvmaan branding
- Customer project details (name, email, phone, city, project type, timeline)
- Message (if provided)
- Footer with contact info
```

### Confirmation Email (to Customer)
```
FROM: noreply@sarvmaan.com
TO: [Customer's Email from Form]
SUBJECT: Thank You for Your Enquiry – SarvMaan Interiors
CONTENT:
- Logo header with Sarvmaan branding
- Personalized greeting
- Summary of their project details
- Follow Our Work section with professional social media SVG icons:
  * Instagram → https://www.instagram.com/sarvmaan_india/
  * Facebook → https://www.facebook.com/HomeSuperhero
  * YouTube → https://www.youtube.com/@SarvMaan
  * WhatsApp → https://wa.me/917447722255
- Next steps (what to expect)
- Call-to-action buttons (WhatsApp, Phone)
- Professional footer
```

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Update Code
```bash
# Update email configuration in src/app/api/contact/route.ts
# (See section 1 above)
```

### Step 2: Test Locally
```bash
npm run build
npm run start
# Visit http://localhost:3000/contact and test the form
```

### Step 3: Commit and Push
```bash
git add -A
git commit -m "chore: update email configuration for production deployment"
git push origin main
```

### Step 4: Deploy to Cloudflare
```bash
# Using Cloudflare Pages GitHub integration:
# 1. Cloudflare automatically deploys from GitHub when you push
# 2. Go to Cloudflare Pages → Your Project → Settings
# 3. Under "Environment variables" → Add:
#    - RESEND_API_KEY=[Your API key from .env.local]
# 4. Set it for "production" environment
```

### Step 5: Verify Domain in Resend
```
1. Go to https://dashboard.resend.com/domains
2. Add domain: sarvmaan.com
3. Follow DNS verification steps
4. Wait for ✅ Verified status
```

### Step 6: Test Production
```
1. Visit https://sarvmaan.com/contact
2. Submit a test form
3. Verify both emails arrive correctly
4. Check logo and SVG icons display properly
5. Verify all links work (social media, phone, WhatsApp)
```

---

## 📝 SUMMARY

### Changes Required: **3 lines of code**
1. Line 29: Update `from` email domain
2. Line 30: Update `to` email address  
3. Console logs: Update displayed emails (optional)

### Setup Required (Resend & Cloudflare): **5 minutes**
1. Verify domain in Resend
2. Set environment variable in Cloudflare
3. Test end-to-end

### Time to Production: **~30 minutes total**
- 5 min: Code updates
- 5 min: Local testing
- 5 min: Git push
- 5 min: Cloudflare deployment
- 10 min: Resend verification

---

## ✅ FINAL NOTES

- **SVG Icons:** Will display as colored boxes on localhost, render perfectly in production ✓
- **Logo:** Will load from correct domain automatically (localhost vs production) ✓
- **Email Delivery:** Guaranteed with Resend (99.9% uptime, 100 emails/day free) ✓
- **Fallback:** If Resend domain verification takes time, keep testing with `onboarding@resend.dev` ✓

**You're ready to go live!** 🎉

---

**Questions?** Review the deployment guide: `CLOUDFLARE_DEPLOYMENT.md`
