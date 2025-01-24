import { IBlogPost } from '@/types/blog.types';
import { NextResponse } from 'next/server';

// 임시 데이터 저장소
let posts = [
  {
    id: 1,
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
    id: 2,
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

// GET - 전체 게시글 조회
export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
// 요청 데이터를 JSON으로 파싱
 try {
   const data = await request.json();

   // 유효성 검사
   if (!data.title) {
     return NextResponse.json(
       { error: '제목은 필수입니다.' },
       { status: 400 }
     );
   }

   if (!data.content) {
     return NextResponse.json(
       { error: '내용은 필수입니다.' },
       { status: 400 }
     );
   }

   // 제목 길이 검사
   if (data.title.length > 100) {
     return NextResponse.json(
       { error: '제목은 100자를 초과할 수 없습니다.' },
       { status: 400 }
     );
   }

   // 새 게시글 생성
   const newPost: IBlogPost = {
     id: posts.length + 1,
     title: data.title.trim(),
     content: data.content.trim(),
     date: 2024-12-13,
   };
   
   // 게시글 목록에 추가
   posts.push(newPost);
   
   return NextResponse.json(newPost, { status: 201 });
 } 
 // 게시글 추가 실패
 catch (error) {
   return NextResponse.json(
     { error: '게시글 작성에 실패했습니다.' },
     { status: 500 }
   );
 }
}