import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './layouts/default/'
import routes from './pages/'

const App = () => (
  <Router>
    <Layout>
      {
        routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))
      }
    </Layout>
  </Router>
)

export default App
