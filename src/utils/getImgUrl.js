import urljoin from 'url-join'
import store from '~/store/'

import defaultImg from '~/assets/images/default-image.jpg'

/**
 * Doc: https://developers.themoviedb.org/3/getting-started/images
 * @param  {string|null} url
 * @param  {'poster'|'backdrop'|'logo'|'profile'|'still'} type
 * @param  {string} [size] - e.g. 'w500'
 * @return {string}
 */
export default function (url, type, size) {
  if (!url) {
    return defaultImg
  }

  const {
    images: {
      secure_base_url: baseUrl,
      [`${type}_sizes`]: availableSizes
    }
  } = store.getState().apiConf

  if (size && !availableSizes.includes(size)) {
    console.warn(`[${type}] ${size} is not in the available sizes: ${availableSizes}`)
    size = null
  }

  return urljoin(baseUrl, size || availableSizes[0], url)
}
