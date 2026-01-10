# Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional portfolio website for Kyle Pfister showcasing full-stack development skills with AI integration emphasis, hosted on Fly.io Sprite.

**Architecture:** Next.js 15 App Router with TypeScript, static generation for performance, GitHub API integration for project data, MDX-based blog system with syntax highlighting, minimalist design using Tailwind CSS.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Contentlayer (MDX), Octokit (GitHub API), Geist fonts

---

## Task 1: Initialize Next.js Project

Status: Completed

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `.eslintrc.json`

**Step 1: Initialize Next.js with TypeScript**

Run from worktree directory:
```bash
cd /home/sprite/.worktrees/portfolio-site
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

Answer prompts:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Import alias: Yes (@/*)

Expected: Creates Next.js project structure with TypeScript and Tailwind

**Step 2: Verify installation**

Run: `npm run dev`
Expected: Dev server starts on port 3000

Stop server: Ctrl+C

**Step 3: Update package.json with project metadata**

Edit `package.json`:
```json
{
  "name": "kyle-pfister-portfolio",
  "version": "0.1.0",
  "private": true,
  "description": "Portfolio website for Kyle Pfister",
  "author": "Kyle Pfister <kpfister44@gmail.com>",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**Step 4: Commit initial setup**

```bash
git add .
git commit -m "chore: initialize Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Install Dependencies

Status: Completed

**Files:**
- Modify: `package.json`

**Step 1: Install required dependencies**

Run:
```bash
npm install @octokit/rest contentlayer next-contentlayer date-fns gray-matter rehype-pretty-code shiki
```

Expected: Dependencies added to package.json

**Step 2: Install dev dependencies**

Run:
```bash
npm install -D @types/node
```

**Step 3: Verify installation**

Run: `npm list --depth=0`
Expected: All packages listed without errors

**Step 4: Commit dependencies**

```bash
git add package.json package-lock.json
git commit -m "chore: add project dependencies"
```

---

## Task 3: Configure Contentlayer for Blog

Status: Completed

**Files:**
- Create: `contentlayer.config.ts`
- Modify: `next.config.js`
- Create: `content/blog/.gitkeep`

**Step 1: Create Contentlayer configuration**

Create `contentlayer.config.ts`:
```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
    readingTime: {
      type: 'number',
      resolve: (post) => {
        const wordsPerMinute = 250
        const wordCount = post.body.raw.split(/\s+/g).length
        return Math.ceil(wordCount / wordsPerMinute)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
    ],
  },
})
```

**Step 2: Update Next.js config for Contentlayer**

Modify `next.config.js`:
```javascript
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
```

**Step 3: Create blog content directory**

Run:
```bash
mkdir -p content/blog
touch content/blog/.gitkeep
```

**Step 4: Update TypeScript config for Contentlayer**

Add to `tsconfig.json` in `compilerOptions`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".contentlayer/generated"]
}
```

**Step 5: Update gitignore**

Add to `.gitignore`:
```
# Contentlayer
.contentlayer
```

**Step 6: Commit configuration**

```bash
git add contentlayer.config.ts next.config.js tsconfig.json content/blog/.gitkeep .gitignore
git commit -m "feat: configure Contentlayer for blog system"
```

---

## Task 4: Set Up Tailwind Design System

Status: Completed

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Step 1: Configure Tailwind with custom design tokens**

Replace `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-alt': '#FAFAFA',
        foreground: '#0A0A0A',
        'foreground-muted': '#737373',
        border: '#E5E5E5',
        accent: '#2563EB',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}
export default config
```

**Step 2: Update global styles**

