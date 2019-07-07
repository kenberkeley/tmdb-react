/**
 * Alternative: lightweight lib like notie, noty, etc
 * @param {string} msg
 */
export default function (msg) {
  console.warn('[Notify]', msg)
  window.alert(msg)
}
