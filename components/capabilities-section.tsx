'use client'

import { 
  Zap, 
  Lock, 
  BarChart3, 
  Smartphone, 
  Cloud, 
  Users, 
  Settings, 
  Headphones 
} from 'lucide-react'

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times and responsive interfaces.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, compliance with ISO 27001, SOC 2, and GDPR standards.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights with ML-powered predictions and data-driven recommendations.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native mobile apps for iOS and Android with full feature parity.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Auto-scaling cloud deployment with 99.9% uptime SLA and disaster recovery.',
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Built-in team collaboration, real-time updates, and permission management.',
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'White-label solutions with extensive customization and API integrations.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team with average response time under 30 minutes.',
    },
  ]

  return (
    <section className="w-full py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Powerful Capabilities
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Enterprise-grade features designed to meet the most demanding requirements.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{capability.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            )
          })}
        </div> 
      </div>
    </section>
  )
}
