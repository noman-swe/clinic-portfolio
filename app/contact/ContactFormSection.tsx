"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle logic metrics safely here
        setSubmitted(true);
    };

    return (
        <section className="bg-white rounded-xl p-8 shadow-xs border border-slate-100 max-w-5xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Send Us A Message</h2>
                <p className="text-slate-500 text-sm mt-2">Fill out the standard dynamic field parameters to email our front desk coordinator directly.</p>
            </div>

            {submitted ? (
                <div className="text-center py-12 bg-sky-50/50 rounded-xl border border-dashed border-sky-200 p-6 space-y-3">
                    <CheckCircle2 className="text-sky-500 mx-auto" size={44} />
                    <h3 className="text-lg font-bold text-primary">Message Dispatched Successfully</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">Thank you for getting in touch. Our support desks or clinical executives will reply inside 24 standard calendar hours.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</label>
                            <input 
                                type="text" required
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
                            <input 
                                type="email" required
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-wider">Phone Number</label>
                            <input 
                                type="tel" required
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-wider">Subject</label>
                            <input 
                                type="text" required
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider">Your Message</label>
                        <textarea 
                            rows={5} required
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-slate-800 resize-none"
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white text-xs font-bold py-3 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-xs uppercase tracking-wider"
                    >
                        Submit Query <Send size={14} />
                    </button>
                </form>
            )}
        </section>
    );
}