import Image from "next/image";

export default function ProjectTestCard({ project, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "group flex w-full flex-col gap-2 rounded-2xl border-2 bg-[#F0F0F0] p-4 text-left cursor-pointer xl:p-6",
        "transition-[box-shadow,border-color,background-color] duration-300 ease-out",
        "hover:shadow-[0_12px_40px_-10px_rgba(25,112,211,0.45)]",
        selected
          ? "border-[#1970D3] shadow-sm hover:border-[#1257a8] hover:bg-[#e8eef8] hover:shadow-[0_16px_48px_-12px_rgba(25,112,211,0.55)]"
          : "border-transparent hover:border-[#1970D3]/70 hover:bg-[#dceaf9] hover:shadow-[0_14px_44px_-10px_rgba(25,112,211,0.5)]",
      ].join(" ")}
    >
      <span className="flex w-full items-center gap-3">
        <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-neutral-300 transition-[box-shadow] duration-300 group-hover:shadow-[0_0_0_2px_rgba(25,112,211,0.35)]">
          <Image
            src={project.imageUrl || "/user.jpg"}
            alt=""
            fill
            sizes="30px"
            className="object-cover"
          />
        </span>
        <span className="min-w-0 flex-1 text-lg font-black text-[#1970D3] transition-colors duration-300 group-hover:text-[#0d5bb8] xl:text-[23px]">
          {project.title}
        </span>
      </span>
      <span className="block w-full text-sm leading-snug font-semibold text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600 xl:text-[16px]">
        {project.description}
      </span>
    </button>
  );
}
