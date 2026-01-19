"use client";

import { useState } from "react";
import Link from "next/link";
import MyRequestCard from "../../components/MyRequestCard";
import { Plus, ListChecks, History, LayoutDashboard } from "lucide-react";

// Mock data representing current user's requests
const MOCK_MY_REQUESTS = [
    { id: 101, title: "Moving Help needed (3rd Block)", category: "Other", description: "Need some muscle to help carry boxes from the parking lot to Block C, 3rd floor.", deadline: "2023-11-20", status: "OPEN" },
    { id: 102, title: "Calculus II Integration Tutor", category: "Academic", description: "Looking for someone to help me master integration by parts before the final.", deadline: "2023-11-18", status: "ACCEPTED" },
    { id: 103, title: "Laptop WiFi Troubleshooting", category: "Tech", description: "My Ubuntu setup won't connect to the campus secure WiFi.", deadline: "2023-10-15", status: "COMPLETED" },
];

const STATUS_FILTERS = ["All", "OPEN", "ACCEPTED", "COMPLETED"];

export default function MyRequestsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = MOCK_MY_REQUESTS.filter(req =>
        activeFilter === "All" || req.status === activeFilter
    );

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-32">

            {/* Professional Stats Header */}
            <div className="bg-slate-900 pt-24 pb-20 px-6 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#004D40]/20 to-transparent pointer-events-none"></div>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                            <History size={14} className="text-[#E65100]" />
                            <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em]">Engagement Log</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 leading-none">
                            My <span className="text-[#E65100]/60">Entries</span>
                        </h1>
                        <p className="text-slate-400 font-bold text-sm md:text-base uppercase tracking-[0.2em] max-w-lg leading-relaxed">
                            A verified ledger of your requests and their fulfillment status.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                        {[
                            { label: "Total", val: MOCK_MY_REQUESTS.length, color: "text-white" },
                            { label: "Active", val: MOCK_MY_REQUESTS.filter(r => r.status === 'OPEN').length, color: "text-[#E65100]" },
                            { label: "Resolved", val: MOCK_MY_REQUESTS.filter(r => r.status === 'COMPLETED').length, color: "text-emerald-400" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center backdrop-blur-sm">
                                <span className="block text-[8px] font-black text-white/30 uppercase tracking-widest mb-2">{stat.label}</span>
                                <span className={`text-2xl font-black ${stat.color}`}>{stat.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">

                {/* Filter & Action Row */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 bg-white p-5 shadow-xl border border-slate-200 rounded-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                        {STATUS_FILTERS.map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`text-[11px] font-black uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all ${activeFilter === f
                                        ? "bg-[#004D40] text-white shadow-lg scale-105"
                                        : "bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <Link href="/requests/new" className="flex items-center gap-3 px-8 py-4 bg-[#E65100] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg active:scale-95">
                        <Plus size={18} /> New Request
                    </Link>
                </div>

                {/* Tracking Grid - Focused Box Format */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filtered.map(req => (
                            <MyRequestCard key={req.id} request={req} />
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto py-32 bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center rounded-[2.5rem]">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                            <ListChecks size={32} className="text-slate-200" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-200 uppercase tracking-widest mb-2">Empty Log</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Your history is currently clear.</p>
                    </div>
                )}
            </main>

            <footer className="max-w-5xl mx-auto px-6 py-20 opacity-20 text-center">
                <div className="h-[1px] bg-slate-200 w-full mb-8"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Audit Division — CampusConnect Ecosystem</span>
            </footer>
        </div>
    );
}
