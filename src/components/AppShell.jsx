import AppHeader from "@/components/essentials/AppHeader";
import Sidebar from "@/components/essentials/Sidebar";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
