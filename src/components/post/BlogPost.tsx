import React from 'react'
import Card from '../card/Card'
import Image from 'next/image';
import { Heart, Zap } from 'lucide-react';
import { Avatar } from '@chakra-ui/react';
import { YouTubePreview } from './YouTubePreview';
import PostBody from './PostBody';
import PostFoot from './PostFoot';
import { IBlogWrapper } from '@/types/blog.types';

const BlogPost = ({isCard, type = "feed", data}: IBlogWrapper) => {

  const Wrapper = isCard ? Card : 'div';
  // const wrapperClass = isCard ? 'bg-white' : '';

  return (
    <Wrapper>
      {/* PostBody */}
      <PostBody data={data} />

      {/* PostFooter */}
      <PostFoot data={data} type={type} />
    </Wrapper>
  )
}

export default BlogPost