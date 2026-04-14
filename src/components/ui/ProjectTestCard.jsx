import Image from "next/image";

export default function ProjectTestCard({ project, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "flex w-full flex-col gap-2 rounded-2xl border-2 bg-[#F0F0F0] p-6 text-left transition-colors cursor-pointer",
        selected
          ? "border-[#1970D3] shadow-sm"
          : "border-transparent hover:bg-neutral-200/80",
      ].join(" ")}
    >
      <span className="flex w-full items-center gap-3">
        <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-neutral-300">
          <Image
            src={project.imageUrl || "/user.jpg"}
            alt=""
            fill
            sizes="30px"
            className="object-cover"
          />
        </span>
        <span className="min-w-0 flex-1 text-[23px] font-black text-[#1970D3]">{project.title}</span>
      </span>
      <span className="block w-full text-[16px] leading-snug font-semibold text-neutral-400">
        {project.description}
      </span>
    </button>
  );
}
