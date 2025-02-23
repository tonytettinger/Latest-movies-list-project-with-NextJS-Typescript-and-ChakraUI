import useMovies from '../hooks/useMovies'
import MovieList from '../components/MovieList'
import {
  Container,
  Heading,
  Image,
  Flex,
  Spacer,
  Link,
  Text,
  Box,
  Spinner,
} from '@chakra-ui/react'

export default function Home() {
  const { movies, isLoading, isError } = useMovies()

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    )
  if (isError) {
    console.log(isError)
    return (
      <Container maxW="container.xl" w="100%" h="100vh">
        <Heading mt={10} as="h1" py={10} pl={10} size="xl" bg="tomato">
          There was an error fetching the movie data. Please try to refresh the
          page or come back later.
        </Heading>
      </Container>
    )
  }
  return (
    <Container maxW="container.xl" w="100%" h="100vh">
      <Flex align="center" as="header">
        <Heading as="h1" py={10} pl={10} size="xl">
          Latest movies
        </Heading>
        <Spacer />
        <Link href="https://www.themoviedb.org/">
          <Image
            w="150px"
            src="/logo-movie-db.svg"
            alt="moviedb.org logo"
          ></Image>
        </Link>
      </Flex>
      <Container maxW="container.lg">
        <MovieList movies={movies} />
      </Container>
      <Box as="footer" mx="auto" py={10} px={20} textAlign="center">
        <Text>
          Data provided by the moviedb.org - An app By Antal Tony Tettinger -
          <Link href="https://tonytettinger.netlify.app/">
            {' '}
            https://tonytettinger.netlify.app/
          </Link>
        </Text>
      </Box>
    </Container>
  )
}
