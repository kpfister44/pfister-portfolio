# Portfolio Website - Project Overview

**Project**: Kyle Pfister's Personal Portfolio Website
**Repository**: kyle-pfister-portfolio
**Production URL**: https://pfister-portfolio-blmwi.sprites.app
**Hosting**: Fly.io Sprite (this instance)

## Purpose

A minimalist, professional portfolio website showcasing full-stack development skills with emphasis on AI integration capabilities. Designed to attract potential employers looking for full-stack web developers with modern tech stack expertise.

**Target Audience**: Technical recruiters and hiring managers
**Key Goals**: Project showcase, technical writing platform, professional presence

---

## Tech Stack

### Core Framework
- **Next.js 15** (App Router) - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

### Content & Data
- **next-mdx-remote** (v5.0.0) - Blog system with MDX support
- **gray-matter** (v4.0.3) - Frontmatter parsing for blog posts
- **@octokit/rest** (v22.0.1) - GitHub API integration for project showcase
- **date-fns** (v4.1.0) - Date formatting utilities

### Styling & Code Display
- **Geist** (v1.5.1) - Vercel's typography system (base fallback fonts)
- **Fraunces** - Variable serif font for display typography (loaded via next/font)
- **JetBrains Mono** - Monospace font for code blocks (loaded via next/font)
- **Shiki** (v3.21.0) + **rehype-pretty-code** (v0.14.1) - Syntax highlighting

### Build Tools
- **autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing
- **ESLint** - Code linting

---

## Repository Structure

```
/home/sprite/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts, metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── icon.svg                 # Site favicon (KP initials)
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── projects/                # Projects showcase
│   │   └── page.tsx
│   ├── blog/                    # Blog listing and posts
│   │   ├── page.tsx             # Blog index
│   │   └── [slug]/              # Dynamic blog post routes
│   │       └── page.tsx
│   └── api/                     # API routes
│       └── github/
│           └── repos/
│               └── route.ts     # GitHub projects API endpoint
│
├── components/                   # React components
│   ├── layout/
│   │   ├── Navigation.tsx       # Site navigation with mobile menu
│   │   └── Footer.tsx           # Site footer
│   ├── home/
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── FeaturedProjects.tsx # Featured projects showcase
│   │   └── QuickStats.tsx       # Statistics display
│   ├── projects/
│   │   ├── ProjectCard.tsx      # Project card component
│   │   └── ProjectFilters.tsx   # Language/category filters
│   └── blog/
│       └── PostCard.tsx         # Blog post card component
│
├── lib/                          # Utilities and helpers
│   ├── github.ts                # GitHub API client (Octokit wrapper)
│   └── blog.ts                  # Blog utilities (MDX processing, reading time)
│
├── content/
│   └── blog/                    # MDX blog posts
│       └── welcome.mdx          # Initial blog post
│
├── public/                       # Static assets
│   └── resume.pdf               # Downloadable resume (1MB, 2 pages)
│
├── docs/                         # Documentation
│   └── (plans archived)
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind custom design tokens
├── next.config.js                # Next.js configuration
├── .env.local                    # Environment variables
├── CLAUDE.md                     # Development rules and conventions
└── PROJECT_OVERVIEW.md           # This file
```

---

## Design Philosophy

### Visual Aesthetic
**Refined Minimalism** inspired by Apple and Linear.app:
- Generous whitespace and breathing room
- Clean, elegant typography with distinctive character
- Subtle animations and micro-interactions
- Content-focused, professional and mature
- Avoids generic "startup landing page" aesthetics

### Typography System
- **Display/Headings**: Fraunces (variable serif) - distinctive, soft serif with personality
- **Body/UI**: System font stack (Apple system, Segoe UI, etc.) for performance
- **Code**: JetBrains Mono with ligatures
- **Scale**: 1.250 ratio (Major Third) for harmonious progression
- **Details**: Tight letter-spacing on headings (-0.03em), subtle on body (-0.011em)

### Color Palette
```css
/* Backgrounds */
--bg-base: #FAFAF9        /* Warm off-white */
--bg-elevated: #FFFFFF    /* Pure white for cards */
--bg-subtle: #F5F5F4      /* Subtle containers */

/* Text */
--text-primary: #0A0A0A   /* Near-black */
--text-secondary: #525252 /* Medium gray */
--text-tertiary: #A3A3A3  /* Light gray */

/* Accent & Interactive */
--accent-primary: #1E40AF /* Deep royal blue */
--accent-hover: #1E3A8A   /* Darker blue */
--accent-subtle: #DBEAFE  /* Pale blue backgrounds */

/* Borders */
--border-subtle: #E7E5E4  /* Warm gray */
--border-medium: #D6D3D1  /* Emphasis */
--border-strong: #A8A29E  /* Strong separation */

/* Dark (code blocks) */
--dark-bg: #1C1917        /* Warm dark */
--dark-text: #E7E5E4      /* Light text on dark */
```

