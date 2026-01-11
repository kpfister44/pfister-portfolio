// ABOUTME: Renders a project card for a GitHub repository.
// ABOUTME: Displays summary details like language, topics, and last update.
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
        <h3 className="text-xl group-hover:text-accent-primary transition-colors">
          {project.name}
        </h3>
        {project.stargazerCount > 0 && (
          <span className="text-sm text-text-secondary">
            ⭐ {project.stargazerCount}
          </span>
        )}
      </div>

      {project.description && (
        <p className="text-text-secondary mb-4">{project.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.language && (
          <span className="text-xs px-3 py-1 bg-bg-subtle border border-border-subtle rounded-full">
            {project.language}
          </span>
        )}
        {project.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="text-xs px-3 py-1 bg-bg-subtle border border-border-subtle rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="text-xs text-text-secondary">
        Updated {formatDistanceToNow(new Date(project.pushedAt), { addSuffix: true })}
      </div>
    </Link>
  )
}
