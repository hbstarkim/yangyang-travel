import rawData from "@/public/yangyang-trip-data.json";

export type TripCategory = "food" | "cafe" | "place" | "walk" | "lodging";
export type MapFilter = "all" | "day1" | "day2" | "day3" | "cafe";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MapLinks {
  naver: string;
  kakao: string;
  google: string;
}

export interface ItineraryPlace {
  id: string;
  day: 1 | 2 | 3;
  order: number;
  category: TripCategory;
  name: string;
  tagline?: string;
  address: string;
  phone: string | null;
  website?: string;
  coordinates: Coordinates;
  googlePlaceId?: string;
  hours?: string;
  schedule?: { arriveAt: string; durationMin: number };
  note?: string;
  image: string | null;
  mapLinks: MapLinks;
  kind: "itinerary";
}

export interface RecommendedCafe {
  id: string;
  rank: number;
  name: string;
  nameEn?: string;
  tagline?: string;
  shortDescription?: string;
  address: string;
  region?: string;
  phone: string | null;
  website?: string | null;
  hours?: string;
  closedDays?: string[];
  warning?: string;
  coordinates: Coordinates;
  rating?: number;
  ratingCount?: number;
  tags?: string[];
  pregnancyPoints?: string[];
  signature?: string[];
  priceRange?: string;
  image: string | null;
  blogs?: { title: string; url: string }[];
  mapLinks: MapLinks;
  category: "cafe";
  kind: "cafe";
}

export type MapPlace = ItineraryPlace | RecommendedCafe;

const itineraryPlaces: ItineraryPlace[] = (
  rawData.itineraryPlaces as Omit<ItineraryPlace, "kind">[]
).map((p) => ({ ...p, kind: "itinerary" }));

const recommendedCafes: RecommendedCafe[] = (
  rawData.recommendedCafes as Omit<RecommendedCafe, "kind" | "category">[]
).map((c) => ({ ...c, kind: "cafe", category: "cafe" }));

export const tripData = {
  itinerary: itineraryPlaces,
  cafes: recommendedCafes,
};

export function getPlacesByFilter(filter: MapFilter): MapPlace[] {
  switch (filter) {
    case "all":
      return [...itineraryPlaces, ...recommendedCafes];
    case "day1":
      return itineraryPlaces.filter((p) => p.day === 1);
    case "day2":
      return itineraryPlaces.filter((p) => p.day === 2);
    case "day3":
      return itineraryPlaces.filter((p) => p.day === 3);
    case "cafe":
      return recommendedCafes;
  }
}

export function getPlaceColor(place: MapPlace): string {
  if (place.kind === "cafe") return "#A78BFA";
  switch (place.day) {
    case 1:
      return "#8AA6A3";
    case 2:
      return "#3D5A6C";
    case 3:
      return "#E8B298";
  }
}

export function getCategoryEmoji(category: TripCategory): string {
  switch (category) {
    case "food":
      return "🍽";
    case "cafe":
      return "☕";
    case "place":
      return "📍";
    case "walk":
      return "🚶";
    case "lodging":
      return "🏨";
  }
}

export function getCategoryLabel(category: TripCategory): string {
  switch (category) {
    case "food":
      return "식사";
    case "cafe":
      return "카페";
    case "place":
      return "명소";
    case "walk":
      return "산책";
    case "lodging":
      return "숙소";
  }
}

export function getDayLabel(place: MapPlace): string {
  if (place.kind === "cafe") return "추천 카페";
  return `${place.day}일차`;
}
