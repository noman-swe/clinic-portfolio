"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { BlogPost, blogPosts } from "@/mock-data/blogs";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function BlogSection() {
    const [startIndex, setStartIndex] = useState(0);

    // ল্যাপটপ/ডেক্সটপে একসাথে ৩টি কার্ড দেখাবে। মোট ৬টি কার্ডের জন্য ইন্ডেক্স রেঞ্জ কন্ট্রোল
    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1 > blogPosts.length - 3 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 < 0 ? blogPosts.length - 3 : prev - 1));
    };

    // মোবাইলে স্লাইডারের ঝামেলা এড়াতে পিওর CSS touch-scroll এবং বড় স্ক্রিনে স্লাইডার লজিক ইউজ করা হয়েছে
    const visiblePosts = blogPosts.slice(startIndex, startIndex + 3);

    return (
        <section className="py-20 bg-gray-light font-sans overflow-hidden">
            <div className="mx-auto container px-6 md:px-8">

                {/* HEADER: TITLE + NAVIGATION ARROWS */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                    <div className="space-y-2">
                        <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
                            Latest News & Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                            Our Health Blogs & Articles
                        </h2>
                    </div>

                    {/* Slider Navigation (Hidden on mobile because mobile uses native touch scroll) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                            aria-label="Previous posts"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                            aria-label="Next posts"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* BLOG CARDS CONTAINER */}
                {/* Mobile Responsive Magic: 
          - Mobile এ এটি একটি অনুভূমিক স্ক্রোলযোগ্য কন্টেইনার (`flex overflow-x-auto`) হিসেবে কাজ করবে। 
          - Desktop এ এটি ৩ কলাম গ্রিড হিসেবে স্মুথ অ্যানিমেশনের সাথে স্লাইড চেঞ্জ করবে।
        */}
                <div className="md:hidden flex overflow-x-auto gap-6 pb-6 scrollbar-none snap-x snap-mandatory">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="w-[85vw] sm:w-[50vw] shrink-0 snap-center">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                {/* Desktop View Slider Matrix */}
                <div className="hidden md:grid grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                    {visiblePosts.map((post) => (
                        <div key={post.id} className="animate-in fade-in duration-300">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                {/* VIEW ALL BLOGS BUTTON */}
                <div className="mt-12 text-center">
                    <div>
                        <PrimaryButton text="View All Blogs" href="/blogs" showArrow={false} />
                    </div>

                </div>

            </div>
        </section>
    );
}

// সাব-কম্পোনেন্ট: রিইউজেবল ব্লগ কার্ড ডিজাইন
function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 h-full">
            <div>
                {/* Image Box */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-sky-500 text-primary text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                        {post.category}
                    </span>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-sky-600 transition-colors duration-200">
                        <Link href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Action Trigger */}
            <div className="p-6 pt-0">
                <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:text-sky-500 transition-colors duration-200"
                >
                    READ ARTICLE <span className="transform group-hover:translate-x-1 transition-transform ml-1">→</span>
                </Link>
            </div>
        </article>
    );
}