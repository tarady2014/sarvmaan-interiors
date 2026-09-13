# 🧪 Local Testing Checklist - Spin to Win Feature

**Date**: September 12, 2026  
**Status**: Ready for Testing  
**Test Environment**: http://localhost:3000

---

## ✅ Test 1: Page Navigation & Hero Section

### Spin to Win Page (`/spin-to-win`)
- [ ] Page loads without errors
- [ ] Hero section displays with:
  - [ ] "🎉 Limited Time Offer - Enter to Win!" badge
  - [ ] "Spin The Wheel & Win Amazing Offers! 🎡" headline
  - [ ] Three value propositions: 💰 5% Discount, 🎁 Free Consultation, ⚡ Instant Results
  - [ ] Gradient background (purple → pink → red)
- [ ] "Find Your Society" section visible
- [ ] Society search input is ready for input

---

## ✅ Test 2: Society Selection - From Dropdown

### Test: Select from 256 database societies
**Steps**:
1. Type "Kolte" in society search
2. Verify fuzzy search returns top matches (Kolte-Patil variations)
3. Click on "Kolte-Patil Life Republic - Atmos"
4. Verify:
   - [ ] Selected society box appears (green border)
   - [ ] Shows: Society Name, Area (e.g., Marunji/Hinjewadi), Region
   - [ ] "Spin the Wheel!" section becomes visible
   - [ ] Page auto-scrolls to spin section

### Test: Fuzzy search with typos
**Steps**:
1. Type "kohinor" (missing 'o')
2. Verify it returns "Kohinoor" matches
3. Type "hinjwadi" (misspelled)
4. Verify it returns "Hinjewadi" matches

---

## ✅ Test 3: Society Selection - Custom Entry

### Test: Society NOT in database
**Steps**:
1. Type "My Society Name" (not in 256 list)
2. Wait for dropdown to show "Not in our list?" section
3. Verify:
   - [ ] Orange/amber background section appears
   - [ ] "⭐ Not in our list?" message shown
   - [ ] Optional area input field visible
   - [ ] Large "✓ Proceed with 'My Society Name'" button visible
4. (Optional) Type area: "Baner" or "Hadapsar"
5. Click "Proceed" button
6. Verify:
   - [ ] Selected society box appears
   - [ ] Shows custom society name with entered area
   - [ ] Region shows "Custom"
   - [ ] Spin section appears and page auto-scrolls

---

## ✅ Test 4: Spin the Wheel Animation

### Test: First 4 Spins (Random Results)
**Steps**:
1. Click "🎡 SPIN THE WHEEL 🎡" button
2. During spin:
   - [ ] Button shows "🎡 Spinning..." with loading state
   - [ ] Society name constantly changes (scanning effect)
   - [ ] Shows: Society Name → Area → Region
   - [ ] Animation pulses (visual feedback)
3. After 15 rotations (~1.5 seconds):
   - [ ] Random society result appears
   - [ ] Spin counter shows: "Spins: 1"
   - [ ] Coupon result section appears

### Test: Result Display - Win (User's Society Wins)
**If result matches your selected society**:
- [ ] Shows: "🎉 JACKPOT! YOU WON! 🎉"
- [ ] Message: "[Society Name] is the lucky winner!"
- [ ] Offer: "💰 You Get: 5% Discount on All Interior Design Services!"
- [ ] Coupon code displayed (e.g., "KOL234")
- [ ] Button: "✨ Claim 5% Discount Now!"

### Test: Result Display - Lose (Different Society Won)
**If result is different from your selected society**:
- [ ] Shows: "✨ OHHH! SO CLOSE! ✨"
- [ ] Message: "The wheel landed on [Different Society]"
- [ ] Offer: "🎁 You Get: FREE Design Consultation (Worth ₹5000!)"
- [ ] Explanation: "Even though you didn't win the wheel, we're offering you a complimentary consultation..."
- [ ] Coupon code displayed (different format)
- [ ] Button: "🎁 Get FREE Consultation Now!"

### Test: Spin Counter (5th Spin Guarantee)
**Steps** (for custom societies only):
1. Spin 1-4: Counter shows "Spins: 1", "Spins: 2", etc. - results are random
2. Spin 5: 
   - [ ] Counter shows "Spins: 5"
   - [ ] **GUARANTEED WIN**: Custom society name appears as winner
   - [ ] Shows 5% discount offer
   - [ ] (Pleasant surprise for user!)
3. Spin 6+:
   - [ ] Counter shows "Spins: 6", etc.
   - [ ] Results go back to random (no automatic win)

---

## ✅ Test 5: Copy Coupon Code

**Steps**:
1. After getting a result, locate the coupon code (e.g., "KOL234")
2. Click "Copy" button next to the code
3. Verify:
   - [ ] Code is copied to clipboard
   - [ ] Can paste it elsewhere (Cmd+V)

---

## ✅ Test 6: Contact Form Pre-fill

### Test: Direct Link from Spin to Win
**Steps**:
1. Complete a spin and get a result
2. Click the CTA button:
   - "✨ Claim 5% Discount Now!" (if won), OR
   - "🎁 Get FREE Consultation Now!" (if lost)
3. Redirected to `/contact` with URL parameters:
   - `society=...`
   - `area=...`
   - `region=...`
   - `coupon=...`
   - `offer=...`
4. Verify form pre-fill:
   - [ ] City/Area field auto-filled (e.g., "Marunji/Hinjewadi")
   - [ ] Society details box appears (green or blue)
   - [ ] Shows society name, area, region, coupon code
   - [ ] Offer type displayed:
     - **For 5% Discount**: "💰 You've won a 5% Discount!"
     - **For FREE Consultation**: "🎁 You've unlocked a FREE Design Consultation! (Worth ₹5,000)"

