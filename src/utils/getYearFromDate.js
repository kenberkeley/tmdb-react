/**
 * @param {string|null} date - 'YYYY-MM-DD'|''
 * @return - 'YYYY'|'-'
 */
export default function (date) {
  return date ? date.substr(0, 4) : '-'
}
