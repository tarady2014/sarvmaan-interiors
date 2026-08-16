# Turbopack vs Webpack Issue - Root Cause Analysis

## What Changed Recently

### The Problem
Your `next.config.ts` has **uncommitted changes** that added a **webpack configuration**. This is causing the Turbopack vs webpack conflict when starting the dev server.

### Uncommitted Changes in `next.config.ts`

```diff
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
+   formats: ['image/webp', 'image/avif'],  // Added
  },
  compress: true,
- reactStrictMode: true,
+ reactStrictMode: false, // Disable strict mode to prevent double-mounting in dev  // Changed
  poweredByHeader: false,
+ webpack: (config, { isServer }) => {     // NEWLY ADDED
+   // Exclude node_modules and .next from watching
+   config.watchOptions = {
+     poll: false,
+     ignored: ['**/node_modules', '**/.next', '**/dist', '**/.git'],
+   };
+   return config;
+ },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
  },
};
```

## What Was Using Before (Committed Version)

In the last committed version (HEAD), the config was simpler and **had no webpack config**:

```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
  },
};
```

## Why This Causes the Turbopack Conflict

**Next.js 16.3.0** (from your `package.json`) uses **Turbopack by default** as the build bundler.

When you add a custom `webpack` configuration while Turbopack is the default, Next.js detects this conflict and exits with:

```
⨯ ERROR: This build is using Turbopack, with a `webpack` config and no `turbopack` config.
```

This happens because:
1. Next.js 16+ prefers Turbopack (faster, more modern)
2. Your `webpack: (config, { isServer }) => { ... }` config is webpack-specific
3. You didn't add a corresponding `turbopack` config
4. Next.js sees this as a misconfiguration and refuses to run

## Why the webpack Config Was Added

The webpack config was added to **exclude directories from file watching** to improve restart times:

```javascript
config.watchOptions = {
  poll: false,
  ignored: ['**/node_modules', '**/.next', '**/dist', '**/.git'],
};
```

This was a **performance optimization** to prevent the dev server from watching:
- `node_modules/` (thousands of files)
- `.next/` (build cache)
- `dist/` (build output)
- `.git/` (version control)

## Solutions

### Option 1: Migrate to Turbopack (Recommended)
Add a `turbopack` config to replace the webpack one:

```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  reactStrictMode: false,
  poweredByHeader: false,
  turbopack: {
    resolveAlias: {},
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
  },
};
```

Benefits:
- ✅ Turbopack is faster (built-in file watching optimization)
- ✅ No compatibility issues
- ✅ Better hot reload performance
- ✅ Future-proof for Next.js development

### Option 2: Keep Webpack (Explicit Flag)
Run dev with webpack flag:

```bash
npm run dev -- --webpack
```

Or add to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // ...config
  experimental: {
    turbopack: false, // Explicitly disable Turbopack, use webpack
  },
};
```

Benefits:
- ✅ Keeps your webpack watch optimization
- ✅ No config changes needed for now
- ⚠️ Not recommended long-term (webpack deprecated in Next.js)

### Option 3: Remove webpack Config + Use Turbopack Defaults
Simply delete the webpack config and rely on Turbopack's built-in optimizations:

```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  reactStrictMode: false,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
  },
};
```

Benefits:
- ✅ Simple, clean config
- ✅ Turbopack handles file watching automatically
- ✅ Likely better performance than webpack

## Other Uncommitted Changes

Your working directory also has changes in these files (from recent Portfolio/Projects updates):

- `src/components/ProjectsGallery.tsx` - Updated gallery component
- `src/data/projects.ts` - Added new projects (YouTube videos, Google Albums)
- `src/app/(pages)/projects/page.tsx`
- `src/components/ContactForm.tsx`
- `src/components/TrustedPartners.tsx`
- `src/app/(pages)/services/page.tsx`
- `src/app/(pages)/process/page.tsx`
- `src/app/(pages)/contact/page.tsx`
- `src/app/api/contact/route.ts`

Plus new project images:
- `public/images/projects/completeinterior-2.webp`
- `public/images/projects/completeinterior-3.webp`
- `public/images/projects/kidsbedroom-1.webp`
- `public/images/trusted_partners.webp`

## Immediate Action Items

1. **Choose a solution** (Recommended: Option 1 - Turbopack migration)
2. **Update `next.config.ts`** accordingly
3. **Restart dev server**: `npm run dev`
4. **Commit changes** once you verify everything works

---

**Summary**: The Turbopack/webpack conflict was introduced by uncommitted changes that added webpack file-watching optimization. Next.js 16+ defaults to Turbopack, so you need to either migrate that config to Turbopack, explicitly use webpack, or remove it entirely.
