# Cloudflare Pages Deployment Guide

## Option 1: Static Export (Recommended - Simpler)

Since your site doesn't use server-side features heavily, you can export it as static HTML:

### 1. Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
```

### 2. Cloudflare Pages Settings:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** `20.9.0` (or set via `.nvmrc`)

### 3. Note about the Contact API:

The contact form API route won't work with static export. Instead, the form will show the message telling users to email you directly at jbrauck417@gmail.com (which it already does).

---

## Option 2: Use Vercel Instead (Recommended - Full Features)

Since you're using Next.js 16, Vercel (the creators of Next.js) provides the best support:

### Vercel Deployment:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository: `jbrauck-unchained/personal-website`
4. Vercel auto-detects Next.js settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** (leave default)
   - **Install Command:** `npm install`
5. Click **Deploy**

Your site will be live at `your-site.vercel.app` and you can add your custom domain `brauckmann.xyz`.

**Advantages:**
- Full Next.js 16 support
- API routes work perfectly (contact form with rate limiting)
- Automatic GitHub deployments
- Free tier is very generous
- Next.js image optimization works
- Edge functions for dynamic routes

---

## Option 3: Wait for Cloudflare Support

Next.js 16 is very new (released Dec 2024). Cloudflare's `@cloudflare/next-on-pages` adapter currently only supports up to Next.js 15.

You could:
- Downgrade to Next.js 15 (not recommended - you'd lose features)
- Wait for Cloudflare to update their adapter
- Use Options 1 or 2 above

---

## Current Build Error Explanation

The error `Output directory "build" not found` happens because:
- Next.js builds to `.next` directory by default
- Cloudflare was configured to look for `build` directory
- For static export, Next.js outputs to `out` directory
- For full Next.js deployment on Cloudflare, you need their adapter (not yet compatible with v16)

## Recommendation

**Use Vercel** - it's the easiest path with full feature support, or use **static export** if you're okay with the contact form just showing your email instead of actually sending.
