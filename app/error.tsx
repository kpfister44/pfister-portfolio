// ABOUTME: Error boundary component for catching and displaying runtime errors
// ABOUTME: Provides styled fallback UI with retry functionality
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="mb-4">Something went wrong</h1>
      <p className="text-lg text-text-secondary mb-8">
        We encountered an error loading this page.
      </p>
      <button onClick={reset} className="btn btn-primary">
        Try Again
      </button>
    </div>
  )
}
