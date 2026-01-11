// ABOUTME: Renders a summary card for a blog post.
// ABOUTME: Shows date, title, excerpt, and tags for listing pages.
import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/lib/blog'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="card group">
      <div className="mb-2">
        <time className="text-sm text-text-secondary">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </div>
      <h3 className="text-2xl mb-3 group-hover:text-accent-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-text-secondary mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-bg-subtle border border-border-subtle rounded-full"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs text-text-secondary ml-auto">
          {post.readingTime} min read
        </span>
      </div>
    </Link>
  )
}
