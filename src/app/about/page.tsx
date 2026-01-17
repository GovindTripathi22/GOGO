/**
 * About Us Page (FS-5)
 * Full storytelling page with origin story, mission, and team.
 */

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OriginStory from "@/components/OriginStory";
import TeamGrid from "@/components/TeamGrid";
import aboutData from "@/content/about-data.json";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about GoGo Imperial Energy: our story, mission, and the team working to revolutionize fuel delivery in Benin and West Africa.",
    openGraph: {
        title: "About GoGo Imperial Energy",
        description: "The story behind on-demand fuel delivery in Africa.",
        type: "website",
    },
    alternates: {
        canonical: "/about",
    },
};

const pillars = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Every truck, every driver, every delivery meets the highest safety standards.",
    },
    {
        icon: Target,
        title: "Reliability",
        description: "On-time delivery with real-time tracking you can count on.",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "Leveraging technology to make fuel access effortless.",
    },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main id="main-content">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Reinventing energy delivery<br />
                            <span className="text-primary italic">for a moving world.</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            GoGo was founded with a simple mission: give people back their time by
                            bringing fuel and energy services directly to them.
                        </p>
                    </div>
                </section>

                {/* Mission Pillars */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                What Drives Us
                            </h2>
                            <p className="text-slate-600 max-w-xl mx-auto">
                                Three pillars guide everything we do at GoGo.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={pillar.title}
                                        className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100"
                                    >
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <Icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-slate-600">{pillar.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Origin Story Timeline */}
                <OriginStory milestones={aboutData.milestones} />

                {/* Team Grid */}
                <TeamGrid members={aboutData.team} />

                {/* CTA Section */}
                <section className="py-16 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Join Our Mission
                        </h2>
                        <p className="text-slate-400 mb-8">
                            We're always looking for passionate people to help us grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
                            >
                                Partner With Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="mailto:careers@gogo.bj"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors border border-white/20"
                            >
                                View Careers
                            </a>
                        </div>
                    </div>
                </section>

                {/* JSON-LD Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "@id": "https://gogo.bj/#organization",
                            name: "GoGo Imperial Energy",
                            url: "https://gogo.bj",
                            logo: "https://gogo.bj/assets/images/logo-main.png",
                            description: "On-demand fuel delivery for businesses and individuals in Benin.",
                            foundingDate: "2022",
                            founders: [
                                {
                                    "@type": "Person",
                                    name: "Founder Name",
                                },
                            ],
                            sameAs: [
                                "https://facebook.com/gogoimperial",
                                "https://instagram.com/gogoimperial",
                                "https://linkedin.com/company/gogo-imperial",
                                "https://twitter.com/gogoimperial",
                            ],
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+229 XX XX XX XX",
                                contactType: "customer service",
                                areaServed: "BJ",
                                availableLanguage: ["English", "French"],
                            },
                        }),
                    }}
                />
            </main>

            <Footer />
        </>
    );
}
