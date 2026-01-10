# Portfolio Website Design

**Date**: 2026-01-10
**Project**: Personal Portfolio Website for Kyle Pfister
**Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS
**Hosting**: Fly.io Sprite (this instance)

## Project Overview

A minimalist, professional portfolio website showcasing Kyle's full-stack development skills (frontend-leaning) with emphasis on AI integration capabilities. The site will be hosted on this Sprite's public URL, demonstrating knowledge of modern infrastructure.

**Target Audience**: Potential employers looking for full-stack web developers with AI integration experience.

**Key Goals**:
- Showcase programming skills through project portfolio
- Demonstrate frontend excellence with clean, minimalist design
- Highlight AI integration work (Claude Code, Sprites, AI projects)
- Provide comprehensive background via resume and work experience
- Enable technical writing through blog platform

## User Profile

**Kyle Pfister**
- **Role**: Developer @ Argonne National Laboratory
- **Location**: Chicago, IL
- **GitHub**: kpfister44
- **Email**: kpfister44@gmail.com
- **Bio**: "Developer who believes in coffee and version control. Still trying to figure out which one's more essential."

**Portfolio Projects** (7 public repos):
1. **PokemonYellow** - Pixel-perfect PyGame recreation (Python)
2. **ChiSnow** - Mobile-first snowfall map for Chicagoland (Python)
3. **illinois-school-explorer** - School comparison web app (TypeScript)
4. **APUSH-Grader** - Assignment grading tool (Python)
5. **Kinnect** - Private photo-sharing iOS app (Swift)
6. **MobileMakersGrader** - AI-powered Swift assignment grader (Java)
7. **egturkeybowl** - (JavaScript)

## Technical Architecture

### Core Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blog**: MDX with Contentlayer or next-mdx-remote
- **Fonts**: Vercel Geist (Sans + Mono)
- **Data Sources**: GitHub API, Static MDX files, JSON configs

### Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (home)/            # Landing page
│   │   ├── about/             # About/background
│   │   ├── projects/          # Project showcase
│   │   │   └── [slug]/        # Project detail pages
│   │   ├── blog/              # Blog listing & posts
│   │   │   └── [slug]/        # Individual blog posts
│   │   └── api/               # API routes
│   │       └── github/        # GitHub data endpoints
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── layout/           # Layout components
│   │   └── features/         # Feature-specific components
│   └── lib/                   # Utilities
│       ├── github.ts         # GitHub API client
│       ├── blog.ts           # Blog utilities
│       └── utils.ts          # Helper functions
├── content/
│   └── blog/                  # MDX blog posts
├── public/                    # Static assets
│   ├── images/               # Project screenshots, avatar
│   └── resume.pdf            # Downloadable resume
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

### Hosting & Deployment

- **Platform**: This Fly.io Sprite
- **Build**: `npm run build` (optimized production build)
- **Serve**: `npm start` (Next.js standalone server)
- **URL**: Sprite's public URL
- **Environment**: Node.js 22.20 (pre-installed on Sprite)

## Visual Design System

### Design Philosophy

Minimalist/Clean aesthetic inspired by Apple and Linear.app:
- Generous whitespace
- Simple, elegant typography
- Subtle animations
- Content-focused
- Professional and mature

### Color Palette

