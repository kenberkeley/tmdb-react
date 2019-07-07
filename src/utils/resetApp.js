import LS from './localStorage'
import { REQUEST_TOKEN, SESSION_ID } from '~/constants/localStorageKeys'

export default function () {
  LS.rm(REQUEST_TOKEN)
  LS.rm(SESSION_ID)
  window.location.reload()
}
