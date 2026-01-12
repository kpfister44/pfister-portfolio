# Kyle Pfister Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Deployed on Fly.io](https://img.shields.io/badge/Deployed%20on-Fly.io%20Sprites-blueviolet?style=flat-square)

A minimalist portfolio website showcasing full-stack development projects with a focus on clean design and modern web technologies.

**[View Live Site →](https://pfister-portfolio-blmwi.sprites.app)**

---

## Screenshots

### Homepage
_Screenshot placeholder - Coming soon_

### Projects Showcase
_Screenshot placeholder - Coming soon_

### Blog
_Screenshot placeholder - Coming soon_

---

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX with next-mdx-remote for blog posts
- **Data**: GitHub REST API (@octokit/rest) for project showcase
- **Typography**: Fraunces (display) + JetBrains Mono (code)
- **Syntax Highlighting**: Shiki with rehype-pretty-code
- **Hosting**: Fly.io Sprites (scale-to-zero architecture)

---

## Features

✨ **Refined Minimalism** - Apple/Linear-inspired design with distinctive typography and subtle animations

🚀 **Dynamic Projects** - Auto-fetches GitHub repositories with client-side language filtering

📝 **MDX Blog** - Full-featured blog with syntax highlighting and reading time estimates

⚡ **Optimized Performance** - Static generation with ISR, minimal JavaScript, Lighthouse 95+ scores

🌐 **Fly.io Sprites Deployment** - Cost-efficient hosting with automatic sleep/wake scaling

📱 **Fully Responsive** - Mobile-first design with breakpoints for tablet and desktop

---

## Deployment Architecture

This portfolio is hosted on **Fly.io Sprites**, demonstrating modern serverless infrastructure:

- **Scale-to-zero**: Automatically sleeps after 30 seconds of inactivity
- **Instant wake**: Resumes on incoming traffic with persistent filesystem
- **Cost-efficient**: Pay only for active usage (CPU/RAM hours while awake)
- **Production-ready**: Next.js standalone build with optimized assets

---

## Design Highlights

- **Typography System**: Major Third scale (1.250 ratio) with Fraunces serif for headings
- **Color Palette**: Warm minimalism with deep royal blue accents (#1E40AF)
- **Motion Design**: Crisp 150-350ms transitions with staggered fade-up animations
- **Component Library**: Reusable cards, filters, navigation with hover states

---

## License

© 2026 Kyle Pfister. All rights reserved.
