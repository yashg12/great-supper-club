"use client";

import { RuntimeEventsProvider } from "@/components/runtime/runtime-events";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <RuntimeEventsProvider>{children}</RuntimeEventsProvider>;
}
