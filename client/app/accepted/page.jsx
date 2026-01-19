"use client";

import { useState } from "react";
import Link from "next/link";
import AcceptedWorkCard from "../../components/AcceptedWorkCard";
import { ClipboardCheck, ArrowLeft, LayoutGrid, Info } from "lucide-react";

// Mock data for requests you've accepted
const MOCK_ACCEPTED_REQUESTS = [
    { id: 201, title: "Tutoring session for Data Structures", category: "Academic", deadline: "2023-11-25", status: "ACCEPTED", requesterName: "Rahul S." },
    { id: 202, title: "WiFi router configuration help", category: "Tech", deadline: "2023-11-22", status: "COMPLETED", requesterName: "Professor Oak" },
    { id: 203, title: "Help with campus event photography", category: "Events", deadline: "2023-12-01", status: "ACCEPTED", requesterName: "Student Council" },
];

export default function AcceptedRequestsPage() {
    const [filter, setFilter] = useState("ALL");

    const filtered = MOCK_ACCEPTED_REQUESTS.filter(req =>
        filter === "ALL" || req.status === filter
    );

    const counts = {
        ALL: MOCK_ACCEPTED_REQUESTS.length,
        ACCEPTED: MOCK_ACCEPTED_REQUESTS.filter(r => r.status === 'ACCEPTED').length,
        COMPLETED: MOCK_ACCEPTED_REQUESTS.filter(r => r.status === 'COMPLETED').length
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-32">

            {/* Focused Workspace Header */}
            <header className="bg-slate-900 pt-24 pb-20 px-6 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/30 to-transparent pointer-events-none"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 text-white/50">
                        <ClipboardCheck size={14} className="text-[#E65100]" />
                        <span className="text-[9px] font-black uppercase tracking-[0.4em]">Active Ledger</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 leading-none">
                        Work <span className="text-[#E65100]/80">Vault</span>
                    </h1>
                    <p className="text-slate-400 font-bold text-sm md:text-base uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                        Securely manage your accepted tasks and track progress towards completion.
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">

                {/* Task Controls Row */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 bg-white p-5 shadow-xl border border-slate-200 rounded-[2rem]">
                    <div className="flex flex-wrap items-center gap-2">
                        {["ALL", "ACCEPTED", "COMPLETED"].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`text-[11px] font-black uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all ${filter === f
                                        ? "bg-[#004D40] text-white shadow-lg scale-105"
                                        : "bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100"
                                    }`}
                            >
                                {f} <span className="ml-1 opacity-40">({counts[f]})</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/requests" className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#004D40] hover:text-[#E65100] transition-all group/back">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Repository
                        </Link>
                    </div>
                </div>

                {/* Registry Grid - Focused Box Format */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filtered.map(req => (
                            <AcceptedWorkCard key={req.id} request={req} />
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto py-32 bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center rounded-[2.5rem]">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                            <LayoutGrid size={32} className="text-slate-200" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-200 uppercase tracking-widest mb-2">No Records</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">The vault is currently empty for this filter.</p>
                    </div>
                )}

                {/* Insight Box */}
                <div className="mt-24 p-8 bg-white border-l-4 border-[#004D40] max-w-2xl mx-auto rounded-r-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex items-center gap-3 mb-3">
                        <Info size={16} className="text-[#004D40]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E65100]">Protocol Update</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                        Mark tasks as <span className="text-[#004D40] font-black not-italic uppercase tracking-widest">Resolved</span> to ensure project integrity and clear your active ledger. Verified by the CampusConnect Protocol.
                    </p>
                </div>
            </main>

            <footer className="max-w-5xl mx-auto px-6 py-20 opacity-20 text-center">
                <div className="h-[1px] bg-slate-200 w-full mb-8"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Protocol Registry — CampusConnect Ecosystem</span>
            </footer>
        </div>
    );
}
