/**
 * Alternative: lightweight lib like notie, noty, etc
 * @param {string} msg
 */
export default function (msg) {
  console.info('[Notify]', msg)
  window.alert(msg)
}
