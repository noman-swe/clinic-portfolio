import { ShieldCheck, Award, Users, Clock, HeartHandshake, Activity } from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Medical Excellence",
        description: "We deliver world-class clinical expertise with a team of renowned doctors and senior consultants dedicated to your recovery.",
    },
    {
        icon: ShieldCheck,
        title: "Accurate Diagnostics",
        description: "Our state-of-the-art laboratory is equipped with high-precision international machinery, ensuring 100% accurate and fast reports.",
    },
    {
        icon: Clock,
        title: "24/7 Emergency Care",
        description: "Round-the-clock emergency medical support, pharmacy services, and diagnostic facilities always ready to save lives.",
    },
    {
        icon: HeartHandshake,
        title: "Compassionate Care",
        description: "We treat our patients like family. Our trained nursing staff and patient-care specialists ensure a comfortable experience.",
    },
    {
        icon: Users,
        title: "Expert Specialists",
        description: "Over 50+ senior doctors and technicians across multiple departments, providing comprehensive healthcare under one roof.",
    },
    {
        icon: Activity,
        title: "Affordable Premium Services",
        description: "Bringing high-end hospital environment and diagnostic facilities within a transparent and accessible budget for everyone.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 mt-1 lg:mt-18 bg-white font-sans">
            <div className="mx-auto container px-6 md:px-8">

                {/* SECTION HEADER max-w-7xl */}
                <div className="text-center container mx-auto space-y-3 mb-16">
                    <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
                        Why Choose Sonia Nursing Home
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                        We Are Commitment to Delivering Clinical Excellence
                    </h2>
                    <p className="text-slate-500 text-justify text-sm sm:text-base leading-relaxed">
                        Sonia Nursing Home and Diagnostic Hospital in Tangail offers over 20 years of trusted, 24/7 healthcare expertise, featuring dual-unit facilities at the New Bus Terminal with specialized consultations and comprehensive diagnostics. Patients benefit from accessible, round-the-clock emergency care and streamlined booking via dedicated contact lines. For more information, visit the official Sonia Nursing Home website or check their Facebook page for daily doctor updates.Our diagnostic and nursing care system is designed around patient safety, absolute accuracy, and premium medical support when you need it most.
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                // মডার্ন বর্ডার এবং মিনিমালিস্ট শ্যাডো হোভার ইফেক্ট
                                className="group flex flex-col justify-between p-8 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="space-y-4">
                                    {/* Icon Box */}
                                    <div className="inline-flex p-3 bg-white text-primary border border-slate-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                        <IconComponent size={24} strokeWidth={2} />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-lg font-bold text-primary tracking-tight group-hover:text-sky-600 transition-colors duration-200">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* ক্লিন নিচের ডেকোরেশন লাইন যা হোভার করলে এক্সপ্যান্ড হয় */}
                                <div className="mt-6 w-8 h-0.5 bg-slate-200 group-hover:w-16 group-hover:bg-sky-500 transition-all duration-300" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}