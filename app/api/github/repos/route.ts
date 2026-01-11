// ABOUTME: Exposes a JSON API endpoint for Kyle's public GitHub repositories.
// ABOUTME: Uses the GitHub helper to fetch and cache repo data for the site.
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
