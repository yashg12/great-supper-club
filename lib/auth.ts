export const DEMO_AUTH_EMAIL_KEY = "gsc.demoAuthEmail";

export function setDemoAuthEmail(email: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(DEMO_AUTH_EMAIL_KEY, email);
  } catch {
    // Ignore storage failures (private mode, disabled storage, etc.)
  }
}

export function clearDemoAuth() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(DEMO_AUTH_EMAIL_KEY);
  } catch {
    // Ignore storage failures
  }
}
