import type { SupperEvent } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { formatMoneyFromCents } from "@/lib/format";

export function EventCard({ event }: { event: SupperEvent }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-md shadow-indigo-900/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/50 hover:shadow-[0_12px_40px_rgba(79,70,229,0.25)] focus:outline-none"
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
      />
      {/* Gradient overlays for readability and fintech glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-indigo-200">
          {event.title}
        </h3>
        <p className="mt-1 mb-4 flex items-center gap-1.5 text-sm font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
          Hosted by {event.hostName}
        </p>

        {/* Glass panel for stats */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
          <div>
            <p className="text-xs font-medium text-slate-300">Price</p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              {formatMoneyFromCents(event.priceCents, event.currency)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-slate-300">Seats left</p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              {event.seatsLeft}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
