// ABOUTME: Lists published blog posts with summaries and tags.
// ABOUTME: Uses local MDX content to build the blog index page.
import type { Metadata } from 'next'
import PostCard from '@/components/blog/PostCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Kyle Pfister',
  description: 'Articles about web development, AI integration, and software engineering',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container-custom py-20">
      <h1 className="mb-4">Blog</h1>
      <p className="text-lg text-text-secondary mb-12 max-w-2xl">
        Thoughts on web development, AI integration, and lessons learned building software.
      </p>

      <div className="grid gap-6 max-w-3xl">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-text-secondary py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  )
}
