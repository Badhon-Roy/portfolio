"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
    {
        company: "Google Inc.",
        role: "Senior UI/UX Designer",
        period: "2020 - Present",
        description: "Successfully managing the design team and focusing on the core product design system.",
        color: "blue"
    },
    {
        company: "Adobe System",
        role: "UX Researcher",
        period: "2018 - 2020",
        description: "Leading user research and usability testing for Adobe Creative Cloud applications.",
        color: "red"
    },
    {
        company: "Design Studio",
        role: "Junior Designer",
        period: "2016 - 2018",
        description: "Working on various client projects including branding and web design.",
        color: "orange"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold text-lg md:text-xl mb-4 font-heading uppercase tracking-widest"
                    >
                        Professional Path
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-4xl md:text-6xl font-bold font-heading leading-tight max-w-3xl mx-auto"
                    >
                        My Work <span className="text-primary">Experience</span>
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Line with Gradient */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/0 via-primary/30 to-primary/0 hidden md:block" />

                    <div className="space-y-16">
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={exp.period}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-12 relative ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Period for Desktop */}
                                <div className="hidden md:flex w-1/2 justify-center">
                                    <div className={`text-3xl font-bold font-heading ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-white/20 group-hover:text-primary transition-colors duration-500`}>
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Circle Divider */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20">
                                    <div className="w-10 h-10 rounded-full bg-background-dark border-4 border-zinc-800 flex items-center justify-center group">
                                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                    <div className={`p-8 rounded-4xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden ${i % 2 === 0 ? 'md:text-left' : 'md:text-left md:ml-auto'}`}>
                                        {/* Card Hover Glow */}
                                        <div className="absolute -inset-px bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />

                                        <div className="md:hidden text-primary font-bold mb-2 uppercase tracking-widest text-sm">
                                            {exp.period}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-2 font-heading group-hover:text-primary transition-colors duration-500">
                                            {exp.role}
                                        </h3>
                                        <p className="text-secondary font-semibold text-lg mb-4">{exp.company}</p>
                                        <p className="text-text-muted leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-500">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
