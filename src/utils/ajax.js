import axios from 'axios'
import Nprogress from 'nprogress'
import notify from './notify'
import resetApp from './resetApp'
import 'nprogress/nprogress.css'

import store from '~/store/'

/**
 * @param  {object} req - https://github.com/axios/axios#request-config
 * @return {Promise<any>}
 */
export default function ajax (req) {
  req.baseURL = process.env.REACT_APP_API_BASE_URL

  // https://developers.themoviedb.org/3/getting-started/authentication
  req.params = {
    [process.env.REACT_APP_API_KEY_FIELD]: process.env.REACT_APP_API_KEY_VALUE,
    ...req.params
  }
  const { sessionId } = store.getState().auth
  if (sessionId) req.params.session_id = sessionId

  Nprogress.start()
  return axios(req)
    /** {object} res - https://github.com/axios/axios#response-schema */
    .then(res => {
      Nprogress.done()
      return res.data
    })
    /** {object} err - https://github.com/axios/axios#handling-errors */
    .catch(err => {
      if (err.response) {
        const res = err.response
        const resData = res.data
        notify(
          typeof resData === 'string'
            ? resData
            : `[${resData.status_code}] ${resData.status_message}`
        )
        if (res.status === 401) {
          resetApp() // session denied, etc
        }
      } else {
        notify(err.message)
      }
      Nprogress.done(true)
      throw err
    })
}
