// src/mocks/blog-data.ts
import { IBlogPost } from "@/types/blog.types";

export const mockBlogPosts: IBlogPost[] = [
  {
    id: "post_2024_001",
    title: "[흑백요리사] 7인의 무한 두부 첫요리'",
    content: "결승으로 가는 관문, 무한 요리 지옥이 열렸다. 재료는 두부, 과연 두부 지옥에서 살아남을 셰프는 누가 될까?",
    videoId: "3ZUL9il_beI",
    videoTitle: "을지로 브런치 맛집 미도인의 아침",
    author: 'foodhunter',
    comments: 8,
    likes: 245,
    date: '2024년 12월 3일',
    tags: ['홍대', '플래터', '브런치', '와인']
  },
  {
    id: "post_2024_002",
    title: "연남동 수제버거 맛집 '버거앤코'",
    content: "수제버거 맛집 또 발견했어요! 두툼한 패티는 미디엄으로 쳐줘서 육즙이 가득했고, 특제 소스와 갓 구운 브리오쉬 번의 조합이 환상적이었습니다. 감자튀김도 바삭바삭하고 시즈닝이 진짜 맛있어요.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    author: 'burgerlover',
    comments: 12,
    likes: 342,
    date: '2024년 12월 5일',
    tags: ['연남동', '수제버거', '감자튀김']
  },
  {
    id: "post_2024_003",
    title: "을지로 숨은 맛집 '미도인의 아침'",
    content: "을지로 골목에서 발견한 일본식 브런치 카페. 계란이 トロトロ(트로트로)하게 익은 에그베네딕트가 일품이에요. 홀랜다이즈 소스는 레몬의 산미가 적절해서 느끼하지 않고, 반숙 달걀은 말그대로 완벽했습니다.",
    videoId: "3ZUL9il_beI",
    videoTitle: "을지로 브런치 맛집 미도인의 아침",
    author: 'odada',
    comments: 6,
    likes: 104,
    date: '2024년 12월 7일',
    tags: ['을지로', '브런치', '에그베네딕트']
  },
  {
    id: "post_2024_004",
    title: "망원동 디저트 맛집 '달콤제과'",
    content: "드디어 가봤습니다, 망원동 디저트 맛집! 인스타에서 유명한 말차 티라미수를 먹어봤는데요. 진한 말차 크림과 촉촉한 시트의 조화가 환상적이에요. 말차 특유의 쌉쌀함과 마스카포네의 부드러움이 완벽한 밸런스를 이뤄요.",
    imageUrl: "https://images.unsplash.com/photo-1594149433195-93aa8a94d228",
    author: 'dessertgram',
    comments: 15,
    likes: 367,
    date: '2024년 12월 9일',
    tags: ['망원동', '디저트', '티라미수', '말차']
  },
  {
    id: "post_2024_005",
    title: "성수동 파스타 맛집 '파스타보이'",
    content: "성수동에 오픈한 파스타 맛집을 소개합니다. 트러플 크림 파스타인데요, 트러플 향이 진하면서도 부담스럽지 않아요. 수제 생면을 사용해서 더욱 쫄깃하고, 풍부한 크림소스가 면에 잘 배어있어요. 파마산 치즈를 아낌없이 뿌려주시는 것도 좋았습니다.",
    imageUrl: "https://images.unsplash.com/photo-1645112411341-6c4fd023394c",
    author: 'pasta_lover',
    comments: 25,
    likes: 892,
    date: '2024년 12월 10일',
    tags: ['성수동', '파스타', '트러플']
  }
];