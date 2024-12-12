import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDown } from 'lucide-react'


interface IMenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface ICustomMenuProps {
  items: IMenuItem[];
  buttonText: string;
}

const CustomMenu = ({ items, buttonText }: ICustomMenuProps) => {
  const handleItemClick = (item: IMenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (item.href) {
      window.location.href = item.href;
    }
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown className="w-4 h-4 ml-2" />}>
        {buttonText}
      </MenuButton>
      <MenuList className="py-2">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default CustomMenu