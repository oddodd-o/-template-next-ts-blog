'use client'

import Card from "@/components/card/Card"
import Container from "@/components/layout/Container"
import Menu from "@/components/menu/Menu"
import BlogPost from "@/components/post/BlogPost"
import { Button, Flex, Spacer } from "@chakra-ui/react"
import { EllipsisVertical } from "lucide-react"
import Link from "next/link"
import restaurantsBlogPosts from "@/data/restaurant-blog-posts.json"
import { mockBlogPosts } from "@/data/restaurant-blog-posts"

const periodMenuItems = [
    {
      label: '오늘', 
      onClick: () => window.location.href = '/feed'
    },
    {label: '이번주', onClick: () => console.log('이번주')},
    {label: '이번달', onClick: () => console.log('이번달')},
    {label: '전체', onClick: () => console.log('전체')},
  ];

const settingMenuItems = [
  { label: '공지사항', onClick: () => window.location.href = '/notice' },
  { label: '태그 목록', onClick: () => window.location.href = '/tags' },
  { label: '서비스 정책', onClick: () => window.location.href = '/policy' }
];

export default function Home() {

  return (
    <Container className="flex flex-col gap-5">
      <Flex>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Button as={Link} href={'/trending'} colorScheme='teal' variant='link'>
                트렌딩
              </Button>
              </li>
            <li><Link href="#">최근</Link></li>
            <li><Link href="#">피드</Link></li>
          </ul>
        </nav>
        <Spacer />
        <div className="flex gap-3">
          <Menu buttonText="이번주" items={periodMenuItems}/>
          <Menu buttonText={<EllipsisVertical />} items={settingMenuItems} variant="ghost"/>
        </div>
      </Flex>

      {/* BlogPost */}
      {mockBlogPosts.map((post) => (
        <BlogPost key={post.id} isCard data={post} />
      ))}
    </Container>
  )
}
