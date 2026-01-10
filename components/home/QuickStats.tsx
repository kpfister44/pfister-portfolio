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
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-foreground-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
