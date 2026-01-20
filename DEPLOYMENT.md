# Deployment Guide

## Quick Start

Your site is ready to deploy! Since you mentioned it auto-deploys to brauckmann.xyz via Cloudflare when pushing to main, here's what you need to know:

## Before First Deployment

### 1. Add Your Headshot
Place your headshot image at:
```
/public/images/headshot.jpg
```
- Recommended size: 800x800px (square)
- Format: JPG or PNG
- The site will show "JB" initials as fallback if no image is found

### 2. Cloudflare Pages Setup

If you haven't already configured Cloudflare Pages, here's how:

1. Go to Cloudflare Dashboard → Pages
2. Create a new project
3. Connect your GitHub repository (person-site)
4. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Root directory:** (leave blank or set to `/`)
   - **Node version:** 18 or higher

5. Set custom domain:
   - Add `brauckmann.xyz` as custom domain
   - Cloudflare will handle DNS automatically

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server locally
npm start
```

## Testing Before Deployment

```bash
# Run build to check for errors
npm run build

# If build succeeds, you're ready to deploy!
```

## Deploy to Production

Simply push to main branch:

```bash
git add .
git commit -m "feat: new portfolio site"
git push origin main
```

Cloudflare Pages will automatically:
1. Detect the push
2. Run `npm run build`
3. Deploy to brauckmann.xyz
4. Usually takes 2-5 minutes

## Environment Variables (Optional)

If you want to integrate a real email service for the contact form later:

1. In Cloudflare Pages → Settings → Environment Variables
2. Add these variables:
   - `EMAIL_SERVICE_API_KEY` (for SendGrid, Resend, etc.)
   - `CONTACT_EMAIL` (your email address)

3. Update `/app/api/contact/route.ts` to use the email service

## Monitoring

After deployment:
- Check Cloudflare Pages dashboard for build logs
- Visit brauckmann.xyz to see your live site
- Test all sections, animations, and the contact form

## Troubleshooting

### Build fails on Cloudflare
- Check Cloudflare build logs for specific errors
- Ensure Node version is 18+
- Verify all dependencies are in package.json

### Site looks different than local
- Clear Cloudflare cache
- Check browser console for errors
- Ensure dark mode toggle works

### Images not loading
- Verify headshot is at `/public/images/headshot.jpg`
- Check Next.js image optimization settings in `next.config.ts`

## Performance

Your site is optimized with:
- ✅ Static generation where possible
- ✅ Image optimization via Next.js
- ✅ Code splitting
- ✅ Minimal JavaScript
- ✅ Tailwind CSS purging

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## Future Enhancements

Consider adding:
1. Google Analytics or Plausible for traffic tracking
2. Email service integration (Resend, SendGrid)
3. Blog section using MDX
4. More interactive demos
5. Resume download link (PDF)

## Support

If you encounter issues:
1. Check Cloudflare Pages logs
2. Review build output: `npm run build`
3. Test locally first: `npm run dev`
4. Check GitHub Actions (if configured)

---

Ready to deploy? Just push to main! 🚀
