"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { clearDemoAuth } from "@/lib/auth";

const navLinkClass =
  "text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const isLanding = pathname === "/";
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-purple-500/0" />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={isLanding ? "/" : "/home"}
          className="flex items-center gap-3 text-sm font-bold tracking-tight"
        >
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl bg-indigo-500/10 ring-1 ring-white/10 shadow-lg shadow-indigo-500/20">
            <Image
              src="/logo.png"
              alt="Great Supper Club logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              unoptimized
              priority
            />
          </span>
          <span className="text-transparent bg-gradient-to-r from-indigo-100 to-purple-100 bg-clip-text text-lg">
            Great Supper Club
          </span>
        </Link>
        {!isLanding && (
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6">
              <Link href="/home" className={navLinkClass}>
                Home
              </Link>
              <Link href="/bookings" className={navLinkClass}>
                My Bookings
              </Link>
              <Link href="/host" className={navLinkClass}>
                Dashboard
              </Link>
            </nav>
            
            <div className="h-6 w-px bg-slate-800 hidden sm:block" />

            {/* Profile Avatar */}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen((v) => !v)}
                className="relative h-8 w-8 overflow-hidden rounded-full bg-slate-800 ring-2 ring-slate-800 transition-all hover:ring-indigo-500 shadow-sm"
              >
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-xs font-medium text-indigo-100">
                  GC
                </div>
              </button>

              {profileOpen ? (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/95 p-1 shadow-xl shadow-black/30 backdrop-blur"
                >
                  <Link
                    role="menuitem"
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Profile
                  </Link>
                  <button
                    role="menuitem"
                    type="button"
                    onClick={() => {
                      clearDemoAuth();
                      setProfileOpen(false);
                      router.push("/");
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
