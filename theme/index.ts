import { extendTheme } from '@chakra-ui/react'

export const colorVariables = {
  primaryBg: '#34495e',
  primaryFg: '#fff',
}

export const breakPoints = {
  screenMd: '120px',
}

const theme = extendTheme({
  fonts: {
    heading: 'Raleway',
    body: 'Montserrat',
  },
})

export default theme
