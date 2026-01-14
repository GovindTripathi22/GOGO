"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Is the fuel delivery safe?",
        answer: "Absolutely. Our trucks are purpose-built to the highest international safety standards (ADR compliant) and our drivers are certified hazardous material handlers. We treat your safety as our #1 priority.",
    },
    {
        question: "Does it cost more than the gas station?",
        answer: "No. We charge the same average price as the gas stations in your local area. The delivery fee is minimal, and often waived with our subscription plans or for B2B contracts.",
    },
    {
        question: "Where do you operate?",
        answer: "We are currently operating in Montreal, Toronto, and Ottawa, with rapid expansion plans for Vancouver and Calgary in late 2024.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="about" className="py-24 bg-neutral-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* About Us Snippet */}
                    <div className="lg:w-1/3">
                        <span className="text-accent font-bold text-sm tracking-wider uppercase mb-3 block">About GoGo</span>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Reinventing energy delivery for a moving world.</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            GoGo was founded with a simple mission: to give you back your time. Whether you manage a fleet of 500 vehicles or just need to fill up your family SUV, we bring the energy infrastructure to you.
                        </p>
                        <a
                            href="#"
                            className="text-slate-900 font-bold hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                            Read our story
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="lg:w-2/3">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl border border-slate-100 overflow-hidden transition-shadow ${openIndex === index ? "shadow-md" : ""
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="font-bold text-slate-900">{faq.question}</span>
                                        <span className={`bg-slate-100 text-slate-600 rounded-full p-1 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
