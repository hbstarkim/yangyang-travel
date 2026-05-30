import Image from "next/image";
import { Phone, MapPin, Waves, Users, Coffee, Map as MapIcon, Star, Store } from "lucide-react";
import { StickyNav } from "./components/StickyNav";
import { PlaceCard } from "./components/PlaceCard";
import { DayHeader } from "./components/DayHeader";
import { WarningBox } from "./components/WarningBox";
import { TipList } from "./components/TipList";
import { TripMap } from "./components/TripMap";
import {
  trip,
  days,
  reservations,
  rainyAlternatives,
  babyTips,
  meetupTips,
  markets,
  warning,
} from "@/lib/data";
import { tripData } from "@/lib/trip-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      {/* 1. Hero 헤더 */}
      <header className="bg-gradient-to-b from-ocean via-ocean to-sage text-white pt-12 pb-10 px-5">
        <div className="max-w-[480px] mx-auto">
          <div className="flex items-center gap-1.5 text-xs opacity-80 mb-3">
            <Waves className="w-3.5 h-3.5" />
            <span>YANGYANG · GANGWON</span>
          </div>
          <h1 className="text-2xl font-bold leading-snug mb-2">
            {trip.title}
          </h1>
          <p className="text-sm opacity-90 mb-6">{trip.subtitle}</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
            <div className="text-xs opacity-80 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 숙소
            </div>
            <div className="text-sm font-medium mb-4">{trip.lodging}</div>

            <div className="text-xs opacity-80 mb-2 flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> 인원 6명
            </div>
            <div className="space-y-1.5">
              {trip.members.map((m, i) => (
                <div key={i} className="text-sm">
                  <span className="font-semibold">{m.group}</span>
                  <span className="opacity-80 text-xs ml-1.5">— {m.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 2. Sticky 탭 내비게이션 */}
      <StickyNav />

      <main className="max-w-[480px] mx-auto px-4 pb-16">
        {/* 3. 출발 전 체크 */}
        <section id="before" className="pt-6 scroll-mt-16">
          <h2 className="text-xl font-bold text-ocean mb-3 px-1">출발 전 체크</h2>
          <WarningBox title={warning.title}>
            <p>{warning.body}</p>
            <p className="font-medium">{warning.recommendation}</p>
            <div className="bg-white/60 rounded-xl p-3 mt-2">
              <p className="text-xs font-semibold mb-2">9시 출발 시 예상 소요시간</p>
              {warning.travelTimes.map((t, i) => (
                <div key={i} className="text-xs flex justify-between py-0.5">
                  <span>{t.from}</span>
                  <span className="font-medium">{t.duration}</span>
                </div>
              ))}
            </div>
          </WarningBox>
        </section>

        {/* 지도 섹션 */}
        <section id="map" className="pt-10 scroll-mt-16">
          <h2 className="text-xl font-bold text-ocean mb-1 px-1 flex items-center gap-1.5">
            <MapIcon className="w-5 h-5" /> 여행 동선 지도
          </h2>
          <p className="text-xs text-ink/55 mb-3 px-1 leading-relaxed">
            일정 10곳 + 추천 카페 5곳. 필터로 일자별·카페별 필터링, 핀을 누르면 상세 정보가 표시됩니다.
          </p>
          <TripMap />
        </section>

        {/* Day 1, 2, 3 */}
        {days.map((day) => (
          <section
            key={day.id}
            id={day.id}
            className="pt-10 scroll-mt-16"
          >
            <DayHeader
              dayLabel={day.dayLabel}
              date={day.date}
              summary={day.summary}
            />
            {day.intro && (
              <div className="bg-sage/15 border border-sage/30 rounded-xl p-3 mb-4 text-sm text-ocean/90 leading-relaxed">
                {day.intro}
              </div>
            )}
            {day.places.map((p, i) => (
              <PlaceCard key={i} place={p} />
            ))}
          </section>
        ))}

        {/* 추천 카페 섹션 */}
        <section id="cafes" className="pt-10 scroll-mt-16">
          <h2 className="text-xl font-bold text-ocean mb-1 px-1 flex items-center gap-1.5">
            <Coffee className="w-5 h-5" /> 임산부 추천 카페 5곳
          </h2>
          <p className="text-xs text-ink/55 mb-3 px-1 leading-relaxed">
            정규 일정 외 추가로 들르기 좋은 양양 카페 추천 (평점·임산부 친화도 기준).
          </p>
          <div className="space-y-4">
            {tripData.cafes.map((cafe) => (
              <article
                key={cafe.id}
                className="bg-white rounded-2xl shadow-sm border border-mist/60 overflow-hidden"
              >
                {cafe.image && (
                  <div className="relative w-full aspect-[16/10] bg-mist/30">
                    <Image
                      src={cafe.image}
                      alt={`${cafe.name} 카페 분위기`}
                      fill
                      sizes="(max-width: 480px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                <div className="flex items-baseline justify-between mb-1.5 gap-2">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-xs font-bold text-[#A78BFA] shrink-0">
                      #{cafe.rank}
                    </span>
                    <h3 className="text-lg font-semibold text-ink truncate">
                      {cafe.name}
                    </h3>
                  </div>
                  {cafe.rating && (
                    <span className="text-xs text-ink/60 flex items-center gap-0.5 shrink-0">
                      <Star className="w-3 h-3 text-amber-500" /> {cafe.rating}
                    </span>
                  )}
                </div>
                {cafe.tagline && (
                  <p className="text-sm text-ocean/90 mb-2">{cafe.tagline}</p>
                )}
                {cafe.address && (
                  <p className="text-xs text-ink/55 mb-2 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{cafe.address}</span>
                  </p>
                )}
                {cafe.hours && (
                  <p className="text-xs text-ink/55 mb-2">⏰ {cafe.hours}</p>
                )}
                {cafe.warning && (
                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 mb-2">
                    ⚠️ {cafe.warning}
                  </p>
                )}
                {cafe.shortDescription && (
                  <p className="text-sm text-ink/80 leading-relaxed mb-3">
                    {cafe.shortDescription}
                  </p>
                )}
                {cafe.pregnancyPoints && cafe.pregnancyPoints.length > 0 && (
                  <div className="bg-sand/60 rounded-lg p-3 mb-3">
                    <div className="text-xs font-semibold text-ocean mb-1.5">
                      🤰 임산부 추천 포인트
                    </div>
                    <ul className="text-xs text-ink/75 leading-relaxed space-y-1">
                      {cafe.pregnancyPoints.map((p, i) => (
                        <li key={i}>· {p}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cafe.mapLinks.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-11 px-3.5 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean/90"
                  >
                    <MapPin className="w-4 h-4" /> 카카오맵
                  </a>
                  <a
                    href={cafe.mapLinks.naver}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-11 px-3.5 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40"
                  >
                    <MapPin className="w-4 h-4" /> 네이버
                  </a>
                  {cafe.phone && (
                    <a
                      href={`tel:${cafe.phone.replace(/-/g, "")}`}
                      className="inline-flex items-center gap-1.5 min-h-11 px-3.5 rounded-xl bg-warm text-white text-sm font-medium hover:bg-warm/90"
                    >
                      <Phone className="w-4 h-4" /> 전화
                    </a>
                  )}
                </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 체크리스트 통합 섹션 시작 */}
        <div id="checklist" className="scroll-mt-16">
          {/* 식당 예약 리스트 */}
          <section className="pt-10">
            <h2 className="text-xl font-bold text-ocean mb-3 px-1 flex items-center gap-1.5">
              <Phone className="w-5 h-5" /> 식당 예약 리스트
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-mist/60 overflow-hidden">
              {reservations.map((r, i) => (
                <div
                  key={i}
                  className={`p-4 ${
                    i < reservations.length - 1 ? "border-b border-mist/40" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-semibold text-ink">{r.name}</span>
                    <span className="text-xs text-ink/55">{r.schedule}</span>
                  </div>
                  <p className="text-xs text-ink/70 leading-relaxed">{r.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink/50 mt-3 px-1 leading-relaxed">
              정확한 전화번호는 네이버 지도에서 식당명 검색 후 확인. 다락막국수·정안식당·고향집은 전화번호 노출이 적어 네이버 검색이 가장 빠릅니다.
            </p>
          </section>

          {/* 우천 / 날씨 대안 */}
          <section className="pt-10">
            <h2 className="text-xl font-bold text-ocean mb-3 px-1">
              우천 / 날씨 대안
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-mist/60 p-5">
              <TipList items={rainyAlternatives} />
            </div>
          </section>

          {/* 영유아 & 임산부 팁 */}
          <section className="pt-10">
            <h2 className="text-xl font-bold text-ocean mb-3 px-1">
              영유아 & 임산부 팁
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-mist/60 p-5">
              <TipList items={babyTips} />
            </div>
          </section>

          {/* 양양 시장 & 회 포장 */}
          <section className="pt-10">
            <h2 className="text-xl font-bold text-ocean mb-1 px-1 flex items-center gap-1.5">
              <Store className="w-5 h-5" /> 양양 시장 & 회 포장
            </h2>
            <p className="text-xs text-ink/55 mb-3 px-1 leading-relaxed">
              들르기 좋은 시장 3곳. 회·해산물·산나물 포장해 숙소에서 편하게
              드시기 좋아요.
            </p>
            <div className="space-y-4">
              {markets.map((m) => {
                const mapHref = `https://map.naver.com/p/search/${encodeURIComponent(
                  m.mapQuery
                )}`;
                return (
                  <article
                    key={m.name}
                    className="bg-white rounded-2xl shadow-sm border border-mist/60 p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-ink leading-snug">
                        {m.name}
                      </h3>
                      <span className="text-[10px] font-medium text-ocean bg-sage/20 px-2 py-1 rounded-full shrink-0">
                        {m.distanceFromLodging}
                      </span>
                    </div>
                    <p className="text-xs text-ink/55 mb-1 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{m.area}</span>
                    </p>
                    {m.schedule && (
                      <p className="text-xs text-ink/55 mb-3">
                        🗓 {m.schedule}
                      </p>
                    )}
                    <p className="text-sm text-ink/80 leading-relaxed mb-4">
                      {m.description}
                    </p>

                    <div className="border-t border-mist/40 pt-3 mb-3">
                      <div className="text-xs font-semibold text-ocean mb-2">
                        들러볼 가게 3곳
                      </div>
                      <ul className="space-y-2.5">
                        {m.stalls.map((s) => (
                          <li
                            key={s.name}
                            className="bg-sand/50 rounded-lg px-3 py-2.5"
                          >
                            <div className="flex items-baseline justify-between gap-2 mb-1">
                              <span className="text-sm font-semibold text-ink">
                                {s.name}
                              </span>
                              {s.tag && (
                                <span className="text-[10px] text-ocean/80 shrink-0">
                                  {s.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-ink/70 leading-relaxed">
                              {s.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean/90 transition-colors"
                    >
                      <MapPin className="w-4 h-4" /> 시장 위치 보기
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="text-xs text-ink/50 mt-3 px-1 leading-relaxed">
              💡 회 포장 팁: 보냉가방·아이스팩 챙기기, 주말 14~18시는 줄 길어요,
              임산부는 활어 신선도 직접 확인 후 적당량만 드세요.
            </p>
          </section>

          {/* 합류 & 출발 가이드 */}
          <section className="pt-10">
            <h2 className="text-xl font-bold text-ocean mb-3 px-1">
              합류 & 출발 가이드
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-mist/60 p-5">
              <TipList items={meetupTips} />
            </div>
          </section>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-mist/60 bg-white/50">
        <div className="max-w-[480px] mx-auto px-5 py-8 text-center">
          <p className="text-xs text-ink/60 leading-relaxed">
            양양 2박 3일 · 처남네 + 우리집 6명 함께
          </p>
          <p className="text-xs text-ink/40 mt-1">
            2026.06.06 — 2026.06.08
          </p>
        </div>
      </footer>
    </div>
  );
}
