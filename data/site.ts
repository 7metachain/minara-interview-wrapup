// /data/site.ts
export type Locale = "zh" | "en";

export type I18nText = {
  zh: string;
  en: string;
};

export type NavItem = {
  id: string;
  href: string;
  label: I18nText;
  shortLabel?: I18nText;
  external?: boolean;
};

export type SiteLink = {
  label: string;
  href: string;
};

export const i18n = {
  defaultLocale: "zh" as const,
  locales: ["zh", "en"] as const,
};

export const site = {
  // Identity
  name: "Jiajia Chen",
  headline: {
    zh: "AI 技术运营 / DevRel｜技术布道 · 社区生态 · AI 工作流",
    en: "DevRel / Technical Ops｜Evangelism · Community · AI Workflows",
  },
  location: {
    zh: "Shanghai, China",
    en: "Shanghai, China",
  },
  timezone: "Asia/Shanghai",

  // Contact
  contact: {
    email: "jchen.bsl.2024@gmail.com",
    phone: "+86 17780448185",
    github: "https://github.com/7metachain",
    // Optional: add later
    linkedin: "",
    twitterX: "",
    website: "",
  },

  // SEO / Metadata
  seo: {
    title: {
      zh: "Jiajia Chen｜DevRel / 技术运营作品集",
      en: "Jiajia Chen｜DevRel / Technical Ops Portfolio",
    },
    titleTemplate: "%s",
    description: {
      zh: "面向 Minara 的 DevRel / 技术运营作品集：JD 对齐、可运行 Demo、合作 PoC、OpenClaw 自动化模块库。",
      en: "Portfolio for a DevRel / Technical Ops role: JD-fit mapping, runnable demos, partner PoC, and OpenClaw automation modules.",
    },
    // Put a placeholder image in /public/og.png when ready
    ogImage: "/og.png",
    // Keep it simple; add keywords if needed
    keywords: [
      "DevRel",
      "Technical Operations",
      "AI",
      "Workflow",
      "Agentic",
      "Minara",
      "OpenClaw",
      "Developer Experience",
    ],
  },

  // Primary CTAs (used on Home hero)
  ctas: {
    primary: {
      zh: { label: "查看 Projects", href: "/projects" },
      en: { label: "View Projects", href: "/projects" },
    },
    secondary: {
      zh: { label: "查看简历", href: "/resume" },
      en: { label: "View Resume", href: "/resume" },
    },
    resumePdf: {
      label: { zh: "下载简历 PDF", en: "Download Resume PDF" },
      href: "/resume.pdf",
    },
  },

  // Global navigation (do not hardcode nav elsewhere)
  nav: [
    { id: "home", href: "/", label: { zh: "首页", en: "Home" } },
    { id: "projects", href: "/projects", label: { zh: "项目", en: "Projects" } },
    { id: "resume", href: "/resume", label: { zh: "简历", en: "Resume" } },
    {
      id: "automation",
      href: "/automation",
      label: { zh: "自动化模块库", en: "Automation" },
      shortLabel: { zh: "自动化", en: "Automation" },
    },
    { id: "contact", href: "/contact", label: { zh: "联系", en: "Contact" } },
  ] satisfies NavItem[],

  // Footer links
  footer: {
    quickLinks: [
      { label: "GitHub", href: "https://github.com/7metachain" },
      { label: "Email", href: "mailto:jchen.bsl.2024@gmail.com" },
    ] satisfies SiteLink[],
    copyright: `© ${new Date().getFullYear()} Jiajia Chen`,
  },

  // Optional: feature flags for future enhancements
  features: {
    enableLocaleToggle: true,
    enableThemeToggle: true,
  },
} as const;

/**
 * Helpers
 */
export function getText(text: I18nText, locale: Locale = i18n.defaultLocale) {
  return text[locale] ?? text.zh;
}

export function getNav(locale: Locale = i18n.defaultLocale) {
  return site.nav.map((item) => ({
    ...item,
    label: getText(item.label, locale),
    shortLabel: item.shortLabel ? getText(item.shortLabel, locale) : undefined,
  }));
}

export function absoluteUrl(path: string) {
  // If you later add a custom domain, replace with it.
  const base =
    site.contact.website?.trim() ||
    "http://localhost:3000";
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}