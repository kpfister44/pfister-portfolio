// ABOUTME: Provides background, skills, and resume access for the portfolio owner.
// ABOUTME: Describes experience, tools, and AI development focus.
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
            Developer who believes in coffee and version control. Still trying to figure out which one&apos;s
            more essential.
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
