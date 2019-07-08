/* eslint-disable  jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { WatchListItemType } from '~/types/watchlist'
import getYearFromDate from '~/utils/getYearFromDate'

export default class WatchlistItemCard extends React.Component {
  static propTypes = {
    item: WatchListItemType,
    onRemove: PropTypes.func.isRequired
  }

  handleRemove = evt => {
    evt.preventDefault()
    this.props.onRemove(this.props.item.id)
  }

  render () {
    const { item } = this.props
    return (
      <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>
            { item.name } ({ getYearFromDate(item.first_air_date) })
          </p>
          <a aria-label='remove from watchlist'
            className='card-header-icon'
            onClick={this.handleRemove}>
            <span className='icon'>
              <i className='fas fa-trash'></i>
            </span>
          </a>
        </header>
        <div className='card-content'>
          <div className='content'>
            { item.overview }
          </div>
        </div>
      </div>
    )
  }
}
