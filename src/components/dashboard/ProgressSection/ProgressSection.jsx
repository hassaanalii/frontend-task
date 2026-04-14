import Image from "next/image";
import XpProgressBar from "@/components/ui/XpProgressBar";

/**
 * Banner gradient: #CDE6FF → #1970D3.
 * Place avatars in /public (defaults: doc.png, doc2.png).
 */
export default function ProgressSection({
  leftAvatarSrc = "/doc.png",
  rightAvatarSrc = "/doc2.png",
  leftAvatarAlt = "",
  rightAvatarAlt = "",
  minXp = 500,
  maxXp = 800,
  currentXp = 650,
}) {
  return (
    <section
      className="overflow-hidden rounded-[1rem] bg-gradient-to-r from-[#CDE6FF] to-[#1970D3] px-4 md:px-8 "
      aria-label="XP progress"
    >
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-6 lg:gap-8">
        <div className="relative mx-auto h-40 w-40 shrink-0 md:mx-0 md:h-44 md:w-44">
          <Image
            src={leftAvatarSrc}
            alt={leftAvatarAlt}
            fill
            sizes="(max-width: 768px) 160px, 176px"
            className="object-contain object-bottom"
            priority
          />
        </div>

        <XpProgressBar minXp={minXp} maxXp={maxXp} currentXp={currentXp} />

        <div className="relative mx-auto h-40 w-40 shrink-0 md:mx-0 md:h-44 md:w-44">
          <Image
            src={rightAvatarSrc}
            alt={rightAvatarAlt}
            fill
            sizes="(max-width: 768px) 160px, 176px"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
