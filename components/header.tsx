"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter">LXMT</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.advantages}
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.products}
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.process}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.contact}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="w-12">
              {language === "en" ? "NL" : "EN"}
            </Button>
            <a href="#contact">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.header.partner}
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="w-12">
              {language === "en" ? "NL" : "EN"}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-6 pb-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.advantages}
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.products}
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.process}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.contact}
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a href="#contact" className="w-full">
                <Button size="sm" className="w-full bg-primary text-primary-foreground">
                  {t.header.partner}
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
