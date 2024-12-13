import { Avatar } from '@chakra-ui/react'
import { Heart } from 'lucide-react'
import React from 'react'

const PostFoot = () => {
  return (
    <div className="flex flex-col text-sm divide-y">
        <div className="flex items-center gap-2 px-4 py-3">
          <span>2024년 12월 5일</span>
          <span>·</span>
          <span>6개의 댓글</span>
        </div>
        
        <div className='flex justify-between px-4 py-3'>
          <div className="flex items-center gap-2">
            <Avatar src="/images/pattern/thumb/blog1.jpeg" size='sm' />
            <span>by odada</span>
          </div>
          <div className='flex gap-2'>
            <Heart className="w-5 h-5 text-[#FF6B00]" />
            <span>104</span>
          </div>
        </div>
      </div>
  )
}

export default PostFoot