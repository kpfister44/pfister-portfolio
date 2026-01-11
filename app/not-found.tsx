// ABOUTME: Custom 404 page shown when users navigate to non-existent routes.
// ABOUTME: Provides branded error message and navigation back to homepage.
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-text-secondary mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  )
}
