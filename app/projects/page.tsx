// ABOUTME: Client page for browsing and filtering Kyle's projects.
// ABOUTME: Fetches repositories from the GitHub API route at runtime.
'use client'

import { useState, useEffect } from 'react'
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
        <p className="text-text-secondary">Loading projects...</p>
      </div>
    )
  }

  return (
    <div className="container-custom py-20">
      <h1 className="mb-4">Projects</h1>
      <p className="text-lg text-text-secondary mb-12 max-w-2xl">
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
        <p className="text-center text-text-secondary py-12">
          No projects found for this filter.
        </p>
      )}
    </div>
  )
}
