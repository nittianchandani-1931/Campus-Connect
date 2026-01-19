"use client";

import { Folder, FileJson, Copy, Check, X, ShieldCheck, Lock } from "lucide-react";
import { useState } from "react";

export default function DatabaseDocPage() {
    const [copiedUser, setCopiedUser] = useState(false);
    const [copiedRequest, setCopiedRequest] = useState(false);

    const handleCopyUser = () => {
        const code = `{
  _id,
  name,
  email,
  password,
  role,       // REQUESTER | HELPER
  createdAt
}`;
        navigator.clipboard.writeText(code);
        setCopiedUser(true);
        setTimeout(() => setCopiedUser(false), 2000);
    };

    const handleCopyRequest = () => {
        const code = `{
  _id,
  title,
  description,
  category,
  status,       // OPEN | ACCEPTED | COMPLETED
  createdBy,    // userId
  acceptedBy,   // userId (nullable)
  createdAt,
  deadline
}`;
        navigator.clipboard.writeText(code);
        setCopiedRequest(true);
        setTimeout(() => setCopiedRequest(false), 2000);
    };

    const permissions = [
        { action: "Create request", requester: true, helper: false },
        { action: "Accept request", requester: false, helper: true },
        { action: "Mark completed", requester: true, helper: false },
    ];

    return (
        <div className="min-h-screen w-full bg-[#0F1115] flex flex-col items-center justify-start font-sans p-6 md:p-16 text-slate-300 overflow-x-hidden space-y-20">

            <div className="w-full max-w-5xl space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* 1. GLOBAL FOLDER HEADER */}
                <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                        <Folder className="text-amber-500" size={24} fill="currentColor" fillOpacity={0.2} />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-none">
                        Database Design <span className="text-slate-600 font-medium">(Simple & Clean)</span>
                    </h1>
                </div>

                <div className="space-y-20">

                    {/* --- USER COLLECTION --- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 transition-all hover:translate-x-1">
                            <div className="p-2 bg-blue-500/10 rounded-md">
                                <FileJson className="text-blue-500" size={18} fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-white/90">User Collection</h2>
                        </div>

                        <div className="relative group">
                            <div className="bg-[#181A1F] border border-white/5 rounded-xl overflow-hidden shadow-2xl transition-all group-hover:border-white/10">
                                <div className="flex items-center justify-between px-6 py-3 bg-[#1C1F26] border-b border-white/5">
                                    <span className="text-[12px] font-medium text-slate-500 lowercase tracking-wide">js</span>
                                    <button onClick={handleCopyUser} className="flex items-center gap-2 text-[12px] font-medium text-slate-400 hover:text-white transition-colors">
                                        {copiedUser ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                        <span>Copy code</span>
                                    </button>
                                </div>
                                <div className="p-8 md:p-12 font-mono text-[16px] md:text-[18px] leading-relaxed text-slate-300">
                                    <span className="block mb-2 opacity-80">{"{"}</span>
                                    <div className="pl-6 space-y-2">
                                        <div className="flex items-center gap-2">_id,</div>
                                        <div className="flex items-center gap-2">name,</div>
                                        <div className="flex items-center gap-2">email,</div>
                                        <div className="flex items-center gap-2">password,</div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>role,</span>
                                            <span className="text-slate-600 font-bold opacity-60 text-xs">// REQUESTER | HELPER</span>
                                        </div>
                                        <div className="flex items-center gap-2">createdAt</div>
                                    </div>
                                    <span className="block mt-2 opacity-80">{"}"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- REQUEST COLLECTION --- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 transition-all hover:translate-x-1">
                            <div className="p-2 bg-green-500/10 rounded-md">
                                <div className="w-[18px] h-[18px] bg-green-500/80 rounded-sm"></div>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-white/90">Request Collection</h2>
                        </div>

                        <div className="relative group">
                            <div className="bg-[#181A1F] border border-white/5 rounded-xl overflow-hidden shadow-2xl transition-all group-hover:border-white/10">
                                <div className="flex items-center justify-between px-6 py-3 bg-[#1C1F26] border-b border-white/5">
                                    <span className="text-[12px] font-medium text-slate-500 lowercase tracking-wide">js</span>
                                    <button onClick={handleCopyRequest} className="flex items-center gap-2 text-[12px] font-medium text-slate-400 hover:text-white transition-colors">
                                        {copiedRequest ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                        <span>Copy code</span>
                                    </button>
                                </div>
                                <div className="p-8 md:p-12 font-mono text-[16px] md:text-[18px] leading-relaxed text-slate-300">
                                    <span className="block mb-2 opacity-80">{"{"}</span>
                                    <div className="pl-6 space-y-2">
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>_id,</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>title,</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>description,</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>category,</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>status,</span>
                                            <span className="text-slate-600 font-bold opacity-60 text-xs">// OPEN | ACCEPTED | COMPLETED</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>createdBy,</span>
                                            <span className="text-slate-600 font-bold opacity-60 text-xs">// userId</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>acceptedBy,</span>
                                            <span className="text-slate-600 font-bold opacity-60 text-xs">// userId (nullable)</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>createdAt,</span>
                                        </div>
                                        <div className="grid grid-cols-[140px,1fr] gap-x-12 items-center">
                                            <span>deadline</span>
                                        </div>
                                    </div>
                                    <span className="block mt-2 opacity-80">{"}"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- ROLES & PERMISSIONS --- */}
                    <div className="space-y-8 pt-10">
                        <div className="flex items-center gap-4 transition-all hover:translate-x-1">
                            <div className="p-2 bg-amber-500/10 rounded-lg flex items-center justify-center">
                                <Lock className="text-amber-500" size={20} fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">Roles & Permissions</h2>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#181A1F] shadow-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-[#1C1F26]">
                                        <th className="px-8 py-5 text-sm font-black uppercase tracking-widest text-slate-500 w-1/3">Action</th>
                                        <th className="px-8 py-5 text-sm font-black uppercase tracking-widest text-slate-500 text-center">Requester</th>
                                        <th className="px-8 py-5 text-sm font-black uppercase tracking-widest text-slate-500 text-center">Helper</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissions.map((p, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                            <td className="px-8 py-6 text-base font-bold text-white/80">{p.action}</td>
                                            <td className="px-8 py-6 text-center">
                                                <div className="flex justify-center">
                                                    {p.requester ? (
                                                        <div className="p-1 bg-green-500/20 rounded-md">
                                                            <Check size={18} className="text-green-500" />
                                                        </div>
                                                    ) : (
                                                        <X size={18} className="text-red-500 opacity-60" />
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <div className="flex justify-center">
                                                    {p.helper ? (
                                                        <div className="p-1 bg-green-500/20 rounded-md">
                                                            <Check size={18} className="text-green-500" />
                                                        </div>
                                                    ) : (
                                                        <X size={18} className="text-red-500 opacity-60" />
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div className="pt-20 text-center opacity-10">
                    <span className="text-xs font-black tracking-[1em] uppercase">CampusConnect Access Matrix</span>
                </div>

            </div>

        </div>
    );
}
