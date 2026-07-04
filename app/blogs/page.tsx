import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { BlogPost } from "@/mock-data/blogs";

export const metadata = {
    title: "Health Blogs & Articles | Sonia Nursing Home",
    description: "Stay updated with the latest health insights, emergency tips, and diagnostic news from our medical experts.",
};

export default function BlogsPage() {
    return (
        <main className="bg-white font-sans min-h-screen py-16">
            <div className="mx-auto container px-6 md:px-8">

                {/* PAGE BREADCRUMB & HEADER */}
                <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
                        <Link href="/" className="hover:text-sky-500">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-slate-600">Blogs</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                        Medical Insights & Health Feed
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        Read professional medical columns, wellness guidelines, and healthcare discoveries straight from our expert consultants.
                    </p>
                </div>

                {/* STATIC 6 BLOGS GRID - FULL RESPONSIVE */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BlogPost.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                {/* Image overlay box */}
                                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                    />
                                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm group-hover:bg-sky-500 group-hover:text-primary transition-colors duration-200">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Text Content Area */}
                                <div className="p-6 space-y-3">
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

                                    <h2 className="text-xl font-bold text-primary leading-snug group-hover:text-sky-600 transition-colors duration-200">
                                        <Link href={`/blogs/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

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
                                    READ FULL ARTICLE <span className="transform group-hover:translate-x-1 transition-transform ml-1">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </main>
    );
}