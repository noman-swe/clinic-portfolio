'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import {
    FaInstagram,
    FaYoutube,
    FaFacebook,
    FaXTwitter,
    FaLinkedin
} from 'react-icons/fa6';
import { SoniaLogo } from '../shared/SoniaLogo';

export default function Footer() {
    return (
        <footer className="relative bg-primary text-white pt-20 pb-12 overflow-hidden font-sans antialiased ">

            {/* ১. ব্যাকগ্রাউন্ড গ্লো/সার্কেল ইফেক্ট bg-[#0b1e36] */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-[#14355a]/60 rounded-full blur-[140px] opacity-70 pointer-events-none z-0" />

            {/* ২. বড় ওয়াটারমার্ক টেক্সট text-[#132d4a]/25 */}
            <div className="absolute bottom-6 left-0 w-full text-center select-none pointer-events-none z-0 overflow-hidden px-4 hidden sm:block">
                <h1 className="text-6xl md:text-8xl lg:text-[13rem] font-black text-secondary/5 tracking-wider uppercase leading-none select-none">
                    Sonia Nursing Home
                </h1>
            </div>

            {/* ৩. মেইন কন্টেন্ট কন্টেইনার */}
            <div className="relative container mx-auto px-6 z-10">

                {/* টপ সেকশন: ৩টি কলাম */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start text-center md:text-left mb-16">

                    {/* বাম কলাম: কন্টাক্ট এবং সোশ্যাল মিডিয়া */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="font-bold tracking-wider text-cyan-400 uppercase text-xs">Emergency Helpline</h4>
                            <div className="flex items-center justify-center md:justify-start gap-2 bg-slate-900/40 border border-slate-800/60 backdrop-blur-xs px-4 py-2.5 rounded-xl w-fit mx-auto md:mx-0">
                                <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Open 24 Hours Daily</span>
                            </div>
                        </div>

                        {/* যোগাযোগের মাধ্যমসমূহ */}
                        <div className="space-y-3.5 pt-1">
                            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-300 group">
                                <div className="p-2 rounded-lg bg-slate-900/50 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:sonianursinghometg@gmail.com" className="hover:text-cyan-400 transition-colors duration-200 font-medium">
                                    sonianursinghometg@gmail.com
                                </a>
                            </div>

                            <div className="flex items-start justify-center md:justify-start gap-3 text-sm text-gray-300 group">
                                <div className="p-2 rounded-lg bg-slate-900/50 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shrink-0 mt-0.5">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col text-xs+ tracking-wide">
                                    <span className="text-gray-400 font-medium text-xs uppercase mb-0.5">Unit 1 Hotline</span>
                                    <a href="tel:+8801716836683" className="hover:text-cyan-300 transition-colors font-semibold text-sm">+880 1716-836683</a>
                                    <a href="tel:+8801315525908" className="hover:text-cyan-300 transition-colors font-semibold text-sm">+880 1315-525908</a>
                                </div>
                            </div>

                            <div className="flex items-start justify-center md:justify-start gap-3 text-sm text-gray-300 group">
                                <div className="p-2 rounded-lg bg-slate-900/50 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shrink-0 mt-0.5">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col text-xs+ tracking-wide">
                                    <span className="text-gray-400 font-medium text-xs uppercase mb-0.5">Unit 2 Hotline</span>
                                    <a href="tel:+8801315525906" className="hover:text-cyan-300 transition-colors font-semibold text-sm">+880 1315-525906</a>
                                    <a href="tel:+8801315525907" className="hover:text-cyan-300 transition-colors font-semibold text-sm">+880 1315-525907</a>
                                </div>
                            </div>
                        </div>

                        {/* সোশ্যাল আইকনসমূহ */}
                        <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                            {[
                                { Icon: FaFacebook, href: '#' },
                                { Icon: FaXTwitter, href: '#' },
                                { Icon: FaYoutube, href: '#' },
                                { Icon: FaInstagram, href: '#' },
                                { Icon: FaLinkedin, href: '#' }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 shadow-xs transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* মিডল কলাম: ব্র্যান্ড লোগো এবং কোয়েরি বাটন */}
                    <div className="flex flex-col items-center justify-center space-y-6 md:pt-4">
                        <div className="text-center group flex flex-col items-center">
                            <div className="mb-4 transform transition-transform duration-500 group-hover:scale-102">
                                <SoniaLogo />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-light  tracking-tight text-white uppercase leading-none">
                                <span className="text-cyan-400 font-medium">Sonia</span> Nursing Home
                            </h2>
                            <p className="text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase mt-1.5">
                                & Diagnostic Centre
                            </p>
                            {/* <p className="text-xs text-secondary/80 italic mt-3 font-serif">Transforming Healthcare in Tangail</p> */}
                            <p className="text-xs text-cyan-400/70 italic mt-3 font-serif">Transforming Healthcare in Tangail</p>
                        </div>

                        {/* Send Query Button */}
                        <Link
                            href="/contact"
                            className="relative overflow-hidden inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-10 py-3.5 rounded-full shadow-lg shadow-cyan-500/10 transition-all duration-300 active:scale-95 group"
                        >
                            <span>Send Query</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* ডান কলাম: অ্যাড্রেস এবং কপিরাইট */}
                    <div className="space-y-6 md:text-right text-sm text-gray-300">
                        <h4 className="font-bold tracking-wider text-cyan-400 uppercase text-xs">Hospital Locations</h4>
                        <div className="space-y-4 md:ml-auto max-w-sm">
                            <div className="space-y-1 group">
                                <div className="flex items-center justify-center md:justify-end gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <MapPin className="w-3 h-3 text-cyan-400" />
                                    <span>Unit 1</span>
                                </div>
                                <p className="leading-relaxed text-gray-300 hover:text-white transition-colors duration-200">
                                    New Bus Terminal, Tangail 1900, Bangladesh
                                </p>
                            </div>

                            <div className="space-y-1 group">
                                <div className="flex items-center justify-center md:justify-end gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <MapPin className="w-3 h-3 text-cyan-400" />
                                    <span>Unit 2</span>
                                </div>
                                <p className="leading-relaxed text-gray-300 hover:text-white transition-colors duration-200">
                                    New Bus Terminal, Opposite of Janata Bank, Tangail 1900, Bangladesh
                                </p>
                            </div>
                        </div>

                        {/* Google Maps Bridge Integration */}
                        <div className="pt-2 md:ml-auto max-w-50">
                            <a
                                href="https://maps.app.goo.gl/NubyURogB4CsvKdT9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            >
                                <span>View on Map Blueprint</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="border-slate-800/60 my-8 relative z-10" />

                {/* বটম সেকশন: কুইক লিংকস */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3.5 text-xs font-medium text-gray-400 max-w-5xl mx-auto relative z-10">
                    {[
                        { label: 'Find a Doctor', href: '/find-doctor' },
                        { label: 'Request an Appointment', href: '/appointment' },
                        { label: 'Online Report', href: '/report' },
                        { label: 'Career Opportunities', href: '/career' },
                        { label: 'Medical Specialties', href: '/speciality' },
                        { label: 'Health Packages', href: '/packages' },
                        { label: 'News & Media', href: '/news' },
                        { label: 'Medical Blogs', href: '/blogs' },
                        { label: 'About Our Center', href: '/about' },
                        { label: 'Patient Stories', href: '/stories' },
                        { label: 'Patient & Visitor Guide', href: '/guide' },
                        { label: 'Privacy Policy', href: '/privacy' },
                        { label: 'Terms of Service', href: '/terms' },
                    ].map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="hover:text-cyan-400 transition-colors duration-200 relative group"
                        >
                            <span>{link.label}</span>
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* কপিরাইট স্তর */}
                <p className="text-[11px] text-center text-slate-500 tracking-wide font-medium mt-10 relative z-10">
                    © {new Date().getFullYear()} Sonia Nursing Home & Diagnostic Centre. All rights reserved. Built with Enterprise Infrastructure.
                </p>

            </div>
        </footer>
    );
}