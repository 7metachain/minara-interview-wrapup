"use client";

import Link from "next/link";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ResumeEnhancement } from "@/components/resume-enhancement";
import {
  resume,
  t,
  type ResumeCommunity,
  type ResumeEducation,
  type ResumeExperience,
  type ResumeSkillGroup,
} from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function ResumePage() {
  const { locale } = useLocale();
  const profile = resume.profile;

  return (
    <AppShell>
      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title={locale === "zh" ? "数据驱动简历" : "Data-driven resume"}
            description={locale === "zh" ? "内容来自 data/resume.json，可单独维护，不需要改布局代码。" : "Content is rendered from data/resume.json so it can be updated without touching layout code."}
          />
          <Link href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light">
            <Download className="h-4 w-4" /> {locale === "zh" ? "导出 PDF / 打印" : "Export PDF / Print"}
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.55fr]">
          <div className="space-y-6">
            <Card className="p-6">
              <h1 className="text-3xl font-semibold">{profile.name}</h1>
              <p className="mt-2 text-base text-accent-light">{t(profile.title, locale)}</p>
              <div className="mt-5 space-y-2 text-sm text-muted">
                <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</p>
                <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {profile.contact.email}</p>
                <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {profile.contact.phone}</p>
                <p className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> <Link href={profile.contact.github}>{profile.contact.github.replace("https://", "")}</Link></p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">{locale === "zh" ? "个人简介" : "Profile"}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{t(profile.summary, locale)}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">{locale === "zh" ? "核心技能" : "Core skills"}</h2>
              <div className="mt-4 space-y-4">
                {Object.entries(resume.skills).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="mb-2 text-sm font-medium text-foreground">{t((value as ResumeSkillGroup).label, locale)}</h3>
                    <div className="flex flex-wrap gap-2">
                      {(value as ResumeSkillGroup).items.map((item: string) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">{locale === "zh" ? "教育背景" : "Education"}</h2>
              <div className="mt-4 space-y-4">
                {resume.education.map((item: ResumeEducation) => (
                  <div key={item.id} id={item.id}>
                    <p className="font-medium">{t(item.school, locale)}</p>
                    <p className="text-sm text-accent-light">{t(item.degree, locale)}</p>
                    <p className="text-xs text-muted">{item.date}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold">{locale === "zh" ? "工作经历" : "Experience"}</h2>
              <div className="mt-6 space-y-8 border-l border-card-border pl-6">
                {resume.experience.map((item: ResumeExperience) => (
                  <div key={item.id} id={item.id} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{t(item.role, locale)}</h3>
                        <p className="text-sm text-accent-light">{typeof item.company === "string" ? item.company : t(item.company, locale)}</p>
                      </div>
                      <Badge>{item.date}</Badge>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                      {item.highlights[locale].map((point: string) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">{locale === "zh" ? "社区与教学" : "Community & Teaching"}</h2>
              <div className="mt-4 space-y-4">
                {resume.community.map((item: ResumeCommunity) => (
                  <div key={item.id} id={item.id}>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-medium">{t(item.name, locale)}</h3>
                      <Badge>{item.date}</Badge>
                    </div>
                    <p className="text-sm text-accent-light">{item.org}</p>
                    <p className="mt-1 text-sm text-muted">{t(item.description, locale)}</p>
                  </div>
                ))}
              </div>
            </Card>

            <ResumeEnhancement />
          </div>
        </div>
      </section>
    </AppShell>
  );
}
