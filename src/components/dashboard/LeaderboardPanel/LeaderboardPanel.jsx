import { getLeaderboard } from "@/lib/leaderboard";
import LeaderboardPanelClient from "./LeaderboardPanelClient";

export default async function LeaderboardPanel({ className = "" }) {
  const users = await getLeaderboard();

  return (
    <div className={`flex h-full min-h-0 flex-col pl-4 ${className}`}>
      <LeaderboardPanelClient users={users} />
    </div>
  );
}