Replace `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl md:text-4xl;
  }

  h3 {
    @apply text-2xl md:text-3xl;
  }

  a {
    @apply transition-colors hover:text-accent;
  }
}

@layer components {
  .container-custom {
    @apply max-w-5xl mx-auto px-6 md:px-8;
  }

  .btn {
    @apply px-6 py-3 rounded-md font-medium transition-all;
  }

  .btn-primary {
    @apply bg-foreground text-background hover:bg-foreground/90;
  }

  .btn-secondary {
    @apply border border-border hover:bg-background-alt;
  }

  .card {
    @apply border border-border rounded-lg p-6 transition-all hover:border-foreground/20;
  }
}
```

**Step 3: Commit design system**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind design system"
```

---

## Task 5: Create Layout and Navigation

Status: Completed

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/layout/Navigation.tsx`
- Create: `components/layout/Footer.tsx`

**Step 1: Update root layout with fonts**

Replace `app/layout.tsx`:
```typescript
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Kyle Pfister | Full-Stack Developer',
  description: 'Portfolio website showcasing full-stack development and AI integration projects',
  authors: [{ name: 'Kyle Pfister', email: 'kpfister44@gmail.com' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

**Step 2: Create Navigation component**

Create `components/layout/Navigation.tsx`:
```typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            KP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-foreground'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 text-sm font-medium ${
                  pathname === item.path
                    ? 'text-foreground'
                    : 'text-foreground-muted'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
```

**Step 3: Create Footer component**

Create `components/layout/Footer.tsx`:
```typescript
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-20">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground-muted">
            © {currentYear} Kyle Pfister. Built with Next.js.
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/kpfister44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="mailto:kpfister44@gmail.com"
              className="text-sm text-foreground-muted hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-foreground-muted">
            Hosted on{' '}
            <Link
              href="https://sprites.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Fly.io Sprites
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
```

**Step 4: Create components directory**

Run:
```bash
mkdir -p components/layout
```

**Step 5: Commit layout components**

```bash
git add app/layout.tsx components/layout/
git commit -m "feat: add navigation and footer components"
```

---

## Task 6: Build Homepage

Status: Completed

**Files:**
- Modify: `app/page.tsx`
- Create: `components/home/Hero.tsx`
- Create: `components/home/FeaturedProjects.tsx`
- Create: `components/home/QuickStats.tsx`

**Step 1: Create Hero component**

Create `components/home/Hero.tsx`:
```typescript
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container-custom py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="mb-6">
          Kyle Pfister
        </h1>
        <p className="text-xl md:text-2xl text-foreground-muted mb-6">
          Full-Stack Developer @ Argonne National Laboratory
        </p>
        <p className="text-lg text-foreground-muted mb-8 max-w-2xl">
          Developer who believes in coffee and version control. Still trying to figure out which one&apos;s more essential.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Create FeaturedProjects component**

Create `components/home/FeaturedProjects.tsx`:
```typescript
import Link from 'next/link'

const featuredProjects = [
  {
    name: 'PokemonYellow',
    description: 'Pixel-perfect recreation of Pokemon Yellow using PyGame',
    tech: ['Python', 'PyGame'],
    url: 'https://github.com/kpfister44/PokemonYellow',
  },
  {
    name: 'ChiSnow',
    description: 'Mobile-first web app displaying actual snowfall totals on an interactive map for the Chicagoland area',
    tech: ['Python', 'Web'],
    url: 'https://github.com/kpfister44/ChiSnow',
  },
  {
    name: 'illinois-school-explorer',
    description: 'A web application for searching and comparing Illinois schools using the 2025 Report Card dataset',
    tech: ['TypeScript', 'Next.js'],
    url: 'https://github.com/kpfister44/illinois-school-explorer',
  },
  {
    name: 'MobileMakersGrader',
    description: 'Swift Assignment Auto-Grader - AI-powered grading tool for high school Swift programming assignments',
    tech: ['Java', 'AI'],
    url: 'https://github.com/kpfister44/MobileMakersGrader',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="container-custom py-20 bg-background-alt">
      <h2 className="mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group"
          >
            <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-foreground-muted mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-background border border-border rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/projects" className="btn btn-secondary">
          View All Projects
        </Link>
      </div>
    </section>
  )
}
```

