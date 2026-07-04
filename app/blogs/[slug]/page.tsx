import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import { blogMockData } from "@/mock-data/blogs";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import SidebarShare from "./SidebarShare";
import { BlogPost } from "@/mock-data/blogs";

interface BlogDetailsPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailsPageProps) {
    const { slug } = await params;
    const article = BlogPost.find((b) => b.slug === slug);

    return {
        title: article ? `${article.title} | Sonia Nursing Home` : "Article Not Found",
        description: article?.excerpt || "Read medical logs and clinical updates.",
    };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
    const { slug } = await params;
    const article = BlogPost.find((b) => b.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
            {/* Top Back Navigation Bar */}
            <div className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40">
                <div className="max-w-5xl mx-auto flex items-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Articles
                    </Link>
                </div>
            </div>

            <article className="max-w-5xl mx-auto px-6 mt-8">
                {/* Visual Cover Header */}
                <BlogHeader article={article} />

                {/* Primary Content Structure Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 items-start">
                    {/* Core Body Container */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-10 border border-slate-100 shadow-xs">
                        <BlogContent content={article.content} />
                    </div>

                    {/* Metadata & Secondary Widget Sidebar */}
                    <aside className="space-y-6">
                        <SidebarShare article={article} />
                    </aside>
                </div>
            </article>
        </main>
    );
}