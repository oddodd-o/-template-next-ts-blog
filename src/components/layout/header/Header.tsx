import Link from 'next/link'
import React from 'react'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import MenuHam from './Menu'

const Header = () => {
  return (
    <header>
      <Flex className='container items-center'>
        <h1>
          <Link href={'/'}>logo</Link>
        </h1>
        <Spacer />
        <div>
          <Button colorScheme='teal' variant='ghost'>
            알림
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            검색
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            나의 정보
          </Button>
          <MenuHam />
        </div>
      </Flex>
    </header>
  )
}

export default Header