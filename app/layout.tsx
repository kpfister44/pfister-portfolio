import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kyle Pfister | Full-Stack Developer',
  description: 'Portfolio website showcasing full-stack development and AI integration projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
