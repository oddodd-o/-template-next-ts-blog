import React from 'react'
import {
  Menu as MenuWrap,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from 'lucide-react'
import {useAuth} from "@/lib/firebase/auth";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";

const MenuHam = () => {

    const {logout} = useAuth();

  return (
    <MenuWrap>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon size={14} />}  variant='ghost' size="sm">
        <span className="sr-only">전체 메뉴</span>
          <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>

      </MenuButton>
      <MenuList className="bg-white border border-gray-100 border-solid rounded-lg p-5">

          <MenuItem>
              <Button onClick={logout}>logout</Button>
          </MenuItem>
        <MenuItem>
            <Link href={'/profile'}>Profile</Link>
        </MenuItem>
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