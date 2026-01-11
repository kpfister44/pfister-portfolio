// ABOUTME: Renders a single blog post from local MDX content.
// ABOUTME: Generates static params and metadata for each post slug.
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Kyle Pfister`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <article className="container-custom py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <time className="text-sm text-text-secondary">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <h1 className="mt-2 mb-4">{post.title}</h1>
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
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  )
}
