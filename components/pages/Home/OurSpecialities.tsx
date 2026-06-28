"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// সেন্ট্রাল মক ডাটা ফাইল থেকে মেইন অ্যারে এবং আইকন গেটার ফাংশনটি নিয়ে আসা হলো
import { specialities, getSpecialityIcon } from "@/mock-data/specialities";

export default function OurSpecialities() {
    const [page, setPage] = useState(0);

    // DRY প্র্যাকটিস: মেইন অ্যারে থেকে প্রথম ১২টি আইটেম স্লাইডারের জন্য ফিল্টার করা হলো
    // const sliderItems = specialities.slice(0, 12);

    const itemsPerPage = 8;
    const totalPages = Math.ceil(specialities.length / itemsPerPage);

    // কারেন্ট পেজের ডাটা স্লাইস করা
    const currentItems = specialities.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const nextPage = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="py-20 bg-white font-sans">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT SIDE: DOCTOR & PATIENT IMAGE */}
                    <div className="lg:col-span-4 relative h-112.5 sm:h-125 lg:h-135 w-full rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                            alt="Doctor attending patient"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* RIGHT SIDE: CONTENT & GRID */}
                    <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">

                        {/* Header Title */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#08295B] tracking-tight">
                                Our Specialities
                            </h2>
                        </div>

                        {/* Specialities 4x2 Grid (ডায়নামিক ডাটা ও আইকন) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
                            {currentItems.map((item, index) => {
                                // সেন্ট্রাল ম্যাপার থেকে টেক্সট অনুযায়ী Lucide আইকন কম্পোনেন্ট তুলে আনা হচ্ছে
                                const IconComponent = getSpecialityIcon(item);

                                return (
                                    <Link
                                        key={index}
                                        href={`/specialities/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        className="group flex flex-col items-center justify-center text-center p-6 bg-white border border-slate-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-sky-300 hover:-translate-y-1 h-33.75"
                                    >
                                        {/* Icon Container */}
                                        <div className="text-[#08295B] group-hover:text-sky-600 transition-colors duration-300 mb-3">
                                            <IconComponent size={32} strokeWidth={1.5} />
                                        </div>
                                        {/* Text */}
                                        <span className="text-[13px] font-semibold text-[#08295B] leading-tight max-w-35">
                                            {item}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* BOTTOM CONTROLS: PAGINATION ARROWS & VIEW ALL BUTTON */}
                        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-4">

                            {/* Left/Right Arrows */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={prevPage}
                                    className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                                    aria-label="Previous specialties"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextPage}
                                    className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                                    aria-label="Next specialties"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* View All Button */}
                            <div>
                                <Link
                                    href="/specialities"
                                    className="relative overflow-hidden inline-block bg-primary text-white text-sm font-semibold tracking-wide px-8 py-3.5 rounded-sm hover:bg-primary transition-all duration-300 shadow-md text-center uppercase before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
                                >
                                    View All Specialities
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}