"use client";

import RankingCard from "@/components/ui/RankingCard";

export default function LeaderboardPanelClient({ users, className = "" }) {
  return (
    <div
      className={`flex h-auto min-h-0 flex-col overflow-hidden rounded-[40px] bg-gradient-to-b from-[#0A2651] to-[#0346A8] p-8 shadow-lg ${className}`}
    >
      <div className="mb-4 shrink-0 rounded-2xl border-2 border-amber-400/90 px-3 py-3 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white md:text-[30px]">
          Leaderboard
        </h2>
      </div>

      <div className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto">
        {!users.length ? (
          <p className="text-sm text-sky-200/80">No entries.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {users.map((u) => (
              <RankingCard key={u.rank} user={u} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
