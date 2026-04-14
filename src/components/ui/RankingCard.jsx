import PlaceholderCircle from "@/util/leaderboard/PlaceholderCircle";
import RankCircle from "@/util/leaderboard/RankCircle";
import Stars from "@/util/leaderboard/Stars";
import WinnerBadge from "@/util/leaderboard/WinnerBadge";

export default function RankingCard({ user }) {
  const isWinner = user.rank === 1;

  return (
    <li>
      <div className="flex items-center gap-3 rounded-[22px] bg-white px-6 py-3 shadow-sm">
        <RankCircle rank={user.rank} />
        {isWinner ? <WinnerBadge /> : <PlaceholderCircle rank={user.rank} />}
        <div className="min-w-0 flex-1">
          <p className="font-black text-neutral-900">{user.name}</p>
          <Stars count={user.stars} />
        </div>
        <span className="shrink-0 text-lg font-normal tabular-nums text-amber-500">
          {user.score}
        </span>
      </div>
    </li>
  );
}
