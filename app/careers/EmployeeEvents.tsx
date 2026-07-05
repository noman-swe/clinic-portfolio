import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface EventItem {
    id: number;
    slug: string;
    date: string;
    title: string;
    image: string;
}

interface EmployeeEventsProps {
    data: {
        title: string;
        events: EventItem[];
    };
}

export default function EmployeeEvents({ data }: EmployeeEventsProps) {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="mx-auto container px-6 md:px-8 space-y-12">

                {/* Section Title */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary tracking-tight">{data.title}</h2>
                    <div className="h-1 w-16 bg-sky-500 mx-auto mt-3" />
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.events.map((event) => (
                        <article key={event.id} className="group flex flex-col bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
                            <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                        <Calendar size={14} className="text-sky-500" />
                                        <span>{event.date}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-primary leading-snug line-clamp-2 group-hover:text-sky-600 transition-colors">
                                        {event.title}
                                    </h3>
                                </div>
                                <Link
                                    href={`/careers/events/${event.slug}`}
                                    className="inline-block text-xs font-bold text-sky-600 hover:text-primary transition-colors pt-2 uppercase tracking-wider"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}