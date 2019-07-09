import React from 'react'
import { Helmet } from 'react-helmet'
import SearchInput from './comps/SearchInput/'
import SearchResultsList from './comps/SearchResultsList/'

const Home = () => (
  <section>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <SearchInput />
    <br />
    <SearchResultsList />
  </section>
)

export default Home
