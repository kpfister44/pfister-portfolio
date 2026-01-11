// ABOUTME: Provides metadata and layout wrapper for the Projects route.
// ABOUTME: Keeps metadata in a server component alongside the client page.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Kyle Pfister',
  description: 'A curated set of Kyle Pfister projects and experiments',
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
