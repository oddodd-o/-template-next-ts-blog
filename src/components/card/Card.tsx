import React from 'react'
import { Card as ChakraCard, CardBody } from '@chakra-ui/react'
import Image from 'next/image'
import CardFooter from './CardFooter'

const Card = () => {
  return (
    <ChakraCard maxW='md'>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the speed
          of design. I wanted the developer to be just as excited as the designer to
          create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />

      <CardFooter />
    </ChakraCard>
  )
}

export default Card