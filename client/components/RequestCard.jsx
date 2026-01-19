"use client";

import { CheckCircle, Clock, Tag } from "lucide-react";

export default function RequestCard({ request, onAccept }) {
    const { _id, title, category, description, deadline } = request;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col h-full transition-all hover:shadow-2xl hover:border-[#004D40]/20 group">
            <div className="flex justify-between items-center mb-5">
                <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ID: {_id}
                    </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#E65100]/5 text-[#E65100] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#E65100]/10">
                    <Tag size={12} />
                    {category}
                </div>
            </div>

            <div className="flex-grow mb-6">
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-3 group-hover:text-[#004D40] transition-colors uppercase tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={16} className="text-[#E65100]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        {new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                </div>

                <button
                    onClick={() => onAccept && onAccept(_id)}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#004D40] transition-all active:scale-95 shadow-lg"
                >
                    <CheckCircle size={14} />
                    Accept
                </button>
            </div>
        </div>
    );
}
