// ABOUTME: Provides GitHub API helpers for fetching public repositories.
// ABOUTME: Normalizes Octokit data into the portfolio Repository shape.
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
