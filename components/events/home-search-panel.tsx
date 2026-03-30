"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { SupperEvent } from "@/lib/types";
import { useRuntimeEvents } from "@/components/runtime/runtime-events";
import { EventGrid } from "@/components/events/event-grid";
import { EmptyState } from "@/components/empty-state";

const CITIES = ["Mumbai", "Pune", "Delhi", "Bangalore"] as const;

type City = (typeof CITIES)[number] | "All";
type Dietary = "Veg" | "Non-Veg" | "Both";

const DemoLeafletMap = dynamic(
  () => import("@/components/maps/demo-leaflet-map").then((m) => m.DemoLeafletMap),
  { ssr: false },
);

export function HomeSearchPanel({ events }: { events: SupperEvent[] }) {
  const { events: runtimeEvents } = useRuntimeEvents();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<City>("All");
  const [dietary, setDietary] = useState<Dietary>("Both");

  const allEvents = useMemo(() => {
    if (runtimeEvents.length === 0) return events;
    return [...runtimeEvents, ...events];
  }, [runtimeEvents, events]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allEvents.filter((e) => {
      const matchesQuery = q.length === 0 || e.title.toLowerCase().includes(q);
      const matchesCity = city === "All" || e.city === city;

      const matchesDietary =
        dietary === "Both" ||
        e.dietary === "Both" ||
        e.dietary === dietary;

      return matchesQuery && matchesCity && matchesDietary;
    });
  }, [allEvents, query, city, dietary]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-500/50 via-purple-500/40 to-indigo-500/50 p-[1px]">
        <div className="rounded-3xl border border-slate-800/50 bg-slate-950/70 p-4 backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1">
              <div className="group relative rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 shadow-sm shadow-indigo-900/10 transition-all focus-within:border-indigo-500/60 focus-within:ring-2 focus-within:ring-indigo-500/20">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search events by name…"
                  className="w-full bg-transparent pl-8 pr-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value as City)}
                  className="h-[52px] w-full appearance-none rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 pr-10 text-sm font-medium text-slate-100 shadow-sm shadow-indigo-900/10 transition-all focus:border-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="All">All cities</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  // UI-only: no GPS. Pick a sensible default.
                  setCity("Mumbai");
                }}
                className="hidden h-[52px] items-center gap-2 rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 text-sm font-medium text-slate-200 shadow-sm shadow-indigo-900/10 transition-all hover:border-indigo-500/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:inline-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 22s8-4 8-10a8 8 0 1 0-16 0c0 6 8 10 8 10Z" />
                </svg>
                Use my location
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400">Dietary</span>
            <div className="inline-flex rounded-2xl border border-slate-800/70 bg-slate-950/60 p-1 shadow-sm shadow-indigo-900/10">
              {(["Veg", "Non-Veg", "Both"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setDietary(opt)}
                  className={
                    "rounded-xl px-3 py-1.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 " +
                    (dietary === opt
                      ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/20 text-slate-50 ring-1 ring-white/10"
                      : "text-slate-300 hover:text-white")
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-slate-400">
              Showing <span className="font-semibold text-slate-200">{filtered.length}</span> of{" "}
              <span className="font-semibold text-slate-200">{allEvents.length}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCity("All");
                setDietary("Both");
              }}
              className="text-xs font-medium text-slate-300 transition-colors hover:text-white"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 shadow-sm shadow-indigo-900/10 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-100">Map</p>
            <p className="mt-1 text-xs text-slate-400">
              {city === "All" ? "Select a city to highlight it." : `Highlighting: ${city}`}
            </p>
          </div>
          <div className="rounded-full border border-slate-800/70 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200">
            {city === "All" ? "All" : city}
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/50">
          <div className="relative aspect-[16/7]">
            <div className="absolute inset-0">
              <DemoLeafletMap city={city} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
            {city !== "All" ? (
              <div className="absolute left-4 bottom-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 backdrop-blur">
                {city}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <EventGrid events={filtered} />
      ) : (
        <EmptyState
          title="No events found"
          description="Try a different search term or switch cities."
        />
      )}
    </div>
  );
}
