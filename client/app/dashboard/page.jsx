"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("username");
    if (!token) {
      router.push("/login");
    } else if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <div className="dashboard-container" style={{ background: "linear-gradient(180deg, var(--gray-light) 0%, rgba(0, 77, 64, 0.05) 100%)", minHeight: "calc(100vh - 80px)" }}>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {username} 👋</h1>
        <p className="subtitle" style={{ margin: "0 0 32px 0" }}>
          Here's what's happening with your campus requests
        </p>

        <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
          <Link href="/requests/new" className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>+</span> Create New Request
          </Link>
          <Link href="/requests" className="btn btn-secondary" style={{ borderColor: "var(--primary)", color: "var(--primary)", padding: "16px 32px", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🔍</span> Browse Requests
          </Link>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* My Requests (Pending/All) */}
        <Link href="/my-requests" className="action-card">
          <div style={{ width: "40px", height: "40px", background: "var(--gray-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "var(--primary)", fontWeight: "bold", fontSize: "20px" }}>📄</div>
          <h4>My Requests</h4>
          <p>Track the status of your submitted requests.</p>
        </Link>

        {/* Accepted Requests */}
        <Link href="/accepted" className="action-card">
          <div style={{ width: "40px", height: "40px", background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "#2E7D32", fontWeight: "bold", fontSize: "20px" }}>✓</div>
          <h4>Accepted Requests</h4>
          <p>View requests that have been approved.</p>
        </Link>

        {/* Completed Requests */}
        <Link href="/completed" className="action-card">
          <div style={{ width: "40px", height: "40px", background: "#E3F2FD", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "#1565C0", fontWeight: "bold", fontSize: "20px" }}>★</div>
          <h4>Completed Requests</h4>
          <p>Archive of successfully resolved requests.</p>
        </Link>

        {/* Profile */}
        <Link href="/profile" className="action-card">
          <div style={{ width: "40px", height: "40px", background: "var(--gray-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "var(--gray-text)", fontWeight: "bold", fontSize: "20px" }}>👤</div>
          <h4>My Profile</h4>
          <p>Update your details and account settings.</p>
        </Link>
      </div>

      {/* Stats Section (Placeholder for now) */}
      <div style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "24px", color: "var(--primary-dark)", marginBottom: "24px", fontWeight: "700" }}>
          Recent Activity
        </h2>
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <p style={{ color: "var(--gray-text)" }}>No recent activity to show.</p>
        </div>
      </div>
    </div>
  );
}
