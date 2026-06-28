"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, Stethoscope, Calendar, FileText, Video, Info } from "lucide-react";

// স্লাইডারের ডাটা (মেডিকেল রিলেটেড প্রিমিয়াম ইমেজ এবং কন্টেন্ট)
const slides = [
    {
        id: 1,
        title: "Your Health Is Our First Priority",
        subtitle: "Welcome to Sonia Nursing Home & Diagnostic Centre",
        description: "Providing world-class healthcare services with expert doctors, advanced medical technologies, and compassionate care for you and your family.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop", // প্রফেশনাল হসপিটাল ইমেজ
    },
    {
        // & Accuracy
        id: 2,
        title: "Advanced Diagnostics ",
        subtitle: "State-of-the-Art Laboratory Services",
        description: "Get precise and accurate lab reports with our high-tech medical machinery under the supervision of highly experienced pathologists.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop", // ল্যাব/ডায়াগনস্টিক ইমেজ
    },
];

// ওভারল্যাপিং কুইক অ্যাকশন বাটনের ডাটা
const quickActions = [
    { name: "FIND A DOCTOR", href: "/doctors", icon: Stethoscope },
    { name: "REQUEST AN APPOINTMENT", href: "/appointment", icon: Calendar },
    { name: "ONLINE REPORT", href: "/reports", icon: FileText },
    { name: "TELE-ONLINE", href: "/tele-health", icon: Video },
    { name: "PATIENT & VISITORS GUIDE", href: "/guide", icon: Info },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // অটো-প্লে স্লাইডার (প্রতি ৫ সেকেন্ড পর পর চেঞ্জ হবে)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);


    return (
        // আমরা ওভারল্যাপ করার জন্য নিচে পর্যাপ্ত মার্জিন (mb-24 থেকে mb-32) রেখেছি
        <section className="relative w-full ">
            {/* SLIDER WRAPPER */}
            <div className="relative h-137.5 sm:h-150 lg:h-150 xl:h-175 w-full overflow-hidden bg-slate-900">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Background Image with Dark Overlay for Better Readability */}
                        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent z-10" />
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                        />

                        {/* Slide Content */}
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="mx-auto container w-full px-6 md:px-8">
                                <div className="max-w-2xl text-white space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                    <span className="inline-block bg-sky-500/20 text-[#4FD2FF] text-xs sm:text-sm font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                                        {slide.subtitle}
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl">
                                        {slide.description}
                                    </p>
                                    <div className="pt-2 flex flex-wrap gap-4">
                                        <Link
                                            href="/about-us"
                                            className="bg-sky-500 text-primary font-semibold px-6 py-3 rounded-sm hover:bg-white hover:text-primary transition-all duration-300 shadow-lg text-sm"
                                        >
                                            Our Services
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="border-2 border-white/80 text-white font-semibold px-6 py-3 rounded-sm hover:bg-white hover:text-primary transition-all duration-300 text-sm"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* ARROWS BUTTONS */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-sky-500 text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 group hidden sm:block shadow-md cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} className="group-hover:scale-110" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-sky-500 text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 group hidden sm:block shadow-md cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} className="group-hover:scale-110" />
                </button>

                {/* SLIDE INDICATORS (DOTS) */}
                <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${index === currentSlide ? "w-8 bg-sky-500" : "w-2 bg-white/40 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* OVERLAPPING ACTION BUTTONS SECTION */}
            {/* 'absolute w-full bottom-0 translate-y-1/2' এর মাধ্যমে কার্ডগুলো নিখুঁতভাবে 
        হিরো স্লাইডারের বর্ডার ক্রস করে নিচের সেকশনের উপর প্রো-লেভেলে ওভারল্যাপ (Overlap) করবে। max-w-7xl
      */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 w-full container px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
                    {quickActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                            <Link
                                key={index}
                                href={action.href}
                                // কার্ডগুলোতে প্রাইমারি নেভি ব্লু এবং হোভারে স্কাই ব্লু থিম দেওয়া হয়েছে
                                className="group flex lg:flex-col items-center justify-start lg:justify-center text-left lg:text-center p-5 lg:p-6 bg-primary text-white rounded-md shadow-2xl transition-all duration-300 hover:bg-sky-500 hover:text-primary hover:-translate-y-2 gap-4 lg:gap-3 border-b-4 border-sky-500/30 hover:border-primary/20"
                            >
                                {/* <div> */}
                                {/* Icon Wrapper */}
                                <div className="p-3 bg-white/10 rounded-lg text-sky-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shrink-0">
                                    <IconComponent size={24} strokeWidth={2} />
                                </div>

                                {/* Button Text */}
                                <span className="text-[13px] sm:text-[14px] font-bold tracking-wide uppercase leading-snug">
                                    {action.name}
                                </span>
                                {/* </div> */}

                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}