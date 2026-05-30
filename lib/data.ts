export type PlaceCategory = "food" | "place" | "lodging" | "walk";

export interface RestaurantOption {
  name: string;
  address?: string;
  description: string;
  phone?: string;
  mapQuery: string;
  url?: string;
  bookingUrl?: string;
  openHours?: string;
  tag?: string;
}

export interface Place {
  time: string;
  duration: string;
  name: string;
  address?: string;
  description: string;
  phone?: string;
  mapQuery: string;
  category: PlaceCategory;
  url?: string;
  bookingUrl?: string;
  openHours?: string;
  alternatives?: RestaurantOption[];
}

export interface DaySection {
  id: string;
  dayLabel: string;
  date: string;
  title: string;
  summary: string;
  intro?: string;
  places: Place[];
}

export const trip = {
  title: "양양 2박 3일 — 태교 힐링 여행",
  subtitle: "2026년 6월 6일 (토) ~ 6월 8일 (월)",
  lodging: "서프리조트 인더시티 양양",
  members: [
    { group: "처남네 3명", detail: "처남, 처남댁🤰, 3세 아이" },
    { group: "우리집 3명", detail: "나, 와이프, 9개월 아기" },
  ],
};

export const navTabs = [
  { id: "before", label: "출발 전" },
  { id: "map", label: "지도" },
  { id: "day1", label: "1일차" },
  { id: "day2", label: "2일차" },
  { id: "day3", label: "3일차" },
  { id: "cafes", label: "카페" },
  { id: "checklist", label: "체크리스트" },
];

