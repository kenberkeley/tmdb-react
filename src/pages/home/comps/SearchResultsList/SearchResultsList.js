import React from 'react'
import { WatchListType } from '~/types/watchlist'
import getLangByCode from '~/utils/getLangByCode'
import getYearFromDate from '~/utils/getYearFromDate'
import getPosterUrl from './utils/getPosterUrl'
import styles from './SearchResultsList.module.css'

const columns = [
  /* [label<string>, field<string>, formatter(val, row)<function?>] */
  ['Cover', 'poster_path', (url, item) => (
    <img className={styles.poster} alt={item.name} src={getPosterUrl(url)} />
  )],
  ['Title', 'name'],
  ['Year', 'first_air_date', getYearFromDate],
  ['Rate', 'vote_average', val => val + '%'],
  ['Lang', 'original_language', getLangByCode]
]

export default class SearchResultsList extends React.Component {
  static propTypes = {
    data: WatchListType
  }

  render () {
    const { data } = this.props
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
            data.map(item => (
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
                  +/-
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
