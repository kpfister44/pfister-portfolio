# Portfolio Website - Refined Design System

**Date**: 2026-01-11
**Status**: Design Refinement
**Based on**: 2026-01-10-portfolio-website-design.md

## Design Philosophy

**Core Principle**: Refined minimalism that demonstrates exceptional craft through precision, restraint, and distinctive choices.

**The Unforgettable Element**: Every detail is considered. Every spacing decision intentional. Every interaction feels inevitable. The visitor leaves thinking: "This developer builds exceptionally clean, crisp, and functional things."

**Not Generic Minimalism**: We avoid cookie-cutter "startup landing page" aesthetics through:
- Distinctive, characterful typography
- Refined spatial composition with unexpected but harmonious proportions
- Subtle visual sophistication (micro-animations, grain, shadows)
- Confident use of whitespace and restraint

---

## Typography System

### Font Pairing: Editorial + Untitled Sans

**Display Font**: **Fraunces** (Variable font)
- Used for: Name in hero, major page headings, section titles
- Weights: 300 (Light) for elegant moments, 600 (SemiBold) for emphasis
- Character: Soft serif with personality, distinctive without being loud
- Technical: Variable font for performance, supports optical sizing
- Why: More memorable than generic sans, still professional, shows taste

**Body Font**: **Untitled Sans** (Klim Type Foundry style)
- Used for: All body text, UI elements, navigation, descriptions
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Character: Geometric but humanist, clean with subtle warmth
- Fallback: System stack ending in -apple-system for performance
- Why: Not overused like Inter, more refined than Geist, crisp rendering

**Monospace Font**: **JetBrains Mono**
- Used for: Code blocks, technical details, timestamps
- Weight: 400 (Regular), 500 (Medium)
- Character: Designed for readability, excellent ligatures, developer-favorite
- Why: More distinctive than Geist Mono, optimized for code display

### Typography Scale

Based on 1.250 (Major Third) ratio for harmonious progression:

```css
--text-xs: 0.64rem;    /* 10.24px - Timestamps, meta */
--text-sm: 0.8rem;     /* 12.8px - Small labels, tags */
--text-base: 1rem;     /* 16px - Body text */
--text-lg: 1.25rem;    /* 20px - Emphasized text */
--text-xl: 1.563rem;   /* 25px - Section subheadings */
--text-2xl: 1.953rem;  /* 31.25px - H3 */
--text-3xl: 2.441rem;  /* 39px - H2 */
--text-4xl: 3.052rem;  /* 48.8px - H1, Page titles */
--text-5xl: 3.815rem;  /* 61px - Hero name */
--text-6xl: 4.768rem;  /* 76.3px - Optional display size */
```

### Typography Details

```css
/* Body text refinement */
body {
  font-family: 'Untitled Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.65; /* Slightly tighter than 1.6 for crispness */
  letter-spacing: -0.011em; /* Subtle tightening for refinement */
  font-feature-settings: 'kern' 1, 'liga' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Display text (Fraunces) */
h1, h2, .display {
  font-family: 'Fraunces', Georgia, serif;
  font-optical-sizing: auto;
  line-height: 1.1;
  letter-spacing: -0.03em; /* Tighter tracking for display */
  font-weight: 600;
}

/* Code blocks */
code, pre {
  font-family: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
  font-size: 0.9em;
  font-feature-settings: 'liga' 1, 'calt' 1;
}
```

---

## Refined Color System

### Base Palette

**Background Layers**:
```css
--bg-base: #FAFAF9;        /* Warm off-white, not stark */
--bg-elevated: #FFFFFF;     /* Pure white for cards */
--bg-subtle: #F5F5F4;       /* Subtle container backgrounds */
--bg-overlay: rgba(255, 255, 255, 0.95); /* Glass effect */
```

**Text Hierarchy**:
```css
--text-primary: #0A0A0A;    /* Near-black, not pure black */
--text-secondary: #525252;  /* Medium gray for de-emphasized text */
--text-tertiary: #A3A3A3;   /* Light gray for meta info */
--text-inverse: #FAFAF9;    /* For dark backgrounds */
```

