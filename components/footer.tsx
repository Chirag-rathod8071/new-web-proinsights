import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'CRM Solutions', href: '#services' },
      { label: 'Analytics', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Contact', href: '#contact' },
    ],
  }

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span>ProInsights Analytics</span>
            </Link>
            <p className="text-sm opacity-75">
             AI-driven analytics platform empowering SMEs with enterprise-grade business intelligence. Transform your data into strategic insights that accelerate growth.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.Company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="mailto:jaythakkar0303@gmail.com" className="hover:opacity-100 transition-opacity">
                  jaythakkar0303@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917575075469" className="hover:opacity-100 transition-opacity">
                  +91 7575075469
                </a>
              </li>
            </ul>
          </div>
           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-75">
          <p>©{currentYear} ProInsights Analytics</p>
       
        </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8"></div>

        {/* Bottom Footer */}
       
      </div>
    </footer>
  )
}
