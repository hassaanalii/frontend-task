"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const SidebarNavContext = createContext(null);

export function SidebarNavProvider({ children }) {
  const [activeNavId, setActiveNavIdState] = useState("dashboard");

  const setActiveNavId = useCallback((id) => {
    setActiveNavIdState(id);
  }, []);

  const value = useMemo(
    () => ({
      activeNavId,
      setActiveNavId,
    }),
    [activeNavId, setActiveNavId],
  );

  return (
    <SidebarNavContext.Provider value={value}>
      {children}
    </SidebarNavContext.Provider>
  );
}

export function useSidebarNav() {
  const ctx = useContext(SidebarNavContext);
  if (!ctx) {
    throw new Error("useSidebarNav must be used within SidebarNavProvider");
  }
  return ctx;
}
