"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const getCategories = (t: any) => [
  {
    title: t.products.luxury_title,
    description: t.products.luxury_desc,
    image: "/luxury-perfume-bottles-on-elegant-marble.jpg",
  },
  {
    title: t.products.niche_title,
    description: t.products.niche_desc,
    image: "/niche-perfume-collection-artistic.jpg",
  },
  {
    title: t.products.fragrance_title,
    description: t.products.fragrance_desc,
    image: "/home-fragrance-diffuser-elegant.jpg",
  },
]

export function Products() {
  const { t } = useLanguage()
  const categories = getCategories(t)

  return (
    <section id="products" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
            {t.products.title_prefix}<span className="font-semibold italic">{t.products.title_suffix}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${category.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-white/90 leading-relaxed text-pretty">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">{t.products.view_full}</p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
          >
            {t.products.apply_full}
          </a>
        </div>
      </div>
    </section>
  )
}
