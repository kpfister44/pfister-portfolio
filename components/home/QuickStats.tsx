// ABOUTME: Displays quick summary statistics about experience and projects.
// ABOUTME: Uses a simple grid layout for key metrics.
export default function QuickStats() {
  const stats = [
    { label: 'Public Repositories', value: '7' },
    { label: 'Tech Stack', value: '10+' },
    { label: 'Years Coding', value: '5+' },
  ]

  return (
    <section className="container-custom py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl font-serif font-semibold mb-3 text-text-primary tracking-tighter">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
