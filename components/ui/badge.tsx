import type { ComponentProps } from "react";

type BadgeVariant = "default" | "muted";

export function Badge({
  variant = "default",
  className,
  ...props
}: ComponentProps<"span"> & { variant?: BadgeVariant }) {
  const styles =
    variant === "muted"
      ? "bg-slate-800/50 text-slate-300 border border-slate-700/50 backdrop-blur-md"
      : "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md";

  return (
    <span
      {...props}
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        styles,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
