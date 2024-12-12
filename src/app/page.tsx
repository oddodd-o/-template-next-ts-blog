'use client'

import Container from "@/components/layout/Container"
import Menu from "@/components/menu/Menu"
import { Flex, Spacer } from "@chakra-ui/react"
import { EllipsisVertical } from "lucide-react"
import Link from "next/link"

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
    <Container>
      <Flex>
        <nav>
          <ul className="flex gap-3">
            <li><Link href="#">트렌딩</Link></li>
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

    </Container>
  )
}
