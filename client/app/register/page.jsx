"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService } from "../../services/api";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "REQUESTER" // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const data = await authService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });

      if (data.success) {
        alert("Registration Successful! Please login.");
        router.push("/login");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Registration Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="subtitle">
          Join CampusConnect using your college email
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="College Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-link">
          Already have an account?
          <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
