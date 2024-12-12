import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from 'lucide-react'

const CustomMenu = () => {
  return (
    <Menu>
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
    </Menu>
  )
}

export default CustomMenu