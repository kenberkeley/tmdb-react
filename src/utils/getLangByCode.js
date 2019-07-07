import ISO6391 from 'iso-639-1'

/**
 * @param  {string} code - e.g. 'en'|'ja'
 * @return {string} - e.g. 'English'|'Japanese'
 */
export default function (code) {
  return ISO6391.getName(code)
}
