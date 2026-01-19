"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, LogOut, Edit3, Linkedin, Briefcase } from "lucide-react";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [workDone, setWorkDone] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }

        const storedName = localStorage.getItem("username") || "Bhanu Sapkota";
        const storedEmail = localStorage.getItem("email") || "bhanu@campusconnect.edu.np";

        setUser({
            name: storedName,
            email: storedEmail,
            username: storedName.toLowerCase().replace(/ /g, ""),
        });
        setWorkDone(12);
        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        router.push("/login");
    };

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F7F8' }}>
                <div style={{ width: '48px', height: '48px', border: '4px solid #E65100', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            </div>
        );
    }

    if (!user) return null;

    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#F5F7F8',
            paddingTop: '96px',
            paddingBottom: '96px',
            paddingLeft: '16px',
            paddingRight: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '448px' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden', position: 'relative' }}>

                    {/* Vertical Stripe on Left Side */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '8px',
                        background: 'linear-gradient(180deg, #E65100 0%, #FF6D00 100%)',
                    }}>
                    </div>

                    {/* Signature Watermark in Background */}
                    <div style={{
                        position: 'absolute',
                        bottom: '80px',
                        right: '20px',
                        fontSize: '48px',
                        fontFamily: 'Brush Script MT, cursive',
                        color: 'rgba(0, 77, 64, 0.03)',
                        transform: 'rotate(-15deg)',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        zIndex: 1
                    }}>
                        {user.name}
                    </div>

                    {/* Orange Header */}
                    <div style={{ height: '128px', backgroundColor: '#E65100', position: 'relative', padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img
                                src="/campus_logo.png"
                                alt="Campus Connect Logo"
                                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                            />
                            <div style={{ fontSize: '24px', fontWeight: '900', color: 'white' }}>Campus Connect</div>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', marginBottom: '24px' }}>
                        <div style={{ width: '128px', height: '128px', borderRadius: '16px', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', background: 'linear-gradient(135deg, #004D40 0%, #E65100 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>{initials}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '0 32px 32px 32px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#004D40', marginBottom: '24px' }}>
                            Mr. {user.name}
                        </h2>

                        {/* Email */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px', color: '#37474F' }}>
                            <Mail size={18} color="#E65100" />
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{user.email}</span>
                        </div>

                        {/* Work Done */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px', color: '#37474F' }}>
                            <Briefcase size={18} color="#E65100" />
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>
                                Work Done: <strong style={{ color: '#004D40', fontSize: '18px' }}>{workDone}</strong>
                            </span>
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button
                                onClick={() => alert("Edit Profile Coming Soon!")}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#004D40', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,77,64,0.3)', transition: 'all 0.2s' }}
                            >
                                <Edit3 size={18} />
                                Edit Profile
                            </button>

                            <button
                                onClick={handleLogout}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#F5F7F8', color: '#E65100', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', border: '2px solid #E65100', cursor: 'pointer', transition: 'all 0.2s' }}
                            >
                                <LogOut size={18} />
                                Log Out
                            </button>

                            <a
                                href={`https://linkedin.com/in/${user.username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#0A66C2', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 12px rgba(10,102,194,0.3)', transition: 'all 0.2s' }}
                            >
                                <Linkedin size={18} />
                                Connect with me
                            </a>
                        </div>

                        {/* Footer */}
                        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #f0f0f0' }}>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}
