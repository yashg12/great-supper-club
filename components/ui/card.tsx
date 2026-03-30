import type { ComponentProps, ReactNode } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={[
        "rounded-2xl bg-slate-900/60 border border-slate-800/50",
        "backdrop-blur-xl",
        "shadow-lg shadow-indigo-900/10",
        "transition-all duration-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={["p-5 border-b border-slate-800/50", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={[
        "text-base font-semibold tracking-tight text-indigo-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </h2>
  );
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={["p-5", className].filter(Boolean).join(" ")}
    />
  );
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={["p-5 border-t border-slate-800/50", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
