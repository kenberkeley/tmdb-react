// Doc: https://developers.themoviedb.org/3/authentication
import ajax from '~/utils/ajax'
import notify from '~/utils/notify'
import LS from '~/utils/localStorage'
import { SESSION_ID } from '~/constants/localStorageKeys'
import { QUERY__OAUTH_REQUEST_TOKEN, QUERY__OAUTH_IS_APPROVED } from '~/constants/routeFields'

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
    ensureAuthed (payload, rootState) { // call this func before mounting app
      if (rootState.auth.sessionId) { // authed
        // TODO: how to check if the session_id is valid?
        // https://www.themoviedb.org/talk/5ae4abc80e0a266b9e00aa4a
        return
      }
      const queries = new URLSearchParams(window.location.search)
      if (queries.has(QUERY__OAUTH_REQUEST_TOKEN)) { // redirect from Doc: Step 2
        if (queries.get(QUERY__OAUTH_IS_APPROVED) === 'true') {
          return this._fetchNewSessionId(queries.get(QUERY__OAUTH_REQUEST_TOKEN))
        }
        const msg = 'You did not authorize the app to access your TMDb account'
        notify(msg)
        throw new Error(msg)
      }
      throw new Error('Please call authNow to continue')
    },
    authNow () {
      LS.rm(SESSION_ID) // force to renew session_id

      if (window.confirm('You will be redirected to TMDb to approve the authorization')) {
        return this._fetchNewReqToken()
      }
      notify('You cancelled the auth request, please refresh the page to retry')
    },
    async _fetchNewReqToken () { // Doc: Step 1
      const { request_token: reqToken } = await ajax({ url: '/authentication/token/new' })
      this.askForAuth(reqToken)
    },
    askForAuth (reqToken) { // Doc: Step 2
      const { location } = window
      const redirectUrl = location.href.split('?')[0] // TODO: dev - localhost, prod - Github Pages?
      location.assign(`https://www.themoviedb.org/authenticate/${reqToken}?redirect_to=${redirectUrl}`)
    },
    async _fetchNewSessionId (reqToken) { // Doc: Step 3
      const { session_id: sessionId } = await ajax({
        method: 'post',
        url: '/authentication/session/new',
        data: { request_token: reqToken }
      })
      this.updateSessionId(sessionId)
    }
  }
}
