import LS from './localStorage'
import { SESSION_ID } from '~/constants/localStorageKeys'

export default function () {
  LS.rm(SESSION_ID)

  const { location } = window
  location.assign(location.href.split('?')[0])
}
