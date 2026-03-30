import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/50 p-8 text-center border border-slate-800/50 shadow-sm shadow-indigo-900/10">
      <div className="mx-auto max-w-md">
        <h2 className="text-base font-semibold text-slate-50">{title}</h2>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
        {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
      </div>
    </div>
  );
}
