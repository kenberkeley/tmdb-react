// Doc: https://developers.themoviedb.org/3/search/search-tv-shows
import ajax from '~/utils/ajax'

export default {
  state: {
    query: '',
    curPage: null,
    totalPage: null,
    isLoading: false,
    results: [] /* <~/types/watchlist/WatchListType> */
  },
  reducers: {
    setState (state, nextState) {
      return {
        ...state,
        ...nextState
      }
    }
  },
  effects: {
    async search ({ query, page = 1 }) {
      this.setState({ isLoading: true })
      const { page: curPage, results, total_pages: totalPage } = await ajax({
        url: '/search/tv',
        params: { query, page }
      })
      this.setState({ query, curPage, totalPage, results, isLoading: false })
    },
    goPrevPage (payload, { search: { query, curPage } }) {
      return this.search({ query, page: curPage - 1 })
    },
    goNextPage (payload, { search: { query, curPage } }) {
      return this.search({ query, page: curPage + 1 })
    }
  }
}
