"use client";

import { useEffect, useState } from "react";
import { MapPin, Navigation, Car, RefreshCw } from "lucide-react";
import {
  days,
  lunchMeetupSpots,
  lunchMeetupFallback,
  meetupTips,
  type MeetupSpot,
} from "@/lib/data";

function getLunchPlace() {
  const day1 = days.find((d) => d.id === "day1");
  if (!day1) return null;
  return (
    day1.places.find(
      (p) => p.category === "food" && p.time.startsWith("12:30")
    ) ?? null
  );
}

function readPickedMapQuery(): string | null {
  const lunch = getLunchPlace();
  if (!lunch) return null;
  try {
    const raw = window.localStorage.getItem(
      `yangyang-food-pick:${lunch.mapQuery}`
    );
    if (raw === null) return lunch.mapQuery;
    const idx = Number(raw);
    if (Number.isNaN(idx)) return lunch.mapQuery;
    if (idx === 0) return lunch.mapQuery;
    const alt = lunch.alternatives?.[idx - 1];
    return alt?.mapQuery ?? lunch.mapQuery;
  } catch {
    return lunch.mapQuery;
  }
}

function readPickedName(): string | null {
  const lunch = getLunchPlace();
  if (!lunch) return null;
  try {
    const raw = window.localStorage.getItem(
      `yangyang-food-pick:${lunch.mapQuery}`
    );
    if (raw === null) return lunch.name;
    const idx = Number(raw);
    if (Number.isNaN(idx) || idx === 0) return lunch.name;
    return lunch.alternatives?.[idx - 1]?.name ?? lunch.name;
  } catch {
    return lunch.name;
  }
}

export function MeetupGuide() {
  const [mapQuery, setMapQuery] = useState<string | null>(null);
  const [pickedName, setPickedName] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const refresh = () => {
    setMapQuery(readPickedMapQuery());
    setPickedName(readPickedName());
  };

  useEffect(() => {
    refresh();
    setHydrated(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key && e.key.startsWith("yangyang-food-pick:")) refresh();
    };
    window.addEventListener("storage", onStorage);
    const onFocus = () => refresh();
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  const spot: MeetupSpot =
    (mapQuery && lunchMeetupSpots[mapQuery]) || lunchMeetupFallback;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-mist/60 p-5">
      {/* 동적 합류 지점 박스 */}
      <div className="bg-sand/60 border border-warm/30 rounded-xl p-4 mb-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="text-xs text-ink/55 leading-tight">
            1일차 12:30 점심 선택
            {hydrated && pickedName && (
              <>
                {" "}
                ·{" "}
                <span className="font-semibold text-ocean">{pickedName}</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={refresh}
            aria-label="합류 정보 새로고침"
            className="text-ink/40 hover:text-ocean shrink-0"
            title="점심 선택을 바꾸셨다면 새로고침"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="w-4 h-4 text-warm mt-0.5 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-ocean mb-0.5">
              합류 지점
            </div>
            <div className="text-sm text-ink/85 leading-relaxed">
              {spot.point}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <Navigation className="w-4 h-4 text-warm mt-0.5 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-ocean mb-0.5">
              내비 안내
            </div>
            <div className="text-sm text-ink/85 leading-relaxed">
              {spot.navTip}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Car className="w-4 h-4 text-warm mt-0.5 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-ocean mb-0.5">
              주차 / 입장
            </div>
            <div className="text-sm text-ink/85 leading-relaxed">
              {spot.parking}
            </div>
          </div>
        </div>
        {hydrated && !mapQuery && (
          <div className="text-[11px] text-ink/50 mt-2">
            점심 식당을 swipe로 결정하시면 이 카드가 자동으로 갱신됩니다.
          </div>
        )}
      </div>

      {/* 정적 일반 팁 */}
      <ul className="space-y-2.5">
        {meetupTips.map((tip, i) => (
          <li key={i} className="text-sm text-ink/80 leading-relaxed flex gap-2">
            <span className="text-warm shrink-0">·</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
