"use client";

import Link from "next/link";
import { ArrowRight, FileText, FolderKanban, Layers3 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { PillarSnapshot } from "@/components/pillar-snapshot";
import { jd, projects, site, t } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function HomePage() {
  const { locale } = useLocale();
  const featuredProjects = projects.slice(0, 2);

  return (
    <AppShell>
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-accent-light">DevRel / Technical Operations Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{site.name}</h1>
            <p className="max-w-3xl text-lg text-muted sm:text-xl">{t(site.headline, locale)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={site.ctas.primary[locale].href} className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-light">
              {site.ctas.primary[locale].label}
            </Link>
            <Link href={site.ctas.secondary[locale].href} className="rounded-full border border-card-border bg-card px-5 py-3 text-sm font-medium hover:border-accent">
              {site.ctas.secondary[locale].label}
            </Link>
            <Link href={site.ctas.resumePdf.href} className="rounded-full border border-card-border px-5 py-3 text-sm font-medium text-muted hover:text-foreground">
              {site.ctas.resumePdf.label[locale]}
            </Link>
          </div>
        </div>
        <Card className="p-6">
          <p className="text-sm text-muted">为什么这个站点适合 Minara</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>• 数据驱动：Resume / Projects / Automation 全部来自 `/data/*`。</li>
            <li>• 叙事完整：从个人背景、项目交付到自动化模块库形成一条线。</li>
            <li>• 可直接面试演示：JD Fit、案例页、简历页、自动化页各自可独立讲。</li>
          </ul>
        </Card>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          eyebrow="Highlights"
          title={locale === "zh" ? "3 个快速入口" : "3 quick entry points"}
          description={locale === "zh" ? "把简历、项目和自动化能力放到一个统一站点里，方便面试快速切换。" : "Resume, projects, and automation modules packaged into one portfolio."}
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <FileText className="h-6 w-6 text-accent-light" />
            <h3 className="mt-4 text-lg font-semibold">Resume</h3>
            <p className="mt-2 text-sm text-muted">{locale === "zh" ? "双语简历、可打印 PDF、针对 Minara 的增强建议。" : "Bilingual resume, printable PDF, and Minara-focused improvement notes."}</p>
            <Link href="/resume" className="mt-4 inline-flex items-center gap-2 text-sm text-accent-light">Open <ArrowRight className="h-4 w-4" /></Link>
          </Card>
          <Card className="p-6">
            <FolderKanban className="h-6 w-6 text-accent-light" />
            <h3 className="mt-4 text-lg font-semibold">Projects</h3>
            <p className="mt-2 text-sm text-muted">{locale === "zh" ? "两个可运行交付：Cookbook + Partner PoC。" : "Two runnable deliverables: Cookbook + Partner PoC."}</p>
            <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-sm text-accent-light">Open <ArrowRight className="h-4 w-4" /></Link>
          </Card>
          <Card className="p-6">
            <Layers3 className="h-6 w-6 text-accent-light" />
            <h3 className="mt-4 text-lg font-semibold">Automation</h3>
            <p className="mt-2 text-sm text-muted">{locale === "zh" ? "OpenClaw × Minara 运营自动化模块库，按 JD 四大支柱组织。" : "OpenClaw × Minara automation module library grouped by JD pillars."}</p>
            <Link href="/automation" className="mt-4 inline-flex items-center gap-2 text-sm text-accent-light">Open <ArrowRight className="h-4 w-4" /></Link>
          </Card>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          eyebrow="JD Fit"
          title={locale === "zh" ? "4 个岗位支柱的证据快照" : "Evidence snapshot for the 4 JD pillars"}
          description={locale === "zh" ? "每个支柱都链接到对应的简历锚点、项目案例和自动化模块。" : "Each pillar links to resume anchors, project case studies, and automation modules."}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {jd.pillars.map((pillar) => (
            <PillarSnapshot key={pillar.id} pillar={pillar} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          eyebrow="Projects"
          title={locale === "zh" ? "重点交付" : "Featured deliveries"}
          description={locale === "zh" ? "两个项目分别对应开发者生态和合作伙伴增长。" : "Two projects covering developer onboarding and partner growth."}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card className="p-6">
          <SectionHeading
            eyebrow="OpenClaw"
            title={locale === "zh" ? "2 周 MVP Starter Pack" : "2-week MVP starter pack"}
            description={locale === "zh" ? "优先上线的 4 个模块，能最快帮助 Minara 补齐内容、FAQ、社区响应和周报复盘。" : "The 4 modules that can most quickly improve content, FAQ, community response, and reporting."}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Multi-Channel Inbox Triage",
              "FAQ Auto-Responder",
              "Content Radar",
              "Growth KPI Reporter",
            ].map((item) => (
              <span key={item} className="rounded-full border border-card-border bg-background px-3 py-1.5 text-sm text-muted">
                {item}
              </span>
            ))}
          </div>
          <Link href="/automation" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-light">
            {locale === "zh" ? "查看完整模块库" : "View full module library"} <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </section>
    </AppShell>
  );
}
