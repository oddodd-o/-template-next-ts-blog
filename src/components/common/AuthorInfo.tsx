import React from 'react'
import { IPostFoot } from '@/types/blog.types'
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const AuthorInfo = ({data}: IPostFoot) => {
  const { author } = data;
  return (
    <Link href={`/author/${author}`} className="flex items-center gap-2">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>수딩</AvatarFallback>
        </Avatar>
      <span className='text-xs'>by {author}</span>
    </Link>
  )
}

export default AuthorInfo