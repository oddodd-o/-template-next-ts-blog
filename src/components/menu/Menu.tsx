import React, { ReactNode } from 'react'
import { Button, Menu as CustomMenu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from 'lucide-react'

// 객체 타입 정의
interface IMenuItem {
  label: string;
  onClick: () => void;
}

interface IMenuProps {
  buttonText: ReactNode;
  items: IMenuItem[]; // 객체 배열
  variant?: string;
}

const Menu = ({buttonText, items, variant = "solid"}: IMenuProps) => {
  return (
    <CustomMenu>
      <MenuButton variant={variant} as={Button} 
        rightIcon={typeof buttonText === 'string' ? <ChevronDownIcon /> : undefined}
      >
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
    </CustomMenu>
  )
}

export default Menu