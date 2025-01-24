"use client"

import Container from '@/components/layout/Container'
import BlogPost from '@/components/post/BlogPost'
import { mockBlogPosts } from '@/data/restaurant-blog-posts'
import { IBlogPost } from '@/types/blog.types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PostPage = () => {
  const [posts, setPosts] = useState<IBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   const fetchPosts = async () => {
     try {
       setLoading(true);
       setError(null);
       const response = await fetch('/api/posts');
       
       if (!response.ok) {
         throw new Error('게시글을 불러오는데 실패했습니다.');
       }

       const data = await response.json();
       setPosts(data);
     } catch (err) {
       setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
     } finally {
       setLoading(false);
     }
   };

   fetchPosts();
 }, []);

  return (
    <Container className="flex flex-col gap-5">
      <Link 
         href="/posts/write" 
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
       >
         글쓰기
       </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <BlogPost key={post.id} isCard data={post} type="personal" />
      ))}
      </div>
    </Container>
  )
}

export default PostPage