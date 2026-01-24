'use client'

import Image from 'next/image'

export function SolutionsShowcase() {
  const solutions = [
    {
      title: 'CRM Dashboard',
      description: 'Comprehensive customer relationship management platform with real-time analytics, sales pipeline tracking, and customer insights.',
      image: '/crm-dashboard.jpg',
      features: ['Customer Management', 'Sales Pipeline', 'Analytics', 'Automation'],
      color: 'from-blue-600/20 to-blue-400/20',
    },
    {
      title: 'Business Analytics',
      description: 'Enterprise-grade analytics dashboard with advanced data visualization, KPI tracking, and actionable business intelligence.',
      image: '/analytics-dashboard.jpg',
      features: ['Real-time Data', 'KPI Tracking', 'Visualizations', 'Reporting'],
      color: 'from-cyan-600/20 to-cyan-400/20',
    },
    {
      title: 'Mobile Applications',
      description: 'Native iOS and Android applications with seamless user experience, offline capabilities, and cloud synchronization.',
      image: '/mobile-app.jpg',
      features: ['iOS & Android', 'Cloud Sync', 'Offline Mode', 'Push Notifications'],
      color: 'from-indigo-600/20 to-indigo-400/20',
    },
    {
      title: 'Web Platforms',
      description: 'Responsive web applications built with latest technologies, ensuring scalability and optimal performance across all devices.',
      image: '/web-platform.jpg',
      features: ['Responsive Design', 'Scalable', 'Fast Performance', 'SEO Optimized'],
      color: 'from-purple-600/20 to-purple-400/20',
    },
  ]

  return (
    <section className="w-full py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            World-Class Solutions & Visualizations
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Explore our cutting-edge platforms designed for modern enterprise needs with professional visualizations and intuitive interfaces.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-border/40 overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-secondary/20">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 bg-card">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
