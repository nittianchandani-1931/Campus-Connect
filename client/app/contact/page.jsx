"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #607460ff,#f67d49ff )",
        padding: "120px 16px 80px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#E65100" }}>
          Contact Us
        </h1>
        <p style={{ color: "#94a3b8", marginTop: "12px", fontSize: "16px" }}>
          Have a question or need support? Our CampusConnect team is here to help.
        </p>
      </div>

      {/* Container */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "48px",
        }}
      >
        {/* Left Info */}
        <div>
          <h3 style={{ color: "#e2e8f0", fontSize: "22px", marginBottom: "24px" }}>
            Get in touch
          </h3>

          <InfoItem icon={<Mail />} text="support@campusconnect.com" />
          <InfoItem icon={<Phone />} text="+91 9XXXXXXXXX" />
          <InfoItem icon={<MapPin />} text="Your College Campus, India" />
        </div>

        {/* Right Form */}
        <form
          style={{
            background: "#becfc7ff",
            border: "5px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "32px",
          }}
        >
          <Input label="Your Name" placeholder="Enter your name" />
          <Input label="Email Address" placeholder="Enter your email" />
          <Textarea label="Message" placeholder="Write your message..." />

          <button
            type="submit"
            style={{
              marginTop: "24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#E65100",
              color: "white",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

/* Components */

function InfoItem({ icon, text }) {
  return (
    <div style={{ display: "flex", gap: "14px", marginBottom: "20px", color: "#cbd5f5" }}>
      <div style={{ color: "#E65100" }}>{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", color: "#94a3b8", marginBottom: "6px" }}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "8px",
          background: "#020617",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          outline: "none",
        }}
      />
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", color: "#94a3b8", marginBottom: "6px" }}>
        {label}
      </label>
      <textarea
        rows={5}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "8px",
          background: "#020617",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          outline: "none",
          resize: "none",
        }}
      />
    </div>
  );
}
