// components/shared/Breadcrumb.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbStep {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    steps: BreadcrumbStep[];
}

export default function Breadcrumb({ steps }: BreadcrumbProps) {
    return (
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <Link href="/" className="hover:text-sky-500 transition-colors">
                Home
            </Link>

            {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                    <div key={index} className="flex items-center gap-2">
                        <ChevronRight size={12} />
                        {isLast || !step.href ? (
                            <span className="text-slate-600">{step.label}</span>
                        ) : (
                            <Link href={step.href} className="hover:text-sky-500 transition-colors">
                                {step.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
}