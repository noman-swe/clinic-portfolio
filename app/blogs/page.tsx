import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { blogBanner, blogPosts } from "@/mock-data/blogs";
import SuperHero from "@/components/shared/SuperHero";
import Pagination from "@/components/shared/Pagination"; // ইম্পোর্ট করা হয়েছে

export const metadata = {
    title: "Health Blogs & Articles | Sonia Nursing Home",
    description: "Stay updated with the latest health insights, emergency tips, and diagnostic news from our medical experts.",
};

const ITEMS_PER_PAGE = 9;

interface PageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: PageProps) {
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    // স্লাইসিং এবং পেজিনেশন লজিক
    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedBlogs = blogPosts.slice(startIndex, endIndex);

    return (
        <main className="bg-white font-sans min-h-screen pb-16">
            <SuperHero data={blogBanner} />
            <div className="mx-auto container py-16 px-6 md:px-8">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* মোডিফাইড: ডেটা ম্যাপ করা হয়েছে paginatedBlogs থেকে */}
                    {paginatedBlogs.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={post?.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm group-hover:bg-sky-500 group-hover:text-primary transition-colors duration-200">
                                        {post.category}
                                    </span>
                                </div>

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

                {/* Pagination Component এখানে বসানো হয়েছে */}
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/blogs"
                />
            </div>
        </main>
    );
}