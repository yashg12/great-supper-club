export type CurrencyCode = "USD" | "INR";

export type DietaryPreference = "Veg" | "Non-Veg" | "Both";

export type SupperEvent = {
  id: string;
  title: string;
  host?: string;
  hostName: string;
  dateISO: string;
  neighborhood: string;
  city: string;
  dietary: DietaryPreference;
  menu: string[];
  price?: number;
  priceCents: number;
  currency: CurrencyCode;
  seatsAvailable?: number;
  seatsLeft: number;
  image: string;
};

export type Booking = {
  id: string;
  eventId: string;
  eventTitle: string;
  hostName: string;
  priceCents: number;
  currency: CurrencyCode;
  eventDateISO?: string;
  bookedAtISO: string;
};
