import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store/'

(async () => {
  try {
    await store.dispatch.auth.ensureAuthed()
  } catch (e) {
    store.dispatch.auth.authNow()
    return
  }
  await store.dispatch.apiConf.syncConf()
  ReactDOM.render(<App />, document.getElementById('root'))
})()
