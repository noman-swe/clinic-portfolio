import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    // যদি মোট পেজ ১ বা তার কম হয়, তবে কিছুই রেন্ডার হবে না
    if (totalPages <= 1) return null;

    // স্মার্ট পেজিনেশন নাম্বার জেনারেট করার লজিক (e.g., 1 ... 4 5 6 ... 12)
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5; // কারেন্ট পেজের আশেপাশে কয়টি পেজ দেখাবে

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1); // সবসময় প্রথম পেজ দেখাবে

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 3) {
                endPage = 4;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
            }

            if (startPage > 2) pages.push("...");

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages - 1) pages.push("...");

            pages.push(totalPages); // সবসময় শেষ পেজ দেখাবে
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    // URL জেনারেট করার হেল্পার ফাংশন
    const createPageUrl = (pageNumber: number) => {
        return `${basePath}?page=${pageNumber}`;
    };

    return (
        <nav
            role="navigation"
            aria-label="Pagination Navigation"
            className="flex items-center justify-center space-x-2 mt-12 font-sans select-none"
        >
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={createPageUrl(currentPage - 1)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
                    aria-label="Go to previous page"
                >
                    <ChevronLeft size={18} />
                </Link>
            ) : (
                <span
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50"
                    aria-disabled="true"
                    aria-label="Previous page disabled"
                >
                    <ChevronLeft size={18} />
                </span>
            )}

            {/* Page Numbers Grid */}
            <div className="flex items-center space-x-1.5 md:space-x-2">
                {pageNumbers.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="w-10 h-10 flex items-end justify-center text-slate-400 pb-2.5"
                                aria-hidden="true"
                            >
                                ...
                            </span>
                        );
                    }

                    const isCurrent = page === currentPage;

                    return (
                        <Link
                            key={`page-${page}`}
                            href={createPageUrl(page as number)}
                            className={`flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-lg transition-all ${isCurrent
                                    ? "bg-primary text-white shadow-xs pointer-events-none"
                                    : "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                                }`}
                            aria-label={`Page ${page}`}
                            aria-current={isCurrent ? "page" : undefined}
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={createPageUrl(currentPage + 1)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
                    aria-label="Go to next page"
                >
                    <ChevronRight size={18} />
                </Link>
            ) : (
                <span
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50"
                    aria-disabled="true"
                    aria-label="Next page disabled"
                >
                    <ChevronRight size={18} />
                </span>
            )}
        </nav>
    );
}