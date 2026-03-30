import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="text-transparent bg-gradient-to-r from-red-200 via-indigo-300 to-purple-200 bg-clip-text drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            {title}
          </span>
        </h1>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-400 font-medium leading-relaxed">{subtitle}</p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
