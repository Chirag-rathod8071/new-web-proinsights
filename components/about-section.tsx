import { Building2, Trophy, Lightbulb } from 'lucide-react'
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <section
          className="mb-16"
        >
          <div className="text-center m-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              From vision to reality — transforming how businesses use data.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* ===== Gopi Card ===== */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <Image src="/Gopi.jpeg" alt="Gopi" width={140} height={140} />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Gopi Dobariya
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Co-Founder & Director
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Gopi brings strong expertise in business strategy and product
                innovation, making enterprise-grade analytics accessible to all.
              </p>

              <p className="text-gray-600">
                Her customer-centric mindset ensures every solution delivers
                measurable business value.
              </p>
            </div>

            {/* ===== Jay Card ===== */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <Image src="/jayt.png" alt="Jay" width={160} height={160} />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Jay Thakkar
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    Co-Founder & Director
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Jay leads technology and operations, ensuring scalable and
                reliable analytics platforms.
              </p>

              <p className="text-gray-600">
                His focus on performance and architecture drives long-term
                product excellence.
              </p>
            </div>

          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Company Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                ProInsights Analytics
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                ProInsights Analytics is a Startup India certified technology company specializing in digital transformation and data-driven solutions. We partner with government institutions, enterprises, and SMEs to build scalable, secure, and innovative technology solutions.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="space-y-4">
              {[
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: 'Innovation First',
                  description: 'We leverage the latest technologies and methodologies to create future-ready solutions.',
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: 'Excellence',
                  description: 'Quality and precision in every line of code and every feature we deliver.',
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: 'Enterprise Grade',
                  description: 'Built to handle enterprise-scale operations with security and reliability.',
                },
              ].map((pillar, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 text-primary">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{pillar.title}</h3>
                    <p className="text-foreground/70 text-sm">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Founder */}
           <div className="bg-light-background">

      <main className="container mx-auto px-4 sm:px-6 py-10">

        {/* ===== OUR STORY ===== */}
     
        {/* ===== MISSION & VISION ===== */}
        <section 
          className="mb-16"
        >
          <div  className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto my-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="bg-blue-600 text-white rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">🎯 Our Mission</h3>
              <p className="text-blue-100">
                Empower businesses to make smarter decisions through accessible,
                practical analytics.
              </p>
            </div>

            <div
              className="bg-indigo-600 text-white rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">🚀 Our Vision</h3>
              <p className="text-indigo-100">
                Become the most trusted analytics partner for SMEs worldwide.
              </p>
            </div>
          </div>
        </section>

      </main>
 
    </div>
        </div>

        {/* Vision & Growth */}
        <div className="rounded-xl border border-border/40 bg-card p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To become the trusted technology partner for enterprises and governments, delivering innovative solutions that drive digital transformation and sustainable growth across industries.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Global Growth</h3>
              <p className="text-foreground/70 leading-relaxed">
                We're expanding our footprint to serve US & UK based enterprises and government agencies, bringing Indian quality and value to the global market while building long-term technology partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
