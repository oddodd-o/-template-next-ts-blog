// src/components/youtube/YouTubePreview.tsx
"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface YouTubePreviewProps {
  videoId: string;
  title: string;
}

export const YouTubePreview = ({ videoId, title }: YouTubePreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // YouTube 썸네일 URL 생성
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  return (
    <div 
      className="relative aspect-video rounded-lg overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        // 썸네일 이미지
        <div className="relative w-full h-full">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
          {/* 재생 시간 */}
          <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80 text-white text-xs rounded">
            4:05
          </div>
          {/* YouTube 로고 */}
          <div className="absolute top-2 left-2 flex items-center gap-1 text-sm">
            <Image
              src="/youtube-logo.png" // YouTube 로고 이미지 경로
              alt="YouTube"
              width={20}
              height={20}
            />
            <span className="text-white">YouTube</span>
          </div>
        </div>
      ) : (
        // YouTube iframe (호버 시)
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

// 사용 예시 컴포넌트
// export const BlogPost = () => {
//   return (
//     <article className="max-w-2xl mx-auto p-4">
//       <YouTubePreview
//         videoId="dQw4w9WgXcQ" // 실제 YouTube 비디오 ID로 변경
//         title="[조작집🎵] '바람' IU Live Clip (With 윤하)"
//       />
//       <div className="mt-2 space-y-1">
//         <h3 className="font-medium">[조작집🎵] '바람' IU Live Clip (With 윤하)</h3>
//         <p className="text-sm text-gray-600">IU Official YouTube</p>
//         <div className="text-sm text-gray-500">4주 전</div>
//       </div>
//     </article>
//   );
// };