**Step 3: Create QuickStats component**

Create `components/home/QuickStats.tsx`:
```typescript
export default function QuickStats() {
  const stats = [
    { label: 'Public Repositories', value: '7' },
    { label: 'Tech Stack', value: '10+' },
    { label: 'Years Coding', value: '5+' },
  ]

  return (
    <section className="container-custom py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-foreground-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Step 4: Update homepage**

Replace `app/page.tsx`:
```typescript
import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import QuickStats from '@/components/home/QuickStats'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <QuickStats />
    </>
  )
}
```

**Step 5: Create components directory**

Run:
```bash
mkdir -p components/home
```

**Step 6: Commit homepage**

```bash
git add app/page.tsx components/home/
git commit -m "feat: build homepage with hero, featured projects, and stats"
```

---

## Task 7: Create About Page

Status: Completed

**Files:**
- Create: `app/about/page.tsx`
- Create: `public/resume.pdf` (placeholder)

**Step 1: Create About page**

Create `app/about/page.tsx`:
```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Kyle Pfister',
  description: 'Learn more about Kyle Pfister - full-stack developer, AI enthusiast, and coffee advocate',
}

export default function AboutPage() {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SvelteKit'],
    Backend: ['Python', 'Node.js', 'FastAPI'],
    Mobile: ['Swift', 'iOS Development'],
    'AI/ML': ['Claude API', 'LLM Integration', 'AI-powered Tools'],
    Tools: ['Git', 'Sprites', 'Claude Code', 'Docker'],
  }

  return (
    <div className="container-custom py-20">
      <h1 className="mb-8">About Me</h1>

      <div className="max-w-3xl">
        <section className="mb-12">
          <h2 className="mb-4">Background</h2>
          <p className="text-lg text-foreground-muted mb-4">
            I&apos;m a full-stack developer currently working at Argonne National Laboratory in Chicago, IL.
            My passion lies in building clean, efficient web applications and exploring the intersection
            of traditional software development with modern AI tools.
          </p>
          <p className="text-lg text-foreground-muted">
            Developer who believes in coffee and version control. Still trying to figure out which one&apos;s more essential.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4">Work Experience</h2>
          <div className="card">
            <h3 className="text-xl mb-2">Developer</h3>
            <p className="text-foreground-muted mb-2">Argonne National Laboratory</p>
            <p className="text-sm text-foreground-muted">Chicago, IL</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 bg-background-alt border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4">AI & Development Tools</h2>
          <p className="text-lg text-foreground-muted mb-4">
            I&apos;ve built several AI-powered tools including MobileMakersGrader and APUSH-Grader,
            which use LLMs to automate grading for educational assignments. My development workflow
            leverages Claude Code for pair programming and Sprites for rapid prototyping and deployment.
          </p>
          <p className="text-lg text-foreground-muted">
            I believe AI is a productivity multiplier when used thoughtfully - not as a replacement
            for understanding, but as a tool to accelerate development and handle repetitive tasks.
          </p>
        </section>

        <section>
          <h2 className="mb-4">Resume</h2>
          <Link href="/resume.pdf" className="btn btn-primary" download>
            Download Resume (PDF)
          </Link>
        </section>
      </div>
    </div>
  )
}
```

**Step 2: Create placeholder resume**

Run:
```bash
mkdir -p public
echo "Placeholder for Kyle Pfister's resume" > public/resume.pdf
```

**Step 3: Commit About page**

```bash
git add app/about/ public/resume.pdf
git commit -m "feat: create About page with background and skills"
```

---

## Task 8: Create GitHub API Integration

**Files:**
- Create: `lib/github.ts`
- Create: `app/api/github/repos/route.ts`

**Step 1: Create GitHub API client**

Create `lib/github.ts`:
```typescript
import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export interface Repository {
  name: string
  description: string | null
  url: string
  homepage: string | null
  stargazerCount: number
  language: string | null
  pushedAt: string
  topics: string[]
}

