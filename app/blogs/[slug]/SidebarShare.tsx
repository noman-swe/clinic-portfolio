import { Share2, Bookmark, Heart } from "lucide-react";

interface SidebarShareProps {
    article: {
        tags: string[];
        department: string;
    };
}

export default function SidebarShare({ article }: SidebarShareProps) {
    return (
        <div className="bg-white border border-slate-100 rounded-xl p-6 space-y-6 shadow-xs sticky top-20">
            <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Clinical Metrics</h4>
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600 flex justify-between items-center">
                    <span>Department Focus:</span>
                    <span className="font-semibold text-primary">{article.department}</span>
                </div>
            </div>

            <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Keywords / Tags</h4>
                <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-sm">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <hr className="border-slate-100" />

            <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide inline-flex items-center gap-1">
                    <Share2 size={12} /> Share Article
                </span>
                <div className="flex items-center gap-2">
                    <button className="p-2 bg-slate-50 hover:bg-sky-50 text-slate-400 hover:text-sky-500 border border-slate-100 rounded-md transition-colors">
                        <Heart size={16} />
                    </button>
                    <button className="p-2 bg-slate-50 hover:bg-sky-50 text-slate-400 hover:text-sky-500 border border-slate-100 rounded-md transition-colors">
                        <Bookmark size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}