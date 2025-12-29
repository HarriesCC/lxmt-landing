"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="text-3xl font-bold tracking-tighter mb-4">LXMT</div>
            <p className="text-primary-foreground/80 leading-relaxed text-pretty">
              {t.footer.desc}
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.company_info.title}</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li>
                <div className="font-medium text-primary-foreground mb-1">{t.company_info.name}</div>
                <div>LXMT Trading</div>
              </li>
              <li>
                <div className="font-medium text-primary-foreground mb-1">{t.company_info.kvk}</div>
                <div>78674611</div>
              </li>
              <li>
                <div className="font-medium text-primary-foreground mb-1">{t.company_info.address}</div>
                <div>
                  Piet Zwartstraat 23<br />
                  3059PL Rotterdam
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quick_links}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.header.advantages}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.header.products}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.header.process}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.header.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/policy#privacy"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="/policy#terms"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="/policy#returns"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.footer.returns}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} LXMT Trading. {t.footer.rights}
            </p>
            <p className="text-sm text-primary-foreground/60"></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