**Accent & Interactive**:
```css
--accent-primary: #1E40AF;  /* Deep royal blue - more distinctive than #2563EB */
--accent-hover: #1E3A8A;    /* Darker blue for hover */
--accent-subtle: #DBEAFE;   /* Pale blue for backgrounds */
--accent-border: #93C5FD;   /* Mid blue for borders */
```

**Borders & Dividers**:
```css
--border-subtle: #E7E5E4;   /* Warm gray, not cool */
--border-medium: #D6D3D1;   /* Slightly darker for emphasis */
--border-strong: #A8A29E;   /* Strong separation */
```

**Semantic Colors**:
```css
--success: #15803D;         /* Green for positive states */
--error: #B91C1C;           /* Red for errors */
--warning: #CA8A04;         /* Amber for warnings */
```

### Dark Accents (for code blocks, dark sections)
```css
--dark-bg: #1C1917;         /* Warm dark, not pure black */
--dark-surface: #292524;    /* Elevated dark surface */
--dark-border: #44403C;     /* Dark borders */
--dark-text: #E7E5E4;       /* Light text on dark */
```

---

## Spatial System

### Spacing Scale

Based on 4px base unit with exponential growth:

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
--space-20: 12rem;    /* 192px */
```

### Layout Constraints

```css
--content-width: 65ch;      /* Optimal reading width */
--container-sm: 640px;      /* Small container */
--container-md: 768px;      /* Medium container */
--container-lg: 1024px;     /* Large container */
--container-xl: 1280px;     /* Extra large container */
--container-custom: 1140px; /* Custom portfolio width */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px - Small elements */
--radius-md: 0.5rem;     /* 8px - Cards, buttons */
--radius-lg: 0.75rem;    /* 12px - Large cards */
--radius-xl: 1rem;       /* 16px - Hero elements */
--radius-full: 9999px;   /* Pills, circular */
```

---

## Refined Visual Details

### Shadow System

Subtle, realistic shadows that create depth without heaviness:

```css
/* Hover state for cards */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
             0 1px 3px 0 rgba(0, 0, 0, 0.02);

/* Elevated cards */
--shadow-md: 0 2px 4px -1px rgba(0, 0, 0, 0.04),
             0 4px 6px -1px rgba(0, 0, 0, 0.06);

/* Prominent elements (modals, popovers) */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.06),
             0 4px 6px -2px rgba(0, 0, 0, 0.04);

/* Floating elements */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08),
             0 10px 10px -5px rgba(0, 0, 0, 0.03);
```

### Texture & Atmosphere

**Subtle Grain Overlay**:
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: url('data:image/svg+xml,...'); /* Noise pattern */
  pointer-events: none;
  z-index: 1000;
}
```

**Purpose**: Adds warmth and tactility to the pristine minimalism, prevents "flat" digital feel

### Border Treatments

Not just `border: 1px solid gray`:

```css
/* Refined card border */
.card {
  border: 1px solid var(--border-subtle);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02); /* Inner shadow for depth */
}

/* Hover state with double border effect */
.card:hover {
  border-color: var(--border-medium);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
              var(--shadow-md);
}
```

---

## Motion & Animation System

### Animation Principles

1. **Purposeful**: Every animation serves a function (draw attention, show relationship, provide feedback)
2. **Crisp**: Fast, snappy timing (200-350ms range)
3. **Easing**: Natural curves, prefer `cubic-bezier(0.4, 0.0, 0.2, 1)` (ease-out)
4. **Restraint**: Not everything animates - only key moments

