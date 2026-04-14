import { getLeaderboard } from "@/lib/leaderboard";
import LeaderboardPanelClient from "./LeaderboardPanelClient";

export default async function LeaderboardPanel({ className = "" }) {
  const users = await getLeaderboard();

  return (
    <div
      className={`flex flex-col pl-0 max-xl:h-auto max-xl:min-h-0 xl:h-full xl:min-h-0 xl:pl-4 ${className}`}
    >
      <LeaderboardPanelClient users={users} />
    </div>
  );
}