export async function getPublicRepos(username: string): Promise<Repository[]> {
  try {
    const { data } = await octokit.repos.listForUser({
      username,
      type: 'public',
      sort: 'pushed',
      per_page: 100,
    })

    return data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      stargazerCount: repo.stargazers_count,
      language: repo.language,
      pushedAt: repo.pushed_at || '',
      topics: repo.topics || [],
    }))
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    throw new Error('Failed to fetch repositories')
  }
}
```

**Step 2: Create API route**

Create `app/api/github/repos/route.ts`:
```typescript
import { NextResponse } from 'next/server'
import { getPublicRepos } from '@/lib/github'

export async function GET() {
  try {
    const repos = await getPublicRepos('kpfister44')
    return NextResponse.json(repos)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}

export const revalidate = 3600 // Revalidate every hour
```

**Step 3: Create lib directory**

Run:
```bash
mkdir -p lib
```

**Step 4: Commit GitHub integration**

```bash
git add lib/github.ts app/api/
git commit -m "feat: add GitHub API integration"
```

---

## Task 9: Create Projects Page

**Files:**
- Create: `app/projects/page.tsx`
- Create: `components/projects/ProjectCard.tsx`
- Create: `components/projects/ProjectFilters.tsx`

**Step 1: Create ProjectCard component**

Create `components/projects/ProjectCard.tsx`:
```typescript
import Link from 'next/link'
import { Repository } from '@/lib/github'
import { formatDistanceToNow } from 'date-fns'

interface ProjectCardProps {
  project: Repository
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        {project.stargazerCount > 0 && (
          <span className="text-sm text-foreground-muted">
            ⭐ {project.stargazerCount}
          </span>
        )}
      </div>

      {project.description && (
        <p className="text-foreground-muted mb-4">{project.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.language && (
          <span className="text-xs px-3 py-1 bg-background-alt border border-border rounded-full">
            {project.language}
          </span>
        )}
        {project.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="text-xs px-3 py-1 bg-background-alt border border-border rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="text-xs text-foreground-muted">
        Updated {formatDistanceToNow(new Date(project.pushedAt), { addSuffix: true })}
      </div>
    </Link>
  )
}
```

**Step 2: Create ProjectFilters component**

Create `components/projects/ProjectFilters.tsx`:
```typescript
'use client'

interface ProjectFiltersProps {
  languages: string[]
  selectedLanguage: string | null
  onFilterChange: (language: string | null) => void
}

export default function ProjectFilters({
  languages,
  selectedLanguage,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`text-sm px-4 py-2 rounded-full transition-all ${
            selectedLanguage === null
              ? 'bg-foreground text-background'
              : 'bg-background-alt border border-border hover:border-foreground/20'
          }`}
        >
          All
        </button>
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => onFilterChange(language)}
            className={`text-sm px-4 py-2 rounded-full transition-all ${
              selectedLanguage === language
                ? 'bg-foreground text-background'
                : 'bg-background-alt border border-border hover:border-foreground/20'
            }`}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  )
}
```

**Step 3: Create Projects page**

Create `app/projects/page.tsx`:
```typescript
'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilters from '@/components/projects/ProjectFilters'
import { Repository } from '@/lib/github'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/github/repos')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const languages = Array.from(
    new Set(projects.map((p) => p.language).filter(Boolean))
  ) as string[]

  const filteredProjects = selectedLanguage
    ? projects.filter((p) => p.language === selectedLanguage)
    : projects

  if (loading) {
    return (
      <div className="container-custom py-20">
        <h1 className="mb-8">Projects</h1>
        <p className="text-foreground-muted">Loading projects...</p>
      </div>
    )
  }

  return (
    <div className="container-custom py-20">
      <h1 className="mb-4">Projects</h1>
      <p className="text-lg text-foreground-muted mb-12 max-w-2xl">
        A collection of my public projects spanning web development, mobile apps,
        games, and AI-powered tools.
      </p>

      <ProjectFilters
        languages={languages}
        selectedLanguage={selectedLanguage}
        onFilterChange={setSelectedLanguage}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-foreground-muted py-12">
          No projects found for this filter.
        </p>
      )}
    </div>
  )
}
```

**Step 4: Create components directory**

Run:
```bash
mkdir -p components/projects
```

**Step 5: Commit Projects page**

```bash
git add app/projects/ components/projects/
git commit -m "feat: create Projects page with GitHub integration and filtering"
```

---

## Task 10: Create Blog System

**Files:**
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `components/blog/PostCard.tsx`
- Create: `content/blog/welcome.mdx`

**Step 1: Create PostCard component**

Create `components/blog/PostCard.tsx`:
```typescript
import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from 'contentlayer/generated'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="card group">
      <div className="mb-2">
        <time className="text-sm text-foreground-muted">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </div>
      <h3 className="text-2xl mb-3 group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="text-foreground-muted mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-background-alt border border-border rounded-full"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs text-foreground-muted ml-auto">
          {post.readingTime} min read
        </span>
      </div>
    </Link>
  )
}
```

**Step 2: Create Blog index page**

Create `app/blog/page.tsx`:
```typescript
import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog | Kyle Pfister',
  description: 'Articles about web development, AI integration, and software engineering',
}

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="container-custom py-20">
      <h1 className="mb-4">Blog</h1>
      <p className="text-lg text-foreground-muted mb-12 max-w-2xl">
        Thoughts on web development, AI integration, and lessons learned building software.
      </p>

      <div className="grid gap-6 max-w-3xl">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-foreground-muted py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  )
}
```

**Step 3: Create Blog post page**

Create `app/blog/[slug]/page.tsx`:
```typescript
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Kyle Pfister`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="container-custom py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <time className="text-sm text-foreground-muted">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <h1 className="mt-2 mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-background-alt border border-border rounded-full"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs text-foreground-muted ml-auto">
              {post.readingTime} min read
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXContent />
        </div>
      </div>
    </article>
  )
}
```

