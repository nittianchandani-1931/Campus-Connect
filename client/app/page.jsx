"use client";
import Link from "next/link";
export default function LandingPage() {
  return (
    <main className="container">
      <section classname="hero">
        <h1>CampusConnect</h1>
        <p className="tag">
          Platform to students help , manage requests and approvals
        </p>
      </section>
      <section className="description">
        <p>
          CampusConnect helps students submit requests and allows administrators
          to review, approve, or reject them easily from platform.
        </p>
      </section>
      <section className="how-it-works">
        <h2>How it works and help Students</h2>

        <div className="track">
          <div className="track">
            <h3>Register</h3>
            <p>Create an account as student or admin.</p>
          </div>
          <div className="track">
            <h3>Submit request</h3>
            <p>Students submit theirs requests.</p>
          </div>

          <div className="track">
            <h3>Get approvals</h3>
            <p>Admins review and approve requests quickly.</p>
          </div>
        </div>
      </section>
      <section className="actions">
        <Link href="/login" className="btn login">
         
          Login
        </Link>
        <Link href="/register" className="btn register">
          /Register
        </Link>
      </section>
    </main>
  );
}
