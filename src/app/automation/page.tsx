"use client";

import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { automation, type AutomationModule, type AutomationPillar } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

const MVP_STARTER_PACK = [
  "m-inbox-triage",
  "m-faq-autoresponder",
  "m-content-radar",
  "m-growth-kpi-reporter",
];

export default function AutomationPage() {
  const { locale } = useLocale();

  return (
    <AppShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Automation"
          title={automation.meta.title}
          description={locale === "zh" ? "围绕 Minara JD 四大支柱组织的 OpenClaw 运营自动化模块库。所有模块默认采用 draft-first 人审模式。" : "OpenClaw module library grouped by the 4 JD pillars, with draft-first human review by default."}
        />

        <Card className="p-6">
          <h2 className="text-lg font-semibold">OpenClaw 是什么</h2>
          <p className="mt-3 text-sm text-muted">
            {locale === "zh"
              ? "一个可组合的自动化执行框架：包含 gateway（多渠道）、browser（网页操作）、sandbox（隔离执行）、memory（RAG/知识库）、skills（任务能力模板）等组件。这里把它抽象成运营自动化模块，便于快速评估 Minara 的 2 周 MVP。"
              : "A composable automation runtime with gateway, browser, sandbox, memory, and skills. Here it is translated into concrete operations modules for a practical Minara MVP roadmap."}
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">2-week MVP starter pack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {automation.pillars
              .flatMap((pillar: AutomationPillar) => pillar.modules)
              .filter((module: AutomationModule) => MVP_STARTER_PACK.includes(module.id))
              .map((module: AutomationModule) => (
              <Badge key={module.id} className="text-accent-light">{module.name}</Badge>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          {automation.pillars.map((pillar: AutomationPillar) => (
            <section key={pillar.id} id={pillar.id} className="space-y-4">
              <SectionHeading title={pillar.title} description={pillar.jdBullets.join(" / ")} />
              <div className="grid gap-4">
                {pillar.modules.map((module: AutomationModule) => (
                  <Card key={module.id} id={module.id} className="p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold">{module.name}</h3>
                          <Badge className={module.priority === "MVP" ? "text-success" : module.priority === "Next" ? "text-info" : "text-muted"}>{module.priority}</Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted">{module.oneLiner}</p>
                      </div>
                      <div className="text-sm text-muted">{module.kpis?.[0]}</div>
                    </div>
                    <div className="mt-5 grid gap-5 lg:grid-cols-5">
                      <DetailList title="Trigger" items={module.triggers} />
                      <DetailList title="Input" items={module.inputs} />
                      <DetailList title="Output" items={module.outputs} />
                      <DetailList title="Tools" items={module.openclawComponents} mono />
                      <DetailList title="KPI" items={module.kpis} />
                    </div>
                    {module.opsNotes ? <p className="mt-4 text-sm text-muted">Note: {module.opsNotes}</p> : null}
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function DetailList({ title, items, mono }: { title: string; items?: string[]; mono?: boolean }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-sm text-muted">
        {(items ?? []).map((item) => (
          <li key={item} className={mono ? "font-mono text-xs" : ""}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
