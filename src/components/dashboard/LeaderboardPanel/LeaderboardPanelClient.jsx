"use client";

import RankingCard from "@/components/ui/RankingCard";

export default function LeaderboardPanelClient({ users, className = "" }) {
  return (
    <div
      className={`flex h-auto min-h-0 flex-col overflow-visible rounded-3xl bg-gradient-to-b from-[#0A2651] to-[#0346A8] p-4 shadow-lg sm:p-6 max-xl:max-h-none xl:max-h-none xl:overflow-hidden xl:rounded-[40px] xl:p-8 ${className}`}
    >
      <div className="mb-4 shrink-0 rounded-2xl border-2 border-amber-400/90 px-3 py-3 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white md:text-[30px]">
          Leaderboard
        </h2>
      </div>

      <div className="scrollbar-hidden min-h-0 overflow-visible max-xl:flex-none xl:flex-1 xl:min-h-0 xl:overflow-y-auto">
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
