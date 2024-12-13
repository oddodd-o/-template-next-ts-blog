import React from 'react'
import { YouTubePreview } from './YouTubePreview'
import { IBlogPost, IPostBody } from '@/types/blog.types';
import Image from 'next/image';



const PostBody = ({data}: IPostBody) => {
  // 데이터가 없을 때 컴포넌트를 렌더링하지 않도록 처리
   if (!data) return null;

  const {title, content, imageUrl} = data

  return (
    <div className='flex flex-col gap-4'>
            <YouTubePreview
              videoId="xRDKQic90dE"
              title="[조작집🎵] '바람' IU Live Clip (With 윤하)"
            />
            <Image src={imageUrl} alt="아이유" width={500} height={500} className='w-full aspect-video' />
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