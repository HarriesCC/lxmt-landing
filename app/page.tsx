import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
