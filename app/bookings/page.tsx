import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { BookingsClient } from "@/app/bookings/bookings-client";

export default function MyBookingsPage() {
  return (
    <div className="py-8 sm:py-10">
      <Container>
        <SectionHeading
          title="My Bookings"
          subtitle="Stored locally in your browser."
        />
        <div className="mt-6">
          <BookingsClient />
        </div>
      </Container>
    </div>
  );
}
