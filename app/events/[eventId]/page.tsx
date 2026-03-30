import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/ui/back-button";
import { FallbackImg } from "@/components/ui/fallback-img";
import { getEventById, getAllEvents } from "@/lib/events";
import { formatEventDate, formatMoneyFromCents } from "@/lib/format";
import { BookingPanel } from "@/app/events/[eventId]/booking-panel";

export function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    eventId: event.id,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = getEventById(eventId);
  if (!event) notFound();

  const seatsAvailable = event.seatsAvailable ?? event.seatsLeft;

  return (
    <div className="py-8 sm:py-10">
      <Container>
        <BackButton />
        <SectionHeading
          title={event.title}
          subtitle={`Hosted by ${event.hostName}`}
          right={<Badge variant="muted">{formatEventDate(event.dateISO)}</Badge>}
        />

        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div className="relative aspect-[21/9] w-full bg-white/5">
            <FallbackImg
              src={event.image}
              alt={event.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-200">
                {event.menu.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/50 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-sm text-slate-100">
                    {event.neighborhood}, {event.city}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Price</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">
                      {formatMoneyFromCents(event.priceCents, event.currency)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Seats available</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">
                      {seatsAvailable}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <BookingPanel event={event} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
