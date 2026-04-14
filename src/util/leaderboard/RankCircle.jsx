export default function RankCircle({ rank }) {
  const styles =
    rank === 1
      ? "border-amber-400 bg-amber-50 text-amber-900"
      : rank === 2
        ? "border-neutral-400 bg-neutral-100 text-neutral-800"
        : "border-orange-500 bg-orange-50 text-orange-900";

  return (
    <span
      className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${styles}`}
      aria-hidden
    >
      {rank}
    </span>
  );
}
