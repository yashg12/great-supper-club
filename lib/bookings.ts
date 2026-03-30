"use client";

import type { Booking, SupperEvent } from "@/lib/types";

const STORAGE_KEY = "gsc_bookings_v1";

function safeParseBookings(raw: string | null): Booking[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((b): b is Booking => {
      return (
        typeof b === "object" &&
        b !== null &&
        typeof (b as Booking).id === "string" &&
        typeof (b as Booking).eventId === "string" &&
        typeof (b as Booking).eventTitle === "string" &&
        typeof (b as Booking).hostName === "string" &&
        typeof (b as Booking).priceCents === "number" &&
        typeof (b as Booking).currency === "string" &&
        typeof (b as Booking).bookedAtISO === "string"
      );
    });
  } catch {
    return [];
  }
}

function makeId(): string {
  const cryptoObj = globalThis.crypto as undefined | { randomUUID?: () => string };
  return cryptoObj?.randomUUID?.() ?? `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function getBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  return safeParseBookings(window.localStorage.getItem(STORAGE_KEY));
}

export function saveBookings(bookings: Booking[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function addBooking(event: SupperEvent): Booking {
  const bookings = getBookings();
  const booking: Booking = {
    id: makeId(),
    eventId: event.id,
    eventTitle: event.title,
    hostName: event.hostName,
    priceCents: event.priceCents,
    currency: event.currency,
    eventDateISO: event.dateISO,
    bookedAtISO: new Date().toISOString(),
  };

  saveBookings([booking, ...bookings]);
  return booking;
}

export function removeBooking(bookingId: string) {
  const bookings = getBookings();
  saveBookings(bookings.filter((b) => b.id !== bookingId));
}

export function clearBookings() {
  saveBookings([]);
}
