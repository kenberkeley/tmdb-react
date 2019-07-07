import urljoin from 'url-join'
import store from '~/store/'

import defaultImg from '~/assets/images/default-image.jpg'

/**
 * https://developers.themoviedb.org/3/getting-started/images
 * @param  {string|null} url
 * @param  {string}     [size]
 * @return {string}
 */
export default function (url, size) {
  if (!url) {
    return defaultImg
  }
  const {
    images: {
      secure_base_url: baseUrl,
      poster_sizes: sizes
    }
  } = store.getState().apiConf
  return urljoin(baseUrl, size || sizes[0], url)
}
