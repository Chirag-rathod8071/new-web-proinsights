import React from "react"
import { Code2, Smartphone, BarChart3, Gauge, Building2, Database } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServicesSection() {
  const services: Service[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Application Development',
      description: 'Scalable, high-performance web applications built with modern technologies and best practices for enterprise-grade reliability.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications designed for iOS and Android with exceptional user experiences.',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'CRM & Business Solutions',
      description: 'Custom CRM platforms and business management systems that streamline operations and improve customer relationships.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Custom Analytics Dashboards',
      description: 'Data-driven dashboards and MIS systems that transform raw data into actionable business insights.',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise & Government Software',
      description: 'Secure, compliant solutions specifically designed for enterprise and government-scale operations.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions including warehousing, ETL processes, and advanced analytics capabilities.',
    },
  ]

  return (
    <section id="services" className="w-full py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Comprehensive technology solutions tailored to meet your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-border/40 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary rounded-t-lg group-hover:h-1 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
