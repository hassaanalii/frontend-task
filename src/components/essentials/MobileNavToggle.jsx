"use client";

import { useSidebarDrawer } from "@/components/navigation/SidebarDrawerContext";

export default function MobileNavToggle({ className = "" }) {
  const { isOpen, toggle } = useSidebarDrawer();

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-800 shadow-sm transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1970D3] xl:hidden ${className}`}
      aria-expanded={isOpen}
      aria-controls="main-sidebar"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className="relative block h-3.5 w-6">
        <span
          className={`absolute left-0 top-0 block h-0.5 w-6 origin-center rounded-full bg-current transition-all duration-300 ease-out ${
            isOpen ? "top-[6px] translate-y-0 rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-[6px] block h-0.5 w-6 rounded-full bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute bottom-0 left-0 block h-0.5 w-6 origin-center rounded-full bg-current transition-all duration-300 ease-out ${
            isOpen ? "bottom-[6px] translate-y-0 -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}
