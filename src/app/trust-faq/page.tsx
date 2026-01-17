/**
 * Trust & FAQ Page (FS-4)
 * Central hub with searchable FAQ, trust badges, and news teaser.
 */

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSearch from "@/components/FAQSearch";
import TrustLogos from "@/components/TrustLogos";
import faqData from "@/content/faq-data.json";

export const metadata: Metadata = {
    title: "Trust & FAQ | Help Center",
    description:
        "Find answers to common questions about GoGo fuel delivery. Learn about our safety certifications, pricing, and delivery process.",
    openGraph: {
        title: "GoGo Help Center & FAQ",
        description: "Your questions answered. Safety, pricing, delivery, and more.",
        type: "website",
    },
    alternates: {
        canonical: "/trust-faq",
    },
};

const trustBadges = [
    {
        icon: Shield,
        title: "Safety First",
        description: "ADR-certified trucks and trained drivers",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer assistance",
    },
    {
        icon: Award,
        title: "Certified Quality",
        description: "ISO 9001 compliant operations",
    },
];

export default function TrustFAQPage() {
    return (
        <>
            <Navbar />

            <main id="main-content">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Trust & <span className="text-primary">Support</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                            We're here to help. Find answers to your questions and learn what
                            makes GoGo the trusted choice for fuel delivery.
                        </p>

                        {/* Trust Badges */}
                        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {trustBadges.map((badge) => {
                                const Icon = badge.icon;
                                return (
                                    <div
                                        key={badge.title}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-6"
                                    >
                                        <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h3 className="font-bold text-white mb-1">{badge.title}</h3>
                                        <p className="text-sm text-slate-400">{badge.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white" id="faq">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
                            Frequently Asked Questions
                        </h2>
                        <FAQSearch faqs={faqData.faqs} />
                    </div>
                </section>

                {/* Trust Logos */}
                <TrustLogos />

                {/* Blog Teaser */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">Latest from GoGo</h2>
                            <Link
                                href="/blog"
                                className="text-accent font-bold flex items-center gap-1 hover:underline"
                            >
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Placeholder blog cards */}
                            {[1, 2, 3].map((i) => (
                                <Link
                                    key={i}
                                    href="/blog"
                                    className="block bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-xs text-slate-500 uppercase font-bold">News</span>
                                    <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">
                                        Coming Soon: Expansion Update
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Stay tuned for the latest news about GoGo services.
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Our team is ready to help you get started.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
                            >
                                Request B2B Quote
                            </Link>
                            <Link
                                href="/mobile-app"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Download App
                            </Link>
                        </div>
                    </div>
                </section>

                {/* JSON-LD FAQPage Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqData.faqs.slice(0, 5).map((faq) => ({
                                "@type": "Question",
                                name: faq.question.en,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.answer.en,
                                },
                            })),
                        }),
                    }}
                />
            </main>

            <Footer />
        </>
    );
}
