"use client";

import type { DietaryPreference } from "@/lib/types";

const CITY_KEY = "gsc.prefCity";
const DIETARY_KEY = "gsc.prefDietary";

export type CityPreference = "Mumbai" | "Pune" | "Delhi" | "Bangalore" | "All";

export function getPrefCity(): CityPreference {
  if (typeof window === "undefined") return "All";
  const raw = window.localStorage.getItem(CITY_KEY);
  if (raw === "Mumbai" || raw === "Pune" || raw === "Delhi" || raw === "Bangalore" || raw === "All") {
    return raw;
  }
  return "All";
}

export function setPrefCity(city: CityPreference) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CITY_KEY, city);
}

export function getPrefDietary(): DietaryPreference {
  if (typeof window === "undefined") return "Both";
  const raw = window.localStorage.getItem(DIETARY_KEY);
  if (raw === "Veg" || raw === "Non-Veg" || raw === "Both") return raw;
  return "Both";
}

export function setPrefDietary(pref: DietaryPreference) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DIETARY_KEY, pref);
}
