import React from 'react'
import {
  Menu as MenuWrap,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from '@chakra-ui/react'
import { ChevronDownIcon } from 'lucide-react'

const MenuHam = () => {
  return (
    <MenuWrap>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon size={14} />}  variant='ghost' size="sm">
        <span className="sr-only">전체 메뉴</span>
        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </MenuWrap>
  )
}

export default MenuHam