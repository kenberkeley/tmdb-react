import ajax from '~/utils/ajax'

// https://developers.themoviedb.org/3/search/search-tv-shows
export function searchTvShows (query) {
  return ajax({
    url: '/search/tv',
    params: { query }
  })
}
