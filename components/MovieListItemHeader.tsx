import {
  Box,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { breakPoints } from '../theme'
import { MovieResultProps } from '../types/MovieProps'

interface MovieListItemHeaderProps {
  movie: MovieResultProps
}

export const MovieListItemHeader = ({
  movie,
}: MovieListItemHeaderProps): JSX.Element => (
  <Stack direction="row" align="center">
    <Stat minWidth={breakPoints.screenMd}>
      <StatLabel>Rating</StatLabel>
      <StatNumber>{movie.vote_average.toFixed(1)}</StatNumber>
      <StatHelpText>No. of votes: {Math.floor(movie.vote_count)}</StatHelpText>
    </Stat>
    <Box textAlign="left" ml={3}>
      <Heading ml={3} as="h3" size="md">
        {movie.title}
      </Heading>
    </Box>
  </Stack>
)
