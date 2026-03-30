"use client";

import { useMemo, useState } from "react";
import type { SupperEvent } from "@/lib/types";
import { formatEventDate, formatMoneyFromCents } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, Label, Textarea } from "@/components/ui/field";

function makeEventId(title: string): string {
  const base = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 32);
  return `${base || "new-event"}-${Date.now().toString(36)}`;
}

function parseMenu(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 12);
}

export function HostDashboardClient({
  initialEvents,
}: {
  initialEvents: SupperEvent[];
}) {
  const [events, setEvents] = useState<SupperEvent[]>(initialEvents);
  const [title, setTitle] = useState("");
  const [menuText, setMenuText] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [created, setCreated] = useState(false);

  const parsedMenu = useMemo(() => parseMenu(menuText), [menuText]);

  const canSubmit = useMemo(() => {
    const priceNumber = Number(price);
    const seatsNumber = Number(seats);
    return (
      title.trim().length >= 3 &&
      parsedMenu.length >= 1 &&
      Number.isFinite(priceNumber) &&
      priceNumber > 0 &&
      Number.isInteger(seatsNumber) &&
      seatsNumber > 0
    );
  }, [title, parsedMenu, price, seats]);

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Create event</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!canSubmit) return;

              const priceNumber = Number(price);
              const seatsNumber = Number(seats);

              const newEvent: SupperEvent = {
                id: makeEventId(title),
                title: title.trim(),
                host: "You",
                hostName: "You",
                dateISO: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                neighborhood: "—",
                city: "San Francisco",
                dietary: "Both",
                menu: parsedMenu,
                price: priceNumber,
                priceCents: Math.round(priceNumber * 100),
                currency: "USD",
                seatsAvailable: seatsNumber,
                seatsLeft: seatsNumber,
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
              };

              setEvents((prev) => [newEvent, ...prev]);
              setTitle("");
              setMenuText("");
              setPrice("");
              setSeats("");
              setCreated(true);
              window.setTimeout(() => setCreated(false), 2500);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Pasta night"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="menu">Menu (one item per line)</Label>
              <Textarea
                id="menu"
                value={menuText}
                onChange={(e) => setMenuText(e.target.value)}
                placeholder="Add a few items..."
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 65"
                  inputMode="decimal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seats">Seats</Label>
                <Input
                  id="seats"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  placeholder="e.g. 8"
                  inputMode="numeric"
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={!canSubmit}>
              Create
            </Button>

            {created ? (
              <p className="text-xs text-slate-400">
                Event created in local state (no backend).
              </p>
            ) : (
              <p className="text-xs text-slate-500">No backend: events aren’t persisted.</p>
            )}
          </form>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle>Your events</CardTitle>
            <Badge variant="muted">{events.length} listed</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-slate-800/50 rounded-xl border border-slate-700/50 shadow-sm shadow-indigo-900/10">
            {events.map((e) => (
              <div
                key={e.id}
                className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-slate-50">{e.title}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {formatEventDate(e.dateISO)} • {e.neighborhood}, {e.city}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Price</p>
                    <p className="text-sm text-slate-100">
                      {formatMoneyFromCents(e.priceCents, e.currency)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Seats</p>
                    <p className="text-sm text-slate-100">{e.seatsLeft}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
