// Doc: https://developers.themoviedb.org/3/search/search-tv-shows
import { shape, arrayOf, number, string } from 'prop-types'

export const WatchListItemType = shape({
  poster_path: string, // could be null
  popularity: number.isRequired,
  id: number.isRequired,
  backdrop_path: string, // could be null
  vote_average: number.isRequired,
  overview: string.isRequired,
  first_air_date: string, // 'YYYY-MM-DD', could be ''
  // origin_country: array[string]
  // genre_ids: array[integer]
  original_language: string.isRequired,
  vote_count: number.isRequired,
  name: string.isRequired
  // original_name: string
})

export const WatchListType = arrayOf(WatchListItemType)
