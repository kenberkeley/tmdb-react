import React from 'react'
import PropTypes from 'prop-types'
import getYearFromDate from '~/utils/getYearFromDate'

export default class WatchlistItemCard extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired
    }),
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
          <a className='card-header-icon' aria-label='remove from watchlist'
            onClick={this.handleRemove} href='.'>
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
