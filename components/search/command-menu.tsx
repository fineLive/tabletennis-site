"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const SEARCH_EVENT = "tabletennis:open-search";

export function openSearch() {
  window.dispatchEvent(new CustomEvent(SEARCH_EVENT));
}

type SearchItem = {
  title: string;
  subtitle?: string;
  group: "页面" | "运动员" | "技术" | "术语";
  href: string;
};

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<SearchItem[] | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener(SEARCH_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(SEARCH_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open || items) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, [open, items]);

  const run = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const groups = useMemo(() => {
    if (!items) return [];
    const order: SearchItem["group"][] = ["页面", "运动员", "技术", "术语"];
    return order.map((g) => ({
      name: g,
      list: items.filter((i) => i.group === g),
    }));
  }, [items]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="搜索选手、技术、术语…" />
      <CommandList className="max-h-[420px]">
        {!items ? (
          <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            正在加载索引…
          </div>
        ) : (
          <>
            <CommandEmpty>没有找到相关内容，换个关键词试试。</CommandEmpty>
            {groups
              .filter((g) => g.list.length > 0)
              .map((g) => (
                <CommandGroup key={g.name} heading={g.name}>
                  {g.list.map((item) => (
                    <CommandItem
                      key={item.href}
                      value={`${item.title} ${item.subtitle ?? ""}`}
                      onSelect={() => run(item.href)}
                    >
                      <Search className="mr-2 size-3.5 text-muted-foreground" />
                      <span>{item.title}</span>
                      {item.subtitle ? (
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          {item.subtitle}
                        </span>
                      ) : null}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
