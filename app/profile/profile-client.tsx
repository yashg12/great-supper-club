"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBookings } from "@/lib/bookings";
import { DEMO_AUTH_EMAIL_KEY, clearDemoAuth } from "@/lib/auth";
import type { DietaryPreference } from "@/lib/types";
import {
  getPrefCity,
  getPrefDietary,
  setPrefCity,
  setPrefDietary,
  type CityPreference,
} from "@/lib/preferences";

export function ProfileClient() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [prefCity, setCity] = useState<CityPreference>("All");
  const [prefDietary, setDietary] = useState<DietaryPreference>("Both");

  useEffect(() => {
    try {
      setEmail(window.localStorage.getItem(DEMO_AUTH_EMAIL_KEY));
    } catch {
      setEmail(null);
    }

    setCity(getPrefCity());
    setDietary(getPrefDietary());
  }, []);

  const bookings = useMemo(() => getBookings(), []);

  const totalBookings = bookings.length;
  const lastBooking = bookings[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle>User info</CardTitle>
            <Badge variant="muted">Member</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400">Signed in as</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                {email ?? "guest@example.com"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-slate-100">Bookings summary</p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">Total bookings</p>
                  <p className="mt-1 text-lg font-semibold text-white">{totalBookings}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">Latest event</p>
                  <p className="mt-1 text-sm font-semibold text-white truncate">
                    {lastBooking?.eventTitle ?? "—"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="mt-1 text-sm font-semibold text-white">Active</p>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => router.push("/bookings")}
                >
                  View my bookings
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400">Dietary</p>
              <div className="mt-2 inline-flex rounded-2xl border border-slate-800/70 bg-slate-950/60 p-1">
                {(["Veg", "Non-Veg", "Both"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setDietary(opt);
                      setPrefDietary(opt);
                    }}
                    className={
                      "rounded-xl px-3 py-1.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 " +
                      (prefDietary === opt
                        ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/20 text-slate-50 ring-1 ring-white/10"
                        : "text-slate-300 hover:text-white")
                    }
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400">Default city</p>
              <div className="mt-2">
                <select
                  value={prefCity}
                  onChange={(e) => {
                    const next = e.target.value as CityPreference;
                    setCity(next);
                    setPrefCity(next);
                  }}
                  className="h-11 w-full appearance-none rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 pr-10 text-sm font-medium text-slate-100 transition-all focus:border-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="All">All</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                className="w-full"
                onClick={() => {
                  clearDemoAuth();
                  router.push("/");
                }}
              >
                Log out
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
