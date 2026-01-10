// ABOUTME: Highlights a curated set of featured portfolio projects.
// ABOUTME: Links each project card to its GitHub repository.
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
    description:
      'Mobile-first web app displaying actual snowfall totals on an interactive map for the Chicagoland area',
    tech: ['Python', 'Web'],
    url: 'https://github.com/kpfister44/ChiSnow',
  },
  {
    name: 'illinois-school-explorer',
    description:
      'A web application for searching and comparing Illinois schools using the 2025 Report Card dataset',
    tech: ['TypeScript', 'Next.js'],
    url: 'https://github.com/kpfister44/illinois-school-explorer',
  },
  {
    name: 'MobileMakersGrader',
    description:
      'Swift Assignment Auto-Grader - AI-powered grading tool for high school Swift programming assignments',
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
            <p className="text-foreground-muted mb-4">{project.description}</p>
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
