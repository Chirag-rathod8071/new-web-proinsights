import { ArrowRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  problem: string
  solution: string
  impact: string
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      title: 'Sales & Customer CRM Platform',
      category: 'CRM Development',
      problem: 'Manual sales tracking and fragmented customer data',
      solution: 'Built an integrated CRM with real-time sales pipeline, customer analytics, and automated workflows',
      impact: '40% increase in sales efficiency and 60% reduction in data entry time',
    },
    {
      title: 'Business Intelligence & Analytics Dashboard',
      category: 'Analytics Solutions',
      problem: 'Lack of real-time business metrics visibility',
      solution: 'Developed comprehensive BI dashboard with real-time data integration and predictive analytics',
      impact: '50% faster decision-making and 35% improvement in business metrics',
    },
    {
      title: 'Inventory & Sales Analytics System',
      category: 'Enterprise Software',
      problem: 'Complex inventory management across multiple locations',
      solution: 'Created unified inventory system with real-time tracking, stock forecasting, and optimization',
      impact: '25% reduction in inventory costs and 45% improvement in stock accuracy',
    },
    {
      title: 'Customer Retention & Performance Tracking',
      category: 'Analytics Platform',
      problem: 'Unable to identify at-risk customers and track performance metrics',
      solution: 'Built predictive system tracking customer health, churn risk, and performance indicators',
      impact: '30% reduction in customer churn and improved customer lifetime value by 45%',
    },
    {
      title: 'MIS & Reporting System',
      category: 'Government Solutions',
      problem: 'Complex government reporting requirements and data silos',
      solution: 'Developed secure, compliant MIS system with automated reporting and multi-level access control',
      impact: 'Eliminated 80% of manual reporting work and ensured full compliance',
    },
    {
      title: 'Enterprise Supply Chain Platform',
      category: 'Enterprise Software',
      problem: 'Fragmented supply chain visibility and coordination',
      solution: 'Created end-to-end supply chain visibility platform with real-time tracking and analytics',
      impact: '35% reduction in logistics costs and 50% faster order fulfillment',
    },
  ]

  return (
    <section id="portfolio" className="w-full py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
          <b>
            Real-world solutions delivering measurable business impact
          </b>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-xl border border-border/40 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 mb-4">
                <span className="text-xs font-medium text-primary">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Problem */}
              <div className="mb-4 pb-4 border-b border-border/40">
                <p className="text-sm font-semibold text-foreground/60 mb-1">Problem</p>
                <p className="text-sm text-foreground/70">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4 pb-4 border-b border-border/40">
                <p className="text-sm font-semibold text-foreground/60 mb-1">Solution</p>
                <p className="text-sm text-foreground/70">{project.solution}</p>
              </div>

              {/* Impact */}
              <div className="flex-1 mb-4">
                <p className="text-sm font-semibold text-foreground/60 mb-1">Impact</p>
                <p className="text-sm font-medium text-primary">{project.impact}</p>
              </div>

              {/* Hover Indicator */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
