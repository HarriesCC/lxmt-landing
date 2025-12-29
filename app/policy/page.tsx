"use client"

import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PolicyPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-12 text-center transform hover:scale-105 transition-transform duration-300">
                        {t.policy.title}
                    </h1>

                    <div className="space-y-12">
                        {/* Shipping Policy */}
                        <section id="shipping" className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.policy.shipping_title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.policy.shipping_content}
                            </p>
                        </section>

                        {/* Payment Method */}
                        <section id="payment" className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.policy.payment_title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.policy.payment_content}
                            </p>
                        </section>

                        {/* Privacy Policy */}
                        <section id="privacy" className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.policy.privacy_title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.policy.privacy_content}
                            </p>
                        </section>

                        {/* Terms of Service */}
                        <section id="terms" className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.policy.terms_title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.policy.terms_content}
                            </p>
                        </section>

                        {/* Return Policy */}
                        <section id="returns" className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.policy.returns_title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.policy.returns_content}
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
