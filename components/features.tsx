"use client"

import { CheckCircle2, Globe, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Globe,
      title: t.features.global_supply_title,
      description: t.features.global_supply_desc,
    },
    {
      icon: TrendingUp,
      title: t.features.flexible_price_title,
      description: t.features.flexible_price_desc,
    },
    {
      icon: Shield,
      title: t.features.quality_promise_title,
      description: t.features.quality_promise_desc,
    },
    {
      icon: CheckCircle2,
      title: t.features.professional_support_title,
      description: t.features.professional_support_desc,
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
            {t.features.title_prefix} <span className="font-semibold">LXMT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
