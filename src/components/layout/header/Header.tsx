"use client"

import Link from 'next/link'
import React from 'react'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import MenuHam from './Menu'
import { Bell, Search } from 'lucide-react'


const alarm = () => {
  console.log('알림')
}

const search = () => {
  console.log('검색')
}
const headerButtons = [
  {label: '알림', icon: Bell, onClick: () => {alarm()}},
  {label: '검색', icon: Search, onClick: () => {search()}},
]

const Header = () => {
  return (
    <header className='py-2'>
      <Flex className='items-center px-5 md:px-8'>
        <h1>
          <Link href={'/'}>logo</Link>
        </h1>
        <Spacer />
        <div>
          {headerButtons.map(({label, icon: Icon, onClick}) => (
            <Button key={label} size={'sm'} variant='ghost' className='!ps-2 !pe-2' 
            onClick={onClick}>
              <span className="sr-only">{label}</span>
              <Icon size={18} />
            </Button>
          ))}
          <MenuHam />
        </div>
      </Flex>
    </header>
  )
}

export default Header