"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Label } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { setDemoAuthEmail } from "@/lib/auth";

export function LoginPanel() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setDemoAuthEmail(email.trim().toLowerCase());
      router.push("/home");
    }, 800);
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 pt-10 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
      <h2 className="text-2xl font-semibold text-slate-50 mb-2">Access the Club</h2>
      <p className="text-sm text-slate-400 mb-8">Enter any email and password to enter the demo.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-left">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="bg-slate-950/50"
          />
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="bg-slate-950/50"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Authenticating..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}