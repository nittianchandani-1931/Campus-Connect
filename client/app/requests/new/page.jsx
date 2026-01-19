"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, ChevronLeft, Type, Clock, Layers, HelpCircle } from "lucide-react";

export default function CreateRequestPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        deadline: "",
    });

    const CATEGORIES = ["Academic", "Tech", "Events", "Lost & Found", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        router.push("/requests");
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-xl">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 hover:text-black transition-colors mb-12"
                >
                    <ChevronLeft size={14} />
                    Back to Board
                </button>

                <div className="bg-white border-4 border-gray-900 p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Initialize <span className="text-[#004D40]">Request</span></h1>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Protocol Version 3.1.0 // Client Submission</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Title */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#004D40] flex items-center gap-2">
                                <Type size={14} /> Subject Line
                            </label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="I need help with..."
                                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black py-3 text-lg font-bold outline-none transition-all placeholder:text-gray-200"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Category */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#004D40] flex items-center gap-2">
                                    <Layers size={14} /> Category
                                </label>
                                <select
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border-2 border-gray-900 p-3 text-xs font-black uppercase tracking-widest outline-none appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Type</option>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            {/* Deadline */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#004D40] flex items-center gap-2">
                                    <Clock size={14} /> Target Date
                                </label>
                                <input
                                    type="date"
                                    name="deadline"
                                    required
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border-2 border-gray-900 p-3 text-xs font-black uppercase tracking-widest outline-none"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#004D40] flex items-center gap-2">
                                <HelpCircle size={14} /> Full Record
                            </label>
                            <textarea
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Briefly explain the requirements and context..."
                                className="w-full bg-gray-50 border-2 border-gray-900 p-5 text-sm font-medium outline-none transition-all focus:bg-white resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-5 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-[#E65100] transition-all disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Submit to Board"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>

                <div className="mt-8 flex justify-center gap-8 opacity-20 text-[9px] font-black uppercase tracking-[0.4em]">
                    <span>Security Guaranteed</span>
                    <span>Community Moderated</span>
                </div>
            </div>
        </div>
    );
}
