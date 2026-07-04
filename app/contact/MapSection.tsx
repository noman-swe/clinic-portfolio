interface MapSectionProps {
    data: { embedUrl: string };
}

export default function MapSection({ data }: MapSectionProps) {
    return (
        <section className="bg-white rounded-xl p-4 shadow-xs border border-slate-100 overflow-hidden">
            <div className="w-full h-80 md:h-110 rounded-lg overflow-hidden relative bg-slate-100">
                <iframe
                    src={data.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0  contrast-110"
                />
            </div>
        </section>
    );
}