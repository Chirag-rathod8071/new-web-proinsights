import { CheckCircle2 } from 'lucide-react'

interface Reason {
  title: string
  description: string
}

export function WhyUsSection() {
  const reasons: Reason[] = [
    {
      title: 'Data-Driven Approach',
      description: 'Every solution is built on deep analysis of your business needs and data insights to drive measurable results.',
    },
    {
      title: 'Scalable & Secure Solutions',
      description: 'Enterprise-grade architecture designed to grow with your business while maintaining the highest security standards.',
    },
    {
      title: 'Business-First Mindset',
      description: 'We focus on your business outcomes, not just technology. Every feature delivers real value.',
    },
    {
      title: 'Reliable Delivery',
      description: 'Proven track record of on-time, on-budget project delivery with transparent communication throughout.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'We provide ongoing support and optimization to ensure your systems continue delivering value.',
    },
    {
      title: 'Government & Enterprise Expertise',
      description: 'Specialized experience with compliance requirements, security standards, and large-scale system deployments.',
    },
  ]

  return (
    <section id="why-us" className="w-full py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Why Choose ProInsights Analytics
              </h2>
              <p className="text-lg text-foreground/70">
                We combine technical excellence with deep business understanding to deliver solutions that drive real growth and efficiency.
              </p>
            </div>

            {/* Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{reason.title}</h3>
                    <p className="text-foreground/70 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
