"use client";

import Link from "next/link";
import { Mail, ChevronRight } from "lucide-react";

export default function ContactHero() {
    return (
        <div className="bg-primary text-white py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 space-y-4">
                <div className="p-4 bg-white/10 rounded-full text-[#4FD2FF] mb-2 animate-pulse">
                    <Mail size={40} strokeWidth={1.5} />
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-300 tracking-wider uppercase">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-white">Contact Us</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-4xl">
                    We Are Here To Assist You
                </h1>
                <p className="text-slate-200 max-w-2xl mx-auto text-sm md:text-base">
                    Have questions about our medical departments, testing parameters, or booking metrics? Reach out directly.
                </p>
            </div>
        </div>
    );
}