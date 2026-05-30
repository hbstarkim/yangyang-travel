"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  Check,
  ExternalLink,
} from "lucide-react";
import type { Place, RestaurantOption } from "@/lib/data";

type Card = {
  name: string;
  address?: string;
  description: string;
  phone?: string;
  mapQuery: string;
  url?: string;
  bookingUrl?: string;
  openHours?: string;
  tag?: string;
};

function toCard(place: Place): Card {
  return {
    name: place.name,
    address: place.address,
    description: place.description,
    phone: place.phone,
    mapQuery: place.mapQuery,
    url: place.url,
    bookingUrl: place.bookingUrl,
    openHours: place.openHours,
    tag: "원래 일정",
  };
}

function altToCard(alt: RestaurantOption): Card {
  return { ...alt };
}

function storageKey(place: Place): string {
  return `yangyang-food-pick:${place.mapQuery}`;
}

export function FoodSwipePicker({ place }: { place: Place }) {
  const cards = useMemo<Card[]>(
    () => [toCard(place), ...(place.alternatives ?? []).map(altToCard)],
    [place]
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pickedIndex, setPickedIndex] = useState(0);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey(place));
      if (saved !== null) {
        const idx = Number(saved);
        if (!Number.isNaN(idx) && idx >= 0 && idx < cards.length) {
          setPickedIndex(idx);
          setActiveIndex(idx);
          const el = scrollerRef.current;
          if (el) {
            const child = el.children[idx] as HTMLElement | undefined;
            if (child) el.scrollLeft = child.offsetLeft;
          }
        }
      }
    } catch {
      // localStorage 사용 불가 환경 — 기본값 유지
    }
  }, [place, cards.length]);

  const scrollTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[idx] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (width === 0) return;
    const idx = Math.round(el.scrollLeft / width);
    if (idx !== activeIndex) setActiveIndex(idx);
  };

  const handlePick = (idx: number) => {
    setPickedIndex(idx);
    try {
      window.localStorage.setItem(storageKey(place), String(idx));
    } catch {
      // 무시
    }
  };

  return (
    <article className="rounded-2xl bg-white shadow-sm border border-mist/60 mb-4 overflow-hidden">
      {/* 헤더: 시간/유형 */}
      <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-3">
        <div>
          <div className="text-2xl font-bold text-ocean leading-tight">
            {place.time}
          </div>
          <div className="text-xs text-ink/50 mt-0.5 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {place.duration}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-warm/20 text-warm">
          <UtensilsCrossed className="w-3.5 h-3.5" /> 식사 · 3곳 중 선택
        </span>
      </div>

      {/* 선택된 곳 알림 */}
      <div className="px-5 pb-2 text-xs text-ink/60">
        선택됨:{" "}
        <span className="font-semibold text-ocean">
          {cards[pickedIndex]?.name}
        </span>
      </div>

      {/* swipe scroller */}
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {cards.map((card, idx) => {
            const isPicked = idx === pickedIndex;
            const mapHref = `https://map.naver.com/p/search/${encodeURIComponent(
              card.mapQuery
            )}`;
            return (
              <div
                key={idx}
                className="snap-center shrink-0 w-full px-4 pb-4"
              >
                <div
                  className={`rounded-xl border p-4 transition-colors ${
                    isPicked
                      ? "border-ocean bg-ocean/5"
                      : "border-mist/60 bg-white"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="text-[10px] font-bold text-ink/40 shrink-0">
                        {idx + 1} / {cards.length}
                      </span>
                      <h3 className="text-lg font-semibold text-ink truncate">
                        {card.name}
                      </h3>
                    </div>
                    {card.tag && (
                      <span className="text-[10px] font-medium text-ocean bg-sage/20 px-2 py-0.5 rounded-full shrink-0">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  {card.address && (
                    <p className="text-xs text-ink/55 mb-2 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{card.address}</span>
                    </p>
                  )}
                  {card.openHours && (
                    <p className="text-xs text-ink/55 mb-2 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 운영 {card.openHours}
                    </p>
                  )}
                  <p className="text-sm text-ink/80 leading-relaxed mb-3">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean/90 transition-colors"
                    >
                      <MapPin className="w-4 h-4" /> 지도
                    </a>
                    {card.phone && (
                      <a
                        href={`tel:${card.phone.replace(/-/g, "")}`}
                        className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 rounded-xl bg-warm text-white text-sm font-medium hover:bg-warm/90 transition-colors"
                      >
                        <Phone className="w-4 h-4" /> 전화
                      </a>
                    )}
                    {card.url && (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> 공식
                      </a>
                    )}
                    {card.bookingUrl && (
                      <a
                        href={card.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> 예약
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePick(idx)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 min-h-11 rounded-xl text-sm font-semibold transition-colors ${
                      isPicked
                        ? "bg-ocean text-white"
                        : "bg-sand text-ocean hover:bg-warm/20"
                    }`}
                  >
                    {isPicked ? (
                      <>
                        <Check className="w-4 h-4" /> 여기로 결정함
                      </>
                    ) : (
                      <>여기로 결정</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 좌우 화살표 */}
        {activeIndex > 0 && (
          <button
            type="button"
            aria-label="이전 후보"
            onClick={() => scrollTo(activeIndex - 1)}
            className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/90 shadow border border-mist/60 text-ocean hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {activeIndex < cards.length - 1 && (
          <button
            type="button"
            aria-label="다음 후보"
            onClick={() => scrollTo(activeIndex + 1)}
            className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/90 shadow border border-mist/60 text-ocean hover:bg-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* dot indicator */}
      <div className="flex justify-center gap-1.5 pb-4">
        {cards.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            aria-label={`${idx + 1}번 후보로 이동`}
            className={`h-1.5 rounded-full transition-all ${
              idx === activeIndex
                ? "w-6 bg-ocean"
                : "w-1.5 bg-mist hover:bg-ink/30"
            }`}
          />
        ))}
      </div>
    </article>
  );
}
