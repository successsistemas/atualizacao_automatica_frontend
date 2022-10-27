import { BoxProps, Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export const Loading = (props: BoxProps) => {
  return (
    <Center h='100vh' {...props}>
      <Spinner />
    </Center>
  )
}
