"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-2 text-sm text-foreground transition hover:border-accent"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4 text-accent-light" />
      <span>{locale === "zh" ? "EN" : "中文"}</span>
    </button>
  );
}
