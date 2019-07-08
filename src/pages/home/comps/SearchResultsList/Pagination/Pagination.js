import React from 'react'
import { number, func, bool } from 'prop-types'

export default class Pagination extends React.Component {
  static propTypes = {
    curPage: number,
    totalPage: number,
    isLoading: bool,
    goPrevPage: func.isRequired,
    goNextPage: func.isRequired
  }

  render () {
    const { curPage, totalPage, isLoading, goPrevPage, goNextPage } = this.props
    return (
      <nav className='pagination is-centered' role='navigation' aria-label='pagination'>
        <button className='pagination-previous' onClick={goPrevPage}
          disabled={isLoading || +curPage <= 1}>
          Previous
        </button>
        <span className='pagination-list'>
          { curPage } / { totalPage }
        </span>
        <button className='pagination-next' onClick={goNextPage}
          disabled={isLoading || curPage === totalPage}>
          Next page
        </button>
      </nav>
    )
  }
}
