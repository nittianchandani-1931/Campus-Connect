import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CampusConnect",
  description: "Connects students ,request and approves easily",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="navbar">
          <h6 className="logo">CampusConnect</h6>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/">Pages</Link>
            <Link href="/request">Request</Link>
            <Link href="/">Dashboard</Link>
          </nav>
        </header>

        {/* Page Content */}
        {/* <main className="page-wrapper"> */}
          {children}
          {/* </main> */}
      </body>
    </html>
  );
}
