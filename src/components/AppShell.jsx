import AppHeader from "@/components/essentials/AppHeader";
import Sidebar from "@/components/essentials/Sidebar";
import { SidebarNavProvider } from "@/components/navigation/SidebarNavContext";

export default function AppShell({ children }) {
  return (
    <SidebarNavProvider>
      <div className="flex h-[100dvh] max-h-[100dvh] w-full overflow-hidden">
        <Sidebar />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <AppHeader />
          <main className="flex min-h-0 flex-1 flex-col overflow-hidden p-12">
            {children}
          </main>
        </div>
      </div>
    </SidebarNavProvider>
  );
}
