"use client";

export default function StatusIndicator() {
  return (
    <div className="fixed bottom-6 left-6 z-header hidden md:block">
      <div className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] px-4 py-2 border-brutalist-2 font-mono text-sm flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
        <span className="uppercase tracking-wider">
          Currently: Shipping Unchained Mobile 2.0
        </span>
      </div>
    </div>
  );
}
