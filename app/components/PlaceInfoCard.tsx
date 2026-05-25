"use client";

import { X, MapPin, Phone, Star, ExternalLink, AlertTriangle } from "lucide-react";
import type { MapPlace } from "@/lib/trip-data";
import {
  getCategoryEmoji,
  getCategoryLabel,
  getDayLabel,
  getPlaceColor,
} from "@/lib/trip-data";

function openInKakaoMap(place: MapPlace) {
  const { lat, lng } = place.coordinates;
  const appUrl = `kakaomap://look?p=${lat},${lng}`;
  const webUrl = place.mapLinks.kakao;
  if (typeof navigator !== "undefined" && /iPhone|Android/i.test(navigator.userAgent)) {
    window.location.href = appUrl;
    window.setTimeout(() => {
      window.location.href = webUrl;
    }, 1500);
  } else {
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
}

export function PlaceInfoCard({
  place,
  onClose,
}: {
  place: MapPlace;
  onClose: () => void;
}) {
  const color = getPlaceColor(place);
  const isCafe = place.kind === "cafe";

  return (
    <div className="mt-3 bg-white rounded-2xl shadow-sm border border-mist/60 overflow-hidden">
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ background: `${color}22` }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm"
            style={{ background: color, color: "white" }}
          >
            {getCategoryEmoji(place.category)}
          </span>
          <div>
            <div className="text-xs text-ink/60 leading-tight">
              {getDayLabel(place)} · {getCategoryLabel(place.category)}
            </div>
            <div className="text-base font-semibold text-ink leading-tight">
              {place.name}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="닫기"
          className="w-8 h-8 inline-flex items-center justify-center text-ink/50 hover:text-ink rounded-full hover:bg-white/60"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {place.tagline && (
          <p className="text-sm font-medium text-ocean">{place.tagline}</p>
        )}

        {place.hours && (
          <p className="text-xs text-ink/60">⏰ {place.hours}</p>
        )}

        {!isCafe && place.schedule && (
          <p className="text-xs text-ink/60">
            🕒 일정상 {place.schedule.arriveAt} 도착 · {place.schedule.durationMin}분
          </p>
        )}

        {place.address && (
          <p className="text-xs text-ink/60 flex items-start gap-1">
            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>{place.address}</span>
          </p>
        )}

        {isCafe && place.rating && (
          <p className="text-xs text-ink/60 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {place.rating} ({place.ratingCount}개 리뷰)
            </span>
          </p>
        )}

        {isCafe && place.warning && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 flex items-start gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>{place.warning}</span>
          </p>
        )}

        {!isCafe && place.note && (
          <p className="text-sm text-ink/80 leading-relaxed">{place.note}</p>
        )}

        {isCafe && place.shortDescription && (
          <p className="text-sm text-ink/80 leading-relaxed">
            {place.shortDescription}
          </p>
        )}

        {isCafe && place.pregnancyPoints && place.pregnancyPoints.length > 0 && (
          <div className="bg-sand/60 rounded-lg p-3">
            <div className="text-xs font-semibold text-ocean mb-1.5">
              🤰 임산부 추천 포인트
            </div>
            <ul className="text-xs text-ink/75 leading-relaxed space-y-1">
              {place.pregnancyPoints.map((p, i) => (
                <li key={i}>· {p}</li>
              ))}
            </ul>
          </div>
        )}

        {isCafe && place.signature && place.signature.length > 0 && (
          <p className="text-xs text-ink/65">
            <span className="font-medium">시그니처</span> · {place.signature.join(", ")}
          </p>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => openInKakaoMap(place)}
            className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean/90"
          >
            <MapPin className="w-4 h-4" /> 카카오맵에서 열기
          </button>
          <a
            href={place.mapLinks.naver}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40"
          >
            <ExternalLink className="w-4 h-4" /> 네이버 지도
          </a>
          {place.phone && (
            <a
              href={`tel:${place.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-warm text-white text-sm font-medium hover:bg-warm/90"
            >
              <Phone className="w-4 h-4" /> 전화
            </a>
          )}
        </div>

        {isCafe && place.blogs && place.blogs.length > 0 && (
          <div className="pt-2 border-t border-mist/40">
            <div className="text-xs text-ink/50 mb-1.5">참고 후기</div>
            <div className="flex flex-col gap-1">
              {place.blogs.slice(0, 3).map((b, i) => (
                <a
                  key={i}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-ocean/80 hover:text-ocean underline decoration-dotted truncate"
                >
                  {b.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
