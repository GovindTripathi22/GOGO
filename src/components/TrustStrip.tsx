"use client";

import Image from "next/image";

const partners = [
    { name: "MAE", logo: "/assets/images/partner-mae.svg" },
    { name: "MTN", logo: "/assets/images/partner-mtn.png" },
    { name: "SGDS", logo: "/assets/images/partner-sgds.png" },
    { name: "Societe Generale", logo: "/assets/images/partner-socgen.png" },
];

export default function TrustStrip() {
    return (
        <section className="w-full py-8 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">
                    Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="relative h-10 w-28 opacity-60 hover:opacity-100 transition-opacity">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Additional placeholder logos */}
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800 opacity-60">
                        <span className="text-2xl">🚚</span>
                        LogisticsCo
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800 opacity-60">
                        <span className="text-2xl">🏭</span>
                        BuildCorp
                    </div>
                </div>
            </div>
        </section>
    );
}
