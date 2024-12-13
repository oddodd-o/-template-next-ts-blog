// src/mocks/blog-data.ts
import { IBlogPost } from "@/types/blog.types";

export const mockBlogPosts: IBlogPost[] = [
  {
    id: "post_2024_001",
    title: "[흑백요리사] 7인의 무한 두부 첫요리",
    content: "결승으로 가는 관문, 무한 요리 지옥이 열렸다. 재료는 두부, 과연 두부 지옥에서 살아남을 셰프는 누가 될까?",
    videoId: "3ZUL9il_beI",
    author: 'foodhunter',
    comments: 8,
    likes: 245,
    date: '2024-12-13T15:30:00',
    tags: ['흑백요리사', '요리계급전쟁', '넷플릭스']
  },
  {
    id: "post_2024_002",
    title: "백종원 & 안성재 함박웃음 짓게 만든 나폴리 맛피아의 밤 티라미수 | 흑백요리사: 요리 계급 전쟁 | 넷플릭스",
    content: "자극적인 요리 대신 디저트를 선택한 나폴리 맛피아. 과연 패자부활에 성공할 수 있을까?",
    videoId: "g3hVg98AMlI",
    author: 'burgerlover',
    comments: 12,
    likes: 342,
    date: '2024-12-13T15:30:00',
    tags: ['흑백요리사', '요리계급전쟁', '넷플릭스']
  },
  {
    id: "post_2024_003",
    title: "을지로 숨은 맛집 '미도인의 아침'",
    content: "을지로 골목에서 발견한 일본식 브런치 카페. 계란이 トロトロ(트로트로)하게 익은 에그베네딕트가 일품이에요. 홀랜다이즈 소스는 레몬의 산미가 적절해서 느끼하지 않고, 반숙 달걀은 말그대로 완벽했습니다.",
    videoId: "3ZUL9il_beI",
    author: 'odada',
    comments: 6,
    likes: 104,
    date: '2024-12-13T15:30:00',
    tags: ['을지로', '브런치', '에그베네딕트']
  },
  {
    id: "post_2024_004",
    title: "망원동 디저트 맛집 '달콤제과'",
    content: "드디어 가봤습니다, 망원동 디저트 맛집! 인스타에서 유명한 말차 티라미수를 먹어봤는데요. 진한 말차 크림과 촉촉한 시트의 조화가 환상적이에요. 말차 특유의 쌉쌀함과 마스카포네의 부드러움이 완벽한 밸런스를 이뤄요.",
    imageUrl: "https://images.unsplash.com/photo-1712263151181-6e20e559236f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: 'dessertgram',
    comments: 15,
    likes: 367,
    date: '2024-12-13T15:30:00',
    tags: ['망원동', '디저트', '티라미수', '말차']
  },
  {
    id: "post_2024_005",
    title: "성수동 파스타 맛집 '파스타보이'",
    content: "성수동에 오픈한 파스타 맛집을 소개합니다. 트러플 크림 파스타인데요, 트러플 향이 진하면서도 부담스럽지 않아요. 수제 생면을 사용해서 더욱 쫄깃하고, 풍부한 크림소스가 면에 잘 배어있어요. 파마산 치즈를 아낌없이 뿌려주시는 것도 좋았습니다.",
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: 'pasta_lover',
    comments: 25,
    likes: 892,
    date: '2024-12-13T15:30:00',
    tags: ['성수동', '파스타', '트러플']
  }
];