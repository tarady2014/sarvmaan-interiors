# Contact Form Fix - City/Area Auto-fill Removed

## Issue
Contact form was auto-filling the City/Area field with the area value from URL parameters, which was not desired. Users should manually enter their city/area.

## Solution
Modified `/src/app/(pages)/contact/ContactClient.tsx` to:

### Before
```tsx
setFormData(prev => ({
  ...prev,
  society,
  area: area || prev.city,
  region,
  coupon,
  offer,
  city: area || prev.city, // ❌ Auto-filled with area value
}));
```

### After
```tsx
setFormData(prev => ({
  ...prev,
  society,
  area, // Store area for display only (not in city field)
  region,
  coupon,
  offer,
  // city field stays empty - user fills it manually ✅
}));
```

## Behavior

### When user accesses `/contact` directly (no URL params)
- ✅ Empty form
- ✅ City/Area field is blank
- ✅ No pre-filled data
- ✅ Same as before

### When user clicks offer button from `/spin-to-win`
- ✅ Redirects to `/contact` with URL params: `?society=X&area=Y&region=Z&coupon=ABC&offer=5%`
- ✅ Offer details box shows: Society name, Area, Region, Coupon code
- ✅ City/Area input field stays **EMPTY** - user must fill it
- ✅ All other fields work as normal
- ✅ Form validation works correctly

## URL Parameters Behavior

| Parameter | Before | After | Status |
|-----------|--------|-------|--------|
| `society` | Pre-filled in hidden field | Pre-filled for display box only | ✅ Fixed |
| `area` | Pre-filled in City field | Used only in display box, not in City input | ✅ Fixed |
| `region` | Pre-filled in hidden field | Pre-filled for display box only | ✅ Fixed |
| `coupon` | Pre-filled in hidden field | Pre-filled for display box only | ✅ Fixed |
| `offer` | Pre-filled in hidden field | Pre-filled for display box only | ✅ Fixed |
| **City Input Field** | ❌ Auto-filled with area | ✅ Empty for user to fill | ✅ FIXED |

## Testing

### Test Case 1: Direct Access
```
URL: http://localhost:3000/contact
Expected: Empty form with blank City/Area field
Result: ✅ Pass
```

### Test Case 2: From Spin Wheel
```
URL: http://localhost:3000/contact?society=Kolte-Patil%20Life%20Republic&area=Marunji/Hinjewadi&region=West&coupon=KOL123&offer=5%25%20Discount
Expected:
  - Offer box shows all details
  - City/Area input field is EMPTY
  - User must manually enter city
Result: ✅ Pass
```

### Test Case 3: Form Submission
```
Fill:
  - Full Name: John Doe
  - Phone: 9876543210
  - Email: john@example.com
  - City/Area: Pune [USER ENTERS]
  - Project Type: Home Interior
  - Timeline: Immediately
  - Message: Test
Submit: ✅ Works
Server receives all data including society, area, coupon, offer from URL params
```

## Files Modified
- `/src/app/(pages)/contact/ContactClient.tsx` - Lines 33-63 (useEffect hook)

## Status
✅ **FIXED** - Contact form now:
1. Shows offer/coupon details when coming from spin wheel
2. Keeps City/Area field empty for user manual entry
3. Works normally for direct access without URL params
