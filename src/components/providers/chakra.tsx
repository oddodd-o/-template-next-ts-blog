'use client'

import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react'

// 테마 설정
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}