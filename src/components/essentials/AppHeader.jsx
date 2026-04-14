import Image from "next/image";

export default function AppHeader({
  userName = "Ciao, Dr. Luca!",
  subtitle = "Inizia la giornata con un nuovo corso!",
  points = 345,
  avatarSrc = "/avatar.jpg",
  coinSrc = "/points-coin.png",
}) {
  return (
    <header className="flex flex-row  items-center justify-between gap-4 bg-white px-16 py-8">
      <div className="flex flex-row items-center justify-between gap-20">
        <div className="min-w-0 justify-self-start">
          <p className="text-[35px] font-bold tracking-tight text-black">
            {userName}!
          </p>
          <p className="text-[20px] text-neutral-500 dark:text-neutral-400">{subtitle}</p>
        </div>

        <div className="flex justify-center justify-self-center px-2">
          <div className="relative h-14 w-full min-w-[200px] max-w-[300px] sm:min-w-[300px]">
            <div
              className="pointer-events-none absolute -left-2 top-1/2 h-12 w-14 -translate-y-1/2 rounded-full bg-orange-400/40 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute inset-y-0 left-7 right-15 rounded-full bg-[#1C58F2] shadow-[0_6px_20px_rgba(28,88,242,0.35)] ring-1 ring-black/5"
              aria-hidden
            />
            <div className="absolute left-0 top-1/2 z-10 flex h-10 w-[72%] max-w-[300px] -translate-y-1/2 items-center rounded-full bg-[#FBBF24] px-3 pl-4 shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:h-12 sm:max-w-[320px] sm:px-4">
              <div className="w-9 shrink-0 sm:w-10" aria-hidden />
              <span className="min-w-0 flex-1 text-center text-xl font-black tabular-nums text-black sm:text-3xl">
                {points}
              </span>
              <span className="size-9 shrink-0 overflow-hidden rounded-full bg-[#FBBF24]  sm:size-11">
                <Image
                  src={coinSrc}
                  alt=""
                  width={50}
                  height={50}
                  className="size-full object-cover"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end justify-self-end">
        <span className="relative size-25 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatarSrc}
            alt={`${userName} profile`}
            width={100}
            height={100}
            className="size-full object-cover"
            priority
          />
        </span>
      </div>
    </header>
  );
}
