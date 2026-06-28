import Image from "next/image";

interface WhoWeAreProps {
    data: { title: string; description: string; image: string };
}

export default function WhoWeAre({ data }: WhoWeAreProps) {
    return (
        <section className="bg-gray-light text-primary py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 lg:py-8">
                <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <Image src={data.image} alt={data.title} fill className="object-cover" sizes="128" />
                </div>
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight relative pb-3 ">
                        {data.title}
                    </h2>
                    <p className="text-slate-800 text-base md:text-lg leading-relaxed font-light">
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    );
}