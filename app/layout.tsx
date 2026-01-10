// ABOUTME: Defines global layout, metadata, and font configuration for the app.
// ABOUTME: Wraps pages with navigation and footer components.
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Kyle Pfister | Full-Stack Developer',
  description: 'Portfolio website showcasing full-stack development and AI integration projects',
  authors: [{ name: 'Kyle Pfister', email: 'kpfister44@gmail.com' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
