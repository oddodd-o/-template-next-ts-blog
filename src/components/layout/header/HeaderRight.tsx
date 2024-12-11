"use client"

import React from 'react'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import MenuHam from './Menu'
import { Bell, Search } from 'lucide-react'

const headerButtons = [
  {label: '알림', icon: Bell, onClick: () => {alarm()}},
  {label: '검색', icon: Search, onClick: () => {search()}},
]


const alarm = () => {
  console.log('알림')
}

const search = () => {
  console.log('검색')
}

const HeaderRight = () => {
  return (
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
  )
}

export default HeaderRight