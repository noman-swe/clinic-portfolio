import Link from "next/link";
import { Megaphone, Calendar, ArrowRight, AlertCircle } from "lucide-react";
import { noticeMockData, Notice } from "@/mock-data/notices";
import Pagination from "@/components/shared/Pagination"; // ইম্পোর্ট করা হয়েছে

export const metadata = {
    title: "Notice Board | Sonia Nursing Home",
    description: "Sonia Nursing Home & Diagnostic Center এর সর্বশেষ নোটিশ এবং জরুরী বিজ্ঞপ্তি সমূহ।",
};

const ITEMS_PER_PAGE = 9;

// Next.js 15-এ searchParams একটি Promise টাইপ হয়
interface PageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function NoticeBoardPage({ searchParams }: PageProps) {
    // searchParams await করা হয়েছে (Next.js 15 standard)
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    // স্লাইসিং এবং পেজিনেশন লজিক
    const totalPages = Math.ceil(noticeMockData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedNotices = noticeMockData.slice(startIndex, endIndex);

    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-16">
            {/* Hero Section */}
            <div className="bg-primary text-white py-16 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 space-y-3">
                    <div className="p-3 bg-white/10 rounded-full text-sky-300">
                        <Megaphone size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">নোটিশ বোর্ড (Notice Board)</h1>
                    <p className="text-slate-200 max-w-xl text-sm md:text-base">
                        আমাদের হাসপাতালের সর্বশেষ আপডেট, ক্যাম্পেইন, এবং জরুরী নোটিশগুলো এখানে দেখুন।
                    </p>
                </div>
            </div>

            {/* Notice Grid Section */}
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* মোডিফাইড: ডেটা ম্যাপ করা হয়েছে paginatedNotices থেকে */}
                    {paginatedNotices.map((notice: Notice) => (
                        <div
                            key={notice.id}
                            className={`bg-white border rounded-xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group ${notice.isUrgent ? "border-red-200 ring-1 ring-red-100" : "border-slate-100"
                                }`}
                        >
                            {/* Urgent Badge Background */}
                            {notice.isUrgent && <div className="absolute top-0 left-0 right-0 h-0.75 bg-red-500" />}

                            <div>
                                {/* Meta Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm ${notice.isUrgent ? "bg-red-50 text-red-600" : "bg-sky-50 text-sky-600"
                                        }`}>
                                        {notice.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-xs text-slate-400">
                                        <Calendar size={13} />
                                        <span>{notice.date}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-sky-500 transition-colors">
                                    {notice.isUrgent && <AlertCircle size={16} className="inline mr-1 text-red-500 bottom-px relative" />}
                                    {notice.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                                    {notice.excerpt}
                                </p>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={`/notice-board/${notice.id}`}
                                className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-sky-500 transition-colors uppercase tracking-wider mt-auto"
                            >
                                Details Notice <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Pagination Component এখানে বসানো হয়েছে */}
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/notice-board"
                />
            </div>
        </main>
    );
}