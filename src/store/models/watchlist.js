// Doc: https://developers.themoviedb.org/3/account/get-tv-show-watchlist
import ajax from '~/utils/ajax'

export default {
  state: [/* {
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
  } */],
  reducers: {
    updateWatchlist (state, nextState) {
      return nextState
    }
  },
  effects: {
    async syncWatchlist (payload, rootState) {
      const watchlist = []
      let curPage = 1
      let totalPage = 1
      while (curPage <= totalPage) { // TODO: using Promise.all concurrency
        const { results, total_pages: total } = await ajax({
          url: `/account/${rootState.account.id}/watchlist/tv`,
          params: { page: curPage }
        })
        watchlist.push(...results)
        totalPage = total
        curPage += 1
      }
      this.updateWatchlist(watchlist)
    },
    async add () {
      // TODO
    },
    async rm (id, rootState) {
      if (!window.confirm('Are you sure to remove it from the watchlist?')) return

      await ajax({
        method: 'post',
        url: `/account/${rootState.account.id}/watchlist`,
        data: {
          media_type: 'tv',
          media_id: id,
          watchlist: false
        }
      })
      this.updateWatchlist(
        rootState.watchlist.filter(item => item.id !== id)
      )
    }
  }
}
