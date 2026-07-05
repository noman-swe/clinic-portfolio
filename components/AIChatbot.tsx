"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, Send, Bot, User, X, Loader2 } from "lucide-react";

interface Message {
    role: "user" | "model";
    text: string;
}

export default function AIChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: "model", text: "হ্যালো! আমি সোনিয়া নার্সিং হোমের এআই অ্যাসিস্ট্যান্ট। আপনার শারীরিক সমস্যাটি সংক্ষেপে বলুন, আমি জানিয়ে দেব আপনার কোন বিভাগের ডাক্তার দেখানো উচিত।" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setIsLoading(true);

        try {
            const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
            if (!apiKey) throw new Error("API Key configuration missing");

            const genAI = new GoogleGenerativeAI(apiKey);
            // আমরা flash মডেল ব্যবহার করব যা অনেক ফাস্ট এবং রেসপন্সিভ
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            // AI-কে সিস্টেম ইন্সট্রাকশন দিয়ে গাইড করা যাতে সে সোনিয়া হাসপাতালের ডাক্তার সাজেস্ট করে
            const systemPrompt = `
                You are a medical triage assistant for 'Sonia Nursing Home & Diagnostic Center'. 
                Your only job is to listen to user/patient symptoms in Bengali or English, analyze them, and strictly recommend which medical department or doctor specialist they should see.
                
                Available Departments at Sonia Nursing Home:
                1. Cardiology (বুক ব্যথা, হার্ট, উচ্চ রক্তচাপ)
                2. Pediatrics (নবজাতক ও শিশু রোগ)
                3. Gastroenterology (পেট ব্যথা, লিভার, গ্যাস্ট্রিক, বমি)
                4. Orthopedics (হাড় ভাঙা, জয়েন্ট পেইন, কোমর ব্যথা)
                5. Gynecology & Obstetrics (মহিলা ও প্রসূতি রোগ)
                6. General Medicine (জ্বর, সর্দি, কাশি, সাধারণ শারীরিক সমস্যা)
                
                Rules:
                - Always reply politely in Bengali.
                - Analyze the symptoms carefully.
                - Clearly state the recommended department in Bold.
                - Add a standard medical disclaimer: "এটি একটি প্রাথমিক ধারণা মাত্র। জরুরী অবস্থায় সরাসরি আমাদের ইমার্জেন্সি বিভাগে যোগাযোগ করুন।"
            `;

            const chat = model.startChat({
                history: [
                    { role: "user", parts: [{ text: systemPrompt }] },
                    { role: "model", parts: [{ text: "বুঝেছি। আমি রোগীদের সমস্যা শুনে সঠিক ডিপার্টমেন্ট সাজেস্ট করব।" }] },
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const aiResponse = result.response.text();

            setMessages((prev) => [...prev, { role: "model", text: aiResponse }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [...prev, { role: "model", text: "দুঃখিত, এই মুহূর্তে নেটওয়ার্ক সমস্যার কারণে আমি যুক্ত হতে পারছি না। দয়া করে একটু পর আবার চেষ্টা করুন।" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-all flex items-center gap-2 group animate-bounce"
                >
                    <MessageSquare size={24} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-semibold whitespace-nowrap">
                        AI ডক্টর হেল্পলাইন
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white border border-slate-100 w-w-87.5 md:w-100 h-125 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all">
                    {/* Header */}
                    <div className="bg-primary p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Bot className="text-sky-300" size={24} />
                            <div>
                                <h3 className="text-sm font-bold">Sonia AI Assistant</h3>
                                <p className="text-[10px] text-sky-200">Symptom Navigator</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                {msg.role === "model" && (
                                    <div className="w-7 h-7 bg-sky-50 rounded-full flex items-center justify-center text-primary shrink-0 border border-sky-100">
                                        <Bot size={15} />
                                    </div>
                                )}
                                <div className={`max-w-[75%] p-3 rounded-xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                                    msg.role === "user" 
                                        ? "bg-primary text-white rounded-tr-none" 
                                        : "bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-xs"
                                }`}>
                                    {msg.text}
                                </div>
                                {msg.role === "user" && (
                                    <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">
                                        <User size={15} />
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-2 items-center text-xs text-slate-400 pl-2">
                                <Loader2 size={14} className="animate-spin" />
                                <span>AI আপনার উপসর্গ বিশ্লেষণ করছে...</span>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Footer Form */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="যেমন: আমার পেটে অনেক ব্যথা করছে..."
                            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-primary bg-slate-50 text-slate-800"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-primary hover:bg-sky-600 disabled:bg-slate-200 text-white p-2 rounded-lg transition-colors shrink-0"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}