**Step 4: Create sample blog post**

Create `content/blog/welcome.mdx`:
```mdx
---
title: "Welcome to My Portfolio"
date: "2026-01-10"
excerpt: "Introducing my new portfolio website built with Next.js, TypeScript, and hosted on Fly.io Sprites."
tags: ["Meta", "Web Dev", "Sprites"]
---

Welcome to my portfolio! This site showcases my projects and serves as a platform for sharing insights about software development.

## About This Site

This portfolio is built with:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Contentlayer** - Type-safe MDX blog system
- **Fly.io Sprites** - Hosting infrastructure

## What You'll Find Here

I'll be writing about:

1. Web development techniques
2. AI integration in software
3. Project retrospectives
4. Development workflow tips

Stay tuned for more content!
```

**Step 5: Add prose styles to globals.css**

Add to `app/globals.css`:
```css
@layer components {
  .prose {
    @apply text-foreground;
  }

  .prose h2 {
    @apply text-2xl font-bold mt-8 mb-4;
  }

  .prose h3 {
    @apply text-xl font-bold mt-6 mb-3;
  }

  .prose p {
    @apply mb-4 leading-relaxed;
  }

  .prose ul, .prose ol {
    @apply mb-4 ml-6;
  }

  .prose li {
    @apply mb-2;
  }

  .prose code {
    @apply bg-background-alt px-1 py-0.5 rounded text-sm font-mono;
  }

  .prose pre {
    @apply bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto mb-4;
  }

  .prose pre code {
    @apply bg-transparent p-0;
  }
}
```

**Step 6: Create components directory**

Run:
```bash
mkdir -p components/blog
```

