import React from 'react'
import { Button, CardFooter as CustomCardFooter } from '@chakra-ui/react'

const CardFooter = () => {
  return (
    <CustomCardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
          Share
        </Button>
      </CustomCardFooter>
  )
}

export default CardFooter