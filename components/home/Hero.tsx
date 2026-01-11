// ABOUTME: Displays the hero section with title, role, and primary actions.
// ABOUTME: Provides quick links to projects and blog content.
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container-custom min-h-[85vh] flex items-center">
      <div className="max-w-3xl py-20">
        <h1
          className="mb-6 font-serif font-semibold text-5xl md:text-6xl tracking-tighter animate-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          Kyle Pfister
        </h1>
        <p
          className="text-lg md:text-xl text-text-secondary font-medium mb-6 animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Full-Stack Developer @ Argonne National Laboratory
        </p>
        <p
          className="text-base md:text-lg text-text-tertiary italic mb-8 max-w-2xl animate-fade-up"
          style={{ maxWidth: '36ch', animationDelay: '200ms' }}
        >
          &ldquo;Developer who believes in coffee and version control. Still trying to figure out
          which one&apos;s more essential.&rdquo;
        </p>
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
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
