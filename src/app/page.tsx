'use client'

import Container from "@/components/layout/Container"
import CustomMenu from "@/components/menu/CustomMenu"
import { Flex, Spacer } from "@chakra-ui/react"
import Link from "next/link"

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
          <CustomMenu />
        </div>
      </Flex>

    </Container>
  )
}
