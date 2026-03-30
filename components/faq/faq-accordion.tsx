"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const ITEMS: FAQItem[] = [
  {
    q: "How do bookings work?",
    a: "Book a seat and you’ll see it immediately in My Bookings.",
  },
  {
    q: "How do payments work?",
    a: "Payments aren’t available yet. Pricing is shown for reference.",
  },
  {
    q: "Can I host an event?",
    a: "Yes — use the Host Dashboard to create an event.",
  },
  {
    q: "Do you support dietary preferences?",
    a: "Yes — filter the feed by Veg / Non-Veg / Both.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 shadow-sm shadow-indigo-900/10 backdrop-blur">
      <div className="space-y-2">
        {ITEMS.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/40"
            >
              <button
                type="button"
                onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-slate-100">{item.q}</span>
                <span
                  className={
                    "grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-transform duration-300 " +
                    (open ? "rotate-45" : "rotate-0")
                  }
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                className={
                  "grid transition-[grid-template-rows] duration-300 ease-out " +
                  (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                }
              >
                <div className="overflow-hidden px-4 pb-4 text-sm text-slate-300">
                  <div className="pt-0.5">{item.a}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
