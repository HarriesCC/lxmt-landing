"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
            {t.contact.title_prefix}<span className="font-semibold italic">{t.contact.title_suffix}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.label_name}</Label>
                    <Input id="name" placeholder={t.contact.ph_name} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.contact.label_company}</Label>
                    <Input id="company" placeholder={t.contact.ph_company} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.label_email}</Label>
                    <Input id="email" type="email" placeholder={t.contact.ph_email} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.label_phone}</Label>
                    <Input id="phone" type="tel" placeholder={t.contact.ph_phone} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.label_message}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.ph_message}
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {t.contact.submit}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.contact.card_email}</h3>
                  <p className="text-sm text-muted-foreground">info@lxmt.nl</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.contact.card_phone}</h3>
                  <p className="text-sm text-muted-foreground">+31 20 123 4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.contact.card_address}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.address_val}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
