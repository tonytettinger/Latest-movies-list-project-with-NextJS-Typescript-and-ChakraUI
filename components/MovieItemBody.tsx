import { Stack, Box, Image } from '@chakra-ui/react'
import { MovieResultProps } from '../types/MovieProps'

interface MovieListItemBodyProps {
  movie: MovieResultProps
}
const basePosterPath = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

export const MovieItemBody = ({
  movie,
}: MovieListItemBodyProps): JSX.Element => (
  <Stack direction={{ base: 'column', md: 'row' }}>
    <Image
      objectFit="contain"
      src={basePosterPath + movie.poster_path}
      alt={movie.title}
      borderRadius="5%"
      alignSelf="center"
      width="150px"
      height="225px"
    />
    <Stack justify="center" ml={3}>
      <Box textAlign="left">Relase date: {movie.release_date}</Box>
      <Box>{movie.overview}</Box>
    </Stack>
  </Stack>
)
