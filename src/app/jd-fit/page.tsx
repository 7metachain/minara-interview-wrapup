"use client";

import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { EvidenceChip } from "@/components/evidence-chip";
import { jd, t } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function JdFitPage() {
  const { locale } = useLocale();

  return (
    <AppShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="JD Fit"
          title={locale === "zh" ? "岗位 4 大支柱对齐" : "Alignment with the 4 JD pillars"}
          description={locale === "zh" ? "每个支柱下都给出 JD 要求、证据链接和建议 KPI，方便面试时按模块展开。" : "Each pillar maps JD expectations to evidence and suggested KPIs for interview storytelling."}
        />
        <div className="space-y-5">
          {jd.pillars.map((pillar) => (
            <Card key={pillar.id} className="p-6">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr_0.9fr]">
                <div>
                  <h2 className="text-xl font-semibold">{t(pillar.title, locale)}</h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {pillar.bullets[locale].map((bullet: string) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{locale === "zh" ? "证据链接" : "Evidence"}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pillar.evidence.map((item) => (
                      <EvidenceChip key={item.href} href={item.href} label={item.label} type={item.type} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{locale === "zh" ? "建议 KPI" : "Suggested KPIs"}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {pillar.kpis.map((kpi: string) => (
                      <li key={kpi}>• {kpi}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
