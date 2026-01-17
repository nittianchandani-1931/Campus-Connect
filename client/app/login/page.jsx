"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Allow login for any non-empty credentials for now
    if (email && password) {
      localStorage.setItem("token", "mock-jwt-token");
      // Simulate getting a name from the email (e.g., student@... -> Student)
      const mockName = email.split("@")[0].split(/[._]/)[0];
      const firstName = mockName.charAt(0).toUpperCase() + mockName.slice(1);
      localStorage.setItem("username", firstName);

      router.push("/dashboard");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in to access your dashboard
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-link">
          Don’t have an account?
          <Link href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}
