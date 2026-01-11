// ABOUTME: Displays filter chips for project languages.
// ABOUTME: Notifies parent when the active language filter changes.
'use client'

interface ProjectFiltersProps {
  languages: string[]
  selectedLanguage: string | null
  onFilterChange: (language: string | null) => void
}

export default function ProjectFilters({
  languages,
  selectedLanguage,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`text-sm px-4 py-2 rounded-full transition-all ${
            selectedLanguage === null
              ? 'bg-accent-primary text-text-inverse'
              : 'bg-bg-subtle border border-border-subtle hover:border-border-medium'
          }`}
        >
          All
        </button>
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => onFilterChange(language)}
            className={`text-sm px-4 py-2 rounded-full transition-all ${
              selectedLanguage === language
                ? 'bg-accent-primary text-text-inverse'
                : 'bg-bg-subtle border border-border-subtle hover:border-border-medium'
            }`}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  )
}