**Step 7: Commit blog system**

```bash
git add app/blog/ components/blog/ content/blog/ app/globals.css
git commit -m "feat: create blog system with MDX and sample post"
```

---

## Task 11: Add Environment Configuration

**Files:**
- Create: `.env.local.example`
- Create: `.env.local`

**Step 1: Create environment example file**

Create `.env.local.example`:
```bash
# GitHub API (optional - for higher rate limits)
GITHUB_TOKEN=your_github_personal_access_token_here

# Site URL (for Sprite deployment)
NEXT_PUBLIC_SITE_URL=https://your-sprite-url.fly.dev
```

**Step 2: Create local environment file**

Create `.env.local`:
```bash
# GitHub API (optional)
# GITHUB_TOKEN=

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Step 3: Update gitignore**

Verify `.env.local` is in `.gitignore` (should already be there from Next.js setup)

**Step 4: Commit environment configuration**

```bash
git add .env.local.example
git commit -m "chore: add environment configuration"
```

---

## Task 12: Test Local Development

**Files:**
- None (testing only)

**Step 1: Build the project**

Run:
```bash
npm run build
```

Expected: Build completes without errors

**Step 2: Start development server**

Run:
```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

**Step 3: Manual testing checklist**

Visit and verify:
- [ ] Homepage loads with hero, featured projects, stats
- [ ] Navigation works (all links)
- [ ] About page displays correctly
- [ ] Projects page loads GitHub repos
- [ ] Projects filter by language works
- [ ] Blog page shows welcome post
- [ ] Blog post page renders MDX correctly
- [ ] Mobile menu works (resize browser)
- [ ] Footer links work

**Step 4: Fix any issues found**

If issues found, fix and commit before proceeding.

**Step 5: Stop development server**

Press Ctrl+C

---

## Task 13: Prepare for Production

**Files:**
- Create: `package.json` (add production script)
- Create: `.nvmrc`
- Modify: `next.config.js`

**Step 1: Add Node version file**

Create `.nvmrc`:
```
22
```

**Step 2: Update next.config.js for production**

Modify `next.config.js`:
```javascript
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  // Output standalone for Sprite deployment
  output: 'standalone',
}

module.exports = withContentlayer(nextConfig)
```

**Step 3: Test production build**

Run:
```bash
npm run build
npm start
```

Visit http://localhost:3000 and verify everything works.

Press Ctrl+C to stop.

**Step 4: Commit production configuration**

```bash
git add .nvmrc next.config.js
git commit -m "chore: configure for production deployment"
```

---

## Task 14: Create Deployment Documentation

**Files:**
- Create: `docs/DEPLOYMENT.md`

**Step 1: Create deployment guide**

Create `docs/DEPLOYMENT.md`:
```markdown
# Deployment Guide

This portfolio is designed to be hosted on Fly.io Sprites.

## Prerequisites

- Node.js 22+ installed on Sprite
- Git repository initialized
- GitHub authentication configured (`gh auth login`)

## Environment Variables

Create `.env.local` on the Sprite:

```bash
# Optional: GitHub token for higher API rate limits
GITHUB_TOKEN=your_token_here

# Sprite public URL
NEXT_PUBLIC_SITE_URL=https://your-sprite-url.fly.dev
```

## Build and Deploy

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Start production server:**
   ```bash
   npm start
   ```

4. **Access via Sprite URL:**
   Visit your Sprite's public URL to see the portfolio.

## Updating Content

### Adding Blog Posts

1. Create new MDX file in `content/blog/`:
   ```bash
   touch content/blog/my-new-post.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: "My New Post"
   date: "2026-01-15"
   excerpt: "A brief description"
   tags: ["Tag1", "Tag2"]
   ---

   Your content here...
   ```

3. Rebuild and restart:
   ```bash
   npm run build
   npm start
   ```

### Updating Projects

Projects are fetched automatically from GitHub. To refresh:
- Push new repos to GitHub
- Data refreshes on build or after cache expiry (1 hour)

### Updating Resume

Replace `public/resume.pdf` with your updated PDF.

## Process Management (Optional)

For production, consider using PM2:

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Troubleshooting

**Port already in use:**
- Next.js uses port 3000 by default
- Change with: `PORT=3001 npm start`

**GitHub API rate limiting:**
- Add GITHUB_TOKEN to .env.local
- Create token at: https://github.com/settings/tokens

**Build errors:**
- Clear cache: `rm -rf .next .contentlayer`
- Reinstall: `rm -rf node_modules && npm install`
```

