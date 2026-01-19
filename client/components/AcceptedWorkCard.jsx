"use client";

import { CheckCircle2, Clock, User, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AcceptedWorkCard({ request }) {
    const { id, title, category, deadline, status, requesterName } = request;

    const isCompleted = status === "COMPLETED";

    return (
        <div className="bg-white rounded-[2rem] p-6 flex flex-col h-full shadow-lg border border-slate-100 transition-all hover:shadow-xl group relative overflow-hidden">
            <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[9px] font-black uppercase tracking-widest ${isCompleted ? 'bg-slate-100 text-slate-400' : 'bg-[#E65100] text-white shadow-md'}`}>
                {status}
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[1.5px] bg-[#004D40]"></span>
                    <span className="text-[10px] font-black text-[#004D40] uppercase tracking-[0.3em]">
                        {category}
                    </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 uppercase tracking-tight">
                    {title}
                </h3>
            </div>

            <div className="mt-auto space-y-6">
                {/* Compact Workspace Info */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col gap-3">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Requester</span>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                            <User size={14} className="text-[#004D40]" />
                            {requesterName}
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-slate-200/50"></div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Target</span>
                        <div className="flex items-center gap-2 text-sm font-bold text-[#004D40]">
                            <Clock size={14} className="text-[#E65100]" />
                            {new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                    </div>
                </div>

                {/* Compact Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        disabled={isCompleted}
                        className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 rounded-xl ${isCompleted
                            ? "bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed"
                            : "bg-slate-900 text-white hover:bg-[#004D40] shadow-lg shadow-slate-900/10"
                            }`}
                    >
                        {isCompleted ? "Resolved" : "Complete Task"}
                    </button>
                    <Link
                        href={`/requests/${id}`}
                        className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#E65100] transition-colors flex items-center justify-center gap-1.5"
                    >
                        Management <ExternalLink size={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
