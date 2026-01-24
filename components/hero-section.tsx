import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-secondary/5 pt-20 sm:pt-32 pb-20 sm:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/20 px-4 py-1.5 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground/70">Startup India Certified Company</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            Build Scalable Digital & <span className="text-primary">Analytics Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 leading-relaxed">
            Custom web applications, mobile apps, CRM platforms, and business analytics dashboards designed for government and enterprise clients.
          </p>
          {/* Trust Indicator */}
          <div className="pt-8 border-t border-border/40">
            <p className="text-sm text-foreground/60 mb-4">Trusted by government and enterprise organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Government Sector', 'Enterprise Solutions', 'Data Analytics', 'CRM Systems'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