### Core Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0.0, 0.2, 1);
--transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle bounce */
```

### Signature Animations

**1. Hero Entrance**:
```css
@keyframes hero-fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-name {
  animation: hero-fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.hero-role {
  animation: hero-fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 100ms backwards;
}

.hero-bio {
  animation: hero-fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 200ms backwards;
}

.hero-cta {
  animation: hero-fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 300ms backwards;
}
```

**2. Card Hover State**:
```css
.project-card {
  transform: translateY(0);
  transition: transform var(--transition-base),
              box-shadow var(--transition-base),
              border-color var(--transition-base);
}

.project-card:hover {
  transform: translateY(-2px); /* Subtle lift, not dramatic */
  box-shadow: var(--shadow-lg);
  border-color: var(--border-medium);
}
```

**3. Link Underline**:
```css
.link {
  position: relative;
  text-decoration: none;
  color: var(--text-primary);
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-base);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

**4. Page Transitions** (if using view transitions):
```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: 250ms ease-out fade-out;
}

::view-transition-new(root) {
  animation: 250ms ease-out fade-in;
}
```

### Scroll-triggered Reveals

For project cards and blog posts that fade in on scroll:

```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Implement with Intersection Observer for performance.

---

## Component Specifications

### Hero Section

**Layout**:
- Centered vertically (min-height: 85vh)
- Max-width: 48rem (768px)
- Generous top/bottom padding: var(--space-20)

**Composition**:
```html
<section class="hero">
  <h1 class="hero-name">Kyle Pfister</h1>
  <p class="hero-role">Full-Stack Developer @ Argonne National Laboratory</p>
  <p class="hero-bio">"Developer who believes in coffee and version control.
     Still trying to figure out which one's more essential."</p>
  <div class="hero-cta">
    <a href="/projects" class="btn btn-primary">View Projects</a>
    <a href="/blog" class="btn btn-secondary">Read Blog</a>
  </div>
</section>
```

**Styling Details**:
- Name: Fraunces, 3.815rem, font-weight 600, letter-spacing -0.03em
- Role: Untitled Sans, 1.25rem, medium weight, text-secondary color
- Bio: Untitled Sans, 1rem, italic, text-tertiary, max-width 36ch
- CTAs: 1rem from top of bio, gap of 1rem between buttons
- Staggered fade-up animation (100ms delays)

### Navigation

**Desktop**:
```html
<nav class="nav-desktop">
  <a href="/" class="nav-logo">KP</a>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
    <a href="mailto:kpfister44@gmail.com" class="nav-contact">Contact</a>
  </div>
</nav>
```

**Details**:
- Fixed position (sticky), backdrop-blur for glass effect
- Logo: Fraunces, 1.25rem, semibold
- Links: Untitled Sans, 0.9rem, medium, uppercase letter-spacing 0.05em
- Active state: Accent color + subtle underline
- Height: 4rem (64px)
- Border-bottom: 1px solid var(--border-subtle)

**Mobile** (< 768px):
- Hamburger menu (animated icon)
- Slide-in menu from right
- Backdrop with blur
- Full-height overlay

### Project Cards

**Grid Layout**:
- Desktop: 2 columns with 2rem gap
- Tablet: 2 columns with 1.5rem gap
- Mobile: 1 column

**Card Structure**:
```html
<article class="project-card">
  <div class="project-image">
    <img src="..." alt="..." />
  </div>
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Brief description...</p>
    <div class="project-tags">
      <span class="tag">TypeScript</span>
      <span class="tag">React</span>
    </div>
    <div class="project-meta">
      <a href="..." class="project-link">View Project →</a>
      <span class="project-date">Updated 2 months ago</span>
    </div>
  </div>
</article>
```

**Styling Details**:
- Background: var(--bg-elevated)
- Border: 1px solid var(--border-subtle)
- Border-radius: var(--radius-lg)
- Padding: var(--space-6)
- Image: 16:9 aspect ratio, border-radius var(--radius-md), mb var(--space-4)
- Title: Fraunces, 1.563rem, semibold
- Description: Untitled Sans, 0.9rem, text-secondary, line-height 1.6
- Tags: 0.75rem, uppercase, letter-spacing 0.05em, border-radius full
- Hover: Lift 2px, shadow-lg, border-medium

### Blog Post Cards

**List Layout** (not grid - emphasizes reading flow):
- Single column
- Max-width: var(--content-width)
- Space-y: var(--space-8)

**Card Structure**:
```html
<article class="blog-card">
  <div class="blog-meta">
    <time datetime="...">Jan 15, 2026</time>
    <span class="blog-readtime">5 min read</span>
  </div>
  <h2 class="blog-title">
    <a href="...">Post Title Goes Here</a>
  </h2>
  <p class="blog-excerpt">Brief excerpt of the post content...</p>
  <div class="blog-tags">
    <a href="..." class="tag">AI</a>
    <a href="..." class="tag">Web Dev</a>
  </div>
</article>
```

**Styling Details**:
- No border/background (clean list)
- Divider: 1px solid var(--border-subtle) between posts
- Meta: 0.8rem, text-tertiary, uppercase letter-spacing
- Title: Fraunces, 1.953rem, hover shows underline animation
- Excerpt: 1rem, text-secondary, line-height 1.65
- Spacing: meta → title (0.5rem), title → excerpt (0.75rem), excerpt → tags (1rem)

### Buttons

**Primary Button**:
```css
.btn-primary {
  padding: 0.75rem 1.5rem;
  background: var(--accent-primary);
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: background var(--transition-base),
              transform var(--transition-fast);
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}
```

**Secondary Button**:
```css
.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  transition: border-color var(--transition-base),
              background var(--transition-base);
}

