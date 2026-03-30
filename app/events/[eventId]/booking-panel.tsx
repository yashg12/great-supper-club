"use client";

import { useMemo, useState } from "react";
import type { SupperEvent } from "@/lib/types";
import { addBooking } from "@/lib/bookings";
import { Button } from "@/components/ui/button";

export function BookingPanel({ event }: { event: SupperEvent }) {
  const [status, setStatus] = useState<"idle" | "booked">("idle");

  const isSoldOut = useMemo(() => event.seatsLeft <= 0, [event.seatsLeft]);

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          addBooking(event);
          setStatus("booked");
        }}
        disabled={isSoldOut}
        className="w-full"
      >
        {isSoldOut ? "Sold out" : "Book"}
      </Button>
      {status === "booked" ? (
        <p className="mt-3 text-sm text-slate-400">
          Success — your booking is confirmed. View it in{" "}
          <span className="text-slate-100 font-medium">My Bookings</span>.
        </p>
      ) : (
        <p className="mt-3 text-sm text-slate-500">
          No payment is collected at booking.
        </p>
      )}
    </div>
  );
}
