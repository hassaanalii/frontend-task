"use client";

import Image from "next/image";
import Link from "next/link";
import { useSidebarDrawer } from "@/components/navigation/SidebarDrawerContext";
import { useSidebarNav } from "@/components/navigation/SidebarNavContext";
import { sidebarLogoutItem, sidebarNavItems } from "@/data/sidebarData";
import { NavIcon } from "@/icons/sidebarIcons";

export default function Sidebar() {
  const { activeNavId, setActiveNavId } = useSidebarNav();
  const { isOpen, close } = useSidebarDrawer();

  function handleNavClick(e, item) {
    const isDashboard = item.id === "dashboard";
    if (isDashboard) {
      setActiveNavId("dashboard");
      close();
      return;
    }
    e.preventDefault();
    setActiveNavId(item.id);
    window.history.replaceState(null, "", "/#");
    close();
  }

  return (
    <>
      <div
        role="presentation"
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ease-out xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <aside
        id="main-sidebar"
        className={[
          "flex flex-col overflow-hidden text-white",
          "border-b border-neutral-200/80 xl:border-b-0",
          "max-xl:fixed max-xl:inset-y-0 max-xl:left-0 max-xl:z-50 max-xl:w-[min(350px,92vw)] max-xl:max-w-[350px] max-xl:border-0 max-xl:shadow-2xl",
          "max-xl:transition-transform max-xl:duration-300 max-xl:ease-out",
          isOpen ? "max-xl:translate-x-0" : "max-xl:-translate-x-full",
          "xl:relative xl:h-full xl:min-h-0 xl:w-[350px] xl:shrink-0 xl:translate-x-0",
        ].join(" ")}
        aria-label="Main navigation"
        aria-hidden={false}
      >
        <div className="shrink-0 bg-white px-4 py-6 xl:bg-transparent xl:pl-8 xl:py-10">
          <Image
            src="/logo.png"
            alt="Logica test"
            width={230}
            height={72}
            className="mx-auto h-auto w-full max-w-[200px] object-contain xl:mx-0 xl:max-w-[250px]"
            priority
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col rounded-t-[28px] bg-gradient-to-b from-primary to-primary/95 px-4 pb-5 pt-1 xl:rounded-none xl:rounded-tr-[60px] xl:px-5 xl:pb-6">
          <nav
            className="scrollbar-hidden flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-1"
            aria-label="Sidebar"
          >
            <ul className="flex flex-col gap-2 pt-6 xl:gap-4 xl:pt-16">
              {sidebarNavItems.map((item) => {
                const isActive = activeNavId === item.id;

                return (
                  <li key={item.id}>
                    <Link
                      href={item.id === "dashboard" ? "/" : "/#"}
                      onClick={(e) => handleNavClick(e, item)}
                      className={[
                        "flex w-full rounded-2xl px-3 font-semibold transition-colors",
                        "py-4 text-[17px] xl:py-7 xl:text-[20px]",
                        isActive
                          ? "items-center justify-center bg-black text-center text-lg font-bold text-white shadow-inner xl:text-2xl"
                          : "items-start gap-3 text-white/95 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {!isActive && (
                        <span className="mt-0.5 shrink-0 text-white">
                          <NavIcon name={item.icon} />
                        </span>
                      )}
                      <span className={isActive ? "leading-tight" : "leading-snug"}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto shrink-0 pt-3 xl:pt-4">
            <Link
              href={sidebarLogoutItem.href}
              onClick={close}
              className="flex items-center justify-start gap-2 rounded-full bg-white px-4 py-3 text-base font-semibold text-red-600 shadow-md transition hover:bg-sky-50 xl:px-8 xl:py-4 xl:text-[20px]"
            >
              <span className="text-red-600">
                <NavIcon name={sidebarLogoutItem.icon} />
              </span>
              {sidebarLogoutItem.label}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
