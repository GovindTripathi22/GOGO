import Image from "next/image";

export default function About() {
    return (
        <section className="py-20 bg-dark text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
                            Fueling the <span className="text-secondary">Future</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            At GOGO Imperial Energy, our mission is to redefine fuel delivery in West Africa.
                            We combine cutting-edge technology with feet-on-the-street logistics to ensure you never run dry.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                <div>
                                    <h4 className="text-xl font-bold">Reliability</h4>
                                    <p className="text-gray-400">Guaranteed delivery windows, 24/7 support.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">2</div>
                                <div>
                                    <h4 className="text-xl font-bold">Quality Control</h4>
                                    <p className="text-gray-400">Digital metering and certified fuel quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[400px] w-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden border-2 border-primary/20">
                            <Image
                                src="/assets/images/contact-team.jpg"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary flex items-center justify-center rounded-3xl z-10">
                            <span className="text-black font-bold text-center text-sm leading-tight">24/7<br />Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
