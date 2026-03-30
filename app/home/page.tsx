import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HomeSearchPanel } from "@/components/events/home-search-panel";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { getAllEvents } from "@/lib/events";

export default function HomeAppPage() {
  const events = getAllEvents();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <main className="flex-1 py-10 sm:py-14">
        <Container>
          {/* Hero */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-6 shadow-sm shadow-indigo-900/10 backdrop-blur sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10" />
            <div className="relative">
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text sm:text-5xl">
                Find your next supper in minutes
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Search by event name, filter by city and dietary preference, and book instantly.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Browse",
                desc: "Search events and filter by city and dietary preferences.",
              },
              {
                title: "Book",
                desc: "Reserve a seat in one click.",
              },
              {
                title: "Show up",
                desc: "Enjoy a curated meal and meet new people.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5 shadow-sm shadow-indigo-900/10 backdrop-blur"
              >
                <p className="text-sm font-semibold text-slate-100">{s.title}</p>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Events */}
          <div className="mt-10">
            <SectionHeading
              title="Upcoming suppers"
              subtitle="Minimal, curated dinners hosted by real people."
            />
            <div className="mt-6">
              <HomeSearchPanel events={events} />
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <SectionHeading
              title="FAQ"
              subtitle="Common questions"
            />
            <div className="mt-6">
              <FaqAccordion />
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-10 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5 shadow-sm shadow-indigo-900/10 backdrop-blur">
            <p className="text-sm font-semibold text-slate-100">Testimonials</p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  name: "Aanya • Mumbai",
                  quote: "The UI feels premium — booking is super smooth.",
                },
                {
                  name: "Rohit • Pune",
                  quote: "Love the city + dietary filters. Feels like a real app.",
                },
                {
                  name: "Meera • Bangalore",
                  quote: "The event cards and map are a great touch.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-slate-200">“{t.quote}”</p>
                  <p className="mt-3 text-xs font-semibold text-slate-400">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
