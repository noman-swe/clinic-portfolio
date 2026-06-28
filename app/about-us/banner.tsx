// app/about/components/Banner.tsx
import Breadcrumb from "@/components/shared/Breadcrumb";

interface BannerProps {
    data: {
        title: string;
        subtitle: string;
    };
}

export default function AboutBanner({ data }: BannerProps) {
    const breadcrumbSteps = [
        { label: "About Us" }
    ];

    return (
        <section className="bg-white font-sans pt-16 pb-8">
            <div className="mx-auto container px-6 md:px-8">

                {/* PAGE BREADCRUMB & HEADER */}
                <div className="space-y-3 text-center max-w-2xl mx-auto">

                    {/* Modular Breadcrumb Instance */}
                    <Breadcrumb steps={breadcrumbSteps} />

                    {/* Banner Title */}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                        {data.title}
                    </h1>

                    {/* Banner Subtitle */}
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

            </div>
        </section>
    );
}