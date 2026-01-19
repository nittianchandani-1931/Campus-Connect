import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #00382f, #00251a)",
        color: "white",
        padding: "80px 24px 32px",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "48px",
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px" }}>
            Campus<span style={{ color: "#E65100" }}>Connect</span>
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>
            A smart digital platform to connect students, share resources,
            and solve campus problems efficiently.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link href="/login" style={linkStyle}>Login</Link></li>
            <li><Link href="/register" style={linkStyle}>Register</Link></li>
            <li><Link href="#why" style={linkStyle}>Why Campus Connect</Link></li>
            <li><Link href="#how" style={linkStyle}>How it Works</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>
            Support
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#" style={linkStyle}>Help Center</a></li>
            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li><a href="#" style={linkStyle}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>
            Contact
          </h4>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>
            Email: support@campusconnect.edu.np <br />
            Campus Community Platform
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "48px",
          paddingTop: "24px",
          textAlign: "center",
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        © {new Date().getFullYear()} CampusConnect. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  fontWeight: 500,
};