### Motion & Animation
- **Crisp timing**: 150-350ms transitions
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1) (ease-out)
- **Hero entrance**: Staggered fade-up animation (100ms delays)
- **Card hovers**: Subtle lift (2px translateY), shadow transitions
- **Link underlines**: Scale-X animation from right to left

### Key Design Patterns
- **Shadows**: Subtle, realistic (never heavy)
- **Borders**: Refined with layered box-shadows for depth
- **Spacing**: 4px base unit with exponential scale
- **Border radius**: 6-12px for cards, full for pills/tags
- **Responsive**: Mobile-first, breakpoints at 768px (tablet), 1024px (desktop)

---

## Development Workflow

### Package Manager
**npm** (Node.js 22.20 on Sprite)

### Available Commands
```bash
npm install          # Install dependencies
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm start            # Serve production build (port 3000)
npm run lint         # ESLint linting
```

### Development Server
```bash
npm run dev                                    # Dev on localhost:3000
npm run dev -- --hostname 0.0.0.0 --port 8080  # Dev with Sprite external access
```

### Production Server (Current Setup)
```bash
PORT=8080 npm start  # Production on port 8080 (Sprite proxy default)
```

**Important**: The production server is currently running in background on port 8080, making the site accessible via the Sprite's public URL.

---

## Deployment & Hosting

### Fly.io Sprite Environment
- **Platform**: Fly.io Sprite (persistent Linux sandbox)
- **Production URL**: https://pfister-portfolio-blmwi.sprites.app
- **URL Auth**: Public (no authentication required)
- **Working Directory**: /home/sprite
- **Node Version**: 22.20
- **Default Proxy Port**: 8080

### Sprite Billing Model
- **Sleep behavior**: Sprites auto-sleep after 30 seconds of inactivity
- **Wake on traffic**: Automatically wakes when requests arrive
- **Billing**: Only charged for active usage (CPU hours, RAM hours, storage GB-hours while awake)
- **No charges while sleeping**: Cost-effective for low-traffic personal sites
- **Persistent filesystem**: All files persist even when Sprite sleeps

### Production Deployment Steps
1. Build the project: `npm run build`
2. Start server on port 8080: `PORT=8080 npm start`
3. Sprite automatically makes it accessible at public URL
4. Site sleeps when idle, wakes on traffic

---

## Environment Variables

**File**: `.env.local`

```bash
# GitHub API (optional)
# GITHUB_TOKEN=           # Personal access token for higher rate limits (5000/hr vs 60/hr)

# Site URL (required)
NEXT_PUBLIC_SITE_URL=https://pfister-portfolio-blmwi.sprites.app
```

### GitHub Token (Optional)
- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 5000 requests/hour
- Used by `/api/github/repos` endpoint to fetch public repositories
- Not required for basic functionality

---

## Key Features

### 1. Homepage
- **Hero Section**: Name, role, bio quote, CTA buttons
- **Featured Projects**: 4 hardcoded spotlight projects with cards
- **Quick Stats**: GitHub contributions, coding experience, tech variety
- **Staggered Animations**: Fade-up entrance with 100ms delays

### 2. About Page
- Extended bio and professional background
- Work experience at Argonne National Laboratory
- Skills categorized by domain (Frontend, Backend, Mobile, AI/ML, Tools)
- AI integration highlights (MobileMakersGrader, APUSH-Grader)
- Resume download button (PDF)

### 3. Projects Page
- Grid layout (2 columns desktop, 1 column mobile)
- **Data Source**: GitHub API (`/api/github/repos`)
- **Filters**: By programming language (client-side filtering)
- **Card Contents**: Title, description, tech tags, GitHub link, last updated
- **Hover Effects**: Lift animation with shadow transitions

### 4. Blog System
- **Content Format**: MDX files in `content/blog/`
- **Frontmatter**: title, date, excerpt, tags
- **Processing**: gray-matter for parsing, next-mdx-remote for rendering
- **Features**: Code syntax highlighting (Shiki), reading time calculation, tag filtering
- **Layout**: Single-column list (not grid) for reading flow

