# SarvMaan Interiors - Complete Installation & Deployment Guide

## Table of Contents
1. [Local Development Setup](#1-local-development-setup)
2. [Project Structure & Customization](#2-project-structure--customization)
3. [Image Management](#3-image-management)
4. [Content Updates](#4-content-updates)
5. [Configuration for Production](#5-configuration-for-production)
6. [Testing Checklist](#6-testing-checklist)
7. [Deployment to Production](#7-deployment-to-production)
8. [Post-Deployment & Maintenance](#8-post-deployment--maintenance)

---

## 1. Local Development Setup

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Git (for version control)
- Text editor (VS Code recommended)

### Installation Steps

#### Step 1: Clone or Extract Project
```bash
# If cloning from GitHub
git clone https://github.com/yourusername/sarvmaan-interiors.git
cd sarvmaan-interiors

# If already extracted, just navigate to directory
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors
```

#### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

#### Step 3: Create Environment Files
```bash
# Create .env.local for development
touch .env.local

# Add development variables
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" >> .env.local
echo "NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX" >> .env.local
echo "NEXT_PUBLIC_EMAIL=info@sarvmaan.com" >> .env.local
echo "NEXT_PUBLIC_WHATSAPP=+91-XXXXXXXXXX" >> .env.local
```

#### Step 4: Run Development Server
```bash
npm run dev
# or
yarn dev

# Open browser and navigate to http://localhost:3000
```

### Verify Installation
- ✅ Homepage loads without errors
- ✅ Navigation links work
- ✅ Images display (if already added)
- ✅ No console errors

---

## 2. Project Structure & Customization

### Key Directories

```
sarvmaan-interiors/
├── public/                    # Static assets
│   ├── images/               # Project images, logos
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── (pages)/          # Page routes
│   │   │   ├── about/        # /about
│   │   │   ├── services/     # /services
│   │   │   ├── packages/     # /packages
│   │   │   ├── projects/     # /projects (portfolio)
│   │   │   ├── process/      # /process
│   │   │   ├── contact/      # /contact
│   │   │   └── privacy/      # /privacy (legal)
│   │   ├── api/              # API routes
│   │   │   └── contact/      # POST /api/contact
│   │   ├── layout.tsx        # Root layout with meta tags
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer with links
│   │   ├── HeroSection.tsx   # Hero banner
│   │   ├── ContactForm.tsx   # Contact form
│   │   ├── FloatingContactCard.tsx
│   │   └── ... other components
│   ├── data/
│   │   └── projects.ts       # Portfolio data
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
├── .env.local                # Local environment variables
├── .env.production           # Production environment variables
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

### Customization Guide

#### A. Update Company Information

**File**: `src/components/Footer.tsx`
```typescript
// Update these values
const PHONE = "+91-XXXXXXXXXX";
const EMAIL = "info@sarvmaan.com";
const WHATSAPP = "+91-XXXXXXXXXX";
const ADDRESS = "Pune, India";
const COMPANY_NAME = "SarvMaan Interiors";
```

**File**: `src/components/Header.tsx`
```typescript
// Update company name and logo
const companyName = "SarvMaan Interiors";
const logoUrl = "/images/logo.png"; // Add logo to public/images/
```

#### B. Update Brand Colors

**File**: `src/app/globals.css`
```css
:root {
  --primary: #1a1410;      /* Dark Brown */
  --secondary: #d4af37;    /* Gold */
  --accent: #b8956a;       /* Warm Tan */
  --background: #f5f5f5;   /* Light Gray */
}
```

#### C. Update Service Information

**File**: `src/components/ServicesSection.tsx`
```typescript
const services = [
  {
    title: "Full Home Design",
    description: "Complete interior design solutions...",
    icon: "🏠",
    price: "₹2,50,000+",
  },
  // Add/modify services
];
```

#### D. Update Portfolio Data

**File**: `src/data/projects.ts`
```typescript
export const projects = [
  {
    id: 1,
    title: "Modern Kitchen",
    category: "Kitchen",
    location: "Pune",
    description: "...",
    image: "/images/projects/kitchen-1.webp",
  },
  // Add/modify projects
];
```

#### E. Update Contact Information

**File**: `src/app/(pages)/contact/page.tsx`
```typescript
const contactInfo = {
  phone: "+91-XXXXXXXXXX",
  email: "info@sarvmaan.com",
  whatsapp: "+91-XXXXXXXXXX",
  address: "Your Address, Pune",
  businessHours: "9 AM - 6 PM, Mon-Sat",
};
```

---

## 3. Image Management

### Directory Structure for Images
```
public/images/
├── hero-home.webp          (1920x600px)
├── hero-about.webp         (1920x600px)
├── hero-services.webp      (1920x600px)
├── hero-packages.webp      (1920x600px)
├── hero-process.webp       (1920x600px)
├── hero-contact.webp       (1920x600px)
├── logo.png                (40x40px)
├── favicon.ico             (32x32px, 64x64px)
├── apple-touch-icon.png    (180x180px)
└── projects/
    ├── kitchen-1.webp      (1200x900px)
    ├── kitchen-1.jpg       (fallback)
    ├── wardrobe-1.webp
    ├── wardrobe-1.jpg
    ├── bedroom-1.webp
    ├── bedroom-1.jpg
    └── ... (more projects)
```

### Image Optimization

#### Convert Images to WebP
```bash
# Install ImageMagick (macOS)
brew install imagemagick

# Convert single image
convert input.jpg -quality 80 output.webp

# Batch convert all JPG files
for file in *.jpg; do
  convert "$file" -quality 80 "${file%.jpg}.webp"
done
```

#### Optimize Image Sizes
```bash
# Using ImageMagick to resize
convert input.jpg -resize 1920x600 -quality 80 hero-home.webp

# Batch resize for projects
for file in projects/*.jpg; do
  convert "$file" -resize 1200x900 -quality 80 "${file%.jpg}.webp"
done
```

### Update Image URLs in Code

#### In Components
```typescript
// Before (Unsplash)
<img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" alt="Interior" />

// After (Your images)
<img src="/images/hero-home.webp" alt="Modern Interior Design" />
<img src="/images/hero-home.jpg" alt="Modern Interior Design" /> {/* Fallback */}
```

#### In Next.js Image Component
```typescript
import Image from 'next/image'

<Image
  src="/images/hero-home.webp"
  alt="Modern Interior Design"
  width={1920}
  height={600}
  priority
/>
```

### AI Image Generation Prompts

See `IMAGE_GUIDE.md` for complete prompts. Quick reference:

**Hero Section Enhancement**:
```
Professional interior design photograph enhancement:
- Enhance color vibrancy while maintaining warm tones
- Emphasize gold and warm tan accents (#d4af37, #b8956a)
- Ensure professional lighting
- Reduce clutter, focus on design elements
- Output: 1920x600px, 2560x800px recommended
```

**Project Photo Enhancement**:
```
Professional interior design photography enhancement:
- Enhance project photography for portfolio display
- Adjust color grading: emphasize warm tones (gold/brown)
- Improve lighting and shadow balance
- Add subtle vignette for focus
- Output: 1200x900px or 1600x1200px
```

---

## 4. Content Updates

### Homepage Content

**File**: `src/app/page.tsx`
- Update hero section text
- Modify call-to-action buttons
- Update statistics (if any)

**File**: `src/components/HeroSection.tsx`
```typescript
export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center">
      <Image
        src="/images/hero-home.webp"
        alt="Modern Interior Design"
        fill
        className="object-cover"
        priority
      />
      {/* Update heading and CTA */}
      <h1>Your Personalized Interior Design Solutions</h1>
      <button>Get Free Consultation</button>
    </section>
  )
}
```

### Service Pages

**File**: `src/app/(pages)/services/page.tsx`
- Update service descriptions
- Add/remove service categories
- Update pricing information

### Portfolio/Projects

**File**: `src/data/projects.ts`
```typescript
export const projects = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "Kitchen",
    location: "Pune",
    description: "Complete kitchen renovation...",
    image: "/images/projects/kitchen-1.webp",
    imageAlt: "Modern modular kitchen with gold accents",
    details: {
      area: "250 sq ft",
      budget: "₹4,50,000",
      duration: "3 months",
      features: ["Modular cabinetry", "Granite countertop", "Smart storage"],
    },
  },
  // Add more projects
];
```

### About Page

**File**: `src/app/(pages)/about/page.tsx`
- Update company story
- Add team information
- Include company mission & values

### Testimonials

**File**: `src/components/TestimonialsSection.tsx`
```typescript
const testimonials = [
  {
    name: "Client Name",
    role: "Homeowner",
    message: "Amazing transformation of our living space...",
    image: "/images/avatars/client-1.jpg",
    rating: 5,
  },
  // Add more testimonials
];
```

### Contact Information

**File**: `src/components/Footer.tsx` & `src/app/(pages)/contact/page.tsx`
```typescript
export const CONTACT_INFO = {
  phone: "+91-XXXXXXXXXX",
  email: "info@sarvmaan.com",
  whatsapp: "+91-XXXXXXXXXX",
  address: "Your Address, Pune, India",
  businessHours: {
    weekday: "9:00 AM - 6:00 PM",
    weekend: "10:00 AM - 4:00 PM",
    closed: "Sunday",
  },
};
```

---

## 5. Configuration for Production

### Step 1: Create Environment Configuration

**File**: `.env.production`
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sarvmaan.com
NEXT_PUBLIC_SITE_NAME=SarvMaan Interiors

# Contact Information
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@sarvmaan.com
NEXT_PUBLIC_WHATSAPP=+91-XXXXXXXXXX
NEXT_PUBLIC_ADDRESS=Pune, India

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Backend Services
SENDGRID_API_KEY=SG.your_api_key_here
NEXT_PUBLIC_RECAPTCHA_KEY=your_recaptcha_public_key
```

### Step 2: Update Meta Tags

**File**: `src/app/layout.tsx`
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SarvMaan Interiors - Premium Interior Design Solutions',
  description: 'Transform your space with luxury interior designs. Professional home interiors, modular kitchens, custom furniture for Pune, India.',
  keywords: 'interior design, home interiors, luxury design, modular furniture, space planning, Pune',
  
  openGraph: {
    title: 'SarvMaan Interiors',
    description: 'Premium interior design solutions',
    images: ['/images/og-image.jpg'], // 1200x630px
    url: 'https://sarvmaan.com',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'SarvMaan Interiors',
    description: 'Premium interior design solutions',
    images: ['/images/og-image.jpg'],
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

### Step 3: Create SEO Files

**File**: `public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /api
Sitemap: https://sarvmaan.com/sitemap.xml
```

**File**: `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sarvmaan.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/services</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/packages</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/projects</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/process</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sarvmaan.com/contact</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

### Step 4: Set Up Contact Form Backend

**File**: `src/app/api/contact/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    // Validate form data
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Send email using SendGrid or Resend
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'info@sarvmaan.com',
    //   to: email,
    //   subject: 'Thank you for contacting SarvMaan Interiors',
    //   html: `<p>We will contact you soon at ${phone}</p>`
    // })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Step 5: Security Headers

**File**: `next.config.ts`
```typescript
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

### Step 6: Analytics Setup

**File**: `src/app/layout.tsx` (add import)
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 6. Testing Checklist

### Before Deployment, Verify All:

#### Functionality Testing
- [ ] All 7 pages load without errors
  - [ ] Home (/)
  - [ ] About (/about)
  - [ ] Services (/services)
  - [ ] Packages (/packages)
  - [ ] Portfolio (/projects)
  - [ ] Process (/process)
  - [ ] Contact (/contact)

- [ ] Navigation links work on all pages
- [ ] Contact form submits successfully
- [ ] WhatsApp link opens correctly
- [ ] Phone links are clickable
- [ ] Email links open mail client
- [ ] All buttons have hover effects

#### Mobile Responsiveness
- [ ] Test on iPhone (iOS 15+)
- [ ] Test on Android (latest)
- [ ] Test on iPad (tablet view)
- [ ] Hamburger menu works
- [ ] Touch interactions smooth
- [ ] Images resize appropriately
- [ ] Text readable on small screens

#### Performance
```bash
# Run Lighthouse audit
npm run build
npm run start

# Then use Chrome DevTools > Lighthouse
# Targets:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 90+
# - SEO: 95+
# - Page load: <3 seconds
```

#### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### SEO Verification
- [ ] Meta tags present in HTML
- [ ] robots.txt accessible
- [ ] sitemap.xml valid
- [ ] Open Graph tags correct
- [ ] Page titles descriptive
- [ ] Meta descriptions present
- [ ] Images have alt text
- [ ] Heading hierarchy correct (H1, H2, etc.)

#### Security Check
- [ ] No console errors or warnings
- [ ] No mixed content (HTTP/HTTPS)
- [ ] Forms have validation
- [ ] API endpoints secured
- [ ] Environment variables not exposed
- [ ] No debug code in production

### Local Testing Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Test production build locally
npm run start

# Run linter
npm run lint

# Check TypeScript
npx tsc --noEmit
```

---

## 7. Deployment to Production

### Option A: Deploy to Vercel (Recommended for Next.js)

#### Step 1: Prepare Project
```bash
# Make sure everything is committed to git
git add .
git commit -m "Prepare for production deployment"
```

#### Step 2: Create Vercel Account
- Visit: https://vercel.com
- Sign up with GitHub account
- Connect your GitHub repository

#### Step 3: Deploy on Vercel Dashboard
1. Click "New Project"
2. Select your GitHub repository
3. Configure build settings:
   - **Framework**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: https://yourdomain.com
   - `SENDGRID_API_KEY`: your_api_key
   - `NEXT_PUBLIC_RECAPTCHA_KEY`: your_key
5. Click "Deploy"

#### Step 4: Configure Custom Domain
1. In Vercel dashboard, go to "Settings" > "Domains"
2. Add your custom domain: `sarvmaan.com`
3. Follow DNS configuration instructions
4. SSL certificate will be automatically provisioned

#### Step 5: Verify Deployment
```bash
# After deployment
https://sarvmaan.com should work
https://www.sarvmaan.com should redirect to main domain
```

### Option B: Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Configure custom domain in Netlify dashboard
```

### Option C: Deploy to Custom Server

```bash
# 1. SSH into your server
ssh user@your-server-ip

# 2. Clone repository
git clone https://github.com/yourusername/sarvmaan-interiors.git
cd sarvmaan-interiors

# 3. Install dependencies
npm install

# 4. Build project
npm run build

# 5. Install PM2 for process management
npm install -g pm2

# 6. Start application
pm2 start npm --name "sarvmaan" -- start

# 7. Configure Nginx reverse proxy
# See Nginx configuration documentation

# 8. Set up SSL with Let's Encrypt
sudo certbot certonly --standalone -d sarvmaan.com -d www.sarvmaan.com
```

---

## 8. Post-Deployment & Maintenance

### Immediate Post-Deployment (Day 1)

#### Verification
```bash
# Check site is live
curl https://sarvmaan.com

# Verify HTTPS/SSL
# Should show green lock in browser

# Check Google Analytics is tracking
# Visit Google Analytics dashboard

# Verify sitemap is accessible
https://sarvmaan.com/sitemap.xml

# Check robots.txt
https://sarvmaan.com/robots.txt
```

#### Submit to Search Engines
1. **Google Search Console**:
   - Visit: https://search.google.com/search-console
   - Add property: sarvmaan.com
   - Verify ownership (DNS record or HTML file)
   - Submit sitemap: /sitemap.xml
   - Request indexing for important pages

2. **Bing Webmaster Tools**:
   - Visit: https://www.bing.com/webmasters
   - Add site
   - Submit sitemap

#### Check Email Setup
```bash
# Test contact form email delivery
# Fill out contact form
# Verify email is received
# Check spam/junk folder

# Set up email forwarding (optional)
# info@sarvmaan.com → your-email@gmail.com
```

### Weekly Tasks

- [ ] Monitor Google Analytics for traffic
- [ ] Check error logs
- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check Core Web Vitals
- [ ] Review user feedback

### Monthly Tasks

- [ ] Update project portfolio with new work
- [ ] Review and respond to leads
- [ ] Check security updates needed
- [ ] Update content if needed
- [ ] Monitor SEO performance
- [ ] Backup database/content

### Maintenance Commands

```bash
# Update dependencies
npm update
npm outdated  # Check for outdated packages
npm audit     # Check for vulnerabilities
npm audit fix # Fix vulnerabilities

# Rebuild and redeploy
npm run build
npm run start

# View logs (on Vercel)
vercel logs

# View logs (on custom server with PM2)
pm2 logs sarvmaan
pm2 monit
```

### Monitoring & Analytics

#### Google Analytics
- Monitor traffic sources
- Track user behavior
- Monitor conversion goals
- Review page performance

#### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Check at:
- Google Search Console
- PageSpeed Insights
- Web Vitals Chrome Extension

#### Error Tracking (Optional)
```bash
# Install Sentry for error tracking
npm install @sentry/nextjs

# Configure in next.config.ts
# See Sentry documentation
```

### Backup & Recovery

#### Vercel (Automatic)
- Vercel automatically maintains backups
- Deployments can be rolled back

#### Custom Server
```bash
# Backup database/content
tar -czf backup-$(date +%Y%m%d).tar.gz .

# Upload to cloud storage (AWS S3, Google Drive, etc.)
```

### Performance Optimization

#### Image Optimization
- Use WebP format with JPG fallback
- Optimize file sizes
- Implement lazy loading
- Use Next.js Image component

#### Caching Strategy
- Browser cache: 1 year for static assets
- CDN cache: 24 hours for dynamic content
- Database queries: Cache where possible

#### Code Splitting
- Lazy load components
- Code splitting for routes
- Monitor bundle size

---

## Deployment Status Checklist

Before marking as "Production Ready":

**Pre-Deployment** ✅
- [ ] All code tested and working locally
- [ ] Images optimized and uploaded
- [ ] Content finalized and proofread
- [ ] Environment variables configured
- [ ] Security measures implemented
- [ ] SEO files created (robots.txt, sitemap.xml)
- [ ] Analytics configured

**Deployment** ✅
- [ ] Deployed to hosting platform
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] DNS records updated
- [ ] Vercel/hosting provider dashboard configured

**Post-Deployment** ✅
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Contact form working
- [ ] WhatsApp and phone links functional
- [ ] Images displaying correctly
- [ ] Mobile responsive working
- [ ] Analytics tracking
- [ ] Search Console submitted
- [ ] Performance audit passed

**Ongoing** ✅
- [ ] Monitor errors and logs
- [ ] Track analytics
- [ ] Update content regularly
- [ ] Maintain security
- [ ] Perform backups

---

## Common Issues & Troubleshooting

### Images Not Loading
```bash
# Check image paths are correct
# Should be: /images/hero-home.webp (relative to public/)

# Verify images exist in public/images/
ls -la public/images/

# Clear Next.js cache
rm -rf .next/
npm run dev
```

### Contact Form Not Working
```bash
# Check API endpoint
# Should be: POST /api/contact

# Verify backend environment variables are set
# Check browser console for errors
# Test form submission manually

curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"123","message":"test"}'
```

### Slow Performance
```bash
# Analyze bundle size
npm run build

# Check Core Web Vitals
# Use Chrome DevTools Lighthouse

# Optimize images
# Ensure all images are WebP format
# Check file sizes < limits

# Enable caching headers
# Configure in next.config.ts
```

### SSL Certificate Issues
```bash
# Vercel: Automatic (no action needed)
# Netlify: Automatic (no action needed)
# Custom Server: Use Let's Encrypt (certbot)

# Test SSL certificate
openssl s_client -connect sarvmaan.com:443 -servername sarvmaan.com
```

---

## Support & Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

### Hosting Providers
- [Vercel](https://vercel.com) - Best for Next.js
- [Netlify](https://netlify.com) - Good alternative
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean](https://www.digitalocean.com/)

### Email Services
- [SendGrid](https://sendgrid.com/) - Email API
- [Resend](https://resend.com/) - Next.js optimized email
- [Mailgun](https://www.mailgun.com/)

### Analytics & Monitoring
- [Google Analytics 4](https://analytics.google.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Sentry](https://sentry.io/) - Error tracking
- [Vercel Analytics](https://vercel.com/docs/analytics)

### Image Tools
- [TinyPNG](https://tinypng.com/) - Image compression
- [ImageMagick](https://imagemagick.org/) - Image processing
- [Figma](https://www.figma.com/) - Design
- [Unsplash](https://unsplash.com/) - Free stock photos

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Aug 2026 | Initial production release |
| 0.9.0 | Aug 2026 | Beta testing phase |
| 0.1.0 | Aug 2026 | Initial development |

---

## License & Credits

**Created**: August 2026  
**Technology**: Next.js 16, React 19, Tailwind CSS 4, TypeScript 5  
**Status**: Production Ready ✅

---

**Last Updated**: August 9, 2026  
**Maintainer**: SarvMaan Interiors Team
