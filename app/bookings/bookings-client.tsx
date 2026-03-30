"use client";

import { useMemo, useState } from "react";
import type { Booking } from "@/lib/types";
import { clearBookings, getBookings, removeBooking } from "@/lib/bookings";
import { formatEventDate, formatMoneyFromCents } from "@/lib/format";
import { Button, LinkButton } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";

export function BookingsClient() {
  const [bookings, setBookings] = useState<Booking[]>(() => getBookings());

  const total = useMemo(() => {
    return bookings.reduce((sum, b) => sum + b.priceCents, 0);
  }, [bookings]);

  if (bookings.length === 0) {
    return (
      <EmptyState
        title="No bookings yet"
        description="Book an event and it will show up here."
        action={<LinkButton href="/" variant="primary">Browse events</LinkButton>}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-4 border border-slate-700/50 shadow-sm shadow-indigo-900/10">
        <div>
          <p className="text-sm text-slate-400">Total</p>
          <p className="mt-1 text-base font-semibold text-slate-50">
            {formatMoneyFromCents(total, "USD")}
          </p>
        </div>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            clearBookings();
            setBookings([]);
          }}
        >
          Clear
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {bookings.map((b) => (
          <Card key={b.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-indigo-50">{b.eventTitle}</CardTitle>
                  <p className="mt-1 text-sm text-slate-400">Hosted by {b.hostName}</p>
                </div>
                <Badge variant="muted">Booked</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Date</p>
                  <p className="mt-1 text-sm text-slate-100">
                    {formatEventDate(b.eventDateISO ?? b.bookedAtISO)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">Price</p>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    {formatMoneyFromCents(b.priceCents, b.currency)}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <LinkButton href={`/events/${b.eventId}`} variant="ghost">
                View event
              </LinkButton>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  removeBooking(b.id);
                  setBookings(getBookings());
                }}
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
