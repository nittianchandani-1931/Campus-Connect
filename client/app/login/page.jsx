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
    if (email === "student@example.com" && password === "password123") {
      localStorage.setItem("token", "mock-jwt-token");

      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f3f3f]">
        <form
          onSubmit={handleLogin}
          className="w-[460px] bg-[#DD750C] border-4 border-[#0b2f2f] rounded-3xl shadow-2xl px-10 py-12"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            Login
          </h2>

          <p className="text-center text-white/80 text-sm mb-6">
            Enter your credentials
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
            w-full
            mb-5
            px-4
            py-3
            rounded-lg
            border border-[#1e5555]
            text-black
            placeholder-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-teal-600
          "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
            w-full
            mb-6
            px-4
            py-3
            rounded-lg
            border border-[#1e5555]
            text-black
            placeholder-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-teal-600
          "
          />

          <button
            type="submit"
            className="
            w-full
            py-3
            rounded-lg
            bg-teal-600
            hover:bg-teal-700
            text-white
            font-semibold
            transition
          "
          >
            Login
          </button>

          <p className="text-center text-sm text-white mt-5">
            Don’t have an account?{" "}
            <Link href="/register" className="text-teal-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
  );
}
