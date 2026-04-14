import Image from "next/image";
import MobileNavToggle from "@/components/essentials/MobileNavToggle";

export default function AppHeader({
  userName = "Ciao, Dr. Luca!",
  subtitle = "Inizia la giornata con un nuovo corso!",
  points = 345,
  avatarSrc = "/avatar.jpg",
  coinSrc = "/points-coin.png",
}) {
  return (
    <header className="flex shrink-0 flex-col gap-5 bg-white px-4 py-5 sm:px-6 sm:py-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4 xl:px-16 xl:py-8">
      <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-20">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4 xl:contents">
          <MobileNavToggle />
          <div className="min-w-0 flex-1 justify-self-start xl:flex-none">
            <p className="text-2xl font-bold tracking-tight text-black sm:text-3xl xl:text-[35px]">
              {userName}!
            </p>
            <p className="text-base text-neutral-500 sm:text-lg xl:text-[20px] dark:text-neutral-400">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center px-0 sm:px-2 xl:w-auto xl:justify-center xl:justify-self-center">
          <div className="relative h-14 w-full max-w-full min-w-0 sm:min-w-[200px] sm:max-w-[300px] xl:min-w-[300px]">
            <div
              className="pointer-events-none absolute -left-2 top-1/2 h-12 w-14 -translate-y-1/2 rounded-full bg-orange-400/40 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute inset-y-0 left-7 right-15 rounded-full bg-[#1C58F2] shadow-[0_6px_20px_rgba(28,88,242,0.35)] ring-1 ring-black/5"
              aria-hidden
            />
            <div className="absolute left-0 top-1/2 z-10 flex h-10 w-[72%] max-w-[min(100%,300px)] -translate-y-1/2 items-center rounded-full bg-[#FBBF24] px-3 pl-4 shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:h-12 sm:max-w-[320px] sm:px-4 xl:max-w-[300px]">
              <div className="w-9 shrink-0 sm:w-10" aria-hidden />
              <span className="min-w-0 flex-1 text-center text-lg font-black tabular-nums text-black sm:text-2xl xl:text-3xl">
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

      <div className="flex justify-center xl:justify-end xl:justify-self-end">
        <span className="relative size-16 shrink-0 overflow-hidden rounded-full sm:size-20 xl:size-[100px]">
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
