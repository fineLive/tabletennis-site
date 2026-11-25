import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandMenu } from "@/components/search/command-menu";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: {
    default: "乒乓球世界 · Table Tennis World",
    template: "%s · 乒乓球世界",
  },
  description:
    "介绍乒乓球历史、规则、技术、装备、传奇运动员与重要赛事的国球文化站。弘扬国球精神，传播乒乓文化。",
  keywords: ["乒乓球", "国球", "乒乓球规则", "乒乓球技术", "世界冠军"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <SiteHeader />
          <CommandMenu />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
