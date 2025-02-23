import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import type { MovieProps, MovieResultProps } from '../types/MovieProps'
import { colorVariables } from '../theme'
import { sortByDate } from '../helpers'
import { MovieListItemHeader } from './MovieListItemHeader'
import { MovieItemBody } from './MovieItemBody'

const MovieList = ({ movies }: { movies: MovieProps }): JSX.Element => {
  const moviesByReleaseDate = [...movies.results].sort(sortByDate)
  return (
    <Accordion allowToggle>
      {moviesByReleaseDate.map(
        (movie: MovieResultProps): JSX.Element => (
          <AccordionItem key={movie.id}>
            <AccordionButton
              _expanded={{
                bg: colorVariables.primaryBg,
                color: colorVariables.primaryFg,
              }}
              _focus={{ boxShadow: 'none' }}
            >
              <MovieListItemHeader movie={movie} />
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <MovieItemBody movie={movie} />
            </AccordionPanel>
          </AccordionItem>
        )
      )}
    </Accordion>
  )
}

export default MovieList
