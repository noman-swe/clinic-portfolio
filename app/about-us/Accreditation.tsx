import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface AccreditationProps {
    data: { title: string; description: string; goldSealImage: string };
}

export default function Accreditation({ data }: AccreditationProps) {
    return (
        <section className="bg-gradient-to-br from-[#051c3f] to-primary text-white py-20 px-6 text-center relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <div className="inline-flex p-3 bg-white/10 rounded-full text-sky-400 mb-2">
                    <ShieldCheck size={40} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                    {data.title}
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
                    {data.description}
                </p>
                <div className="pt-4 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full border-4 border-yellow-500/40 p-1 bg-amber-500/10 animate-bounce">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center shadow-lg">
                            <span className="text-[10px] font-black text-slate-900 tracking-tighter text-center leading-none">JCI<br />GOLD<br />SEAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}