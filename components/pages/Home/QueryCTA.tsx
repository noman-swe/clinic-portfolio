"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QueryCTA() {
    return (
        <section className="bg-primary py-12 md:py-14 font-sans text-white border-y border-slate-800">
            <div className="container mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                    {/* LEFT SIDE: TEXT BLOCK */}
                    <div className="space-y-2 max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            Ask Sonia Nursing Home
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base font-medium">
                            Looking for world-class care? <span className="text-secondary font-semibold">We are here to support you</span> 24/7.
                        </p>
                    </div>

                    {/* RIGHT SIDE: CUSTOM INVERTED CTA BUTTON */}
                    <div className="w-full md:w-auto shrink-0">
                        <Link
                            href="/contact?query=true"
                            className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-primary text-sm font-bold tracking-wide px-8 py-3.5 rounded-sm hover:bg-slate-100 transition-all duration-300 shadow-md text-center uppercase group w-full md:w-auto before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-primary/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
                        >
                            <span>Send Query</span>
                            <ArrowRight
                                size={16}
                                className="transform group-hover:translate-x-1 transition-transform duration-200 text-primary"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}