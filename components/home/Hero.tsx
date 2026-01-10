// ABOUTME: Displays the hero section with title, role, and primary actions.
// ABOUTME: Provides quick links to projects and blog content.
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container-custom py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="mb-6">Kyle Pfister</h1>
        <p className="text-xl md:text-2xl text-foreground-muted mb-6">
          Full-Stack Developer @ Argonne National Laboratory
        </p>
        <p className="text-lg text-foreground-muted mb-8 max-w-2xl">
          Developer who believes in coffee and version control. Still trying to figure out
          which one&apos;s more essential.
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
