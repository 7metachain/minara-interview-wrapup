"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjectBySlug, t } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <AppShell>
      <section className="space-y-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {locale === "zh" ? "返回项目列表" : "Back to projects"}
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
          </div>
          <SectionHeading title={t(project.title, locale)} description={t(project.oneLiner, locale)} />
          <div className="flex flex-wrap gap-3">
            <Link href={project.repo} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light">
              GitHub <ArrowUpRight className="h-4 w-4" />
            </Link>
            {project.links?.video ? <Link href={project.links.video} className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm text-muted hover:text-foreground">Video</Link> : null}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {project.problem ? <InfoSection title="Problem" content={t(project.problem, locale)} /> : null}
            {project.solution ? <InfoSection title="Solution" content={t(project.solution, locale)} /> : null}
            {project.goal ? <InfoSection title="Goal" content={t(project.goal, locale)} /> : null}

            {project.whatsInside ? (
              <InfoListSection title="What’s inside" items={project.whatsInside[locale]} />
            ) : null}
            {project.activationFlow ? (
              <InfoListSection title="Full activation flow" items={project.activationFlow[locale]} />
            ) : null}
            {project.failurePaths ? (
              <InfoListSection title="Failure paths" items={project.failurePaths[locale]} />
            ) : null}
            {project.whyItMatters ? (
              <InfoListSection title="Why this PoC matters" items={project.whyItMatters[locale]} />
            ) : null}
            {project.operationalIntent ? (
              <InfoListSection title="Operational intent / GTM use" items={project.operationalIntent[locale]} />
            ) : null}
          </div>

          <div className="space-y-6">
            {project.kpiDesign ? (
              <Card className="p-6">
                <h3 className="text-lg font-semibold">KPI design</h3>
                <div className="mt-4 space-y-4">
                  {project.kpiDesign.map((kpi) => (
                    <div key={kpi.name}>
                      <p className="font-medium">{kpi.name}</p>
                      <p className="text-sm text-muted">{kpi.definition}</p>
                      <p className="mt-1 text-xs text-accent-light">Target: {kpi.target}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ) : null}

            {project.kpis ? (
              <Card className="p-6">
                <h3 className="text-lg font-semibold">KPI funnel</h3>
                <div className="mt-4 space-y-4">
                  {project.kpis.map((kpi) => (
                    <div key={kpi.name}>
                      <p className="font-medium">{kpi.name}</p>
                      <p className="text-sm text-muted">{kpi.definition}</p>
                      <p className="mt-1 text-xs text-accent-light">{kpi.whyItMatters}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ) : null}

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Quickstart</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {project.quickstart.map((line: string) => (
                  <li key={line} className="font-mono text-xs">$ {line}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Screenshots placeholder</h3>
              <div className="mt-4 grid gap-3">
                {project.screenshots.map((item) => (
                  <div key={item.src} className="rounded-xl border border-dashed border-card-border bg-background px-4 py-6 text-center text-sm text-muted">
                    {item.alt}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function InfoSection({ title, content }: { title: string; content: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{content}</p>
    </Card>
  );
}

function InfoListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
