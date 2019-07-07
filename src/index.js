import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store/'

(async () => {
  await store.dispatch.apiConf.syncConf()
  ReactDOM.render(<App />, document.getElementById('root'))
})()
