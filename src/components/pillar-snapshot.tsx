import { Card } from "@/components/ui/card";
import { EvidenceChip } from "@/components/evidence-chip";
import { t, type Locale, type JdPillar } from "@/lib/content";

export function PillarSnapshot({ pillar, locale }: { pillar: JdPillar; locale: Locale }) {
  return (
    <Card className="p-5">
      <h3 className="text-lg font-semibold">{t(pillar.title, locale)}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {pillar.bullets[locale].map((bullet: string) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {pillar.evidence.map((item) => (
          <EvidenceChip key={item.href} href={item.href} label={item.label} type={item.type} />
        ))}
      </div>
    </Card>
  );
}
