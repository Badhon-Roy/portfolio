"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import BacolaImg from "@/assets/images/bacola-project.png"
import CourseImg from "@/assets/images/course-management.png"
import MareedoImg from "@/assets/images/Mareedo.png";
import TeaHouseImg from "@/assets/images/tea-house.png"
import LeadChapture from "@/assets/images/lead-chapture.png"
import Landio from "@/assets/images/landio.png"
import Organio from "@/assets/images/Organico.png"
import JerinsParlour from "@/assets/images/jerins-parlour.png"

const PROJECTS = [
    {
        title: "Bacola - Online Grocery Market",
        category: "E-commerce Website",
        image: BacolaImg,
        link: "https://champa-roy.github.io/bacola/",
        github: "https://github.com/Champa-Roy/bacola"
    },
    {
        title: "Course Management System",
        category: "Educational Portal",
        image: CourseImg,
        link: "https://champa-roy.github.io/course-management/",
        github: "https://github.com/Champa-Roy/course-management"
    },
    {
        title: "Mareedo - Fashion Store",
        category: "E-commerce Website",
        image: MareedoImg,
        link: "https://champa-roy.github.io/Mareedo/",
        github: "https://github.com/Champa-Roy/Mareedo"
    },
    {
        title: "Tea House - Premium Tea Shop",
        category: "Sales Landing Page",
        image: TeaHouseImg,
        link: "https://champa-roy.github.io/tea-house/",
        github: "https://github.com/Champa-Roy/tea-house"
    },
    {
        title: "Lead Capture - Financial Services",
        category: "Business Landing Page",
        image: LeadChapture,
        link: "https://champa-roy.github.io/Lead-Capture/",
        github: "https://github.com/Champa-Roy/Lead-Capture"
    },
    {
        title: "Chatbot - SaaS AI Solution",
        category: "SaaS Landing Page",
        image: Landio,
        link: "https://champa-roy.github.io/chat-bot-landing-page/",
        github: "https://github.com/Champa-Roy/chat-bot-landing-page"
    },
    {
        title: "Jerins Parlour - Beauty Parlour",
        category: "E-commerce Website",
        image: JerinsParlour,
        link: "https://champa-roy.github.io/jerins-parlour/",
        github: "https://github.com/Champa-Roy/jerins-parlour"
    },
    {
        title: "Organico - Kitchen Store",
        category: "E-commerce Website",
        image: Organio,
        link: "https://champa-roy.github.io/Organico/",
        github: "https://github.com/Champa-Roy/Organico"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold text-lg md:text-xl mb-4 font-heading uppercase tracking-widest"
                        >
                            Recent Works
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-4xl md:text-6xl font-bold font-heading leading-tight"
                        >
                            Featured <span className="text-primary">Projects</span> & Case Studies.
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            <Link href={project.link}>
                                <div className="relative aspect-video overflow-hidden rounded border-2 lg:border-8 border-white/5 bg-zinc-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Premium Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            {/* <div className="flex items-center gap-4 mb-4">
                                            <span className="w-10 h-px bg-primary" />
                                            <span className="text-primary bg-secondary px-2 py-1 rounded font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                                                {project.category}
                                            </span>
                                        </div> */}
                                            <h3 className="text-white text-xl md:text-4xl font-bold font-heading mb-6">
                                                {project.title}
                                            </h3>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="w-8 lg:w-14 h-8 lg:h-14 bg-white rounded-full flex items-center justify-center text-background-dark hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
                                            >
                                                <ArrowUpRight className="size-[18px] lg:size-8" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Desktop Info (Visible below card) */}
                            <div className="mt-8 flex items-center justify-between lg:group-hover:px-4 transition-all duration-500">
                                <div>
                                    <span className="text-primary/60 text-sm font-bold uppercase tracking-widest block mb-2">{project.category}</span>
                                    <h3 className="text-white text-xl lg:text-2xl font-bold font-heading group-hover:text-primary transition-colors duration-500">
                                        {project.title}
                                    </h3>
                                </div>
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="w-12 h-12 border border-white/10 cursor-pointer rounded-full flex items-center justify-center text-white/40 group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500"
                                    >
                                        <Github size={20} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
