// Doc: https://developers.themoviedb.org/3/search/search-tv-shows
import ajax from '~/utils/ajax'

export default {
  state: {
    query: '',
    curPage: null,
    totalPage: null,
    results: [] /* <~/types/watchlist/WatchListType> */
  },
  reducers: {
    updateState (state, nextState) {
      return nextState
    }
  },
  effects: {
    async search (query) {
      const { page: curPage, results, total_pages: totalPage } = await ajax({
        url: '/search/tv',
        params: { query }
      })
      this.updateState({ query, curPage, totalPage, results })
    }
  }
}
