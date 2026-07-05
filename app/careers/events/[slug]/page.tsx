import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// import BlogHeader from "@/app/blogs/[slug]/BlogHeader";
// import BlogContent from "@/app/blogs/[slug]/BlogContent";
// import SidebarShare from "@/app/blogs/[slug]/SidebarShare";

import { careersMockData } from "@/mock-data/careers";
import ArticleHeader from "@/components/shared/ArticleDetails/ArticleHeader";
import ArticleContent from "@/components/shared/ArticleDetails/ArticleContent";
import ArticleSidebar from "@/components/shared/ArticleDetails/ArticleSidebar";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const article = careersMockData.eventsSection.events.find(
        (item) => item.slug === slug
    );

    return {
        title: article
            ? `${article.title} | Sonia Nursing Home`
            : "Event Not Found",
        description:
            article?.excerpt ??
            "Employee engagement events and activities.",
    };
}

export default async function CareerEventDetails({ params }: Props) {
    const { slug } = await params;

    const article = careersMockData.eventsSection.events.find(
        (item) => item.slug === slug
    );

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20">

            <div className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40">
                <div className="container mx-auto">
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-wider group"
                    >
                        <ArrowLeft
                            size={14}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Back to Careers
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-6 mt-8">
                {/* <BlogHeader article={article} /> */}
                <ArticleHeader article={article} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 items-start">
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-10 border border-slate-100">
                        {/* <BlogContent content={article.content} /> */}
                        <ArticleContent content={article.content} />
                    </div>
                    <aside>
                        {/* <SidebarShare article={article} /> */}
                        <ArticleSidebar article={article} />
                    </aside>
                </div>
            </article>

        </main>
    );
}