export type PlaceCategory = "food" | "place" | "lodging" | "walk";

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
      },
      {
        time: "3:00 PM",
        duration: "2시간",
        name: "체크인: 서프리조트 인더시티 양양",
        address: "강원도 양양군 현남면 새나루길 5",
        phone: "010-6830-6240",
        description:
          "체크인 후 휴식. 이마트가 건물 안에 있어 기저귀·분유물·간식 등 필요한 것 이때 쇼핑. 세탁기·건조기 있어 아기 옷 빨래 가능. 주차장 지하 2층까지 넉넉.",
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
