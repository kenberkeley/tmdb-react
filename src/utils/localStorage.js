/**
  Refer to:
    - https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea
    - https://github.com/tsironis/lockr
 */
import notify from './notify'
const LS = window.localStorage

export default {
  get (key) {
    try {
      return JSON.parse(LS.getItem(key))
    } catch (e) {
      notify(e)
      return null
    }
  },
  set (key, val) {
    try {
      LS.setItem(key, JSON.stringify(val))
    } catch (e) {
      // exceeded the quota, etc
      notify(e)
    }
  },
  rm (key) {
    LS.removeItem(key)
  }
}
