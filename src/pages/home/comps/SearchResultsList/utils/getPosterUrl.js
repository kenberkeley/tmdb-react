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
      poster_sizes: availableSizes
    }
  } = store.getState().apiConf

  if (size && !availableSizes.includes(size)) {
    console.warn(`[getPosterUrl] ${size} is not in the available sizes: ${availableSizes}`)
    size = null
  }

  return urljoin(baseUrl, size || availableSizes[0], url)
}
