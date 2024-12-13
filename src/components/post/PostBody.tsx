import React from 'react'
import { YouTubePreview } from './YouTubePreview'
import { IBlogPost, IPostBody } from '@/types/blog.types';
import Image from 'next/image';



const PostBody = ({data}: IPostBody) => {
  // 데이터가 없을 때 컴포넌트를 렌더링하지 않도록 처리
  if (!data) {
    return (
      <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
        데이터를 불러오는 중에 문제가 발생했습니다.
      </div>
    )
  }
  const {title, content, imageUrl, videoId, videoTitle} = data

  return (
    <div className='flex flex-col gap-4'>
      {videoId ? (
        <YouTubePreview
              videoId={videoId}
              title={videoTitle || title}
            />
      ) : (
        // 이미지가 있을 때만 렌더링
        imageUrl && <Image 
          src={imageUrl} 
          alt={title} 
          width={500} 
          height={500} 
          className='w-full aspect-video object-cover'
        />
      )}
      <div className='pt-4 pb-8 px-4 flex flex-col gap-2'>
        <strong className='text-xl line-clamp-2'>
          {title}
        </strong>
        <p className='opacity-70 line-clamp-3'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default PostBody