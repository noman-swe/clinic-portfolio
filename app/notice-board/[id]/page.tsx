import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, Share2 } from "lucide-react";
import { noticeMockData } from "@/mock-data/notices";

interface NoticeDetailsProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NoticeDetailsProps) {
    const { id } = await params;
    const notice = noticeMockData.find((n) => n.id === id);
    return {
        title: notice ? `${notice.title} | Notice Board` : "Notice Not Found",
    };
}

export default async function NoticeDetailsPage({ params }: NoticeDetailsProps) {
    const { id } = await params;
    const notice = noticeMockData.find((n) => n.id === id);

    if (!notice) notFound();

    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Top Navigation */}
            <div className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40">
                <div className="container mx-auto flex items-center">
                    <Link
                        href="/notice-board"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Notice Board
                    </Link>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="container mx-auto px-6 mt-10">
                <div className="bg-white rounded-xl p-6 md:p-10 border border-slate-100 shadow-xs space-y-6">

                    {/* Notice Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm ${notice.isUrgent ? "bg-red-50 text-red-600 ring-1 ring-red-100" : "bg-slate-100 text-slate-600"
                            }`}>
                            {notice.category} {notice.isUrgent && "• Urgent"}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <Calendar size={14} />
                            <span>প্রকাশের তারিখ: {notice.date}</span>
                        </div>
                    </div>

                    {/* Notice Title */}
                    <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight flex items-start gap-2">
                        <FileText className="text-sky-500 shrink-0 mt-1" size={24} />
                        {notice.title}
                    </h1>

                    {/* Notice Body */}
                    <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 pt-2 whitespace-pre-line">
                        {notice.content}
                    </div>

                    {/* Notice Footer Authority Sign */}
                    <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-xs md:text-sm text-slate-500">
                        <div>
                            <p className="font-bold text-primary">কর্তৃপক্ষ</p>
                            <p>সোনিয়া নার্সিং হোম অ্যান্ড ডায়াগনস্টিক সেন্টার</p>
                        </div>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-600 rounded-md border border-slate-100 transition-colors text-xs">
                            <Share2 size={13} /> Share
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}