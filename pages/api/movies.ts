// pages/api/movies.js
export default async function handler(req, res) {
  const apiKey = process.env.TMDB_API_KEY
  const today = new Date()
  const beforeDate = new Date(today.setDate(today.getDate() - 30))
  const startDate =
    beforeDate.getFullYear() +
    '-' +
    (beforeDate.getMonth() + 1) +
    '-' +
    beforeDate.getDate()
  const todaysDate = today.toISOString().split('T')[0]
  const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${startDate}&primary_release_date.lte=${todaysDate}`

  try {
    const response = await fetch(fetchURL)
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' })
    }
    const movieData = await response.json()
    res.status(200).json(movieData)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the data.' })
  }
}
