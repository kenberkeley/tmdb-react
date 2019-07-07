import React from 'react'
import { searchTvShows } from './api/'
import SearchInput from './comps/SearchInput'

export default class Home extends React.Component {
  onSearch = query => {
    searchTvShows(query).then(data => {
      console.log(data) // TODO: show in list
    })
  }

  render () {
    return (
      <section>
        <SearchInput onSearch={this.onSearch} />
      </section>
    )
  }
}
