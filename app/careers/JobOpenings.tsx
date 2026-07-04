"use client";

import { useState } from "react";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

interface Job {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    deadline: string;
}

interface JobOpeningsProps {
    data: {
        title: string;
        departments: string[];
        jobs: Job[];
    };
}

export default function JobOpenings({ data }: JobOpeningsProps) {
    const [selectedDept, setSelectedDept] = useState("All Departments");

    const filteredJobs = selectedDept === "All Departments" 
        ? data.jobs 
        : data.jobs.filter(job => job.department === selectedDept);

    return (
        <section className="py-20 bg-slate-50 font-sans">
            <div className="mx-auto container px-6 md:px-8 max-w-7xl space-y-12">
                
                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200 pb-6">
                    <h2 className="text-3xl font-bold text-primary tracking-tight">{data.title}</h2>
                    
                    <div className="w-full sm:w-72">
                        <select
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-md text-slate-700 font-medium text-sm focus:outline-hidden focus:border-sky-500 shadow-xs cursor-pointer"
                        >
                            {data.departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Jobs Grid */}
                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="bg-white border border-slate-100 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-56 group hover:border-sky-200">
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <span className="inline-block px-2.5 py-0.5 bg-sky-50 text-sky-600 rounded-sm text-xs font-semibold uppercase tracking-wider">
                                            {job.department}
                                        </span>
                                        <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-500 rounded-sm text-xs font-medium">
                                            {job.type}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-primary group-hover:text-sky-600 transition-colors line-clamp-1">
                                        {job.title}
                                    </h3>
                                    <div className="space-y-1.5 text-xs text-slate-400 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-slate-300" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <CalendarDays size={14} className="text-slate-300" />
                                            <span>{job.deadline}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-sky-500 hover:text-primary transition-colors cursor-pointer mt-4 shadow-xs">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-slate-400 font-light">
                        No active openings at this moment for this department.
                    </div>
                )}
            </div>
        </section>
    );
}