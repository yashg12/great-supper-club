export function formatMoneyFromCents(
  cents: number,
  currency: string,
  locale = "en-US",
): string {
  const amount = cents / 100;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEventDate(iso: string, locale = "en-US"): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(locale, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
