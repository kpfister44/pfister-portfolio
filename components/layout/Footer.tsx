// ABOUTME: Shows site footer with attribution and key outbound links.
// ABOUTME: Displays the current year and hosting attribution.
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle mt-20">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 order-2 md:order-1">
            <Link
              href="https://github.com/kpfister44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors duration-base"
            >
              GitHub
            </Link>
            <Link
              href="mailto:kpfister44@gmail.com"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors duration-base"
            >
              Email
            </Link>
          </div>

          <div className="text-center order-1 md:order-2">
            <p className="text-sm text-text-tertiary mb-2">
              Built with Next.js · Hosted on{' '}
              <Link
                href="https://sprites.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-text-secondary hover:text-accent-primary"
              >
                Fly.io Sprites
              </Link>
            </p>
            <p className="text-xs text-text-tertiary">© {currentYear} Kyle Pfister</p>
          </div>

          <div className="order-3 md:block hidden w-[100px]" />
        </div>
      </div>
    </footer>
  )
}
