import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/home/'
import Watchlist from './pages/watchlist/'

const App = () => (
  <Router>
    <div>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/watchlist'>Watch List</Link>
        </li>
      </nav>
    </div>
    <Route path='/' exact component={Home} />
    <Route path='/watchlist' component={Watchlist} />
  </Router>
)

export default App
