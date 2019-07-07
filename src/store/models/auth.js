// Doc: https://developers.themoviedb.org/3/authentication
import ajax from '~/utils/ajax'
import LS from '~/utils/localStorage'
import { REQUEST_TOKEN, SESSION_ID } from '~/constants/localStorageKeys'

export default {
  state: {
    sessionId: LS.get(SESSION_ID)
  },
  reducers: {
    updateSessionId (state, sessionId) {
      LS.set(SESSION_ID, sessionId) // can be reused after reload
      return { sessionId }
    }
  },
  effects: {
    ensureAuthed (payload, rootState) {
      if (rootState.auth.sessionId) { // authed
        // TODO: how to check if session_id is valid?
        // https://www.themoviedb.org/talk/5ae4abc80e0a266b9e00aa4a
        return
      }
      if (LS.get(REQUEST_TOKEN)) { // redirect from Doc: Step 2
        return this._fetchNewSessionId()
      }
      throw new Error('Please call authNow to continue')
    },
    authNow () {
      return this._fetchNewReqToken()
    },
    async _fetchNewReqToken () {
      LS.rm(SESSION_ID) // forced renew session_id

      // Doc: Step 1
      const { request_token: reqToken } = await ajax({ url: '/authentication/token/new' })
      LS.set(REQUEST_TOKEN, reqToken)

      // Doc: Step 2
      const location = window.location
      const redirectUrl = location.href // TODO: dev - localhost, prod - Github Pages?
      location.assign(`https://www.themoviedb.org/authenticate/${reqToken}?redirect_to=${redirectUrl}`)
    },
    async _fetchNewSessionId () {
      const reqToken = LS.get(REQUEST_TOKEN)
      if (!reqToken) {
        this._fetchNewReqToken()
        return
      }

      // Doc: Step 3
      const { session_id: sessionId } = await ajax({
        method: 'post',
        url: '/authentication/session/new',
        data: { request_token: reqToken }
      })
      LS.rm(REQUEST_TOKEN) // must clear!
      this.updateSessionId(sessionId)
    }
  }
}