- **Background**: White (#FFFFFF) / Off-white (#FAFAFA)
- **Text Primary**: Near-black (#0A0A0A)
- **Text Secondary**: Gray-600
- **Accent**: Deep blue (#2563EB) or pure black
- **Borders**: Subtle gray (#E5E5E5)
- **Code Background**: Soft dark (#1E1E1E)

### Typography

- **Headings**: Geist Sans Bold, generous letter-spacing
- **Body**: Geist Sans Regular, 16px base, 1.6 line-height
- **Code**: Geist Mono
- **Hierarchy**: Clear size/weight progression

### Key Components

1. **Hero Section**
   - Name and role
   - Witty bio quote
   - CTA buttons
   - Subtle entrance animation

2. **Project Cards**
   - Minimal card design
   - Tech stack tags
   - Hover reveal for details
   - Featured projects get premium treatment

3. **Blog Post Cards**
   - Title, date, tags
   - Excerpt preview
   - Read time estimate
   - Clean list layout

4. **Navigation**
   - Fixed top nav: Home, About, Projects, Blog, Contact
   - Smooth scroll behavior
   - Mobile hamburger menu
   - Active state indicators

5. **Footer**
   - Contact links (GitHub, Email)
   - "Hosted on Fly.io Sprites" credit
   - Copyright notice

### Interaction Patterns

- **Hover Effects**: Subtle scale (1.02), underline, color shifts
- **Transitions**: Smooth page navigation
- **Loading**: Lazy-loaded images for performance
- **Responsive**: Mobile-first, breakpoints at 768px (tablet), 1024px (desktop)

## Content Structure

### Homepage (`/`)

**Sections**:
1. **Hero**
   - Full name: "Kyle Pfister"
   - Role: "Full-Stack Developer @ Argonne National Laboratory"
   - Bio: Coffee and version control quote
   - CTAs: "View Projects" / "Read Blog"

2. **Featured Projects** (3-4 spotlight projects)
   - PokemonYellow
   - ChiSnow
   - illinois-school-explorer
   - MobileMakersGrader
   - Each with screenshot, description, tech tags

3. **Recent Blog Posts** (2-3 latest articles)

4. **Quick Stats** (subtle presentation)
   - GitHub contributions
   - Years coding
   - Tech stack variety

### About Page (`/about`)

**Content**:
- Professional avatar/headshot
- Extended bio and background story
- **Work Experience**:
  - Argonne National Laboratory (current role)
  - Timeline format
- **Education** (if applicable)
- **Skills by Category**:
  - Frontend: React, Next.js, TypeScript, Tailwind, SvelteKit
  - Backend: Python, Node.js
  - Mobile: Swift, iOS development
  - AI/ML: Claude API integration, LLM workflows
  - Tools: Git, Sprites, Claude Code, Docker
- **AI Integration Highlight**:
  - Work on MobileMakersGrader and APUSH-Grader
  - Development workflow with Claude Code
  - Infrastructure knowledge (Sprites)
- **Resume Download** (PDF button)

### Projects Page (`/projects`)

**Features**:
- Grid layout of all 7 public repos
- **Filters**:
  - By Technology: Python, TypeScript, Swift, JavaScript, Java
  - By Category: Web Apps, Mobile, AI/ML, Games, Tools
- **Project Cards Show**:
  - Title and description
  - Tech stack tags (colored)
  - GitHub link
  - Live demo link (when applicable)
  - Last updated date (via GitHub API)
  - Click through to detail page

### Project Detail Pages (`/projects/[slug]`)

**Sections**:
- Project title and overview
- Screenshots / demo GIFs
- Technical deep-dive
  - Architecture decisions
  - Tech stack rationale
  - Implementation details
- Challenges & solutions
- Results / outcomes
- Links: GitHub repo, live demo
- Related projects suggestions

### Blog Page (`/blog`)

**Features**:
- Chronological post listing (newest first)
- **Filter by Tags**: AI, Web Dev, Sprites, Tutorial, Swift, Python, etc.
- **Client-side Search**: Filter posts by title/content
- **Post Card Data**:
  - Title
  - Publication date
  - Excerpt (first ~150 chars)
  - Tags
  - Estimated read time

### Blog Post Page (`/blog/[slug]`)

**Features**:
- Clean, readable typography
- Code syntax highlighting (Shiki with VS Code themes)
- Table of contents (auto-generated from headings)
- Share buttons (optional)
- "Read next" suggestions (related posts)
- Publication date and read time
- Tag links to filtered blog page

### Contact

**Implementation**: Simple approach
- GitHub link: https://github.com/kpfister44
- Email: kpfister44@gmail.com (mailto link)
- Optional: Simple contact form (or defer to email for minimalism)

## Technical Implementation Details

### GitHub Integration

**API Route**: `/api/github/repos`
- Fetches public repos for kpfister44
- Returns: name, description, URL, stars, language, last pushed date
- **Caching Strategy**:
  - Build-time static generation preferred
  - In-memory cache with TTL for dynamic requests
  - Fallback to static JSON if API fails
- **Rate Limiting**:
  - Unauthenticated: 60 req/hour
  - Authenticated (with GH token): 5000 req/hour
  - Use environment variable for optional auth token

### Blog System

**Content Format**: MDX files in `content/blog/`

**Frontmatter Schema**:
```yaml
---
title: "Building with Claude Code and Sprites"
date: "2026-01-15"
tags: ["AI", "Sprites", "DevOps"]
excerpt: "How I leverage AI tools in my development workflow"
---
```

**Processing**:
- Contentlayer or next-mdx-remote for MDX compilation
- Shiki for syntax highlighting (VS Code themes)
- Auto-generate reading time (250 words/min average)
- Auto-generate table of contents from headings

**Tag System**:
- Extract unique tags from all posts
- Generate tag pages or client-side filtering
- Tag cloud or list on blog index

### Performance Optimizations

1. **Images**:
   - Next.js Image component with automatic optimization
   - WebP format with fallbacks
   - Lazy loading below fold
   - Responsive srcsets

2. **Rendering**:
   - Static generation for all pages (except API routes)
   - ISR (Incremental Static Regeneration) for blog if needed
   - Minimal client-side JavaScript

3. **Fonts**:
   - Geist loaded via next/font (automatic optimization)
   - Font subsetting
   - Preload critical fonts

4. **Code Splitting**:
   - Automatic route-based splitting
   - Dynamic imports for heavy components
   - Tree-shaking unused code

5. **Bundle Size**:
   - Tailwind CSS purging
   - Minimal dependencies
   - Next.js built-in optimizations

### SEO & Metadata

**Per-Page Meta Tags**:
- Title (unique per page)
- Description
- Keywords
- Canonical URL

**Open Graph**:
- og:title, og:description, og:image
- Twitter Card metadata
- Dynamic OG images for blog posts

**Structured Data** (JSON-LD):
- Person schema for About page
- Article schema for blog posts
- WebSite schema for homepage

**Additional SEO**:
- Auto-generated sitemap.xml
- robots.txt configuration
- Semantic HTML (proper heading hierarchy)

### Error Handling

1. **GitHub API Failures**:
   - Try API call
   - On failure, use cached static data
   - Log error for debugging
   - Show stale data with timestamp

2. **404 Pages**:
   - Custom 404 for missing blog posts
   - Custom 404 for missing projects
   - Helpful navigation back to main sections

3. **Component Errors**:
   - Error boundaries around major sections
   - Graceful degradation
   - User-friendly error messages

### Accessibility

- **Semantic HTML**: nav, main, article, section
- **ARIA Labels**: Hamburger menu, decorative images
- **Keyboard Navigation**: Tab order, focus management
- **Color Contrast**: WCAG AA compliance (4.5:1 minimum)
- **Focus States**: Visible focus indicators
- **Alt Text**: All images have descriptive alt text
- **Screen Reader**: Proper heading hierarchy, skip links

### Development Workflow

**Local Development**:
```bash
npm run dev          # Dev server on port 3000
npm run build        # Production build
npm start            # Serve production build
npm run lint         # ESLint
```

**Content Workflow**:
- Write MDX files in `content/blog/`
- Add project screenshots to `public/images/projects/`
- Update resume PDF in `public/`
- Hot reload in development

**Deployment to Sprite**:
1. `npm run build` - Generate optimized build
2. `npm start` - Start Next.js server
3. Access via Sprite public URL
4. Optional: Set up process manager (PM2) for auto-restart

**Environment Variables**:
```env
GITHUB_TOKEN=         # Optional, for higher API rate limits
NEXT_PUBLIC_SITE_URL= # Sprite public URL
```

## AI Integration Strategy

**Subtle Showcase Approach** (no live AI features on site):

1. **Dedicated AI Section on About Page**:
   - Subsection titled "AI & Development Tools"
   - Describe work on MobileMakersGrader (AI-powered grading)
   - Describe work on APUSH-Grader
   - Mention development workflow: Claude Code, Sprites
   - Explain philosophy: AI as productivity multiplier

2. **Blog Content**:
   - Write case studies about AI projects
   - "Building an AI Grading System for Swift Assignments"
   - "My Development Workflow with Claude Code and Sprites"
   - "Hosting on Fly.io Sprites: A Developer's Experience"

3. **Footer Credit**:
   - "Built with Next.js and Claude Code"
   - "Hosted on Fly.io Sprites"
   - Link to Sprites documentation

4. **Project Showcases**:
   - Highlight AI integration in project detail pages
   - Technical deep-dives on Claude API usage
   - Architecture diagrams showing AI components

**Rationale**: Focus on demonstrating AI skills through actual projects rather than gimmicky chatbots. Shows thoughtful integration vs. adding AI for AI's sake.

## Success Criteria

**User Experience**:
- [ ] Loads in under 2 seconds on 3G
- [ ] Works perfectly on mobile, tablet, desktop
- [ ] Easy navigation to any content in 2 clicks
- [ ] Blog posts are readable and well-formatted
- [ ] Code snippets have proper syntax highlighting

**Technical**:
- [ ] Lighthouse score: 90+ on all metrics
- [ ] Zero console errors
- [ ] Accessible (WCAG AA)
- [ ] SEO meta tags on all pages
- [ ] Responsive at all breakpoints

**Content**:
- [ ] All 7 projects showcased
- [ ] At least 2-3 initial blog posts published
- [ ] Resume downloadable
- [ ] Contact information easily found
- [ ] AI work prominently featured

**Deployment**:
- [ ] Running on Sprite public URL
- [ ] GitHub data fetching successfully
- [ ] Blog posts rendering correctly
- [ ] Images optimized and loading

## Future Enhancements (Post-MVP)

- Analytics (Plausible or privacy-focused option)
- Newsletter subscription
- Project categories/tags
- Search across all content
- Dark mode toggle
- View counter for blog posts
- RSS feed for blog
- Automated GitHub webhook rebuilds
- Interactive project demos (embedded iframes)
- Testimonials/recommendations section

---

**Design Status**: ✅ Validated
**Next Steps**: Initialize git repository, create implementation plan, begin development
