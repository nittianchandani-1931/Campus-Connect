"use client";

import { Clock, CheckCircle2, CircleDashed, CheckCircle } from "lucide-react";

export default function MyRequestCard({ request }) {
    const { id, title, category, description, deadline, status } = request;

    const statusConfig = {
        OPEN: {
            color: "text-emerald-600 bg-emerald-50 border-emerald-100",
            accent: "bg-emerald-500",
            icon: <CircleDashed size={14} className="animate-spin-slow" />,
            label: "Open"
        },
        ACCEPTED: {
            color: "text-blue-600 bg-blue-50 border-blue-100",
            accent: "bg-blue-500",
            icon: <CheckCircle2 size={14} />,
            label: "Accepted"
        },
        COMPLETED: {
            color: "text-slate-400 bg-slate-50 border-slate-100",
            accent: "bg-slate-300",
            icon: <CheckCircle size={14} />,
            label: "Resolved"
        }
    };

    const config = statusConfig[status] || statusConfig.OPEN;

    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col h-full shadow-lg border border-slate-100 relative overflow-hidden transition-all hover:shadow-xl group">
            <div className={`absolute top-0 left-0 bottom-0 w-1 ${config.accent}`}></div>

            <div className="flex justify-between items-center mb-6 pl-2">
                <div className={`flex items-center gap-2 px-3 py-1 border rounded-full text-[9px] font-black uppercase tracking-widest ${config.color}`}>
                    {config.icon}
                    {config.label}
                </div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-lg">
                    REF: {id}
                </span>
            </div>

            <div className="flex-grow pl-2 mb-6">
                <div className="text-[9px] font-black text-[#004D40] uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E65100]"></span>
                    {category}
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-3 uppercase tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between pl-2 mt-auto">
                <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={16} className="text-[#E65100]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        {new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                </div>

                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#E65100] transition-all active:scale-95 shadow-md">
                    Manage
                </button>
            </div>
        </div>
    );
}
