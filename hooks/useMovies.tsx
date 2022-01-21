import useSWR from 'swr'
import { MovieProps } from '../types/MovieProps';

interface fetchMovies {
  movies: MovieProps
  isLoading: boolean
  isError: Error
}

function useJobs(): fetchMovies {
  const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      throw error
    }
    return res.json()
  }

  const today = new Date();
  const beforeDate = new Date(new Date().setDate(today.getDate() - 30));
  //get movies for the last 30 days
  const todaysDate = today.toISOString().split('T')[0]
  const startDate = beforeDate.toISOString().split('T')[0]
  const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=339b085155875336dc96ea5cdc24d952&primary_release_date.gte=${startDate}&primary_release_date.lte=${todaysDate}`

  const { data, error } = useSWR(
    fetchURL,
    fetcher,
    {
      onErrorRetry: (error) => {
        // Never retry on 404.
        if (error.status === 404) return
      },
    }
  )

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useJobs
