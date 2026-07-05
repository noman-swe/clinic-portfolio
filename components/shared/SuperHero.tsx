import { IconMap } from "@/mock-data/iconMap";
import { BannerData } from "@/types";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

interface SuperHeroProps {
    data: BannerData;
}

const SuperHero = ({ data }: SuperHeroProps) => {
    const {
        title,
        description,
        breadcrumb,
        currentPage,
        icon: Icon = Mail, // default icon
    } = data;

    // const Icon = iconName ? IconMap[iconName] : Mail;
    const SelectedIcon = data.icon || (data.iconName ? IconMap[data.iconName] : Mail);
    

    return (
        <div className="bg-primary text-white py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 space-y-4">

                <div className="p-4 bg-white/10 rounded-full text-[#4FD2FF] mb-2 animate-pulse">
                    <SelectedIcon size={40} strokeWidth={1.5} />
                </div>

                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-300 tracking-wider uppercase">
                    <Link href={breadcrumb.href}>
                        {breadcrumb.label}
                    </Link>

                    <ChevronRight size={12} />

                    <span className="text-white">{currentPage}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-4xl">
                    {title}
                </h1>

                <p className="text-slate-200 max-w-2xl mx-auto text-sm md:text-base">
                    {description}
                </p>

            </div>
        </div>
    );
};

export default SuperHero;