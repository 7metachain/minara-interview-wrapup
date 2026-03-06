"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

export default function ContactPage() {
  const { locale } = useLocale();
  return (
    <AppShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title={locale === "zh" ? "联系我" : "Get in touch"}
          description={locale === "zh" ? "如果你想继续聊 Minara、DevRel、内容系统或合作 PoC，可以通过下面方式联系。" : "Reach out if you'd like to continue the conversation about Minara, DevRel, content systems, or partner PoCs."}
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6"><p className="text-sm text-muted">Email</p><Link href={`mailto:${site.contact.email}`} className="mt-2 block text-lg font-medium">{site.contact.email}</Link></Card>
          <Card className="p-6"><p className="text-sm text-muted">GitHub</p><Link href={site.contact.github} className="mt-2 block text-lg font-medium">7metachain</Link></Card>
          <Card className="p-6"><p className="text-sm text-muted">Location</p><p className="mt-2 text-lg font-medium">{site.location.zh}</p></Card>
        </div>
      </section>
    </AppShell>
  );
}
