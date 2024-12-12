import React from 'react'
import Card from '../card/Card'
import Image from 'next/image';
import { Heart, Zap } from 'lucide-react';

interface IBlogPostProps {
  isCard?: boolean;
}

const BlogPost = ({isCard}: IBlogPostProps) => {

  const Wrapper = isCard ? Card : 'div';
  // const wrapperClass = isCard ? 'bg-white' : '';


  return (
    <Wrapper>
      {/* PostBody */}
      <div className='flex flex-col gap-4'>
        <Image src="/images/pattern/thumb/blog1.jpeg" alt="아이유" width={500} height={500} className='w-full aspect-video' />
        <div className='pt-4 pb-8 px-4 flex flex-col gap-2'>
          <strong className='text-xl line-clamp-2'>아이유 예뻐.. 너무너무 예뻐. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nisi porro, in culpa illo, eaque perferendis quaerat molestias voluptatibus natus, delectus similique. Placeat quos, dolorem sint soluta libero cumque quae?</strong>
          <p className='opacity-70 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non expedita dicta, dolor maiores nobis ut quis alias nemo esse est repellendus dolorum sint ratione rem quibusdam doloribus molestiae necessitatibus?</p>
        </div>
      </div>

      {/* PostFooter */}
      <div className="flex flex-col text-sm divide-y">
        <div className="flex items-center gap-2 px-4 py-3">
          <span>2024년 12월 5일</span>
          <span>·</span>
          <span>6개의 댓글</span>
        </div>
        
        <div className='flex justify-between px-4 py-3'>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FF6B00]" />
            <span>by odada</span>
          </div>
          <div className='flex gap-2'>
            <Heart className="w-5 h-5 text-[#FF6B00]" />
            <span>104</span>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default BlogPost