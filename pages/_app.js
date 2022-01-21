import '@fontsource/raleway/700.css'
import '@fontsource/montserrat/400.css'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../helpers/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
