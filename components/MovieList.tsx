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
} from '@chakra-ui/react'
import { Box, Stack, Image } from '@chakra-ui/core'
import type { MovieProps } from '../types/MovieProps'
import type { MovieResults } from '../types/MovieProps'

const MovieList = ({ movies }: { movies: MovieProps }): JSX.Element => {
  const sortByDate = (a, b) => {
    return b.vote_average - a.vote_average
  }
  const orderedByReleaseDate = [...movies.results].sort(sortByDate)
  return (
    <Accordion allowToggle>
      {orderedByReleaseDate.map((movie: MovieResults) => {
        const posterPath = `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`
        return (
          <AccordionItem key={movie.id}>
            <div>
              <AccordionButton
                _expanded={{ bg: '#34495e', color: '#fff' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction="row" align="center">
                  <Stat minWidth="120px">
                    <StatLabel>Rating</StatLabel>
                    <StatNumber>{movie.vote_average}</StatNumber>
                    <StatHelpText>
                      No. of votes: {movie.vote_count}
                    </StatHelpText>
                  </Stat>
                  <Box textAlign="left" ml={3}>
                    <h3>
                      {movie.title}
                    </h3>
                  </Box>
                </Stack>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </div>
            <AccordionPanel pb={4}>
              <Stack direction="row">
              <Image
                    size={{ base: '140px', md: '220px', lg: '400px' }}
                    objectFit="contain"
                    src={posterPath}
                    alt={movie.title}   
                    borderRadius='5%'
                    alignSelf="center"
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
