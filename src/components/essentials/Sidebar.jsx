"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sidebarLogoutItem, sidebarNavItems } from "@/data/sidebarData";
import { NavIcon } from "@/icons/sidebarIcons";

export default function Sidebar() {
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <aside
      className="flex w-[350px] shrink-0 flex-col text-white shadow-lg"
      aria-label="Main navigation"
    >
      <div className="shrink-0 pl-8 py-10">
        <Image
          src="/logo.png"
          alt="Logica test"
          width={230}
          height={72}
          className="h-auto w-full max-w-[250px] object-contain "
          priority
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-tr-[60px] bg-gradient-to-b from-primary to-primary/95 px-5 pb-6 pt-1">
        <nav className="flex flex-1 flex-col gap-1" aria-label="Sidebar">
          <ul className="flex flex-col gap-4 pt-16 ">
            {sidebarNavItems.map((item) => {
              const isActive = activeId === item.id;
              const isDashboard = item.id === "dashboard";

              function handleNavClick(e) {
                if (isDashboard) {
                  setActiveId("dashboard");
                  return;
                }
                e.preventDefault();
                setActiveId(item.id);
                window.history.replaceState(null, "", "/#");
              }

              return (
                <li key={item.id}>
                  <Link
                    href={isDashboard ? "/" : "/#"}
                    onClick={handleNavClick}
                    className={[
                      "flex w-full rounded-2xl px-3 py-7 font-semibold transition-colors",
                      isActive
                        ? "items-center justify-center bg-black text-center text-2xl font-bold text-white shadow-inner"
                        : "items-start gap-3 text-[20px] text-white/95 hover:bg-white/10",
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

        <div className="mt-auto shrink-0 pt-4">
          <Link
            href={sidebarLogoutItem.href}
            className="flex items-center justify-start gap-2 rounded-full bg-white px-8 py-4 text-[20px] font-semibold text-red-600 shadow-md transition hover:bg-sky-50"
          >
            <span className="text-red-600">
              <NavIcon name={sidebarLogoutItem.icon} />
            </span>
            {sidebarLogoutItem.label}
          </Link>
        </div>
      </div>
    </aside>
  );
}
