import React from 'react'
import { searchTvShows } from './api/'
import SearchInput from './comps/SearchInput'
import SearchResultsList from './comps/SearchResultsList/'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: []
    }
  }

  onSearch = query => {
    searchTvShows(query).then(({ results }) => {
      this.setState({
        searchResults: results
      })
    })
  }

  render () {
    return (
      <section>
        <SearchInput onSearch={this.onSearch} />
        <SearchResultsList data={this.state.searchResults} />
      </section>
    )
  }
}
