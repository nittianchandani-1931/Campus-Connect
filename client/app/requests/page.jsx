"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RequestCard from "../../components/RequestCard";
import { Plus, Filter, SortAsc, Loader2 } from "lucide-react";
import { requestService } from "../../services/api";

const CATEGORIES = ["All", "Academic", "Tech", "Events", "Lost & Found", "Other"];

export default function BrowseRequestsPage() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("Latest");

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const data = await requestService.getAll();
                if (data.success) {
                    setRequests(data.data);
                }
            } catch (err) {
                setError("Failed to synchronize with campus registry.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    const filtered = requests.filter(req => category === "All" || req.category === category)
        .sort((a, b) => {
            if (sort === "Latest") return new Date(b.createdAt) - new Date(a.createdAt);
            return new Date(a.createdAt) - new Date(b.createdAt);
        });

    const handleAccept = (id) => {
        alert(`Engagement Protocol Initialized for Request #${id}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
                <Loader2 className="text-[#004D40] animate-spin mb-4" size={48} />
                <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Synchronizing Registry...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#004D40] selection:text-white pb-32">

            {/* Refined Professional Header */}
            <header className="bg-slate-900 pt-24 pb-20 px-6 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004D40]/30 to-slate-900 pointer-events-none"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-none">
                        Request <span className="text-[#E65100]">Board</span>
                    </h1>
                    <p className="text-slate-400 font-bold text-base md:text-lg uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed mb-10">
                        The central exchange for campus support and resource sharing.
                    </p>

                    <Link
                        href="/requests/new"
                        className="inline-flex items-center gap-3 bg-[#E65100] hover:bg-white hover:text-slate-900 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                        <Plus size={20} />
                        Publish New Request
                    </Link>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">

                {/* Compact Filter Interface */}
                <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-200 mb-16">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all ${category === cat
                                        ? "bg-[#004D40] text-white shadow-lg"
                                        : "text-slate-400 hover:text-slate-900 bg-slate-50 border border-slate-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sort</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="text-[11px] font-black uppercase tracking-widest bg-transparent outline-none cursor-pointer text-[#004D40]"
                            >
                                <option value="Latest">Latest</option>
                                <option value="Oldest">Legacy</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Focused Grid Pattern */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filtered.map(req => (
                            <RequestCard key={req.id} request={req} onAccept={handleAccept} />
                        ))}
                    </div>
                ) : (
                    <div className="py-40 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                        <p className="text-3xl font-black text-slate-200 uppercase tracking-widest mb-2">No Matches</p>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Adjust filters to continue.</p>
                    </div>
                )}
            </main>

            <footer className="max-w-5xl mx-auto px-6 py-20 opacity-20 text-center">
                <div className="h-[1px] bg-slate-200 w-full mb-8"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">CampusConnect Ecosystem v2.1</span>
            </footer>
        </div>
    );
}
