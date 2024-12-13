import { IPostFoot } from '@/types/blog.types'
import { Heart } from 'lucide-react'
import React from 'react'

const Like = ({data}: IPostFoot) => {
  const { likes } = data
  return (
    <div className='flex items-center gap-2'>
      <Heart className="w-5 h-5 text-[#FF6B00] text-xs" />
      <span className='text-xs'>{likes}</span>
    </div>
  )
}

export default Like