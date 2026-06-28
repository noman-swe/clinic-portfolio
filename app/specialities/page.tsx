"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

// আপনার দেওয়া ৪৪টি স্পেশালিটি ও আইকন গেটার ফাংশনটি ইম্পোর্ট করুন
import { specialities, getSpecialityIcon } from "@/mock-data/specialities"; // পাথ প্রয়োজনানুযায়ী পরিবর্তন করুন

export default function AllSpecialitiesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // সার্চ কুয়েরির ওপর ভিত্তি করে স্পেশালিটি ফিল্টার করা (কেস-ইনসেনসিটিভ)
    const filteredSpecialities = specialities.filter((speciality) =>
        speciality.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-16">
            {/* Top Banner (As seen in image_24d4f7.jpg) */}
            <div className="relative w-full h-32.5 sm:h-87.5 md:h-100 bg-slate-200">
                <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop" // আপনার টিম বা ডক্টরস ব্যানার ইমেজের সোর্স দিন
                    alt="Our Specialities Banner"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" /> {/* হালকা ওভারলে */}
            </div>

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-6 py-4 text-xs sm:text-sm text-slate-500 flex items-center gap-2">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <span>&gt;</span>
                <span className="text-slate-800 font-medium">Specialities</span>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 mt-6">

                {/* Header and Search Box Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-slate-200/60 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                        Our All Specialities
                    </h1>

                    {/* Interactive Search Bar */}
                    <div className="relative w-full md:w-87.5">
                        <input
                            type="text"
                            placeholder="Search Speciality"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800 placeholder-slate-400 shadow-xs"
                        />
                        <Search
                            size={18}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                    </div>
                </div>

                {/* Specialities Responsive Grid (6 columns on large screens as per image_24d4f7.jpg) */}
                {filteredSpecialities.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredSpecialities.map((speciality, index) => {
                            const IconComponent = getSpecialityIcon(speciality);

                            // URL-friendly স্লাগ তৈরি করার লজিক (যা আপনার ডায়নামিক পেজের সাথে মিলবে)
                            const slug = speciality.toLowerCase().replace(/[^a-z0-9]+/g, "-");

                            return (
                                <Link
                                    key={index}
                                    href={`/specialities/${slug}`}
                                    className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col items-center justify-center text-center min-h-35 shadow-xs hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
                                >
                                    {/* Icon Wrapper (হালকা অ্যানিমেশন ও কালার টোনসহ) */}
                                    <div className="text-sky-500 group-hover:text-primary mb-3 transition-colors duration-300">
                                        <IconComponent size={28} strokeWidth={1.8} />
                                    </div>

                                    {/* Speciality Name */}
                                    <h3 className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-tight group-hover:text-primary transition-colors duration-300 wrap-break-word w-full">
                                        {speciality}
                                    </h3>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    /* No Results State */
                    <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-200">
                        <p className="text-slate-500 text-base">
                            No specialities found matching &quot;<span className="font-semibold text-primary">{searchQuery}</span>&quot;
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}