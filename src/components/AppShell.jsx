import AppHeader from "@/components/essentials/AppHeader";
import Sidebar from "@/components/essentials/Sidebar";
import { SidebarDrawerProvider } from "@/components/navigation/SidebarDrawerContext";
import { SidebarNavProvider } from "@/components/navigation/SidebarNavContext";

export default function AppShell({ children }) {
  return (
    <SidebarNavProvider>
      <SidebarDrawerProvider>
        <div className="flex min-h-[100dvh] w-full flex-col overflow-x-hidden max-xl:overflow-visible xl:h-full xl:min-h-0 xl:max-h-[100dvh] xl:flex-row xl:overflow-hidden">
          <Sidebar />

          <div className="flex w-full min-w-0 flex-col max-xl:flex-none xl:min-h-0 xl:flex-1 xl:overflow-hidden">
            <AppHeader />
            <main className="flex w-full flex-col overflow-visible p-4 sm:p-6 md:p-8 max-xl:shrink-0 xl:min-h-0 xl:flex-1 xl:overflow-hidden xl:p-12">
              {children}
            </main>
          </div>
        </div>
      </SidebarDrawerProvider>
    </SidebarNavProvider>
  );
}