### 5. Error Handling
- Custom 404 page (`app/not-found.tsx`) with site branding
- Error boundary (`app/error.tsx`) for runtime errors
- Styled to match site aesthetic

---

## GitHub Integration

### API Endpoint
**Route**: `/api/github/repos`
**Method**: GET
**Revalidation**: 1 hour (ISR)
**Expiration**: 1 year

### Implementation
**File**: `lib/github.ts`
- Uses `@octokit/rest` (Octokit v22)
- Fetches public repos for user `kpfister44`
- Returns: name, description, html_url, stargazers_count, language, pushed_at
- **Rate Limiting**: Respects GitHub API limits (see Environment Variables)

### Data Flow
1. Component fetches from `/api/github/repos`
2. API route calls `lib/github.ts`
3. Octokit fetches from GitHub REST API
4. Response cached for 1 hour via Next.js ISR
5. Client-side filtering by language

### Expected Projects (7 public repos)
- PokemonYellow (Python)
- ChiSnow (Python)
- illinois-school-explorer (TypeScript)
- APUSH-Grader (Python)
- Kinnect (Swift)
- MobileMakersGrader (Java)
- egturkeybowl (JavaScript)

---

## Blog System

### Content Management
**Location**: `content/blog/*.mdx`

### Frontmatter Schema
```yaml
---
title: "Post Title"
date: "2026-01-15"
tags: ["AI", "Web Dev", "Sprites"]
excerpt: "Brief description of the post..."
---
```

### Processing Pipeline
1. **Reading**: `lib/blog.ts` scans `content/blog/` directory
2. **Parsing**: gray-matter extracts frontmatter + content
3. **Rendering**: next-mdx-remote compiles MDX to React components
4. **Syntax Highlighting**: Shiki (via rehype-pretty-code) processes code blocks
5. **Reading Time**: Auto-calculated at ~250 words/minute

### Utilities (`lib/blog.ts`)
- `getAllPosts()` - Returns all blog posts with metadata
- `getPostBySlug(slug)` - Returns single post with compiled MDX
- Reading time calculation
- Post sorting by date (newest first)

### Code Highlighting
**Theme**: Custom dark theme matching design system
- Background: `#1C1917` (warm dark)
- Uses VS Code-style token colors
- JetBrains Mono font with ligatures

---

## Component Architecture

### Layout Components
**Navigation** (`components/layout/Navigation.tsx`)
- Fixed top nav with backdrop blur (glass effect)
- Desktop: Horizontal links (Home, About, Projects, Blog, Contact)
- Mobile: Hamburger menu with slide-in overlay
- Active state indicators
- Logo: "KP" in Fraunces font

**Footer** (`components/layout/Footer.tsx`)
- Centered content with max-width constraint
- Links: GitHub, Email
- Credit: "Built with Next.js · Hosted on Fly.io Sprites"
- Copyright notice

### Home Components
**Hero** (`components/home/Hero.tsx`)
- Centered layout (min-height 85vh)
- Name in Fraunces (3.815rem)
- Role subtitle
- Bio quote (italic, tertiary color)
- CTA buttons: "View Projects" / "Read Blog"

**FeaturedProjects** (`components/home/FeaturedProjects.tsx`)
- Hardcoded featured project data (4 projects)
- Grid layout with project cards
- Each card: image, title, description, tech tags

**QuickStats** (`components/home/QuickStats.tsx`)
- Statistics display (GitHub contributions, years coding, etc.)
- Minimal presentation (not flashy)

### Project Components
**ProjectCard** (`components/projects/ProjectCard.tsx`)
- Card UI for project display
- Props: title, description, language, url, updatedAt, stars
- Hover: Lift animation (translateY -2px), shadow-lg
- Tech tags with color coding by language

**ProjectFilters** (`components/projects/ProjectFilters.tsx`)
- Language filter buttons
- Client-side filtering state management
- Active state styling

### Blog Components
**PostCard** (`components/blog/PostCard.tsx`)
- List-style card (not grid)
- Meta info: date, read time
- Title with hover underline animation
- Excerpt preview
- Tag links

---

## Important Files

### Configuration Files
**next.config.js**
- Output: `standalone` (optimized for production)
- Images: Remote patterns for `avatars.githubusercontent.com`
- Clean configuration (no contentlayer or unnecessary plugins)

**tailwind.config.ts**
- Extended color system (bg, text, accent, border, dark)
- Custom typography scale (Major Third ratio)
- Custom spacing scale (4px base)
- Shadow system (sm, md, lg, xl)
- Animation keyframes (fade-up)
- Transition durations and timing functions

