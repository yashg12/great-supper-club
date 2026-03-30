import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-slate-800/60 bg-slate-950/50 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-slate-100">Great Supper Club</p>
            <p className="mt-2 text-sm text-slate-400">
              Curated dinners hosted by real people.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Links</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-slate-400 hover:text-white" href="/home">
                Home
              </Link>
              <Link className="block text-slate-400 hover:text-white" href="/bookings">
                My Bookings
              </Link>
              <Link className="block text-slate-400 hover:text-white" href="/host">
                Host Dashboard
              </Link>
              <Link className="block text-slate-400 hover:text-white" href="/profile">
                Profile
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Contact</p>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>support@greatsupperclub.com</p>
              <p>Mumbai • Pune • Delhi • Bangalore</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Social</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/60 text-slate-300 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.505 11.24H16.17l-5.214-6.817-5.96 6.817H1.688l7.73-8.84L1.25 2.25h6.83l4.713 6.231 5.451-6.231Zm-1.16 17.52h1.833L7.08 4.126H5.114l11.97 15.644Z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/60 text-slate-300 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.25-.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/60 text-slate-300 hover:text-white"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 0 0-3.162 19.487c.5.09.688-.217.688-.483 0-.237-.01-1.02-.014-1.85-2.8.608-3.39-1.188-3.39-1.188-.458-1.162-1.12-1.472-1.12-1.472-.915-.625.07-.612.07-.612 1.01.071 1.543 1.037 1.543 1.037.9 1.543 2.36 1.097 2.936.839.091-.653.352-1.097.64-1.35-2.235-.254-4.584-1.118-4.584-4.972 0-1.098.39-1.997 1.03-2.699-.103-.253-.446-1.274.098-2.656 0 0 .84-.269 2.75 1.03A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.299 2.748-1.03 2.748-1.03.546 1.382.203 2.403.1 2.656.64.702 1.028 1.601 1.028 2.699 0 3.864-2.353 4.715-4.594 4.965.362.312.685.926.685 1.867 0 1.348-.012 2.437-.012 2.77 0 .268.18.578.692.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Great Supper Club</p>
          <p>Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
