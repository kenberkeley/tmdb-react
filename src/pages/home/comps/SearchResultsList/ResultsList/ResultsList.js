import React from 'react'
import { func } from 'prop-types'
import { WatchListType } from '~/types/watchlist'
import getYearFromDate from '~/utils/getYearFromDate'
import getLangByCode from '~/utils/getLangByCode'
import getImgUrl from '~/utils/getImgUrl'

const columns = [
  /* [label<string>, field<string>, formatter(val, row)<function?>] */
  ['Cover', 'poster_path', (url, item) => (
    <img
      style={{ width: '100px', height: '100px' }}
      alt={item.name}
      src={getImgUrl(url, 'poster')}
    />
  )],
  ['Title', 'name'],
  ['Year', 'first_air_date', getYearFromDate],
  ['Rate', 'vote_average', val => val + '%'],
  ['Lang', 'original_language', getLangByCode]
]

export default class ResultsList extends React.Component {
  static propTypes = {
    results: WatchListType,
    watchlist: WatchListType,
    addToWatchList: func.isRequired,
    rmFromWatchList: func.isRequired
  }

  renderNoResultsRow () {
    return (
      <tr>
        <td
          colSpan={columns.length + 1}
          className='has-text-centered has-text-grey'>
          (No results)
        </td>
      </tr>
    )
  }

  renderResultRows () {
    const { results, watchlist, addToWatchList, rmFromWatchList } = this.props
    const isWatched = id => !!watchlist.find(item => item.id === id)
    return results.map(item => (
      <tr key={item.id}>
        {
          columns.map(([label, field, formatter]) => (
            <td key={field}>
              {
                formatter
                  ? formatter(item[field], item)
                  : item[field]
              }
            </td>
          ))
        }
        <td>
          {
            isWatched(item.id)
              ? <button aria-label='remove from watchlist'
                  className='button is-danger is-outlined'
                  onClick={() => rmFromWatchList(item.id)}>
                  <span className='icon is-small'>
                    <i className='fas fa-trash'></i>
                  </span>
                </button>
              : <button aria-label='add to watchlist'
                  className='button is-link is-outlined'
                  onClick={() => addToWatchList(item)}>
                  <span className='icon is-small'>
                    <i className='fas fa-plus'></i>
                  </span>
                </button>
          }
        </td>
      </tr>
    ))
  }

  render () {
    const { results } = this.props
    return (
      <table className='table is-fullwidth'>
        <thead>
          <tr>
            {
              columns.map(([label, field]) => (
                <td key={field}>{ label }</td>
              ))
            }
            <td>Add / Remove Watchlist</td>
          </tr>
        </thead>
        <tbody>
          {
            results.length
              ? this.renderResultRows()
              : this.renderNoResultsRow()
          }
        </tbody>
      </table>
    )
  }
}
