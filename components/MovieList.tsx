import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  Box,
  Stack,
  Image,
  Heading,
} from '@chakra-ui/react'
import type { MovieProps, MovieResults } from '../types/MovieProps'

const basePosterPath = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
const MovieList = ({ movies }: { movies: MovieProps }): JSX.Element => {
  const sortByDate = (a, b) => {
    return b.vote_average - a.vote_average
  }
  const orderedByReleaseDate = [...movies.results].sort(sortByDate)
  return (
    <Accordion allowToggle>
      {orderedByReleaseDate.map((movie: MovieResults): JSX.Element => {
        return (
          <AccordionItem key={movie.id}>
            <Box>
              <AccordionButton
                _expanded={{ bg: '#34495e', color: '#fff' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction="row" align="center">
                  <Stat minWidth="120px">
                    <StatLabel>Rating</StatLabel>
                    <StatNumber>{movie.vote_average.toFixed(1)}</StatNumber>
                    <StatHelpText>
                      No. of votes: {Math.floor(movie.vote_count)}
                    </StatHelpText>
                  </Stat>
                  <Box textAlign="left" ml={3}>
                    <Heading as="h3" size="md">
                      {movie.title}
                    </Heading>
                  </Box>
                </Stack>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
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
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default MovieList
