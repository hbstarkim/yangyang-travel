"use client";

import type { MapFilter } from "@/lib/trip-data";

const filters: { id: MapFilter; label: string; activeBg: string }[] = [
  { id: "all", label: "전체", activeBg: "bg-ocean text-white" },
  { id: "day1", label: "1일차", activeBg: "bg-sage text-white" },
  { id: "day2", label: "2일차", activeBg: "bg-ocean text-white" },
  { id: "day3", label: "3일차", activeBg: "bg-warm text-white" },
  { id: "cafe", label: "추천 카페", activeBg: "bg-[#A78BFA] text-white" },
];

export function MapFilterTabs({
  value,
  onChange,
}: {
  value: MapFilter;
  onChange: (f: MapFilter) => void;
}) {
  return (
    <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-2">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap min-h-9 transition-colors ${
            value === f.id
              ? f.activeBg
              : "bg-white text-ink/70 hover:bg-mist/40 border border-mist/60"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