**tsconfig.json**
- Strict TypeScript settings
- Path aliases configured for imports
- Next.js-specific compiler options

### Style Files
**app/globals.css**
- CSS variable definitions matching Tailwind tokens
- Base styles and resets
- Font loading and configuration
- Utility classes (`.container-custom`, `.prose`, etc.)
- Animation classes

---

## Content Guidelines

### Adding Blog Posts
1. Create new `.mdx` file in `content/blog/`
2. Add required frontmatter (title, date, excerpt, tags)
3. Write content in MDX (supports JSX components)
4. Blog automatically picks up new posts (no rebuild needed in dev)
5. Production: rebuild to include new static pages

### Updating Projects
Projects are fetched dynamically from GitHub API:
- Update actual GitHub repos (description, topics, etc.)
- Changes reflect after 1-hour cache expiration
- Or clear Next.js cache and rebuild

### Updating Resume
Replace `public/resume.pdf` with new PDF file. Current resume is 1MB, 2 pages.

---

## Build & Performance

### Production Build Output
- **Static Generation**: All pages pre-rendered at build time
- **ISR**: GitHub API route revalidates every 1 hour
- **Bundle Size**: ~102kB shared JS (optimized)
- **Image Optimization**: Automatic via Next.js Image component
- **Font Optimization**: next/font automatic optimization

### Performance Targets
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.0s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1

### Optimization Strategies
- Minimal dependencies (no heavy libraries)
- Tailwind CSS purging (unused classes removed)
- Font subsetting via next/font
- Lazy loading for below-fold content
- Tree-shaking and code splitting (automatic)

---

## Git Workflow

### Current Branch
**master** (main development and production branch)

### Commit Convention
Format: `<type>(<scope>): <subject>`

**Types**: feat, fix, docs, style, refactor, test, chore, perf

**Examples**:
- `feat: add resume PDF and site favicon`
- `fix: remove unused contentlayer dependency from next.config`
- `chore: update site URL for production deployment`

### Important Notes
- All commits co-authored with Claude Code
- Frequent commits throughout development
- Descriptive commit messages (imperative mood)

---

## Common Tasks

### Starting Development
```bash
cd /home/sprite
npm install              # If first time or deps changed
npm run dev             # Start dev server
```

### Building for Production
```bash
npm run build           # Creates optimized build in .next/
npm start               # Serves production build
```

### Running on Sprite (External Access)
```bash
# Development
npm run dev -- --hostname 0.0.0.0 --port 8080

# Production (current setup)
PORT=8080 npm start
```

### Adding Content
**New blog post**:
```bash
# Create content/blog/my-new-post.mdx
# Add frontmatter and content
# Post appears automatically
```

**Updating projects**:
- Update GitHub repos directly
- Wait 1 hour for cache refresh, or rebuild

---

## Known Limitations

1. **No GitHub Token**: Currently using unauthenticated GitHub API (60 req/hr limit)
   - Sufficient for personal portfolio with low traffic
   - Can add `GITHUB_TOKEN` env var if needed

2. **Hardcoded Featured Projects**: Homepage featured projects are static
   - Not dynamically fetched from GitHub
   - Update manually in `components/home/FeaturedProjects.tsx`

3. **Single Blog Post**: Only one blog post exists (`welcome.mdx`)
   - Add more content for fuller blog section

4. **No Dark Mode**: Design is light-only currently
   - Could be added as future enhancement

5. **No Analytics**: No tracking or analytics integrated
   - Consider Plausible or privacy-focused option if needed

---

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run lint`
- Verify all dependencies installed: `npm install`
- Check `next.config.js` for invalid configuration

### GitHub API Issues
- Verify internet connectivity
- Check rate limiting (60/hr without token)
- Ensure GitHub username `kpfister44` is correct

### Sprite Sleep/Wake Issues
- Sprite sleeps after 30s inactivity (expected behavior)
- Check if production server is running: `ps aux | grep next`
- Restart if needed: `PORT=8080 npm start`

### Font Loading Issues
- Fonts loaded via next/font (Fraunces, JetBrains Mono)
- Fallback to system fonts if loading fails
- Check browser console for font loading errors

---

## Future Enhancements (Post-MVP)

- Analytics integration (Plausible, privacy-focused)
- Newsletter subscription
- Dark mode toggle
- Search across all content
- View counter for blog posts
- RSS feed for blog
- More blog content (case studies, tutorials)
- Project detail pages with deep-dives
- Contact form (currently just email link)

---

**Last Updated**: 2026-01-12
**Status**: Production-ready, actively deployed on Sprite
