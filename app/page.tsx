// ABOUTME: Composes the homepage sections for the portfolio landing page.
// ABOUTME: Assembles hero, featured projects, and quick stats blocks.
import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import QuickStats from '@/components/home/QuickStats'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <QuickStats />
    </>
  )
}
