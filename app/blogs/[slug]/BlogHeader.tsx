import { Calendar, Clock, User } from "lucide-react";

interface BlogHeaderProps {
    article: {
        title: string;
        category: string;
        author: string;
        date: string;
        readingTime: string;
    };
}

export default function BlogHeader({ article }: BlogHeaderProps) {
    return (
        <header className="bg-primary text-white rounded-xl p-8 md:p-12 relative overflow-hidden shadow-xs">
            <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-4">
                <span className="inline-block px-3 py-1 bg-[#4FD2FF]/20 border border-[#4FD2FF]/30 rounded-full text-xs font-semibold text-[#4FD2FF] tracking-wide uppercase">
                    {article.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-white/10 text-slate-300 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5">
                        <User size={15} className="text-sky-400" />
                        <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar size={15} className="text-sky-400" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={15} className="text-sky-400" />
                        <span>{article.readingTime} read</span>
                    </div>
                </div>
            </div>
        </header>
    );
}