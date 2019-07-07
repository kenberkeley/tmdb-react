import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import store, { dispatch } from './store/'

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
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})()
