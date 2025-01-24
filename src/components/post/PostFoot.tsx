import { IBlogPost, IPostFoot } from '@/types/blog.types';
import { Avatar } from '@chakra-ui/react'
import { Heart } from 'lucide-react'
import React from 'react'
import Like from '../common/Like';
import { getRelativeTime } from '@/utils/date';
import AuthorInfo from '../common/AuthorInfo';
import {Button} from "@/components/ui/button";

const PostFoot = ({data, type = "feed"}: IPostFoot) => {
  const { date, likes, author, tags } = data;
  const relativeTime = getRelativeTime(date);

  // feed 일 경우
  if(type === 'feed') {
    return (
      <div className="flex flex-col text-sm divide-y mt-auto">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className='text-xs'>{relativeTime}</span>
            <span className='text-xs'>·</span>
            <CommentCount data={data} />
          </div>
          
          <div className='flex justify-between px-4 py-3'>
            <AuthorInfo data={data} />
            <Like data={data} />
          </div>
        </div>
    )
  }

  // personal 일 경우
  return (
      <div className="flex flex-col text-sm mt-auto">
            {tags && (
              <div className="flex flex-wrap gap-2 px-4 py-3">
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-600 text-gray-300 text-xs rounded-full py-1 px-3">{tag}</span>
              ))}
            </div>
            )}
          <div className="flex items-center gap-2 px-4 py-3">
            <span className='text-xs'>{relativeTime}</span>
            <span>·</span>
            <CommentCount data={data} />
            <span>·</span>
            <div className='flex items-center gap-2'>
              <Heart className="text-xs w-5 h-5 text-[#FF6B00]" />
              <span className='text-xs'>{likes}</span>
            </div>
          </div>
        </div>
    )
}

export const CommentCount = ({data}: IPostFoot) => {
  const { comments } = data;
  return (
    <span className='text-xs'>{comments}개의 댓글</span>
  )
}

export default PostFoot