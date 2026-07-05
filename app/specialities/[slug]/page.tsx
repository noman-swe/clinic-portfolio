"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
    ChevronDown,
    Clock,
    Activity,
    ShieldAlert,
    CheckCircle2,
    User,
    CreditCard,
    Building2,
    HelpCircle,
    MapPin,
    Mail,
} from "lucide-react";

import { specialities, getSpecialityIcon } from "@/mock-data/specialities";
import { departmentServices, patientGuidelines, pageLabels } from "@/mock-data/speciality-details";
import { getInitialsOfNames } from "@/utils/sharedFunc";
import SuperHero from "@/components/shared/SuperHero";

// ডক্টরদের ডেমো ডাটা
const demoDoctors = [
    { id: 1, name: "Dr. Ahmed Sharif", designation: "Chief Consultant & Head", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Dr. Nusrat Jahan", designation: "Senior Consultant", image: "" },
    { id: 3, name: "Dr. S. M. Rahman", designation: "Consultant", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
    { id: 4, name: "Dr. Fahmida Khan", designation: "Associate Consultant", image: "" },
    { id: 5, name: "Dr. Tanvir Islam", designation: "Assistant Consultant", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
    { id: 6, name: "Dr. Sadia Afrin", designation: "Resident Physician", image: "" },
    { id: 7, name: "Dr. Kazi Asif", designation: "Medical Officer", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
    { id: 8, name: "Dr. Ishrat Zahan", designation: "Medical Officer", image: "" },
];

const ServiceIconMap = {
    Clock: Clock,
    ShieldAlert: ShieldAlert,
    CheckCircle2: CheckCircle2,
};

const GuidelineIconMap = {
    CreditCard: CreditCard,
    Building2: Building2,
    HelpCircle: HelpCircle,
};

export default function SpecialityDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    // ১. URL Slug এর সাথে মিল রেখে স্পেশালিটি খুঁজে বের করা
    const currentSpeciality = specialities.find(
        (item) => item.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
    );

    if (!currentSpeciality) {
        notFound();
    }

    const SelectedIcon = getSpecialityIcon(currentSpeciality);
    const [openAccordion, setOpenAccordion] = useState<string | null>("overview");

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const dynamicFaqs = [
        {
            id: "overview",
            question: `What is ${currentSpeciality}?`,
            answer: `The ${currentSpeciality} department at Sonia Nursing Home & Diagnostic Center is equipped with modern medical technology and managed by experienced specialist doctors. We are committed to providing accurate, high-quality, and patient-centered healthcare services.`
        },
        {
            id: "procedures",
            question: "What types of tests and procedures are available in this department?",
            answer: "We offer a comprehensive range of diagnostic tests, specialist consultations, advanced laboratory services, digital imaging, and therapeutic procedures using modern medical equipment. Many essential services are available 24/7."
        },
        {
            id: "risks",
            question: "What safety measures are followed during treatment or surgery?",
            answer: "Patient safety is our highest priority. Before any treatment or surgical procedure, we conduct thorough pre-medical evaluations and follow evidence-based clinical protocols. Our multidisciplinary medical team works together to minimize risks and ensure the highest standards of patient care."
        }
    ];



    const bannerData = {
        title: currentSpeciality,
        description: pageLabels.heroSubtitleSuffix,
        breadcrumb: {
            label: "Specialities",
            href: "/specialities",
        },
        currentPage: currentSpeciality,
        icon: SelectedIcon,
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Dynamic Hero/Banner Section */}
            <SuperHero data={bannerData} />

            <div className="container mx-auto px-6 py-12 space-y-16">

                {/* Overview & Services */}
                <section className="bg-white rounded-xl p-8 shadow-xs border border-slate-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                        <Activity className="text-sky-500" size={28} /> {pageLabels.servicesTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {departmentServices.map((service) => {
                            const IconComponent = ServiceIconMap[service.iconName];
                            return (
                                <div key={service.id} className="p-6 bg-slate-50 rounded-xl border-l-4 border-sky-500 hover:shadow-xs transition-all">
                                    <div className="flex items-center gap-3 mb-3 text-primary font-bold">
                                        <IconComponent className="text-sky-600" size={24} />
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/*Accordion */}
                <section className="bg-white rounded-xl p-8 shadow-xs border border-slate-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                        <HelpCircle className="text-sky-500" size={28} /> {pageLabels.faqTitle}
                    </h2>

                    <div className="space-y-4">
                        {dynamicFaqs.map((faq) => (
                            <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="w-full flex items-center justify-between p-5 bg-slate-50 text-left font-semibold text-primary hover:bg-slate-100 transition-colors"
                                >
                                    <span className="text-[15px] sm:text-base">{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-500 transition-transform duration-300 ${openAccordion === faq.id ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openAccordion === faq.id ? "max-h-125 border-t border-slate-200" : "max-h-0"}`}
                                >
                                    <p className="p-5 text-slate-600 text-sm md:text-[15px] leading-relaxed bg-white">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* List of Doctors */}
                <section>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-2">
                            <User className="text-sky-500" size={28} /> {pageLabels.doctorsTitle} ({currentSpeciality})
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">
                            Meet our team of {demoDoctors.length} {pageLabels.doctorsSubtitleSuffix}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {demoDoctors.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center p-6 text-center group"
                            >
                                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-slate-100 group-hover:ring-sky-200 transition-all bg-sky-100 flex items-center justify-center">
                                    {doc?.image ? (
                                        <Image
                                            src={doc.image}
                                            alt={doc.name}
                                            fill
                                            className="object-cover"
                                             sizes="(max-width: 640px) 100vw,
                                                (max-width: 1024px) 50vw,
                                                33vw"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold text-primary">
                                            {getInitialsOfNames(doc.name)}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-primary group-hover:text-sky-600 transition-colors">
                                    {doc.name}
                                </h3>
                                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1 mb-5">
                                    {doc.designation}
                                </p>
                                <Link
                                    href={`/doctors/${doc.id}`}
                                    className="w-full bg-slate-50 text-primary text-xs font-semibold py-2.5 rounded-md hover:bg-primary hover:text-white transition-all duration-300 border border-slate-200/60"
                                >
                                    View Profile
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Important Points */}
                <section className="bg-white rounded-xl p-8 shadow-xs border border-slate-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 border-b pb-4">
                        {pageLabels.guidelinesTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {patientGuidelines.map((item) => {
                            const IconComponent = GuidelineIconMap[item.iconName];
                            return (
                                <div key={item.id} className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-bold text-lg">
                                        <IconComponent className="text-sky-500" size={22} />
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="text-slate-600 text-sm space-y-2 leading-relaxed">
                                        <p>{item.description}</p>


                                        {item.meta?.location && (
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-primary pt-1">
                                                <MapPin size={14} className="text-sky-600" />
                                                <span>{item.meta.location}</span>
                                            </div>
                                        )}
                                        {item.meta?.email && (
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                                                <Mail size={14} className="text-sky-600" />
                                                <span>{item.meta.email}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </div>
    );
}