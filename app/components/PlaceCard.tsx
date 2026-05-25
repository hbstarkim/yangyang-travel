import {
  MapPin,
  Phone,
  Clock,
  UtensilsCrossed,
  Hotel,
  Footprints,
  Mountain,
  ExternalLink,
} from "lucide-react";
import type { Place, PlaceCategory } from "@/lib/data";

const categoryStyles: Record<
  PlaceCategory,
  { icon: typeof MapPin; accent: string; label: string }
> = {
  food: { icon: UtensilsCrossed, accent: "bg-warm/20 text-warm", label: "식사" },
  lodging: { icon: Hotel, accent: "bg-ocean/15 text-ocean", label: "숙소" },
  walk: { icon: Footprints, accent: "bg-sage/20 text-sage", label: "산책" },
  place: { icon: Mountain, accent: "bg-ocean/15 text-ocean", label: "명소" },
};

export function PlaceCard({ place }: { place: Place }) {
  const style = categoryStyles[place.category];
  const Icon = style.icon;
  const mapHref = `https://map.naver.com/p/search/${encodeURIComponent(
    place.mapQuery
  )}`;

  return (
    <article className="rounded-2xl bg-white shadow-sm border border-mist/60 p-5 mb-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="text-2xl font-bold text-ocean leading-tight">
            {place.time}
          </div>
          <div className="text-xs text-ink/50 mt-0.5 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {place.duration}
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${style.accent}`}
        >
          <Icon className="w-3.5 h-3.5" /> {style.label}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-ink mb-1">{place.name}</h3>
      {place.address && (
        <p className="text-xs text-ink/55 mb-2 flex items-start gap-1">
          <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span>{place.address}</span>
        </p>
      )}
      {place.openHours && (
        <p className="text-xs text-ink/55 mb-2 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> 운영 {place.openHours}
        </p>
      )}
      <p className="text-sm text-ink/80 leading-relaxed mb-4">
        {place.description}
      </p>

      <div className="flex flex-wrap gap-2">
        <a
          href={mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean/90 transition-colors"
        >
          <MapPin className="w-4 h-4" /> 지도 보기
        </a>
        {place.phone && (
          <a
            href={`tel:${place.phone.replace(/-/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-warm text-white text-sm font-medium hover:bg-warm/90 transition-colors"
          >
            <Phone className="w-4 h-4" /> 전화
          </a>
        )}
        {place.url && (
          <a
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> 공식 사이트
          </a>
        )}
        {place.bookingUrl && (
          <a
            href={place.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-xl bg-sage/30 text-ocean text-sm font-medium hover:bg-sage/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> 예약 링크
          </a>
        )}
      </div>
    </article>
  );
}
