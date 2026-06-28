import Image from "next/image";

interface MrcpProps {
    data: { title: string; description: string; image: string };
}

export default function MrcpCenter({ data }: MrcpProps) {
    return (
        <section className="py-20 bg-slate-50 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight leading-snug">
                        {data.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                        {data.description}
                    </p>
                </div>
                <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-xl border border-slate-200 order-1 lg:order-2">
                    <Image src={data.image} alt="MRCP Evaluation" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}