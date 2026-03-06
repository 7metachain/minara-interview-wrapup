"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Locale } from "@/lib/content";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "zh";
    const stored = window.localStorage.getItem("wrapup-locale");
    return stored === "zh" || stored === "en" ? stored : "zh";
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("wrapup-locale", next);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "zh" ? "en" : "zh"),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
