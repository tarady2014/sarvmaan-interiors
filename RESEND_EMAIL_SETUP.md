# Email Setup Guide: Resend API Integration

## ✅ What's Done

Your contact form API has been **fully configured** to send emails using Resend. The API now:

✅ Sends professional email to `contact@sarvmaan.com` when someone submits the form
✅ Sends automatic confirmation email to the user  
✅ Beautiful HTML email templates with branding
✅ Error handling and logging
✅ All ready to go!

---

## 📋 Setup Instructions

### Step 1: Install Resend Package

Run this command in your terminal:

```bash
npm install resend
```

### Step 2: Get Your Resend API Key

1. Go to [Resend Dashboard](https://dashboard.resend.com)
2. Sign up (free account - 100 emails/day included!)
3. Go to **API Keys** section
4. Create a new API key
5. Copy the key (looks like: `re_xxxxxxxxxxxxx`)

### Step 3: Add Environment Variables

Create or update `.env.local` file in your project root:

```bash
RESEND_API_KEY=re_your_api_key_here
```

**Important:** Add `.env.local` to `.gitignore` (if not already there):
```
.env.local
.env
```

### Step 4: Configure Sender Email

**Two options:**

#### Option A: Use Resend's Default Domain (Easiest)
- Email will come from: `noreply@resend.dev`
- No additional setup needed
- Users see: "Resend" as sender

**To use this:** Update line 6 in `src/app/api/contact/route.ts`:
```typescript
from: 'onboarding@resend.dev',  // Use Resend's default
```

#### Option B: Use Your Custom Domain (Recommended)
- Email comes from: `noreply@sarvmaan.com`
- More professional & branded
- Requires DNS configuration

**To set up custom domain:**
1. Go to Resend Dashboard → Domains
2. Add `sarvmaan.com`
3. Follow DNS verification steps
4. Once verified, use:
```typescript
from: 'noreply@sarvmaan.com',  // Your domain
```

---

## 🧪 Test It

1. **Start dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Open contact form** at http://localhost:3000/contact

3. **Fill and submit** the form

4. **Check emails:**
   - **Your inbox** (you@email.com) - Should receive confirmation email
   - **contact@sarvmaan.com** - Should receive inquiry email
   - Check **spam folder** if not in inbox

5. **View logs** in terminal for debugging:
   ```
   Emails sent successfully: {
     businessEmailId: "...",
     userEmailId: "..."
   }
   ```

---

## 💰 Resend Pricing

| Plan | Cost | Monthly Quota | Best For |
|------|------|---------------|----------|
| **Free** | $0 | 100 emails/day (3,000/month) | Small businesses ✅ |
| **Pro** | $20/month | Unlimited | Growing businesses |

**For you:** Free plan is perfect!
- 100 inquiries/day limit (you'll never hit this)
- Professional email templates included
- Full API access

---

## 📧 What Emails Look Like

### 1️⃣ **Business Email** (to contact@sarvmaan.com)
```
Subject: New Project Inquiry from John Doe

🎯 New Project Inquiry

Name: John Doe
Email: john@example.com
Phone: +91 9876543210
City/Area: Pune
Project Type: Home Interior
Timeline: 1-3 months

Message: (user's message here)
```

### 2️⃣ **Confirmation Email** (to user)
```
Subject: Thank You! We Received Your Inquiry - Sarvmaan Home Superhero

Thank You, John Doe! 🏡

We have received your project inquiry and we're excited to help you 
transform your space!

Our design team will review your requirements and contact you within 
24-48 hours...

[Links to portfolio, about page, WhatsApp chat]
```

---

## 🔧 Troubleshooting

### Issue: "RESEND_API_KEY is not defined"
**Solution:** 
- Check `.env.local` file exists and has the correct key
- Restart dev server after adding env variable
- Verify key starts with `re_`

### Issue: "Email failed to send"
**Solution:**
- Check API key is valid in Resend Dashboard
- Verify sender email is verified (if using custom domain)
- Check spam folder for test emails
- Check terminal logs for error message

### Issue: "User not receiving confirmation email"
**Solution:**
- Check user email address in form submission
- Verify Resend account isn't rate-limited
- Check spam/promotions folder
- Test with a different email address

---

## 🚀 Production Deployment (Cloudflare)

When deploying to Cloudflare Pages:

1. **Add environment variable to Cloudflare:**
   - Dashboard → Pages → Your Site → Settings → Environment Variables
   - Name: `RESEND_API_KEY`
   - Value: Your API key

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Add Resend email integration"
   git push origin main
   ```

3. **Test in production:**
   - Visit https://sarvmaan.com/contact
   - Submit form
   - Verify emails arrive

---

## 📊 Comparison: Resend vs Cloudflare Workers

| Feature | Resend | Cloudflare Workers |
|---------|--------|-------------------|
| **Cost** | Free/month (100 emails) | Free/month (50K invocations) |
| **Setup** | ⭐ Very Easy | ⭐⭐⭐ Complex |
| **Email Quality** | ⭐⭐⭐⭐⭐ Professional | ⭐⭐⭐ Good |
| **Reliability** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent |
| **Templates** | ✅ Beautiful | ⚠️ Need custom code |
| **Tracking** | ✅ Yes (Pro) | ❌ No |
| **Best For** | **Your use case!** | Advanced use cases |

**Recommendation:** Use Resend (simpler, better emails, perfect for your needs)

---

## ✨ Next Steps

1. ✅ Install Resend: `npm install resend`
2. ✅ Get API key from Resend Dashboard
3. ✅ Add to `.env.local`: `RESEND_API_KEY=...`
4. ✅ Test contact form
5. ✅ Deploy to Cloudflare Pages
6. ✅ (Optional) Set up custom domain email

---

## 📞 Questions?

If emails aren't working:
1. Check `.env.local` has correct API key
2. Verify Resend account is active
3. Check terminal logs for errors
4. Test with simple email first (no special characters)

**Support:**
- Resend Docs: https://resend.com/docs
- Your API logs: https://dashboard.resend.com/logs
