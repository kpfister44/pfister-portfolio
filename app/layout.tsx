// ABOUTME: Defines global layout, metadata, and font configuration for the app.
// ABOUTME: Wraps pages with navigation and footer components.
import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kyle Pfister | Full-Stack Developer',
  description: 'Portfolio website showcasing full-stack development and AI integration projects',
  authors: [{ name: 'Kyle Pfister' }],
  openGraph: {
    title: 'Kyle Pfister | Full-Stack Developer',
    description: 'Portfolio website showcasing full-stack development and AI integration projects',
    url: 'https://pfister-portfolio-blmwi.sprites.app',
    siteName: 'Kyle Pfister Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kyle Pfister | Full-Stack Developer',
    description: 'Portfolio website showcasing full-stack development and AI integration projects',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
