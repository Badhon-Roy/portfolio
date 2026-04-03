"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook, Heart, Github } from "lucide-react";
import LogoImg from "@/assets/images/logo.png"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-24 relative overflow-hidden bg-background-dark/80 border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <Link href="#" className="flex items-center gap-1 group mb-4">
                        <div className="w-10 lg:w-25 h-10 lg:h-25 rounded-full flex items-center justify-center overflow-hidden border-none group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src={LogoImg}
                                alt="Avatar Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-primary text-3xl lg:text-5xl font-bold font-heading">Ch<span className="text-secondary">â</span>mpa.</span>
                    </Link>

                    <p className="text-text-muted text-xl max-w-2xl mb-12 leading-relaxed">
                        Helping brands tell their stories through meaningful design and impactful
                        user experiences. Let's create something truly special together.
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                        {[
                            { icon: <Github size={24} />, color: "hover:bg-[#E4405F]", label: "GitHub", link: "https://github.com/Champa-Roy" },
                            { icon: <Twitter size={24} />, color: "hover:bg-[#1DA1F2]", label: "Twitter" },
                            { icon: <Linkedin size={24} />, color: "hover:bg-[#0077B5]", label: "LinkedIn" },
                            { icon: <Facebook size={24} />, color: "hover:bg-[#1877F2]", label: "Facebook", link: "https://www.facebook.com/champa.roy.753805" },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.link || "#"}
                                target="_blank"
                                className={`w-14 h-14 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:text-white ${social.color} hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-500 shadow-lg`}
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>

                    <div className="h-px w-full max-w-4xl bg-linear-to-r from-transparent via-white/10 to-transparent mb-12" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-text-muted font-medium text-sm md:text-base"
                    >
                        <p>© {new Date().getFullYear()} <span className="text-white font-bold">Champa Portfolio</span>. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
