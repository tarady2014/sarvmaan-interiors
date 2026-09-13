# 🚀 Quick Test Reference Guide

## URLs to Test

### Main Pages
- **Spin to Win**: http://localhost:3000/spin-to-win
- **Contact (Direct)**: http://localhost:3000/contact
- **Contact (Pre-filled)**: http://localhost:3000/contact?society=Test&area=Hadapsar&region=West&coupon=TST123&offer=5%25%20Discount

### Test Scenarios URLs
```
# Database society (will pre-fill)
http://localhost:3000/contact?society=Kolte-Patil%20Life%20Republic%20-%20Atmos&area=Marunji/Hinjewadi&region=West%20Pune&coupon=KOL234&offer=5%25%20Discount

# Free consultation offer
http://localhost:3000/contact?society=Kohinoor&area=Hadapsar&region=South%20Pune&coupon=KOH567&offer=FREE%20Consultation

# With slashes in area
http://localhost:3000/contact?society=Test%20Society&area=Baner/Hinjewadi&region=West&coupon=TST123&offer=5%25%20Discount
```

---

## Key Test Cases

### 1️⃣ Fuzzy Search
- Type: "kolte" → Should return Kolte-Patil results
- Type: "kohinor" → Should return Kohinoor
- Type: "hinjwadi" → Should return Hinjewadi

### 2️⃣ Custom Society
- Type: "My Custom Society" (not in database)
- Should show "Not in our list?" section
- Optional area input
- Click "Proceed" button

### 3️⃣ Spinning
- **Spin 1-4**: Random results (any society can win)
- **Spin 5 (custom only)**: Guaranteed WIN
- **Spin 6+**: Back to random

### 4️⃣ Results
- **Win**: Shows 5% discount, green banner
- **Lose**: Shows FREE consultation, blue banner
- Both should show coupon code

### 5️⃣ Contact Form
- Pre-fill works from spin page
- Area field accepts slashes: "Marunji/Hinjewadi"
- Form submits successfully

---

## Expected Behavior Checklist

### Spin to Win Page
✅ Hero section with three benefits visible  
✅ Society search accepts input  
✅ Dropdown shows matches or "Not in list" option  
✅ Selected society box shows (green)  
✅ Spin button is large and clickable  
✅ During spin: society names scroll  
✅ Result shows win/lose clearly  
✅ Coupon code displayed  

### Contact Form
✅ Loads with/without pre-fill  
✅ All required fields present  
✅ City field accepts slashes  
✅ Offer type shows correctly  
✅ Form validates properly  
✅ Form submits without errors  

---

## Dev Server Commands

**Start**: 
```bash
npm run dev
```

**Build**:
```bash
npm run build
```

**Clean & Rebuild**:
```bash
rm -rf .next && npm run build
```

---

## Where to Look for Issues

### Console Errors (F12)
- No red errors should appear
- Warnings about Turbopack are OK

### Network Tab (F12)
- `/api/csrf` should return 200
- `/api/contact` POST should return 200 on success, 400 on validation error

### Terminal Output
- Should show `GET /spin-to-win 200`
- Should show `GET /contact 200`
- Should show `POST /api/contact 200` or `400`

---

## Common Test Data

### Database Societies (Top 5)
- Kolte-Patil Life Republic - Atmos
- Kohinoor Residency
- Luxuria
- Amanora Park Town
- Vivarea

### Custom Society
- "My Society" or "Test Society"

### Contact Form
- Name: John Doe
- Phone: +91 9876543210
- Email: test@example.com
- City: Hadapsar
- Project: Home Interior
- Timeline: 1-3 months

---

## Quick Validation Test

Run this to check production build:
```bash
rm -rf .next && npm run build 2>&1 | tail -30
```

Look for:
- ✅ "Compiled successfully"
- ✅ "TypeScript" check passed
- ✅ Routes including `/spin-to-win` and `/contact`
- ❌ No errors about "useSearchParams" or "Suspense"

---

## After Testing

When ready to commit:
```bash
git status
git add .
git commit -m "feat: Add spin-to-win gamification with 5% discount and free consultation offers"
git push origin main
```

---

**Happy Testing! 🎉**