export const days: DaySection[] = [
  {
    id: "day1",
    dayLabel: "1일차",
    date: "6월 6일 토 · 도착 & 정착",
    title: "도착 & 숙소 정착",
    summary: "이동 최소, 휴식 최대",
    places: [
      {
        time: "12:30 PM",
        duration: "90분",
        name: "다락막국수",
        address: "강원도 양양군 현남면 시변리 27-17",
        description:
          "양양 명물 막국수. 숙소 도보 5분. 도착하자마자 가볍게 먹기 좋아요. 메밀이 임산부 소화에도 편하고, 보쌈·동태전도 있어 아이들 메뉴도 OK. 가게가 좁아 6명 동시 입장 어려울 수 있어 도착 30분 전 확인 전화 권장.",
        mapQuery: "다락막국수 양양 현남면",
        category: "food",
        openHours: "11:00 - 21:00",
        alternatives: [
          {
            name: "양양막국수 (인구점)",
            address: "강원도 양양군 현남면 인구리 일대",
            description:
              "동해바다가 보이는 깔끔한 막국수집. 메밀 본연의 맛에 충실해 임산부에게 부담 없음. 실내가 넓어 6명 동시 입장도 비교적 수월합니다. 가벼운 점심으로 추천.",
            mapQuery: "양양막국수 인구",
            tag: "넓은 좌석",
          },
          {
            name: "버거스테이지",
            address: "강원도 양양군 현남면 인구중앙길 103-2",
            description:
              "죽도해변 앞 수제버거집. 바다 뷰가 있어 3세 조카가 좋아하고, 사이드 메뉴 다양해 아이들도 잘 먹어요. 막국수 대신 가볍게 양식이 당길 때 대안. 6월 초 점심엔 비교적 한산.",
            mapQuery: "버거스테이지 양양 죽도",
            tag: "아이 친화 양식",
          },
          {
            name: "인구포구 물회집 (양리단길)",
            address: "강원도 양양군 현남면 인구해변 일대",
            description:
              "🐟 회·해물 옵션. 첫날 시원하게 물회로 시작하고 싶을 때. 광어·우럭 활어를 차게 식힌 새콤한 물회는 임산부도 무난 (생회 비중이 낮아 익힘 걱정 적음). 회덮밥·물회 비빔으로 메뉴 변경 가능.",
            mapQuery: "양양 인구해변 물회",
            tag: "🐟 시원한 물회",
          },
        ],
      },
      {
        time: "3:00 PM",
        duration: "2시간",
        name: "체크인: 서프리조트 인더시티 양양",
        address: "강원도 양양군 현남면 새나루길 5",
        phone: "010-6830-6240",
        description:
          "체크인 후 휴식. 이마트가 건물 안에 있어 기저귀·분유물·간식 등 필요한 것 이때 쇼핑. 세탁기·건조기 있어 아기 옷 빨래 가능. 주차장 지하 2층까지 넉넉.\n\n🌊 숙소 바로 앞 = 죽도해변 일대 (양리단길). 체크인 후 컨디션 좋으면 잠깐 나가 보세요:\n• 양리단길 — 인구해변~죽도해변 잇는 트렌디 거리. 횟집 위주 다른 해변과 달리 카페·펍·브런치집·서핑샵이 많아 ‘양양의 경리단길’이라 불립니다. 도보 5~10분 안에 다 둘러볼 수 있어요.\n• 죽도정·죽도 전망대 — 양양 8경. 송죽과 기암괴석, 에메랄드빛 동해가 어우러진 일출 명소. 전망대 골조가 대나무 격자무늬 디자인. 둘레 산책로가 완만해 임산부도 무리 없음.\n• 인구해변 백사장 — 모래가 곱기로 유명. 9개월 아기 첫 모래밭 체험 가능. 서퍼들 구경 포인트.\n• 죽도해변 솔숲 — 피톤치드 산책. 그늘 많아 한낮에도 시원.\n• 카페 ‘플리즈웨잇’ — 3층 루프탑에서 바다 뷰. 시그니처 ‘바다라떼’.\n• 카페 ‘솔티캐빈’ — 대나무·라탄 오두막 컨셉. 이국적 인테리어.\n• 도보 3분 ‘이마트 노브랜드’ — 짐 부담 줄이는 베이스캠프.",
        mapQuery: "서프리조트 인더시티 양양",
        category: "lodging",
        url: "https://innthecity.oapms.co.kr/",
        bookingUrl:
          "https://www.yeogi.com/share?type=domestic&productId=79000&checkIn=2026-06-06&checkOut=2026-06-08&personal=6&categoryId=2",
      },
      {
        time: "5:00 PM",
        duration: "90분",
        name: "죽도암 & 죽도해변 산책",
        address: "강원도 양양군 현남면 새나루길 26",
        description:
          "바다 옆 작은 암자. 송림과 해안을 따라 천천히 걷는 태교 산책로로 업소문 자자. 고양이들이 살고 있어 3세 조카도 좋아해요. 앞에 죽도해변 있으니 조개껍질 줍기 가능 (아기 자고 있으면 교대로).",
        mapQuery: "죽도암 양양",
        category: "walk",
      },
      {
        time: "6:30 PM",
        duration: "90분",
        name: "Poipu",
        address: "강원도 양양군 현남면 인구항길 17",
        description:
          "수제 버거·치킨 플래터·파스타 같은 캐주얼 양식. 숙소 바로 옆이라 이동 사실상 제로. 빈백 좌석이 있어 임산부·아기도 편하고, 메뉴 다양해서 아이들 먹을 것도 있어요. 단, 음악이 좀 크다는 후기.",
        mapQuery: "Poipu 양양 인구",
        category: "food",
        openHours: "11:00 - 21:00",
        alternatives: [
          {
            name: "네거티브바이브 (Negative Vibe)",
            address: "강원도 양양군 현남면 인구항길 4-8 2층",
            description:
              "인구해변 앞 2층 양식당. 피자·폭립이 시그니처. 통창 바다 뷰가 좋아 사진 맛집으로도 통하고, 음악이 Poipu보다 덜 시끄러워 임산부에게 편합니다. 6명 좌석 미리 문의 권장.",
            mapQuery: "네거티브바이브 양양 인구",
            tag: "조용한 양식",
          },
          {
            name: "거북이 서프바",
            address: "강원도 양양군 현남면 인구해변 일대",
            description:
              "바다 바로 앞 캐주얼 퓨전 펍. 해풍 맞으며 가벼운 안주류·파스타·라이스 메뉴 가능. 야외 좌석이 있어 아이들이 답답해하지 않아요. 술 안 드시는 임산부 위주면 분위기 미리 체크.",
            mapQuery: "거북이 서프바 양양 인구해변",
            tag: "오션뷰 캐주얼",
          },
          {
            name: "남애항 활어회센터",
            address: "강원도 양양군 현남면 남애리 남애항",
            description:
              "🐟 회·해물 옵션. 숙소에서 차로 5~10분. 동이 트기 전 갓 잡은 광어·우럭·도다리를 즉석에서 회 떠 줍니다. 통발 문어가 명물. 포장해서 숙소에서 편하게 드실 수도 있어요 (보냉가방 챙기면 OK). 임산부는 활어 신선도 확인 후 적당량만.",
            mapQuery: "남애항 활어회센터",
            tag: "🐟 활어회 / 포장",
          },
        ],
      },
    ],
  },
  {
    id: "day2",
    dayLabel: "2일차",
    date: "6월 7일 일 · 본격 양양 투어",
    title: "낙산사 + 하조대",
    summary: "북쪽에서 시작해 천천히 남쪽으로",
    intro:
      "💡 동선: 숙소(남쪽)에서 출발해 북쪽 낙산사까지 올라간 후, 천천히 남쪽으로 내려오며 저녁은 숙소 근처에서 마무리.",
    places: [
      {
        time: "10:30 AM",
        duration: "120분",
        name: "낙산사",
        address: "강원도 양양군 강현면 낙산사로 100",
        phone: "033-672-2448",
        description:
          "태교여행 1순위 코스. 절벽 위 사찰에서 보는 의상대·홍련암 바다 전망이 압권. 셔틀버스 이용하면 가파른 구간 건너뛸 수 있어 임산부 부담 확 줄어요. 무리하지 말고 의상대 쪽만 천천히 둘러봐도 충분. (숙소에서 차로 약 30분)",
        mapQuery: "낙산사",
        category: "place",
        url: "http://www.naksansa.or.kr/",
      },
      {
        time: "12:45 PM",
        duration: "90분",
        name: "정안식당",
        address: "강원도 양양군 강현면 동해대로 3405",
        description:
          "강원도 향토음식 한정식. 낙산사에서 차 5분. 자극 적은 푸짐한 메뉴 위주라 임산부에게 좋아요. 6명 룸 미리 예약 강력 추천. 21:00까지 운영.",
        mapQuery: "정안식당 양양",
        category: "food",
        alternatives: [
          {
            name: "흥부네 밥상",
            address: "강원도 양양군 강현면 낙산사 근처",
            description:
              "필례 약수로 지은 돌솥밥에 반찬 10가지·생선구이·돼지불고기까지 1인 12,000원. 정안식당보다 캐주얼하면서 가성비 좋고, 곤드레 돌솥밥은 임산부 입맛에도 잘 맞아요.",
            mapQuery: "흥부네 밥상 양양 낙산",
            tag: "가성비 돌솥밥",
          },
          {
            name: "송이골",
            address: "강원도 양양군 양양읍 남대천 근처",
            description:
              "양양 송이버섯 돌솥밥 원조 식당. 송이 돌솥정식 1인 20,000원. 정갈한 한정식 코스로 부모님 모시기 좋고, 송이 향이 깊어 특별한 점심으로 강추. 룸 좌석 미리 문의.",
            mapQuery: "송이골 양양",
            tag: "프리미엄 한정식",
          },
          {
            name: "물치항 활어회센터 (수현네)",
            address: "강원도 양양군 강현면 물치리",
            description:
              "🐟 회·해물 옵션. 낙산사에서 차 5분. 인어교주해적단 인증 가게로 그날 잡힌 광어·우럭이 메인. 회덮밥·물회 같은 가벼운 메뉴 있어 임산부 메뉴 선택 폭 넓음. 평수 작아 6명 자리 미리 확인 권장.",
            mapQuery: "물치항 활어회센터 수현네",
            tag: "🐟 활어회 / 회덮밥",
          },
        ],
      },
      {
        time: "2:45 PM",
        duration: "90분",
        name: "카페 둔치 (휴식)",
        address: "강원도 양양군 양양읍 조산리 95-45",
        description:
          "남대천을 한눈에 보는 잔잔한 힐링 카페. 평점 4.9. 가족·아이 환영 분위기. 통창 좌석에서 임산부와 아기 모두 편하게 쉴 수 있어요. 아이들 낮잠 타이밍으로 활용.",
        mapQuery: "카페 둔치 양양",
        category: "walk",
      },
      {
        time: "4:30 PM",
        duration: "60분",
        name: "하조대 전망대",
        address: "강원도 양양군 현북면 하광정리 58-1",
        description:
          "절벽 위 정자에서 보는 동해가 명장면. 계단이 적고 완만해 임산부에게 부담 적음 (\"노약자도 무리 없이 오를 수 있다\"는 후기 다수). 바람이 셀 수 있으니 겉옷 챙기세요. (카페 둔치에서 차로 약 15분)",
        mapQuery: "하조대 전망대",
        category: "place",
      },
      {
        time: "6:30 PM",
        duration: "90분",
        name: "고향집",
        address: "강원도 양양군 현남면 인구리 18-9",
        description:
          "숙소 도보 3분. 노르웨이산 고등어구이 1인분 14,000원으로 가성비 최강. 푸짐한 반찬과 손두부도 평이 좋고, 자녀 동반에 적합한 별실 구조. 명인들도 자주 가는 집. 주차는 우측 100m 이동 필요.",
        mapQuery: "고향집 양양 인구리",
        category: "food",
        alternatives: [
          {
            name: "선혜식당",
            address: "강원도 양양군 현남면 인구리 19-1",
            description:
              "인구리 골목 한식·한정식집. 자극 적고 따뜻한 가정식 위주라 임산부·아이 모두 안전합니다. 고향집 자리가 안 될 때 도보 3분 거리의 가장 안전한 대안.",
            mapQuery: "선혜식당 양양 인구리",
            tag: "한정식 가정식",
          },
          {
            name: "인구수산포차",
            address: "강원도 양양군 현남면 인구해변",
            description:
              "대왕해물철판이 시그니처. 가리비·새우·조개 한 상 푸짐하게. 6명 모임용으로 임팩트 있고, 아이들도 해산물 굽는 광경 좋아해요. 임산부는 해산물 익힘 정도 확인 필수.",
            mapQuery: "인구수산포차 양양",
            tag: "🦐 해산물 한상",
          },
          {
            name: "양양바다 (회 + 누룽지오징어순대)",
            address: "강원도 양양군 양양읍 양양전통시장 앞",
            description:
              "🐟 회·해물 옵션. 양양전통시장 바로 앞 횟집. 3인 스페셜(약 10만원) = 광어 + 제철 도다리 + 해산물 1종 + 누룽지오징어순대 2마리. 회+익힘 메뉴 함께라 임산부도 골라 먹기 좋고, 시장 구경하며 다른 먹거리도 포장 가능. 숙소까지 차 약 20분.",
            mapQuery: "양양바다 양양전통시장",
            tag: "🐟 회 + 익힘",
          },
        ],
      },
    ],
  },
  {
    id: "day3",
    dayLabel: "3일차",
    date: "6월 8일 월 · 짧은 산책 후 출발",
    title: "짧은 산책 후 출발",
    summary: "여유 있게 마무리, 14시 전 도착",
    places: [
      {
        time: "8:00 AM",
        duration: "90분",
        name: "숙소 조식",
        description: "2층 뷔페에서 천천히 아침.",
        mapQuery: "서프리조트 인더시티 양양",
        category: "lodging",
      },
      {
        time: "9:30 AM",
        duration: "60분",
        name: "죽도해변 아침 산책",
        address: "강원도 양양군 현남면 인구리",
        description:
          "숙소 도보 2분. 아침 공기 마시며 가볍게 모래사장 산책. 서퍼들 구경하는 재미도 있고, 9개월 아기 발이 모래에 닿는 첫 경험이 될 수도. 마지막 인증샷은 여기서!",
        mapQuery: "죽도해변",
        category: "walk",
      },
      {
        time: "10:45 AM",
        duration: "15분",
        name: "짐 정리 & 체크아웃",
        description:
          "11:00 체크아웃 기준. 10:30까지 짐 정리 완료 권장. 아이가 잊은 장난감, 욕실 물건 확인.",
        mapQuery: "서프리조트 인더시티 양양",
        category: "lodging",
      },
      {
        time: "11:00 AM",
        duration: "각 2~2.5시간",
        name: "양양 출발",
        description:
          "처남네: 양양IC → 동홍천IC → 서울양양고속도로 → 월계 (약 2시간). 우리집: 양양IC → 동홍천IC → 영동·중부내륙·경부 → 망포 (약 2시간 30분). 평일 점심시간 도로라 휴게소만 짧게 들러도 14:00 전 도착 충분.",
        mapQuery: "양양IC",
        category: "place",
      },
    ],
  },
];

