"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { SupperEvent } from "@/lib/types";

type RuntimeEventsContextValue = {
  events: SupperEvent[];
  addEvent: (event: SupperEvent) => void;
  clearEvents: () => void;
};

const RuntimeEventsContext = createContext<RuntimeEventsContextValue | null>(null);

export function RuntimeEventsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [events, setEvents] = useState<SupperEvent[]>([]);

  const addEvent = useCallback((event: SupperEvent) => {
    setEvents((prev) => [event, ...prev]);
  }, []);

  const clearEvents = useCallback(() => {
    setEvents([]);
  }, []);

  const value = useMemo(
    () => ({ events, addEvent, clearEvents }),
    [events, addEvent, clearEvents],
  );

  return (
    <RuntimeEventsContext.Provider value={value}>
      {children}
    </RuntimeEventsContext.Provider>
  );
}

export function useRuntimeEvents() {
  const ctx = useContext(RuntimeEventsContext);
  if (!ctx) {
    throw new Error("useRuntimeEvents must be used within RuntimeEventsProvider");
  }
  return ctx;
}
