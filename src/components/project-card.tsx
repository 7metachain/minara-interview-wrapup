import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { t, type Locale, type ProjectData } from "@/lib/content";

export function ProjectCard({ project, locale }: { project: ProjectData; locale: Locale }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag: string) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{t(project.title, locale)}</h3>
      <p className="mt-3 text-sm text-muted">{t(project.oneLiner, locale)}</p>
      <div className="mt-5 space-y-3 text-sm text-muted">
        {project.problem ? <p><span className="font-medium text-foreground">Problem:</span> {t(project.problem, locale)}</p> : null}
        {project.solution ? <p><span className="font-medium text-foreground">Solution:</span> {t(project.solution, locale)}</p> : null}
        {project.goal ? <p><span className="font-medium text-foreground">Goal:</span> {t(project.goal, locale)}</p> : null}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:text-white">
          View case study <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href={project.repo} className="text-sm text-muted hover:text-foreground">
          GitHub
        </Link>
      </div>
    </Card>
  );
}
