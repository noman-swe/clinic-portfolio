import Image from "next/image";

interface HRMessageProps {
    data: {
        title: string;
        directorName: string;
        directorTitle: string;
        directorCompany: string;
        image: string;
        paragraphs: string[];
    };
}

export default function HRMessage({ data }: HRMessageProps) {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="mx-auto container px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Sidebar Profile */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-8">
                        <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-md mb-4 bg-slate-100">
                            <Image
                                src={data.image}
                                alt={data.directorName}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{data.directorName}</h3>
                        <p className="text-sky-600 text-sm font-semibold">{data.directorTitle}</p>
                        <p className="text-slate-400 text-xs mt-1">{data.directorCompany}</p>
                    </div>

                    {/* Right Content Paragraphs */}
                    <div className="lg:col-span-8 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-sky-500">
                            {data.title}
                        </h2>
                        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light text-justify">
                            {data.paragraphs.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}