export interface Reservation {
  name: string;
  schedule: string;
  note: string;
}

export const reservations: Reservation[] = [
  {
    name: "다락막국수",
    schedule: "1일차 점심 (토 12:30)",
    note: "도착 30분 전 확인 전화. 가게 협소.",
  },
  {
    name: "Poipu",
    schedule: "1일차 저녁 (토 18:30)",
    note: "워크인 가능. 6명 자리 가능한지만 확인.",
  },
  {
    name: "정안식당",
    schedule: "2일차 점심 (일 12:45)",
    note: "6명 룸 미리 예약 강추.",
  },
  {
    name: "고향집",
    schedule: "2일차 저녁 (일 18:30)",
    note: "별실 6명 자리 가능한지 미리 확인.",
  },
];

export const rainyAlternatives = [
  "비가 오면 하조대 전망대 → Sea View Bakery 또는 카페 둔치 연장 체류. Sea View Bakery는 5층 베이커리 카페로 통창 바다 풍경 (강원도 양양군 강현면 동해대로 3296).",
  "바람이 강하면 야외 일정 줄이고 숙소 라운지 & 1층 카페 활용.",
  "6월 초 양양 바람은 예상보다 셀 수 있습니다. 임산부 얇은 카디건, 아기 모자/담요 필수.",
];

