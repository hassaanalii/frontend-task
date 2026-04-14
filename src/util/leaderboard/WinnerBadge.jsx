export default function WinnerBadge() {
  return (
    <div className="relative flex w-10 shrink-0 flex-col items-center">
      <div className="flex size-10 items-center justify-center rounded-full bg-amber-400 shadow-inner ring-2 ring-amber-300/80">
        <span className="text-lg leading-none text-white drop-shadow-sm" aria-hidden>
          👑
        </span>
      </div>
      <span className="absolute -bottom-0.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-1.5 py-px text-[8px] font-bold uppercase leading-none text-white shadow-sm">
        Winner
      </span>
    </div>
  );
}