### Test: Direct Access to Contact Form
**Steps**:
1. Go directly to: http://localhost:3000/contact
2. Verify:
   - [ ] Page loads without errors
   - [ ] No pre-fill (empty form)
   - [ ] Society details box is NOT shown (since no URL params)
   - [ ] All required fields: Full Name, Phone, Email, City, Project Type, Timeline
   - [ ] Form is usable as normal

### Test: Manual City Entry with Slashes
**Steps**:
1. Go to: `/contact` (direct, no pre-fill)
2. Manually type in City field: "Marunji/Hinjewadi"
3. Fill other required fields (name, phone, email, etc.)
4. Submit form
5. Verify:
   - [ ] NO validation error about slashes
   - [ ] Form accepts the slash in city field
   - [ ] Form submission succeeds

---

## ✅ Test 7: Form Submission

### Test: Valid Form Submission
**Steps**:
1. Fill all required fields:
   - Full Name: "John Doe"
   - Phone: "+91 98765 43210"
   - Email: "john@example.com"
   - City/Area: "Hadapsar"
   - Project Type: "Home Interior"
   - Timeline: "1-3 months"
   - Message: (optional) "Looking for modern design"
2. Click "Book Consultation"
3. Verify:
   - [ ] Button shows "Sending..."
   - [ ] After success: Green success message appears
   - [ ] Message: "Thank you! We'll get back to you within 24 hours."
   - [ ] Form resets after 5 seconds

### Test: Form Validation Errors
**Steps**:
1. Leave required fields empty
2. Click "Book Consultation"
3. Verify:
   - [ ] Error message shown (e.g., "Full name is required")
   - [ ] Button shows error state

---

## ✅ Test 8: Responsiveness (Mobile View)

### Test: Mobile Viewport (375px width)
**Steps** (use browser dev tools to simulate):
1. Open DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M on Mac)
3. Select iPhone SE / 375px width
4. Test on `/spin-to-win`:
   - [ ] Hero section text resizes properly
   - [ ] Value propositions stack vertically
   - [ ] Society search input is readable
   - [ ] Spin button is large and clickable
   - [ ] Coupon code readable
5. Test on `/contact`:
   - [ ] Form fields full width
   - [ ] Labels visible
   - [ ] Inputs have good touch target size (min 44px height)
   - [ ] Submit button is large enough

---

## ✅ Test 9: Suspense Boundary (Contact Form Loading)

### Test: Suspense fallback behavior
**Steps**:
1. Open DevTools (F12)
2. Go to Network tab
3. Throttle to "Slow 3G"
4. Click link to `/contact`
5. Verify:
   - [ ] "Loading..." message briefly appears (1-2 seconds)
   - [ ] Form renders after loading
   - [ ] Pre-filled data loads correctly
   - [ ] No console errors

---

## ✅ Test 10: Build Test

### Run production build
**Command**:
```bash
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors
rm -rf .next
npm run build
```

**Verify**:
- [ ] Build completes without errors
- [ ] All pages generated (including `/spin-to-win`)
- [ ] No TypeScript errors
- [ ] Output shows:
  ```
  Route (app)
  ├ ○ /spin-to-win
  ├ ○ /contact
  └ ... (other routes)
  ```

---

## 📝 Complete Test Flow (End-to-End)

### Scenario 1: Win from Database Society
1. Navigate to `/spin-to-win`
2. Search for "Kolte"
3. Select "Kolte-Patil Life Republic"
4. Spin and randomly WIN (society matches)
5. Click "Claim 5% Discount Now!"
6. Verify pre-filled contact form
7. Submit form
8. ✅ Form accepted, success message

### Scenario 2: Lose but Get Free Consultation
1. Navigate to `/spin-to-win`
2. Search for "Kohinoor"
3. Select from dropdown
4. Spin and randomly LOSE (different society wins)
5. Click "Get FREE Consultation Now!"
6. Verify pre-filled contact form with FREE offer
7. Submit form
8. ✅ Form accepted, success message

### Scenario 3: Custom Society (5th Spin Win)
1. Navigate to `/spin-to-win`
2. Type "My Custom Society"
3. Proceed (not in dropdown)
4. Spin 4 times → random results
5. Spin 5th time → guaranteed WIN
6. Click "Claim 5% Discount Now!"
7. Verify pre-filled contact form
8. Submit form
9. ✅ Form accepted, success message

### Scenario 4: Direct Contact Form
1. Navigate directly to `/contact`
2. No pre-fill visible
3. Fill form manually with city "Hadapsar/Baner"
4. Submit
5. ✅ Form accepts slash in city, success message

---

## 🐛 Known Issues / Notes

- [ ] metadataBase warning (non-critical, frontend only)
- [ ] Dev server might show Turbopack compilation message on first load
- [ ] Contact form API depends on Resend email service (check `.env.local` for RESEND_API_KEY)

---

## 📊 Test Results Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Spin to Win Page | ⏳ Testing | |
| Society Search (Fuzzy) | ⏳ Testing | |
| Custom Society Entry | ⏳ Testing | |
| Spin Animation | ⏳ Testing | |
| Result Display (Win/Lose) | ⏳ Testing | |
| 5th Spin Guarantee | ⏳ Testing | |
| Contact Form Pre-fill | ⏳ Testing | |
| Form Validation (Slashes) | ⏳ Testing | |
| Form Submission | ⏳ Testing | |
| Responsive Design | ⏳ Testing | |
| Suspense Boundary | ⏳ Testing | |
| Production Build | ⏳ Testing | |

---

## ✅ Ready to Start Testing!

All systems are operational. Use this checklist to verify each feature works as expected.
