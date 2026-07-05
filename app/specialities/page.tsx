"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { specialities, getSpecialityIcon, specialitiesBanner } from "@/mock-data/specialities";
import SuperHero from "@/components/shared/SuperHero";

export default function AllSpecialitiesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSpecialities = specialities.filter((speciality) =>
        speciality.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-16">
            <SuperHero data={specialitiesBanner} />

            {/* Main Content Area*/}
            <div className="container mx-auto px-6 mt-6">
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

                {/* Specialities Responsive Grid  */}
                {filteredSpecialities.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredSpecialities.map((speciality, index) => {
                            const IconComponent = getSpecialityIcon(speciality);

                            const slug = speciality.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                            return (
                                <Link
                                    key={index}
                                    href={`/specialities/${slug}`}
                                    className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col items-center justify-center text-center min-h-35 shadow-xs hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
                                >
                                    <div className="text-sky-500 group-hover:text-primary mb-3 transition-colors duration-300">
                                        <IconComponent size={28} strokeWidth={1.8} />
                                    </div>

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