"use client"

import { useLanguage } from "@/components/language-provider"

export function Process() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      title: t.process.step1_title,
      description: t.process.step1_desc,
    },
    {
      number: "02",
      title: t.process.step2_title,
      description: t.process.step2_desc,
    },
    {
      number: "03",
      title: t.process.step3_title,
      description: t.process.step3_desc,
    },
    {
      number: "04",
      title: t.process.step4_title,
      description: t.process.step4_desc,
    },
  ]

  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
            <span className="font-semibold">{t.process.title_bold}</span>，{t.process.title_suffix}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="text-6xl font-light text-accent/20">{step.number}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-[1px] bg-border translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
