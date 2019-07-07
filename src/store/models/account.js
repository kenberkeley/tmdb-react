// Doc: https://developers.themoviedb.org/3/account/get-account-details
import ajax from '~/utils/ajax'

export default {
  state: {
    id: null, // integer
    name: '', // could be ''
    username: '',
    include_adult: false,
    iso_639_1: '', // e.g. 'en'
    iso_3166_1: '', // e.g. 'US'
    avatar: { gravatar: { hash: '' } }
  },
  reducers: {
    updateInfo (state, nextState) {
      return nextState
    }
  },
  effects: {
    async syncInfo () {
      const info = await ajax({ url: '/account' })
      this.updateInfo(info)
    }
  }
}
