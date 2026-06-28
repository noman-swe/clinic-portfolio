"use client";

import { specialities } from "@/mock-data/specialities";
import Link from "next/link";

interface MegaMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MegaMenu({ isOpen, setIsOpen }: MegaMenuProps) {
    if (!isOpen) return null;

    // ৪টি কলামে ডাটা ভাগ করা
    const columns = [
        specialities.slice(0, 11),
        specialities.slice(11, 22),
        specialities.slice(22, 33),
        specialities.slice(33),
    ];

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            // টপ পজিশন top-full এবং ওভারফ্লো কন্ট্রোল অ্যাড করা হয়েছে
            className="absolute left-0 top-full w-full bg-primary shadow-2xl border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200 z-50 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20"
        >
            <div className="mx-auto max-w-7xl px-8 py-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y-2">
                    {columns.map((column, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            {column.map((item) => (
                                <Link
                                    key={item}
                                    href={`/specialities/${item
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, "-")}`}
                                    className="block text-white/90 text-[14px] font-medium hover:text-[#4FD2FF] hover:translate-x-1 transition-all duration-200"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* নিচের বাটনটি */}
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                    <Link
                        href="/specialities"
                        className="bg-white text-primary text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-[#4FD2FF] hover:text-white transition-all duration-300 shadow-md"
                    >
                        View All Specialities
                    </Link>
                </div>
            </div>
        </div>
    );
}