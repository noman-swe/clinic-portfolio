'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowUp,
    Send,
    ShieldCheck,
    ExternalLink
} from 'lucide-react';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn
} from 'react-icons/fa6';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface LinkColumn {
    title: string;
    links: FooterLink[];
}

interface ContactDetail {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    lines: string[];
}

// ==========================================
// NAVIGATION DATA
// ==========================================
const QUICK_LINKS: LinkColumn = {
    title: 'Quick Links',
    links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Our Doctors', href: '/doctors' },
        { label: 'Departments', href: '/departments' },
        { label: 'Services', href: '/services' },
        { label: 'Health Packages', href: '/packages' },
        { label: 'Contact', href: '/contact' },
    ],
};

const MEDICAL_SERVICES: LinkColumn = {
    title: 'Medical Services',
    links: [
        { label: 'Cardiology', href: '/services/cardiology' },
        { label: 'Gynecology & Obstetrics', href: '/services/gynecology' },
        { label: 'Orthopedics', href: '/services/orthopedics' },
        { label: 'Pediatrics', href: '/services/pediatrics' },
        { label: 'General Surgery', href: '/services/general-surgery' },
        { label: 'Emergency Care', href: '/services/emergency' },
        { label: 'Diagnostic Services', href: '/services/diagnostics' },
    ],
};

const SOCIAL_LINKS = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const CONTACT_INFO: ContactDetail[] = [
    {
        icon: MapPin,
        title: 'Location',
        lines: ['New Bus Terminal', 'Tangail, Bangladesh'],
    },
    {
        icon: Phone,
        title: 'Emergency Contact',
        lines: ['Unit-1: +880 1234 567890', 'Unit-2: +880 1234 567891'],
    },
    {
        icon: Mail,
        title: 'Email Address',
        lines: ['sonianursinghometg@gmail.com'],
    },
    // {
    //     icon: Clock,
    //     title: 'Working Hours',
    //     lines: ['24/7 Emergency & Ambulance', 'Diagnostics: 7:00 AM - 10:00 PM'],
    // },
];

const LEGAL_LINKS: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Monitor scroll progression for "Scroll to Top" visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white text-slate-600 border-t border-slate-100 font-sans tracking-tight overflow-hidden selection:bg-sky-500/10 selection:text-primary">
            {/* Premium subtle gradient overlay */}
            <div className="absolute inset-0 bg-radial-[at_top_right] from-sky-50/30 via-transparent to-transparent pointer-events-none" />

            {/* Main Footer Content Grid */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-100">

                    {/* Column 1: Brand & Credential Statement */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/10 group transition-transform duration-300 hover:scale-105">
                                    <div className="w-4 h-4 rounded-full border-2 border-sky-400 animate-pulse" />
                                </div>
                                <span className="font-bold text-xl text-primary leading-tight tracking-tight">
                                    Sonia <span className="text-sky-500 font-medium">Nursing Home</span>
                                </span>
                            </div>
                            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                                & Diagnostic Centre
                            </p>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
                            Providing enterprise-grade medical excellence, advanced diagnostics, and compassionate patient care around the clock in Tangail.
                        </p>

                        {/* 24/7 Emergency Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-rose-50 border border-rose-100 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-rose-700 tracking-wide uppercase">
                                24/7 Emergency Trauma Care
                            </span>
                        </div>

                        {/* Social Media Integration */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow Sonia Nursing Home on ${social.label}`}
                                        className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-primary hover:border-primary hover:bg-slate-50/50 shadow-xs transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Navigation Hierarchy */}
                    <div className="lg:col-span-2 lg:pl-4">
                        <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">
                            {QUICK_LINKS.title}
                        </h3>
                        <ul className="space-y-3.5" role="list">
                            {QUICK_LINKS.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group relative inline-flex items-center text-sm text-slate-500 hover:text-primary transition-colors duration-200"
                                    >
                                        <span>{link.label}</span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Medical Specializations */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-5">
                            {MEDICAL_SERVICES.title}
                        </h3>
                        <ul className="space-y-3.5" role="list">
                            {MEDICAL_SERVICES.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group relative inline-flex items-center text-sm text-slate-500 hover:text-primary transition-colors duration-200"
                                    >
                                        <span>{link.label}</span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Context */}
                    <div className="lg:col-span-2 space-y-5">
                        <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            {CONTACT_INFO.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <div key={idx} className="flex gap-3 text-sm group">
                                        <div className="mt-0.5 p-1.5 rounded-lg bg-slate-50 text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors duration-300 h-fit">
                                            <Icon className="w-3.5 h-3.5" />
                                        </div>
                                        <div>
                                            <span className="block font-medium text-primary text-xs mb-0.5">
                                                {info.title}
                                            </span>
                                            {info.lines.map((line, lIdx) => (
                                                <p key={lIdx} className="text-slate-500 leading-tight text-xs+">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Google Maps External Routing Trigger */}
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-xs font-semibold text-primary bg-slate-50 border border-slate-200 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group w-full justify-center shadow-xs"
                        >
                            <span>Find Us On Google Maps</span>
                            <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    {/* Column 5: Newsletter & Communication Channel */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">
                            Stay Informed
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Subscribe to our monthly healthcare newsletter for clinical updates, wellness tips, and diagnostic checkup packages.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-2.5">
                            <div className="relative flex items-center">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your professional email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-primary focus:bg-white transition-all duration-300 pr-12 shadow-xs"
                                    aria-label="Email Address for newsletter"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe to newsletter"
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 active:scale-95 flex items-center justify-center group"
                                >
                                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>

                            {isSubscribed && (
                                <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 animate-fade-in">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Subscription confirmed securely. Thank you!</span>
                                </div>
                            )}

                            <p className="text-[11px] text-slate-400 leading-normal">
                                Your data privacy is guaranteed. Opt-out seamlessly at any moment with a single click.
                            </p>
                        </form>
                    </div>

                </div>

                {/* Bottom Infrastructure: Legal & Attribution */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                        <span>
                            © {new Date().getFullYear()} Sonia Nursing Home & Diagnostic Centre. All Rights Reserved.
                        </span>
                        <div className="flex items-center gap-4">
                            {LEGAL_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-100 px-3 py-1.5 rounded-lg text-slate-400">
                        <span>Engineered by</span>
                        <a
                            href="#"
                            className="text-primary font-semibold hover:text-sky-500 transition-colors duration-200"
                            rel="noopener noreferrer"
                        >
                            Enterprise Systems Division
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Action Button: Back to Hierarchy Root */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                className={`fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-xl transition-all duration-300 z-50 hover:bg-primary/90 hover:-translate-y-1 hover:scale-105 group ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
        </footer>
    );
}