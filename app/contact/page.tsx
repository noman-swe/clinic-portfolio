import { contactMockData } from "@/mock-data/contact";
import ContactHero from "./ContactHero";
import ContactCards from "./ContactCards";
import ContactFormSection from "./ContactFormSection";
import MapSection from "./MapSection";


export const metadata = {
    title: "Contact Us | Sonia Nursing Home & Diagnostic Center",
    description: "Get in touch with our emergency helpline, book an appointment, or find our physical location details.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
            <ContactHero />
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                <ContactCards data={contactMockData.infoCards} />
                <ContactFormSection />
                <MapSection data={contactMockData.mapCoordinates} />
            </div>
        </main>
    );
}