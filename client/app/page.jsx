"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main style={{ maxWidth: "100%", background: "transparent", margin: 0, borderRadius: 0 }}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: "linear-gradient(rgba(0, 37, 26, 0.85), rgba(0, 77, 64, 0.75)), url('/campus_hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}>
        <h1 className="hero-title" style={{ color: "white" }}>
          Create Your <br />
          <span style={{ color: "var(--accent)" }}>Campus connection</span>
        </h1>
        <p className="hero-text" style={{ color: "rgba(255,255,255,0.8)" }}>
          A centralized platform for students and administration to manage, track,
          and approve campus requests efficiently. Experience the digital
          transformation of your campus today.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/register" className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "18px" }}>
            Get Started
          </Link>
          <Link href="/login" className="btn btn-secondary" style={{ padding: "16px 32px", fontSize: "18px" }}>
            Login
          </Link>
        </div>
      </section>

      {/* Why Campus Connection Section */}
      <section style={{ background: "linear-gradient(to bottom, #ffffff, #f0fdfa)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "var(--primary)", marginBottom: "16px" }}>
              Why Campus Connection?
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "18px" }}>
              Your digital campus community for growth and support
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card" style={{ borderTop: "4px solid var(--accent)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(230, 81, 0, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "var(--accent)", fontWeight: "bold", fontSize: "28px" }}>🤝</div>
              <h3>Connect & Network</h3>
              <p>
                Bridge the gap between juniors and seniors. Find mentors, study partners, and build your professional network within the campus.
              </p>
            </article>

            <article className="feature-card" style={{ borderTop: "4px solid var(--primary)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(0, 77, 64, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "var(--primary)", fontWeight: "bold", fontSize: "28px" }}>📚</div>
              <h3>Share Resources</h3>
              <p>
                Access a centralized repository of study notes, previous year papers, and helpful materials shared by your peers.
              </p>
            </article>

            <article className="feature-card" style={{ borderTop: "4px solid var(--accent)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(230, 81, 0, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "var(--accent)", fontWeight: "bold", fontSize: "28px" }}>💡</div>
              <h3>Solve Problems</h3>
              <p>
                Stuck on a coding bug? Facing a campus issue? Post your problems and get quick help from the community.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ background: "linear-gradient(to bottom, #fff7ed, #ffffff)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "var(--primary-dark)", marginBottom: "16px" }}>
              How It Works?
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "18px" }}>
              Get started in 3 simple steps
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>

            {/* Step 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", background: "white", borderRadius: "50%", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: "32px", fontWeight: "800", marginBottom: "24px", border: "4px solid var(--primary)" }}>
                1
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)", marginBottom: "12px" }}>Sign Up</h3>
              <p style={{ color: "var(--gray-text)", lineHeight: "1.6" }}>
                Create your student profile using your college email to verify your identity and join the community.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", background: "white", borderRadius: "50%", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontSize: "32px", fontWeight: "800", marginBottom: "24px", border: "4px solid var(--accent)" }}>
                2
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)", marginBottom: "12px" }}>Post or Browse</h3>
              <p style={{ color: "var(--gray-text)", lineHeight: "1.6" }}>
                Need help? Post a request. Want to help? Browse open requests for notes, coding help, or guidance.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", background: "white", borderRadius: "50%", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: "32px", fontWeight: "800", marginBottom: "24px", border: "4px solid var(--primary)" }}>
                3
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)", marginBottom: "12px" }}>Connect & Solve</h3>
              <p style={{ color: "var(--gray-text)", lineHeight: "1.6" }}>
                Connect with the right person, share resources, and mark requests as completed once your goal is achieved.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
