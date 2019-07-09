import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './layouts/default/'
import routes from './pages/'

const App = () => (
  <Router>
    <Layout>
      <Helmet titleTemplate='%s - My TV Shows'>
        <meta name='description' content='A TMDb demo powered by React.js' />
      </Helmet>
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
