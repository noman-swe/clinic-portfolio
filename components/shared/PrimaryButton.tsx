"use-client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
    text: string;          // বাটনের ভেতরের টেক্সট
    href: string;          // বাটনের লিংক রুট
    showArrow?: boolean;   // ডানপাশে অ্যারো চিহ্ন দেখাবেন কিনা (Optional)
    className?: string;    // এক্সট্রা কোনো ক্লাস বাইরে থেকে পাস করার জন্য (Optional)
}

export default function PrimaryButton({
    text,
    href,
    showArrow = false,
    className = "",
}: PrimaryButtonProps) {
    return (
        <Link
            href={href}
            className={`relative overflow-hidden inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold tracking-wide px-8 py-3.5 rounded-sm hover:bg-primary transition-all duration-300 shadow-md text-center uppercase group
                before:absolute before:top-0 before:-left-full before:w-full before:h-full 
        before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent 
        before:transition-all before:duration-500 hover:before:left-full ${className}`}
        >
            {/* বাটন টেক্সট */}
            <span>{text}</span>

            {/* যদি showArrow true পাস করা হয়, তাহলে আইকনটি দেখাবে এবং হোভারে ১ ধাপ ডানে সরবে */}
            {showArrow && (
                <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-200"
                />
            )}
        </Link>
    );
}