.btn-secondary:hover {
  border-color: var(--accent-primary);
  background: var(--accent-subtle);
}
```

### Footer

**Layout**:
- Centered content
- Max-width: var(--container-custom)
- Border-top: 1px solid var(--border-subtle)
- Padding: var(--space-12) 0

**Content**:
```html
<footer class="footer">
  <div class="footer-links">
    <a href="https://github.com/kpfister44">GitHub</a>
    <a href="mailto:kpfister44@gmail.com">Email</a>
  </div>
  <p class="footer-credit">
    Built with Next.js · Hosted on <a href="...">Fly.io Sprites</a>
  </p>
  <p class="footer-copyright">© 2026 Kyle Pfister</p>
</footer>
```

**Styling**:
- Text: 0.8rem, text-tertiary
- Links: Underline on hover with accent color
- Credit/copyright: center-aligned
- Spacing: var(--space-4) between elements

---

## Technical Implementation

### CSS Architecture

**CSS Variables** (in `:root`):
- All color, spacing, typography tokens defined
- Dark mode support via `@media (prefers-color-scheme: dark)` if desired

**Utility Classes**:
```css
/* Container */
.container-custom {
  max-width: var(--container-custom);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Typography utilities */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-tertiary { color: var(--text-tertiary); }

/* Spacing utilities */
.space-y-8 > * + * { margin-top: var(--space-8); }

/* Prose (for blog content) */
.prose {
  max-width: var(--content-width);
  font-size: 1.0625rem; /* Slightly larger for readability */
  line-height: 1.75;
}

.prose h2 { font-family: 'Fraunces'; margin-top: 2em; }
.prose h3 { font-family: 'Fraunces'; margin-top: 1.5em; }
.prose code { font-family: 'JetBrains Mono'; }
```

### Tailwind Configuration

Extend Tailwind with custom tokens:

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#FAFAF9',
          elevated: '#FFFFFF',
          subtle: '#F5F5F4',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
          tertiary: '#A3A3A3',
        },
        accent: {
          primary: '#1E40AF',
          hover: '#1E3A8A',
          subtle: '#DBEAFE',
        },
        border: {
          subtle: '#E7E5E4',
          medium: '#D6D3D1',
          strong: '#A8A29E',
        }
      },
      fontFamily: {
        sans: ['Untitled Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'xs': '0.64rem',
        'sm': '0.8rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
        '5xl': '3.815rem',
        '6xl': '4.768rem',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.5rem',
        '6': '2rem',
        '8': '3rem',
        '10': '4rem',
        '12': '6rem',
        '16': '8rem',
        '20': '12rem',
      }
    }
  }
}
```

### Font Loading Strategy

**Option 1**: Self-hosted (Recommended for performance)
- Download Fraunces variable from Google Fonts
- Download/purchase Untitled Sans or use fallback like Inter (less distinctive but acceptable)
- Download JetBrains Mono
- Use Next.js `localFont` loader

**Option 2**: Google Fonts (Easier but slower)
```tsx
import { Fraunces } from 'next/font/google'
import localFont from 'next/font/local'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const untitledSans = localFont({
  src: './fonts/UntitledSans-Regular.woff2',
  variable: '--font-untitled',
})
```

**Fallback Stack** (if custom fonts unavailable):
- Display: Fraunces → Georgia → serif
- Body: System stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI'...`)
- Code: JetBrains Mono → SF Mono → Monaco → monospace

---

## Responsive Design

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Mobile Refinements

**Typography Scale Down**:
- Hero name: 3rem (instead of 3.815rem)
- H1: 2.5rem (instead of 3.052rem)
- Body: Increase to 1.0625rem for better mobile readability

**Spacing Adjustments**:
- Reduce container padding to var(--space-4) on mobile
- Reduce section spacing to var(--space-10)

**Navigation**:
- Full-screen mobile menu with larger touch targets
- Menu items: 1.5rem font size, var(--space-5) vertical padding

**Project Cards**:
- Single column
- Reduce padding to var(--space-5)
- Smaller image aspect ratio (4:3 instead of 16:9)

---

## Code Syntax Highlighting (Shiki)

**Theme**: Custom theme based on design system

```js
// Custom Shiki theme
const customTheme = {
  name: 'portfolio-code',
  type: 'dark',
  colors: {
    'editor.background': '#1C1917',
    'editor.foreground': '#E7E5E4',
  },
  tokenColors: [
    {
      scope: ['comment'],
      settings: { foreground: '#78716C', fontStyle: 'italic' }
    },
    {
      scope: ['string'],
      settings: { foreground: '#86EFAC' } // Soft green
    },
    {
      scope: ['keyword'],
      settings: { foreground: '#93C5FD' } // Soft blue
    },
    {
      scope: ['function'],
      settings: { foreground: '#FDE68A' } // Soft yellow
    },
    // ... more token colors
  ]
}
```

**Code Block Styling**:
```css
pre {
  background: var(--dark-bg);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  overflow-x: auto;
  border: 1px solid var(--dark-border);
}

code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  font-feature-settings: 'liga' 1, 'calt' 1;
}
```

---

## Performance Targets

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

**Optimization Strategies**:
1. Minimize font files (subset, variable fonts)
2. Optimize images (WebP, proper sizing)
3. Lazy load below-fold content
4. Minimal JavaScript (avoid heavy libraries)
5. Tree-shake unused Tailwind classes

---

## Success Metrics

**Visual Quality**:
- [ ] Typography feels distinctive and refined (not generic)
- [ ] Spacing creates strong visual hierarchy
- [ ] Animations feel crisp and intentional
- [ ] Details show attention to craft (shadows, borders, micro-interactions)

**Professional Impression**:
- [ ] Feels designed, not templated
- [ ] Shows taste and restraint
- [ ] Balances personality with professionalism
- [ ] "I want to hire this person" reaction

**Technical Excellence**:
- [ ] Fast load times (< 2s)
- [ ] Smooth interactions (60fps)
- [ ] Accessible (keyboard nav, screen readers, contrast)
- [ ] Works flawlessly on mobile

---

## Implementation Priority

1. **Typography & Color System** - Foundation
2. **Hero Section** - First impression
3. **Navigation** - Wayfinding
4. **Project Cards** - Core content showcase
5. **Blog Layout** - Secondary content
6. **Animations & Polish** - Refinement layer

**Next Steps**: Begin implementation with typography and base styles, then build components systematically.
