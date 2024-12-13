import React from 'react'
import { YouTubePreview } from './YouTubePreview'
import { IBlogPost, IPostBody } from '@/types/blog.types';
import Image from 'next/image';



const PostBody = ({data}: IPostBody) => {
  const {title, content, imageUrl, videoId} = data

  return (
    <div className='flex flex-col gap-4'>
      {videoId ? (
        <YouTubePreview
              videoId={videoId}
              title={title}
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