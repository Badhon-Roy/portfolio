"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layout, Palette, Terminal } from "lucide-react";

const SKILLS = [
    {
        icon: <Code2 className="w-12 h-12 text-primary" />,
        title: "Frontend Development",
        description: "Building responsive and interactive UIs using modern React, Next.js and Tailwind CSS.",
        count: "01"
    },
    {
        icon: <Cpu className="w-12 h-12 text-secondary" />,
        title: "React & Next.js",
        description: "Expertise in high-performance web applications with server components and optimized state management.",
        count: "02"
    },
    {
        icon: <Terminal className="w-12 h-12 text-red-500" />,
        title: "TypeScript & JavaScript",
        description: "Writing clean, type-safe, and scalable code for robust application logic and data handling.",
        count: "03"
    },
    {
        icon: <Palette className="w-12 h-12 text-blue-500" />,
        title: "UI/UX Design",
        description: "Crafting pixel-perfect designs with focus on user experience, accessibility, and modern aesthetics.",
        count: "04"
    },
    {
        icon: <Globe className="w-12 h-12 text-purple-500" />,
        title: "Responsive Design",
        description: "Ensuring your website looks stunning and works perfectly across all device sizes and browsers.",
        count: "05"
    },
    {
        icon: <Layout className="w-12 h-12 text-orange-500" />,
        title: "Framer Motion",
        description: "Creating smooth, professional animations and transitions to make the UI feel alive and premium.",
        count: "06"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background pattern or subtle glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold text-lg md:text-xl mb-4 font-heading uppercase tracking-widest"
                    >
                        Expertise
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-4xl md:text-6xl font-bold font-heading leading-tight max-w-3xl mx-auto"
                    >
                        My Technical <span className="text-primary">Skills</span> & Tools.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-4xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                        >
                            {/* Inner Card Glow on Hover */}
                            <div className="absolute -inset-px bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl -z-10" />

                            <div className="mb-8 flex items-center justify-between">
                                <div className="p-5 bg-zinc-800/50 rounded-2xl group-hover:bg-primary/10 transition-all duration-500 group-hover:rotate-12">
                                    {skill.icon}
                                </div>
                                <span className="text-white/5 text-6xl font-bold font-heading select-none group-hover:text-primary/10 transition-colors duration-500">
                                    {skill.count}
                                </span>
                            </div>

                            <h3 className="text-white text-2xl font-bold mb-5 font-heading group-hover:text-primary transition-colors duration-500">
                                {skill.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed group-hover:text-white/70 transition-colors duration-500 mb-8">
                                {skill.description}
                            </p>

                            <motion.div
                                className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

