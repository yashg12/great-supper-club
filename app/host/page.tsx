import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getAllEvents } from "@/lib/events";
import { HostDashboardClient } from "@/app/host/host-dashboard-client";

export default function HostDashboardPage() {
  const events = getAllEvents();

  return (
    <div className="py-8 sm:py-10">
      <Container>
        <SectionHeading
          title="Host Dashboard"
          subtitle="Create events (UI only) and review your listings."
        />

        <HostDashboardClient initialEvents={events} />
      </Container>
    </div>
  );
}
