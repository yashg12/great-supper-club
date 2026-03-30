import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { EventGrid } from "@/components/events/event-grid";
import { getAllEvents } from "@/lib/events";

export default function HomeAppPage() {
  const events = getAllEvents();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <main className="flex-1 py-10 sm:py-14">
        <Container>
          <SectionHeading
            title="Upcoming suppers"
            subtitle="Minimal, curated dinners hosted by real people."
          />
          <div className="mt-6">
            <EventGrid events={events} />
          </div>
        </Container>
      </main>
    </div>
  );
}
