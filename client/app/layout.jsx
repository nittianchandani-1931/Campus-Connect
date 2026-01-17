import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CampusConnect",
  description: "Connects students and administration easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/campus_logo.png" alt="CampusConnect Logo" style={{ height: "40px", width: "auto" }} />
            <span style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>CampusConnect</span>
          </Link>

          <nav className="nav-links">
            <Link href="/" className="nav-btn">
              Home
            </Link>
            <Link href="/" className="nav-btn">
              About
            </Link>
            <Link href="/" className="nav-btn">
              Contact us
            </Link>

          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
