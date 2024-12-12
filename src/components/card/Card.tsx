import React, { ReactNode } from 'react'
import { Card as ChakraCard } from '@chakra-ui/react'

interface ICardProps {
  children: ReactNode;
}

const Card = ({children}: ICardProps) => {
  return (
    <ChakraCard className=' overflow-hidden rounded-2xl'>

      {children}
    </ChakraCard>
  )
}

export default Card