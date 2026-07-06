export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Phase 2: Sidebar will be rendered here */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-sidebar lg:block">
        <div className="flex h-16 items-center px-6">
          <span className="text-lg font-bold text-sidebar-foreground">🌱 EcoPilot</span>
        </div>
        <nav className="px-3 py-4">
          <p className="px-3 text-xs text-sidebar-foreground/50">Navigation — Phase 2</p>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Phase 2: TopNavbar will be rendered here */}
        <header className="flex h-16 items-center border-b border-border px-6">
          <p className="text-sm text-muted-foreground">TopNavbar — Phase 2</p>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
