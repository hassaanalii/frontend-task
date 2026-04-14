import Sidebar from "@/components/essentials/Sidebar";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center border-b border-neutral-200 bg-background px-6 dark:border-neutral-800">
          <span className="text-sm font-medium text-foreground">Navbar</span>
        </header>
        <main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
