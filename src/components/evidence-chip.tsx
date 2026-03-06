import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function EvidenceChip({ href, label, type }: { href: string; label: string; type?: string }) {
  const tone = type === "project" ? "text-accent-light" : type === "module" ? "text-info" : "text-success";
  return (
    <Link href={href}>
      <Badge className={tone}>{label}</Badge>
    </Link>
  );
}
