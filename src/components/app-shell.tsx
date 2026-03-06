import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mx-auto min-h-[calc(100vh-140px)] max-w-6xl px-4 py-10 sm:px-6">{children}</main>
      <Footer />
    </>
  );
}
