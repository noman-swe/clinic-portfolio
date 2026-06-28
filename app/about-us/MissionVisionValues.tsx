import * as Icons from "lucide-react";

interface ValueItem { id: number; iconName: string; title: string; description: string; }
interface MVVProps {
    data: {
        vision: { title: string; text: string };
        mission: { title: string; text: string };
        valuesTitle: string;
        valuesSubtitle: string;
        values: ValueItem[];
    };
}

export default function MissionVisionValues({ data }: MVVProps) {
    return (
        <section className="py-20 bg-white px-6">
            <div className="container px-6 lg:px-8 mx-auto space-y-20">

                {/* Vision & Mission Split Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 space-y-4 hover:border-sky-300 transition-colors">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <Icons.Eye className="text-sky-500" size={24} /> {data.vision.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{data.vision.text}</p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 space-y-4 hover:border-sky-300 transition-colors">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <Icons.Target className="text-sky-500" size={24} /> {data.mission.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{data.mission.text}</p>
                    </div>
                </div>

                {/* Corporate Core Values Grid */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h3 className="text-3xl font-bold text-primary">{data.valuesTitle}</h3>
                        <p className="text-slate-400 text-sm font-light">{data.valuesSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
                        {data.values.map((val) => {
                            // Dynamically pick up the component instance matching string literal
                            const IconComponent = (Icons as any)[val.iconName] || Icons.HelpCircle;
                            return (
                                <div key={val.id} className="bg-white rounded-xl py-6 border border-slate-100 shadow-xs hover:shadow-md hover:border-sky-200 transition-all text-center flex flex-col items-center space-y-3">
                                    <div className="p-3 bg-sky-50 rounded-full text-primary">
                                        <IconComponent size={24} className="text-sky-600" />
                                    </div>
                                    <h4 className="font-bold text-primary text-base">{val.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed font-light">{val.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}