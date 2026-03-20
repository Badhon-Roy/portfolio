"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LogoImg from "@/assets/images/logo.png"

const NAV_LINKS = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    // { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-[padding,background-color,backdrop-filter] duration-500 ${scrolled
                ? "py-3 bg-background-dark/90 backdrop-blur-lg shadow-2xl"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-1 group">
                    <div className="w-12 h-10 rounded-full flex items-center justify-center overflow-hidden border-none group-hover:scale-110 transition-transform duration-500">
                        <Image
                            src={LogoImg}
                            alt="Avatar Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-primary text-3xl font-bold font-heading">Ch<span className="text-secondary">â</span>mpa.</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-primary transition-all text-sm font-bold uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden md:flex px-7 py-3 bg-white text-background-dark rounded-full items-center gap-2 text-sm font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                    >
                        Resume
                        <ArrowUpRight size={18} />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background-dark/98 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-2xl font-bold font-heading hover:text-primary transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                            <Link
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-8 py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 text-xl font-bold shadow-2xl shadow-primary/20"
                            >
                                Resume
                                <ArrowUpRight size={24} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
