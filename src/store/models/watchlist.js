// Doc: https://developers.themoviedb.org/3/account/get-tv-show-watchlist
import ajax from '~/utils/ajax'

export default {
  state: {
    watchlist: [/* {
      poster_path
      popularity
      id
      backdrop_path
      vote_average
      overview
      first_air_date
      origin_country
      genre_ids
      original_language
      vote_count
      name
      original_name
    } */]
  },
  reducers: {
    updateWatchlist (state, nextState) {
      return nextState
    }
  },
  effects: {
    async syncWatchlist (payload, rootState) {
      const accountId = rootState.account.id
      const watchlist = []
      let curPage = 1
      let totalPage = 1
      while (curPage <= totalPage) { // TODO: using Promise.all concurrency
        const { results, total_pages: total } = await ajax({
          url: `/account/${accountId}/watchlist/tv`,
          params: { page: curPage }
        })
        watchlist.push(...results)
        totalPage = total
        curPage += 1
      }
      this.updateWatchlist(watchlist)
    }
  }
}
