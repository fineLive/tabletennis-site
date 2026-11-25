"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { openSearch } from "@/components/search/command-menu";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/history", label: "历史" },
  { href: "/players", label: "运动员" },
  { href: "/tournaments", label: "赛事" },
  { href: "/techniques", label: "技术" },
  { href: "/rules", label: "规则" },
  { href: "/equipment", label: "装备" },
  { href: "/stats", label: "数据" },
  { href: "/glossary", label: "词典" },
];

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:-rotate-12">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <circle cx="11" cy="10" r="7.2" fill="currentColor" />
          <rect
            x="10"
            y="16.4"
            width="3.4"
            height="6"
            rx="1.6"
            fill="currentColor"
            transform="rotate(18 12 19)"
          />
          <circle cx="19.4" cy="5.6" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-base font-black tracking-tight">
          乒乓球世界
        </span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Table Tennis World
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b bg-background/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="hidden h-9 gap-2 pr-2 font-normal text-muted-foreground sm:flex"
            onClick={openSearch}
          >
            <Search className="size-4" />
            搜索
            <kbd className="rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
              Ctrl K
            </kbd>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="搜索"
            className="sm:hidden"
            onClick={openSearch}
          >
            <Search className="size-5" />
          </Button>
          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="打开菜单"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>导航</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="移动端导航">
                {NAV.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  关于本站
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
