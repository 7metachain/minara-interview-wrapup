"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNav } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const nav = getNav(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight sm:text-base">
          Jiajia Chen
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm text-muted transition hover:text-foreground",
                  pathname === item.href && "bg-card text-foreground"
                )}
              >
                {item.shortLabel ?? item.label}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
