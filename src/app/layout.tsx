import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: site.seo.title.zh,
  description: site.seo.description.zh,
  openGraph: {
    title: site.seo.title.zh,
    description: site.seo.description.zh,
    images: [site.seo.ogImage],
  },
  keywords: [...site.seo.keywords],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh" className="dark">
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
