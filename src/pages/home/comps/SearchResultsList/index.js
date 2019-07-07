import React from 'react'
import PropTypes from 'prop-types'
import getLangByCode from '~/utils/getLangByCode'
import getPosterUrl from './utils/getPosterUrl'
import styles from './index.module.css'

const columns = [
  /* [label<string>, field<string>, formatter(val, row)<function?>] */
  ['Cover', 'poster_path', (url, item) => (
    <img className={styles.poster} alt={item.name} src={getPosterUrl(url)} />
  )],
  ['Title', 'name'],
  ['Year', 'first_air_date', date => date ? date.substr(0, 4) : '-'],
  ['Rate', 'vote_average', val => val + '%'],
  ['Lang', 'original_language', getLangByCode]
]

export default class SearchResultsList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      poster_path: PropTypes.string, // could be null
      name: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired, // 'YYYY-MM-DD', could be ''
      vote_average: PropTypes.number.isRequired,
      original_language: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }))
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
