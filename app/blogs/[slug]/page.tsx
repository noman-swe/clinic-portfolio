import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/mock-data/blogs";
import ArticleHeader from "@/components/shared/ArticleDetails/ArticleHeader";
import ArticleContent from "@/components/shared/ArticleDetails/ArticleContent";
import ArticleSidebar from "@/components/shared/ArticleDetails/ArticleSidebar";

interface BlogDetailsPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailsPageProps) {
    const { slug } = await params;
    const article = blogPosts.find((b) => b.slug === slug);

    return {
        title: article ? `${article.title} | Sonia Nursing Home` : "Article Not Found",
        description: article?.excerpt || "Read medical logs and clinical updates.",
    };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
    const { slug } = await params;
    const article = blogPosts.find((b) => b.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
            {/* Top Back Navigation Bar */}
            <div className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40">
                <div className="container mx-auto flex items-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blogs
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-6 mt-8">
                {/* Visual Cover Header */}
                <ArticleHeader article={article} />

                {/* Primary Content Structure Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 items-start">
                    {/* Core Body Container */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-10 border border-slate-100 shadow-xs">
                        <ArticleContent content={article.content} />
                    </div>

                    {/* Metadata & Secondary Widget Sidebar */}
                    <aside className="space-y-6">
                        <ArticleSidebar article={article} />
                    </aside>
                </div>
            </article>
        </main>
    );
}