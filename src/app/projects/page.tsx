"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects, projectsMeta } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function ProjectsPage() {
  const { locale } = useLocale();

  return (
    <AppShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title={locale === "zh" ? "可运行交付" : "Runnable deliverables"}
          description={projectsMeta.description}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
