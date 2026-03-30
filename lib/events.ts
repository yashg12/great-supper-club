import eventsJson from "@/data/events.json";
import type { SupperEvent } from "@/lib/types";

const events = eventsJson as SupperEvent[];

export function getAllEvents(): SupperEvent[] {
  return [...events].sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

export function getEventById(eventId: string): SupperEvent | undefined {
  return events.find((e) => e.id === eventId);
}
