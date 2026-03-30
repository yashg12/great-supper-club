import type { SupperEvent } from "@/lib/types";
import { EventCard } from "@/components/events/event-card";

export function EventGrid({ events }: { events: SupperEvent[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
