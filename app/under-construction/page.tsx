// app/under-construction/page.tsx
import Link from "next/link";
import { Home, ArrowRight, Construction } from "lucide-react";

export const metadata = {
    title: "Page Under Construction | Sonia Nursing Home",
    description: "We are currently updating this section to bring you an enhanced medical platform experience.",
};

export default function UnderConstruction() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center bg-white font-sans text-slate-600 py-16">
            <div className="container mx-auto px-6 md:px-8 text-center max-w-2xl space-y-8">

                {/* GRAPHIC ELEMENT */}
                <div className="relative inline-flex items-center justify-center p-6 bg-sky-50 rounded-full text-[#08295B] mb-2">
                    <Construction size={48} className="text-sky-600 animate-spin-[spin_3s_linear_infinite]" />
                    <div className="absolute inset-0 rounded-full border-2 border-sky-200 opacity-40 scale-110" />
                </div>

                {/* WORK IN PROGRESS HEADING */}
                <div className="space-y-3">
                    <span className="text-sm font-bold tracking-widest text-sky-500 uppercase block">
                        Coming Soon
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#08295B]">
                        Page Under Process
                    </h1>
                    {/* Accent Line matching your Banner design */}
                    <div className="h-1 w-20 rounded-full bg-sky-400 mx-auto mt-4" />
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto leading-relaxed font-light">
                    We are currently crafting a brand new space to better support your health requirements. This section will be live shortly.
                    <span className="text-[#08295B] font-medium block mt-2">Thank you for your patience and support!</span>
                </p>

                {/* ACTION MATRIX */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

                    {/* PRIMARY BUTTON: BACK TO HOME WITH SIGNATURE HOVER EFFECT */}
                    <Link
                        href="/"
                        className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#08295B] text-white text-sm font-bold tracking-wide px-8 py-3.5 rounded-sm hover:bg-[#051c3f] transition-all duration-300 shadow-md text-center uppercase group w-full sm:w-auto before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
                    >
                        <Home size={16} />
                        <span>Go To Homepage</span>
                    </Link>

                    {/* SECONDARY BUTTON: ASK / QUERY LINK */}
                    <Link
                        href="/contact?query=true"
                        className="inline-flex items-center justify-center gap-2 border border-slate-200 text-[#08295B] text-sm font-bold tracking-wide px-8 py-3.5 rounded-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-center uppercase group w-full sm:w-auto"
                    >
                        <span>Send A Query</span>
                        <ArrowRight
                            size={16}
                            className="transform group-hover:translate-x-1 transition-transform duration-200 text-sky-600"
                        />
                    </Link>

                </div>

            </div>
        </main>
    );
}