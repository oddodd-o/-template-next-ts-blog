import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { IPostFoot } from '@/types/blog.types'

const AuthorInfo = ({data}: IPostFoot) => {
  const { author } = data;
  return (
    <div className="flex items-center gap-2">
      <Avatar src="/images/pattern/thumb/blog1.jpeg" size='sm' />
      <span className='text-xs'>by {author}</span>
    </div>
  )
}

export default AuthorInfo