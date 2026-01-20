# Joe Brauckmann - Personal Portfolio

Modern, professional portfolio website showcasing my work as a Product Manager and Developer at Unchained.

## Features

- 🎨 Modern, animated UI with dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 14+ and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🔄 Live GitHub activity feed
- 📧 Contact form integration
- 🌐 Deployed to brauckmann.xyz via Cloudflare

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Cloudflare (auto-deploys from main branch)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/contact/     # Contact form API route
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Page sections (Hero, About, Experience, etc.)
│   ├── ThemeProvider.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── images/          # Static images (place headshot.jpg here)
└── lib/                 # Utility functions
```

## Customization

### Update Images

**Headshot:**
Place a square image (recommended 800x800px) at `/public/images/headshot.jpg`

**Project Screenshots:**
Add project images (1200x675px recommended) to `/public/images/projects/`:
- `bitcoin-miner.png` - Bitcoin Miner screenshot
- `sportstr.png` - Sportstr screenshot  
- `bitcoin-voice-price.png` - Bitcoin Voice Price screenshot

If images aren't provided, placeholder graphics will be shown.

### Update Content

Edit the relevant section components in `/components/sections/`:
- `Hero.tsx` - Hero section content
- `About.tsx` - About section and skills
- `Experience.tsx` - Work experience and achievements
- `FeaturedProjects.tsx` - Highlighted projects
- `Projects.tsx` - Other projects
- `Contact.tsx` - Contact information

### Update Metadata

Edit SEO metadata in `/app/layout.tsx`

## Deployment

This site is configured to auto-deploy to brauckmann.xyz when changes are pushed to the `main` branch via Cloudflare Pages.

## License

© 2026 Joe Brauckmann. All rights reserved.
