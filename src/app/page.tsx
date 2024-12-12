'use client'

import Container from "@/components/layout/Container"
import CustomMenu from "@/components/menu/CustomMenu"
import { Flex, Spacer } from "@chakra-ui/react"
import Link from "next/link"

const menuItems = [
    { 
      label: '오늘', 
      href: '/download'
    },
    { 
      label: '이번 주', 
      href: '/create',
      onClick: () => console.log('Create clicked') // onClick과 href 둘 다 사용 가능
    },
    { 
      label: '이번 달', 
      href: 'https://example.com' 
    },
    { 
      label: '올해', 
      onClick: () => console.log('올해') 
    }
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
        <div>
          <CustomMenu items={menuItems} buttonText="이번주" />
        </div>
      </Flex>

    </Container>
  )
}
