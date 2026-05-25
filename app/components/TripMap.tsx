"use client";

import { useEffect, useRef, useState } from "react";
import { MapFilterTabs } from "./MapFilterTabs";
import { PlaceInfoCard } from "./PlaceInfoCard";
import {
  type MapFilter,
  type MapPlace,
  getPlacesByFilter,
  getPlaceColor,
  getCategoryEmoji,
} from "@/lib/trip-data";

declare global {
  interface Window {
    kakao: any;
  }
}

const YANGYANG_CENTER = { lat: 38.05, lng: 128.7 };
const INITIAL_LEVEL = 9;

const LEGEND = [
  { label: "1일차", color: "#8AA6A3" },
  { label: "2일차", color: "#3D5A6C" },
  { label: "3일차", color: "#E8B298" },
  { label: "카페", color: "#A78BFA" },
];

function buildPinElement(place: MapPlace, onClick: () => void) {
  const color = getPlaceColor(place);
  const emoji = getCategoryEmoji(place.category);
  const wrapper = document.createElement("div");
  wrapper.style.transform = "translate(-50%, -100%)";
  wrapper.style.cursor = "pointer";
  wrapper.style.position = "relative";
  wrapper.innerHTML = `
    <div style="
      width: 34px;
      height: 34px;
      border-radius: 50% 50% 50% 0;
      background: ${color};
      transform: rotate(-45deg);
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ffffff;
    ">
      <span style="transform: rotate(45deg); font-size: 14px; line-height: 1;">${emoji}</span>
    </div>
  `;
  wrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick();
  });
  return wrapper;
}

export function TripMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const overlays = useRef<any[]>([]);
  const [filter, setFilter] = useState<MapFilter>("all");
  const [activePlace, setActivePlace] = useState<MapPlace | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // SDK 로드 + 지도 초기화
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryInit = () => {
      if (cancelled) return;
      attempts++;
      if (typeof window === "undefined") return;

      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (cancelled || !mapRef.current) return;
          if (mapInstance.current) {
            setMapReady(true);
            return;
          }
          const map = new window.kakao.maps.Map(mapRef.current, {
            center: new window.kakao.maps.LatLng(
              YANGYANG_CENTER.lat,
              YANGYANG_CENTER.lng
            ),
            level: INITIAL_LEVEL,
          });
          mapInstance.current = map;
          setMapReady(true);
        });
      } else if (attempts < 100) {
        window.setTimeout(tryInit, 100);
      } else {
        setLoadError(
          "카카오맵 SDK 로드 실패. API 키와 도메인 등록을 확인해 주세요."
        );
      }
    };

    tryInit();
    return () => {
      cancelled = true;
    };
  }, []);

  // 핀 렌더링 (필터 또는 지도 준비 변경 시)
  useEffect(() => {
    if (!mapReady || !mapInstance.current || !window.kakao) return;
    const map = mapInstance.current;

    overlays.current.forEach((o) => o.setMap(null));
    overlays.current = [];

    const places = getPlacesByFilter(filter);
    const bounds = new window.kakao.maps.LatLngBounds();

    places.forEach((place) => {
      const position = new window.kakao.maps.LatLng(
        place.coordinates.lat,
        place.coordinates.lng
      );
      const el = buildPinElement(place, () => setActivePlace(place));
      const overlay = new window.kakao.maps.CustomOverlay({
        position,
        content: el,
        yAnchor: 1,
        xAnchor: 0.5,
        zIndex: 3,
      });
      overlay.setMap(map);
      overlays.current.push(overlay);
      bounds.extend(position);
    });

    if (places.length > 1) {
      map.setBounds(bounds, 40, 40, 40, 40);
    } else if (places.length === 1) {
      map.setCenter(
        new window.kakao.maps.LatLng(
          places[0].coordinates.lat,
          places[0].coordinates.lng
        )
      );
      map.setLevel(5);
    }
  }, [filter, mapReady]);

  // 필터 변경 시 기존 활성 핀이 필터에 없으면 카드 닫기
  useEffect(() => {
    if (!activePlace) return;
    const visible = getPlacesByFilter(filter);
    if (!visible.find((p) => p.id === activePlace.id)) {
      setActivePlace(null);
    }
  }, [filter, activePlace]);

  return (
    <div>
      <MapFilterTabs value={filter} onChange={setFilter} />

      <div className="relative">
        <div
          ref={mapRef}
          className="w-full h-[400px] rounded-2xl shadow-sm border border-mist/60 overflow-hidden bg-mist/20"
        />
        {!mapReady && !loadError && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-ink/55 pointer-events-none">
            지도 불러오는 중...
          </div>
        )}
        {loadError && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-red-600 px-4 text-center">
            {loadError}
          </div>
        )}

        {/* 범례 */}
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-mist/60 px-2.5 py-2 text-[10px] z-10">
          {LEGEND.map((l) => (
            <div key={l.label} className="flex items-center gap-1.5 py-0.5">
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ background: l.color }}
              />
              <span className="text-ink/70">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {activePlace ? (
        <PlaceInfoCard place={activePlace} onClose={() => setActivePlace(null)} />
      ) : (
        <div className="mt-3 bg-white/60 border border-dashed border-mist rounded-xl px-4 py-3 text-center text-xs text-ink/55">
          핀을 눌러 장소 정보를 확인해 보세요
        </div>
      )}
    </div>
  );
}
