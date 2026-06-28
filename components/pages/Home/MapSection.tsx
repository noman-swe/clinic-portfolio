"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function MapSection() {
    return (
        <section className="py-20 bg-gray-light font-sans">
            <div className="container mx-auto px-6 md:px-8">

                {/* SECTION HEADER */}
                <div className="max-w-2xl space-y-2 mb-12">
                    <span className="text-secondary font-bold text-xs sm:text-sm tracking-widest uppercase bg-secondary/10 px-3 py-1 rounded-full">
                        Our Location
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                        Find Us Easily & Get In Touch
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base">
                        Have questions or need emergency assistance? Visit our center or reach out to us instantly through any of the channels below.
                    </p>
                </div>

                {/* MAP & INFO GRID - items-stretch নিশ্চিত করে দুই পাশের উচ্চতা সমান থাকবে */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT SIDE: GOOGLE MAP (lg:col-span-7) */}
                    <div className="lg:col-span-7 min-h-95 lg:h-auto rounded-xl overflow-hidden border border-slate-100 shadow-md relative bg-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17301.591911747924!2d89.90862252174117!3d24.269336794596704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf9e800b6f30b%3A0x89845fcc168f6cd4!2z4Ka44KeL4Kao4KeA4Kav4Ka84Ka-IOCmqOCmvuCmsOCnjeCmuOCmv-CmgiDgprngp4vgpq4g4KaH4KaJ4Kao4Ka_4KafLSAy!5e0!3m2!1sbn!2sbd!4v1782643432589!5m2!1sbn!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Sonia Nursing Home Location Map"
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>

                    {/* RIGHT SIDE: CONTACT CARDS GRID (lg:col-span-5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">

                        {/* 1. Address Card */}
                        <div className="flex items-start gap-4 p-5 bg-white border border-slate-100/80 rounded-xl shadow-xs hover:border-secondary/30 transition-all duration-300 h-full">
                            <div className="p-3 bg-primary text-white rounded-lg shrink-0">
                                <MapPin size={22} strokeWidth={2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-primary tracking-tight">
                                    Our Address
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    <span className="font-semibold text-primary">Sonia Nursing Home & Diagnostic Centre</span>
                                    <br />
                                    New Bus Terminal (Opposite Janata Bank),
                                    <br />
                                    Tangail - 1900, Bangladesh.
                                </p>
                            </div>
                        </div>

                        {/* 2. Unit-1 Contact Card */}
                        <div className="flex items-start gap-4 p-4 bg-white border border-slate-100/80 rounded-xl shadow-xs hover:border-secondary/30 transition-all duration-300 h-full">
                            <div className="p-3 bg-secondary text-primary rounded-lg shrink-0">
                                <Phone size={22} strokeWidth={2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-primary tracking-tight">Unit - 1 Hotlines</h3>
                                <p className="text-slate-500 text-sm font-semibold tracking-wide space-y-0.5">
                                    <span className="block text-primary hover:text-secondary transition-colors">+880 1716-836683</span>
                                    <span className="block text-primary hover:text-secondary transition-colors">+880 1315-525908</span>
                                </p>
                            </div>
                        </div>

                        {/* 3. Unit-2 Contact Card */}
                        <div className="flex items-start gap-4 p-4 bg-white border border-slate-100/80 rounded-xl shadow-xs hover:border-secondary/30 transition-all duration-300 h-full">
                            <div className="p-3 bg-primary text-white rounded-lg shrink-0">
                                <Phone size={22} strokeWidth={2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-primary tracking-tight">Unit - 2 Hotlines</h3>
                                <p className="text-slate-500 text-sm font-semibold tracking-wide space-y-0.5">
                                    <span className="block text-primary hover:text-secondary transition-colors">+880 1315-525906</span>
                                    <span className="block text-primary hover:text-secondary transition-colors">+880 1315-525907</span>
                                </p>
                            </div>
                        </div>

                        {/* 4. Email Support Card */}
                        <div className="flex items-start gap-4 p-4 bg-white border border-slate-100/80 rounded-xl shadow-xs hover:border-secondary/30 transition-all duration-300 h-full">
                            <div className="p-3 bg-secondary text-primary rounded-lg shrink-0">
                                <Mail size={22} strokeWidth={2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-primary tracking-tight">Email Support</h3>
                                <p className="text-slate-500 text-sm font-medium">
                                    <a href="mailto:sonianursinghometg@gmail.com" className="block text-primary hover:text-secondary transition-colors font-semibold break-all">
                                        sonianursinghometg@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* 5. Working Hours Card */}
                        <div className="flex items-start gap-4 p-4 bg-white border border-slate-100/80 rounded-xl shadow-xs hover:border-secondary/30 transition-all duration-300 h-full">
                            <div className="p-3 bg-primary text-white rounded-lg shrink-0">
                                <Clock size={22} strokeWidth={2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-primary tracking-tight">Service Hours</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    <span className="font-bold text-primary">Emergency & Indoor:</span> 24 Hours / 7 Days
                                    <br />
                                    <span className="font-bold text-primary">Two Units Active</span> for Patient Convenience
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}