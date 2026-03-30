import type { ComponentProps } from "react";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      {...props}
      className={[
        "text-sm font-medium text-slate-200",
        "leading-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={[
        "h-10 w-full rounded-xl bg-slate-900/50 px-3 text-sm text-slate-100",
        "border border-slate-700/50 placeholder:text-slate-500",
        "focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-24 w-full rounded-xl bg-slate-900/50 p-3 text-sm text-slate-100",
        "border border-slate-700/50 placeholder:text-slate-500",
        "focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
