"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setSending(true);
        const toastId = toast.loading("Sending message...");

        const SERVICE_ID = "service_0766obj";
        const TEMPLATE_ID = "template_6gq3ijb";
        const PUBLIC_KEY = "JlqIHu4JrN-7UVfww";

        // Manually construct parameter object to match EmailJS template variables
        const formData = new FormData(form.current);
        const templateParams = {
            name: formData.get("name"),
            email: formData.get("email"),
            title: formData.get("title"),
            message: formData.get("message"),
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                toast.success("Message sent successfully!", { id: toastId });
                form.current?.reset();
            })
            .catch((error) => {
                toast.error("Failed to send message. Please try again.", { id: toastId });
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                setSending(false);
            });
    };
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                containerStyle={{
                    top: 40,
                    zIndex: 99999,
                }}
            />
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-secondary font-bold text-lg md:text-xl mb-4 font-heading uppercase tracking-widest">Connect</h4>
                        <h2 className="text-white text-4xl md:text-6xl font-bold font-heading leading-tight mb-8">
                            Let's Build Something <span className="text-primary">Extraordinary</span>.
                        </h2>
                        <p className="text-text-muted text-lg mb-12 leading-relaxed font-medium max-w-lg">
                            Have a project in mind or just want to say hi? I'm always open to discussing new
                            ideas, creative projects, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail size={28} />, label: "Email Me", val: "roychampa826@gmail.com", color: "primary" },
                                { icon: <Phone size={28} />, label: "Call Me", val: "01825008626", color: "secondary" },
                                { icon: <MapPin size={28} />, label: "Visit Me", val: "Dhaka, Bangladesh", color: "primary" },
                            ].map((info, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className={`w-14 h-14 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center text-white group-hover:bg-${info.color} group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">{info.label}</p>
                                        <p className="text-white text-lg font-bold font-heading group-hover:text-primary transition-colors duration-500">{info.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-4 md:p-12 rounded-4xl bg-zinc-900/40 backdrop-blur-xl border border-white/5 relative shadow-2xl overflow-hidden group"
                    >

                        <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-white/60 font-bold text-xs uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl mt-2 px-6 py-4 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/60 font-bold text-xs uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl mt-2 px-6 py-4 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/60 font-bold text-xs uppercase tracking-widest ml-1">Project Subject</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    placeholder="Project Subject"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl mt-2 px-6 py-4 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/60 font-bold text-xs uppercase tracking-widest ml-1">Message Detail</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl mt-2 px-6 py-4 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className={`w-full py-5 bg-secondary cursor-pointer text-black rounded-2xl flex items-center justify-center gap-3 text-lg font-bold active:scale-95 transition-all duration-500 group shadow-lg ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {sending ? "Sending..." : "Send Message"}
                                <Send size={20} className={`${sending ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
