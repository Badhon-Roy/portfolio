"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MyImg from "@/assets/images/my-image.jpg";

const STATS = [
    { label: "Project Complete", value: "15+" },
    { label: "Years Experience", value: "0.5+" }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 h-[700px] rounded-4xl overflow-hidden border-8 border-white/5 bg-zinc-900 group">
                            <Image
                                src={MyImg}
                                alt="About Ronald"
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Inner Overlay Glow */}
                            <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Decorative floating badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -left-8 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
                        >
                            <p className="text-primary text-4xl font-bold font-heading">0.5+</p>
                            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mt-1">Years Exp.</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-secondary font-bold text-xl mb-4 font-heading uppercase tracking-widest">About Me</h4>
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 font-heading leading-tight">
                            I design and develop <span className="text-primary">experiences</span> that people love.
                        </h2>
                        <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-xl">
                            With over a decade of experience in the design industry, I've helped countless
                            brands bring their visions to life. My approach combines deep user research
                            with cutting-edge aesthetics to create digital products that stand out.
                        </p>

                        <div className="grid grid-cols-2 gap-10 mb-12">
                            {STATS.slice(0, 3).map((stat, i) => (
                                <div key={i} className="flex flex-col group">
                                    <span className="text-white text-4xl font-bold font-heading group-hover:text-primary transition-colors duration-300">
                                        {stat.value}
                                    </span>
                                    <div className="h-1 w-10 bg-primary/20 mt-2 mb-3 group-hover:w-20 transition-all duration-300" />
                                    <span className="text-text-muted text-sm uppercase tracking-widest font-semibold">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#contact"
                            className="px-10 py-5 bg-primary text-white rounded-full inline-flex items-center gap-3 text-lg font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            Get In Touch
                            <ArrowUpRight size={24} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