**Step 2: Commit deployment documentation**

```bash
git add docs/DEPLOYMENT.md
git commit -m "docs: add deployment guide for Sprites"
```

---

## Task 15: Final Quality Check

**Files:**
- None (verification only)

**Step 1: Run linter**

Run:
```bash
npm run lint
```

Expected: No linting errors

Fix any errors found.

**Step 2: Check TypeScript**

Run:
```bash
npx tsc --noEmit
```

Expected: No type errors

Fix any errors found.

**Step 3: Test production build**

Run:
```bash
npm run build
```

Expected: Build succeeds without errors

**Step 4: Review git status**

Run:
```bash
git status
```

Expected: Working directory clean (no uncommitted changes)

**Step 5: Review commit history**

Run:
```bash
git log --oneline
```

Expected: Clean commit history with meaningful messages

---

## Task 16: Merge to Main Branch

**Files:**
- None (git operations)

**Step 1: Switch to main branch**

Run:
```bash
cd /home/sprite
git checkout master
```

**Step 2: Merge feature branch**

Run:
```bash
git merge --no-ff feature/portfolio-site -m "feat: complete portfolio website implementation

- Initialize Next.js 15 with TypeScript and Tailwind
- Build homepage with hero, featured projects, and stats
- Create About page with skills and background
- Implement Projects page with GitHub API integration
- Set up blog system with MDX and Contentlayer
- Configure for production deployment on Sprites"
```

**Step 3: Verify merge**

Run:
```bash
git log --oneline -5
```

Expected: Merge commit visible

**Step 4: Clean up worktree**

Run:
```bash
git worktree remove .worktrees/portfolio-site
rm -rf .worktrees
```

---

## Task 17: Deploy to Sprite

**Files:**
- Create: `.env.local` (in main directory)

**Step 1: Install dependencies in main directory**

Run:
```bash
cd /home/sprite
npm install
```

**Step 2: Create production environment file**

Create `/home/sprite/.env.local`:
```bash
# Get your Sprite public URL and update this
NEXT_PUBLIC_SITE_URL=https://your-sprite-url.fly.dev
```

**Step 3: Build for production**

Run:
```bash
npm run build
```

Expected: Build completes successfully

**Step 4: Start production server**

Run:
```bash
npm start
```

Expected: Server starts on port 3000

**Step 5: Access via Sprite URL**

Visit your Sprite's public URL in a browser.

Expected: Portfolio loads correctly

---

## Success Criteria

- [ ] All pages render correctly
- [ ] Navigation works on desktop and mobile
- [ ] GitHub projects load and display
- [ ] Blog posts render with syntax highlighting
- [ ] Site is responsive across breakpoints
- [ ] No console errors in browser
- [ ] Production build succeeds
- [ ] Site accessible via Sprite public URL

## Post-Implementation Tasks

1. Replace placeholder resume with actual PDF
2. Write 2-3 additional blog posts
3. Add project screenshots to enhance visual appeal
4. Optional: Set up GitHub webhook for automatic rebuilds
5. Optional: Add analytics (Plausible or similar)
6. Optional: Create custom 404 page

---

**Implementation Status:** Ready to execute
**Next Step:** Use superpowers:executing-plans or superpowers:subagent-driven-development
