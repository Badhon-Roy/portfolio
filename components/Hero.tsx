"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyImg from "@/assets/images/my-image.jpg";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient circular-pattern">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-32 pb-20">
                {/* Left Content */}
                <div className="max-w-2xl z-10 w-full">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-secondary font-bold text-lg md:text-xl mb-4 uppercase tracking-widest font-heading"
                    >
                        Welcome to my world
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight"
                    >
                        Hi, I'm <span className="text-primary">Champa</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white text-3xl md:text-4xl font-semibold mb-8 font-heading"
                    >
                        Frontend Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-text-muted text-lg max-w-lg mb-10 leading-relaxed font-medium"
                    >
                        Crafting high-performance, responsive web applications with modern frontend technologies.
                        Turning complex designs into pixel-perfect, interactive digital experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-primary text-white rounded-full inline-flex items-center gap-2 text-lg font-bold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
                        >
                            Hire Me
                            <ArrowUpRight size={22} />
                        </Link>
                        <Link
                            href="#portfolio"
                            className="px-8 py-4 border-2 border-white/10 text-white rounded-full inline-flex items-center gap-2 text-lg font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1"
                        >
                            View Portfolio
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Hero Image & Stats */}
                <div className="relative z-10 hidden lg:block pr-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main Profile Circle */}
                        <div className="w-[500px] h-[500px] border-8 border-white/5 rounded-full overflow-hidden flex items-center justify-center bg-linear-to-br from-[#1eb2ff] to-[#0061ff] shadow-2xl relative">
                            <Image
                                src={MyImg}
                                alt="Ronald"
                                width={500}
                                height={500}
                                className="object-cover object-center w-full h-full scale-105"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: -20 }}
                            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 w-24 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20"
                        >
                            <span className="text-3xl font-bold text-[#0061ff]">HTML</span>
                        </motion.div>

                        <motion.div
                            initial={{ y: -20 }}
                            animate={{ y: 20 }}
                            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
                            className="absolute top-20 -right-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20"
                        >
                            <span className="text-3xl font-bold text-[#ff6b00]">CSS</span>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1.1 }}
                            transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse", ease: "easeInOut" }}
                            className="absolute -bottom-5 -right-5 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20"
                        >
                            <span className="text-3xl font-bold text-primary">JS</span>
                        </motion.div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-10 -left-20 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center gap-4 shadow-2xl z-30"
                        >
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white">
                                <CheckCircle2 size={32} />
                            </div>
                            <div>
                                <p className="text-white font-extrabold text-2xl leading-none">15+</p>
                                <p className="text-white/60 text-sm font-semibold mt-1">Projects Completed</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

