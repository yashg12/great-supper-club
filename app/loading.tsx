import { Container } from "@/components/container";

export default function Loading() {
  return (
    <div className="flex min-h-full flex-1 flex-col animate-fade-in">
      <main className="flex-1 py-16 sm:py-24">
        <Container>
          <div className="mb-10 space-y-2">
            <div className="h-8 w-48 rounded-lg bg-slate-800/50 animate-pulse" />
            <div className="h-4 w-72 rounded-md bg-slate-800/30 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/50 shadow-md animate-pulse"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-800/40" />
                
                {/* Content Placeholder */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="h-6 w-3/4 rounded-md bg-slate-700/50 mb-3" />
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-2 w-2 rounded-full bg-indigo-500/50" />
                    <div className="h-3 w-1/2 rounded-md bg-slate-700/30" />
                  </div>
                  
                  {/* Glass Panel Skeleton */}
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3.5">
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-10 text-xs font-medium rounded bg-slate-700/50" />
                      <div className="h-4 w-16 text-sm font-semibold rounded bg-slate-600/50" />
                    </div>
                    <div className="space-y-1.5 flex flex-col items-end">
                      <div className="h-2.5 w-14 text-xs font-medium rounded bg-slate-700/50" />
                      <div className="h-4 w-8 text-sm font-semibold rounded bg-slate-600/50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
