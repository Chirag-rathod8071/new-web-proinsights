```tsx
import Image from "next/image";
import { Building2, Trophy, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description:
      "We leverage the latest technologies to build scalable and future-ready digital solutions.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Excellence",
    description:
      "Quality, precision, and performance are at the heart of everything we deliver.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Enterprise Grade",
    description:
      "Reliable, secure, and scalable solutions built for businesses of every size.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-secondary/5 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* OUR STORY */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Story
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-600" />
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From vision to reality — transforming how businesses use
              technology and data.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <Image
                src="/jayt.png"
                alt="Chirag Rathod"
                width={160}
                height={160}
                className="rounded-full object-cover"
                priority
              />

              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  Chirag Rathod
                </h3>

                <p className="mt-1 font-semibold text-blue-600">
                  Director
                </p>

                <p className="mt-4 text-gray-600">
                  Chirag leads technology and operations while driving
                  innovation, scalability, and product excellence across every
                  solution we build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              GrowticsAI
            </h2>

            <p className="mb-8 leading-8 text-gray-600">
              GrowticsAI is a technology company focused on digital
              transformation, AI, analytics, and enterprise software. We help
              startups, SMEs, enterprises, and government organizations build
              secure, scalable, and intelligent digital products.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4"
                >
                  <div className="text-blue-600">
                    {pillar.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {pillar.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Mission & Vision
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-blue-600 p-6 text-white">
                <h3 className="mb-3 text-xl font-bold">
                  🎯 Our Mission
                </h3>

                <p className="text-blue-100">
                  Empower businesses with modern technology, AI, and analytics
                  that enable faster and smarter decision-making.
                </p>
              </div>

              <div className="rounded-xl bg-indigo-600 p-6 text-white">
                <h3 className="mb-3 text-xl font-bold">
                  🚀 Our Vision
                </h3>

                <p className="text-indigo-100">
                  Become a globally trusted technology partner delivering
                  innovative, scalable, and future-ready digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="rounded-2xl border bg-white p-10 shadow-sm">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-600">
                We aspire to become a global technology company that helps
                organizations accelerate digital transformation through
                innovative software, cloud solutions, AI, and data analytics.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Global Growth
              </h3>

              <p className="leading-8 text-gray-600">
                Our goal is to build long-term partnerships across the US, UK,
                Europe, and the Middle East while delivering world-class
                software development services from India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```
