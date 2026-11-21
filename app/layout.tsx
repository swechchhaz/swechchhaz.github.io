import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-serif-4";
import "./globals.css";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} | Business analytics portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
