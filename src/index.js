import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { dispatch } from './store/'

(async () => {
  try {
    await dispatch.auth.ensureAuthed()
  } catch (e) {
    dispatch.auth.authNow()
    return
  }
  await Promise.all([
    dispatch.account.syncInfo(),
    dispatch.apiConf.syncConf()
  ])
  await dispatch.watchlist.syncWatchlist()
  ReactDOM.render(<App />, document.getElementById('root'))
})()
