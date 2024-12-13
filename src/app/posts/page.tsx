import Container from '@/components/layout/Container'
import BlogPost from '@/components/post/BlogPost'
import { mockBlogPosts } from '@/data/restaurant-blog-posts'
import React from 'react'

const PostPage = () => {
  return (
    <Container className="flex flex-col gap-5">
      {mockBlogPosts.map((post) => (
        <BlogPost key={post.id} isCard data={post} type="personal" />
      ))}
    </Container>
  )
}

export default PostPage