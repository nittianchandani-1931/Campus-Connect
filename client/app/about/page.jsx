"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f0fdfa, #ffffff)",
        padding: "120px 24px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "900",
              color: "var(--primary)",
              marginBottom: "20px",
            }}
          >
            About <span style={{ color: "var(--accent)" }}>CampusConnect</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "18px",
              color: "var(--gray-text)",
              lineHeight: "1.8",
            }}
          >
            CampusConnect is a purpose-driven digital platform built to simplify
            communication, collaboration, and problem-solving within a campus
            environment.
          </p>
        </div>

        {/* What & Why */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            marginBottom: "100px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "var(--primary)",
                marginBottom: "20px",
              }}
            >
              What is CampusConnect?
            </h2>

            <p style={paragraphStyle}>
              CampusConnect acts as a centralized hub where students can request
              help, share academic resources, and connect with peers, seniors,
              and administrators in a secure and structured manner.
            </p>

            <p style={paragraphStyle}>
              The platform reduces dependency on scattered social groups and
              informal channels by offering an organized, campus-verified
              solution tailored specifically for educational institutions.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "var(--primary)",
                marginBottom: "20px",
              }}
            >
              Why CampusConnect?
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Centralized campus communication",
                "Verified student & admin access",
                "Faster issue resolution",
                "Resource sharing made easy",
                "Modern and intuitive design",
              ].map((item, i) => (
                <li key={i} style={listStyle}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          style={{
            background: "white",
            borderRadius: "32px",
            padding: "64px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.1)",
            marginBottom: "100px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
            }}
          >
            <div>
              <h3 style={sectionTitle}>Our Mission</h3>
              <p style={paragraphStyle}>
                To empower campus communities by providing a transparent,
                reliable, and easy-to-use digital platform that enhances
                collaboration and academic growth.
              </p>
            </div>

            <div>
              <h3 style={sectionTitle}>Our Vision</h3>
              <p style={paragraphStyle}>
                To become a standard digital infrastructure for campuses,
                enabling smarter communication and efficient problem-solving
                across institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "900",
              color: "var(--primary)",
              marginBottom: "20px",
            }}
          >
            Join the CampusConnect Community
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 40px",
              fontSize: "18px",
              color: "var(--gray-text)",
              lineHeight: "1.8",
            }}
          >
            Be a part of a smarter campus ecosystem. Connect, collaborate, and
            grow together with CampusConnect.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/register" style={primaryBtn}>
              Get Started
            </Link>
            <Link href="/" style={secondaryBtn}>
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

/* 🔹 Styles */
const paragraphStyle = {
  fontSize: "16px",
  color: "var(--gray-text)",
  lineHeight: "1.8",
  marginBottom: "16px",
};

const sectionTitle = {
  fontSize: "26px",
  fontWeight: "800",
  color: "var(--primary)",
  marginBottom: "16px",
};

const listStyle = {
  marginBottom: "14px",
  fontSize: "16px",
  fontWeight: "600",
  color: "var(--primary)",
};

const primaryBtn = {
  padding: "14px 32px",
  borderRadius: "999px",
  background: "var(--accent)",
  color: "white",
  fontWeight: "800",
  textDecoration: "none",
};

const secondaryBtn = {
  padding: "14px 32px",
  borderRadius: "999px",
  border: "2px solid var(--primary)",
  color: "var(--primary)",
  fontWeight: "800",
  textDecoration: "none",
};