export const babyTips = [
  "9개월 아기 낮잠 시간(보통 12:00~14:00, 15:00~16:00)과 식사·이동이 겹치지 않게 동선 배치. 2일차 카페 둔치 휴식이 이 부분 흡수.",
  "차 2대 카시트 분배: 처남네 차에 3세 조카, 우리 차에 9개월 아기 권장.",
  "숙소 1층 이마트에서 분유물·기저귀·간식 다 가능. 짐 부담 줄이세요.",
  "임산부 컨디션 1순위: 어디든 무리하지 말고 차에서 쉬는 옵션 항상 열어두기. 모든 일정은 '건너뛸 수 있음'.",
  "휴휴암(태교 명소)은 계단이 많아 이번 일정에서 제외. 다음 기회에.",
];

export interface MarketStall {
  name: string;
  description: string;
  tag?: string;
}

export interface Market {
  name: string;
  area: string;
  distanceFromLodging: string;
  schedule?: string;
  mapQuery: string;
  description: string;
  stalls: MarketStall[];
}

export const markets: Market[] = [
  {
    name: "양양전통시장 (양양5일장)",
    area: "양양읍 · 남대천 옆",
    distanceFromLodging: "숙소에서 차 약 20분",
    schedule: "상설 + 5일장 매월 4·9일 (6월 14일·19일 / 24일·29일)",
    mapQuery: "양양전통시장",
    description:
      "강원도 지역 최대 규모 5일장. 설악권에서 들어오는 농수산물·산나물·건어물이 한자리. 6월 9일(화)은 일정 사이라 못 가지만, 상설 시장은 매일 운영하므로 평일에도 회·반찬·산나물 포장이 가능합니다. 6명 식구가 와인&회 파티용으로 베이스캠프 쇼핑하기 좋아요.",
    stalls: [
      {
        name: "양양바다",
        description:
          "시장 바로 앞 횟집. 3인 스페셜(약 10만원) = 광어 + 도다리 + 해산물 + 누룽지오징어순대. 회·익힘 메뉴 함께라 임산부도 안심.",
        tag: "🐟 회 + 익힘",
      },
      {
        name: "양양회포장",
        description:
          "포장 전문점. 모둠회 소 45,000원 / 대 65,000원. 별도 대기 공간 있어 가족 단위 편함. 광어·우럭 위주 호불호 적은 구성. 13:00~22:00.",
        tag: "📦 회 포장 전문",
      },
      {
        name: "봄날은간다 (산나물전)",
        description:
          "TV ‘전현무계획’ 소개. 곤드레·취나물 산나물전 포장. 임산부 입맛에 잘 맞고 다음날 아침 식사로도 OK. 막걸리도 같이 판매.",
        tag: "🥬 산나물전",
      },
    ],
  },
  {
    name: "남애항 활어회센터",
    area: "현남면 남애리 · 남애항",
    distanceFromLodging: "숙소에서 차 5~10분",
    mapQuery: "남애항 활어회센터",
    description:
      "양양 8경 ‘남애항’의 활어회 센터. 동이 트기 전 갓 잡아 올린 횟감을 즉석에서 손질. 통발 문어가 명물이라 통문어 숙회 포장 추천. 숙소까지 가까워 ‘저녁 외식 대신 회 포장 → 숙소에서 편하게’ 동선에 가장 잘 맞습니다. 항구 자체가 작아 산책 겸 한 바퀴 돌기도 좋아요.",
    stalls: [
      {
        name: "활어회 코너 (광어·우럭)",
        description:
          "그날 잡은 활어 즉석 회. 광어·우럭 1kg 약 5만 원대 시세. 보냉가방·아이스팩 준비 필수. 손질 추가 비용 별도.",
        tag: "🐟 즉석 활어회",
      },
      {
        name: "통발 문어 가게",
        description:
          "남애항 시그니처. 통문어 숙회(쪄서 판매) 임산부에게 안전한 익힘 옵션. 1마리 단위 포장. 미리 전화 권장.",
        tag: "🐙 통문어 숙회",
      },
      {
        name: "물회·해물탕 포장",
        description:
          "차게 식힌 물회(광어·우럭 위주) + 매운탕·해물탕 즉석 조리 후 포장. 숙소 가스레인지 활용해 매운탕 한 번 끓이면 6명 푸짐.",
        tag: "🍲 매운탕 포장",
      },
    ],
  },
  {
    name: "물치항 활어회센터",
    area: "강현면 물치리 · 낙산사 가는 길",
    distanceFromLodging: "숙소에서 차 약 25분 · 낙산사 차 5분",
    mapQuery: "물치항 활어회센터",
    description:
      "낙산사 코스와 동선이 자연스럽게 겹치는 회 시장. 2일차 낙산사·정안식당 일정 끝나고 숙소 복귀 길에 들러서 저녁용 회를 포장하기 딱 좋습니다. ‘인어교주해적단’에 인증된 수현네 같은 검증 가게 다수.",
    stalls: [
      {
        name: "수현네",
        description:
          "물치항 활어회센터 입점. 광어·우럭·도다리 활어회 즉석. 회덮밥·물회 포장 가능. 임산부용 회덮밥(밥+익은 채소 위주) 옵션 추천.",
        tag: "🐟 검증된 가게",
      },
      {
        name: "활어 코너 (당일 자연산)",
        description:
          "도다리·전복·해삼 등 자연산 위주. 그날 시세는 가게마다 비슷하니 2~3집 비교 후 결정. 회 + 매운탕거리 함께 받으면 효율 좋음.",
        tag: "🐠 자연산 위주",
      },
      {
        name: "회덮밥·물회 즉석",
        description:
          "낙산사 다녀온 직후 출출할 때 자리에서 한 그릇. 임산부는 회덮밥 비빔 강도를 약하게, 밥+채소 위주로 주문 가능. 6명 한 번에 앉을 자리는 미리 문의.",
        tag: "🍚 즉석 회덮밥",
      },
    ],
  },
];

export const meetupTips = [
  "합류 지점: 양양IC 또는 다락막국수 주차장.",
  "처남네가 30분 ~ 1시간 일찍 도착할 가능성. 도착하면 카톡으로 위치 공유.",
  "다락막국수는 주차장이 길 건너편이라 카카오내비에 '다락막국수'로 찍고 그대로 따라가면 OK.",
  "각자 출발 시점 텍스트 보내기 룰: 출발 시점, 휴게소 휴식 시점, 도착 30분 전.",
];

export const warning = {
  title: "⚠️ 토요일 출발일이 현충일(공휴일)입니다",
  body: "동해안행 차량이 몰리는 최악의 조합이에요. 양양고속도로에서 1~2시간 추가 정체가 충분히 가능합니다.",
  recommendation:
    "추천: 출발을 오전 7~8시로 당기는 것을 강력히 권장. 영유아·임산부가 정체에 갇히면 가장 힘듭니다.",
  travelTimes: [
    { from: "처남네 (월계역 → 양양 숙소)", duration: "약 3시간" },
    { from: "우리집 (망포역 → 양양 숙소)", duration: "약 3시간 30분 ~ 4시간" },
  ],
};
