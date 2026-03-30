import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

function variantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case "secondary":
      return "bg-slate-900 border border-slate-800 text-slate-100 shadow-sm shadow-black/30 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 duration-300";
    case "ghost":
      return "bg-transparent text-slate-200 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 duration-300";
    case "primary":
    default:
      return "bg-indigo-600 text-white shadow-[0_0_15px_-3px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_25px_-3px_rgba(79,70,229,0.5)] transition-all hover:-translate-y-0.5 hover:scale-105 active:scale-95 duration-300";
  }
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={[
        "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses(variant),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  ...props
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={[
        "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium",
        variantClasses(variant),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Link>
  );
}
