// ABOUTME: Renders the site navigation with responsive desktop and mobile menus.
// ABOUTME: Highlights the active route and provides a mobile toggle.
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-bg-base border-b border-border-subtle">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif font-semibold text-lg tracking-tight">
            KP
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-base relative ${
                  pathname === item.path
                    ? 'text-text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-accent-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-3 text-base font-medium ${
                  pathname === item.path
                    ? 'text-text-primary'
                    : 'text-text-secondary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
