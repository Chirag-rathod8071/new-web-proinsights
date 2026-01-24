import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { SolutionsShowcase } from '@/components/solutions-showcase'
import { CapabilitiesSection } from '@/components/capabilities-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { WhyUsSection } from '@/components/why-us-section'
import { AboutSection } from '@/components/about-section'
import {ContactSection} from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <SolutionsShowcase />
        <CapabilitiesSection />
        <TechStackSection />
        <WhyUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
