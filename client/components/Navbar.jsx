"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, User as UserIcon } from "lucide-react";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check auth state on mount and when interactions happen (if we had a context)
        // For now, simple check
        const token = localStorage.getItem("token");
        const storedName = localStorage.getItem("username");

        setIsLoggedIn(!!token);
        if (storedName) setUsername(storedName);
    }, [pathname]); // Re-check on route change if needed

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername("");
        router.push("/");
    };

    const isActive = (path) => pathname === path ? "nav-active" : "";

    return (
        <header className="navbar">
            {pathname === "/" && (
                <Link href="/" className="flex items-center">
                    <img
                        src="/campus_logo.png"
                        alt="CampusConnect"
                        className="navbar-logo"
                    />
                </Link>
            )}

            <nav className="nav-links">
                <Link href="/" className={`nav-btn ${isActive('/')}`}>
                    Home
                </Link>
                {isLoggedIn ? (
                    <>
                   
                        <Link href="/requests" className={`nav-btn ${isActive('/requests')}`}>
                            Requests
                        </Link>
                        <Link href="/my-requests" className={`nav-btn ${isActive('/my-requests')}`}>
                            My Requests
                        </Link>
                        <Link href="/accepted" className={`nav-btn ${isActive('/accepted')}`}>
                            Accepted
                        </Link>
                        <Link href="/dashboard" className={`nav-btn ${isActive('/dashboard')}`}>
                            Dashboard
                        </Link>
                        <Link href="/database" className={`nav-btn ${isActive('/database')}`}>
                            Database
                        </Link>

                        <div className="flex items-center gap-4 ml-4">
                            <Link href="/profile" className="flex items-center gap-2 text-white/90 hover:text-[#E65100] transition-colors">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                    <UserIcon size={16} />
                                </div>
                                <span className="font-medium text-sm hidden sm:block">{username}</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="p-2 rounded-full text-white/70 hover:bg-white/10 hover:text-red-400 transition-all"
                                title="Logout"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href="/about" className={`nav-btn ${isActive('/about')}`}>
                            About
                        </Link>
                        <Link href="/contact" className={`nav-btn ${isActive('/contact')}`}>
                            Contact
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
