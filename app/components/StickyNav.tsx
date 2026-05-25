"use client";

import { useEffect, useState } from "react";
import { navTabs } from "@/lib/data";

export function StickyNav() {
  const [active, setActive] = useState<string>(navTabs[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );
    navTabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-20 bg-sand/95 backdrop-blur-sm border-b border-mist/60">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto no-scrollbar py-2.5">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors min-h-9 ${
                active === tab.id
                  ? "bg-ocean text-white"
                  : "bg-white text-ink/60 hover:bg-mist/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
