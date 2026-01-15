"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      <header>
        <h1>Campus-Connect</h1>
        <nav>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
      <section>
        <p>A platform to connect students and campus administration</p>
        <p>
          Campus-Connect helps students submit requests online and allows
          administrators to review, approve, or reject them easily.
        </p>
     
      </section>
      <section>
        <h3>How It Works</h3>
        <article>
          <h4>Step 1</h4>
          <p>Register as a student or admin</p>
        </article>
        <article>
          <h4>Step 2</h4>
          <p>Submit requests online</p>
        </article>
        <article>
          <h4>Step 3</h4>
          <p>Admin reviews and approves</p>
        </article>
      </section>
    </main>
  );
}
