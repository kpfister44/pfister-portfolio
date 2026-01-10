// ABOUTME: Shows site footer with attribution and key outbound links.
// ABOUTME: Displays the current year and hosting attribution.
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
