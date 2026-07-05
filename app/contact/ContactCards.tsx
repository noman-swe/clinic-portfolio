import { Phone, MapPin, Clock, LucideIcon } from "lucide-react";

interface InfoCardItem {
    id: number;
    title: string;
    description: string;
    detail: string;
    iconName: "Phone" | "MapPin" | "Clock";
}

interface ContactCardsProps {
    data: InfoCardItem[];
}

const IconMap: Record<string, LucideIcon> = {
    Phone,
    MapPin,
    Clock,
};

export default function ContactCards({ data }: ContactCardsProps) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((item) => {
                const IconComponent = IconMap[item.iconName];
                return (
                    <div 
                        key={item.id} 
                        className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300 group"
                    >
                        <div className="text-sky-500 group-hover:text-primary mb-4 transition-colors duration-300 p-3 bg-slate-50 rounded-full">
                            <IconComponent size={28} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-3">
                            {item.description}
                        </p>
                        <span className="text-sm font-semibold text-slate-800 wrap-break-word w-full">
                            {item.detail}
                        </span>
                    </div>
                );
            })}
        </section>
    );
}