'use client'

export function TechStackSection() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Go', 'Java', 'Rust', 'C#'],
    },
    {
      category: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra'],
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Expo'],
    },
    {
      category: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI APIs', 'LLMs', 'Computer Vision'],
    },
  ]

  return (
    <section className="w-full py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Cutting-Edge Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            We leverage the latest technologies and frameworks to build scalable, efficient solutions.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border/40 bg-card p-8 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-4 py-2 rounded-lg bg-primary/5 text-sm font-medium text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
