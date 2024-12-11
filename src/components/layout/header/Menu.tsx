import React from 'react'
import {
  Menu as MenuWrap,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { ChevronDownIcon } from 'lucide-react'

const MenuHam = () => {
  return (
    <MenuWrap>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
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