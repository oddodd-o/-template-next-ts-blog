import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from 'lucide-react'

// 객체 타입 정의
interface IMenuItem {
  label: string;
  onClick: () => void;
}

interface IMenuProps {
  buttonText: string;
  items: IMenuItem[]; // 객체 배열
}

const CustomMenu = ({buttonText, items}: IMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {buttonText}
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} 
          onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default CustomMenu