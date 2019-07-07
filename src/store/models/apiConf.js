import ajax from '~/utils/ajax'

export default {
  state: {
    images: {
      base_url: '', // e.g. 'http://image.tmdb.org/t/p/'
      secure_base_url: '', // e.g. 'https://image.tmdb.org/t/p/'
      poster_sizes: [/* e.g.
        w92,
        w154,
        w185,
        w342,
        w500,
        w780,
        original
      */],
      backdrop_sizes: [],
      logo_sizes: [],
      profile_sizes: [],
      still_sizes: []
    },
    change_keys: []
  },
  reducers: {
    updateConf (oldConf, conf) {
      return conf
    }
  },
  effects: {
    async syncConf () {
      // https://developers.themoviedb.org/3/configuration/get-api-configuration
      const conf = await ajax({ url: '/configuration' })
      this.updateConf(conf)
    }
  }
}
