import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">{site.name}</p>
          <p>{site.footer.copyright}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {site.footer.quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
