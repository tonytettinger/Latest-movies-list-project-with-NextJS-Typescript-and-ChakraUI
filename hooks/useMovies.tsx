import useSWR from 'swr'
import { MovieProps } from '../types/MovieProps'

interface FetchMovies {
  movies: MovieProps
  isLoading: boolean
  isError: Error
}

function useMovies(): FetchMovies {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      throw error
    }
    return res.json()
  }

  const fetchURL = '/api/movies'

  const { data, error } = useSWR(fetchURL, fetcher, {
    onErrorRetry: (error) => {
      if (error.status === 404) return
    },
  })

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useMovies
