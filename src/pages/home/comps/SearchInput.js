import React from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  handleChange = evt => {
    this.setState({
      query: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.onSearch(this.state.query)
  }

  render () {
    const { query } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='field has-addons'>
          <div className='control has-icons-left'>
            <span className='icon is-small is-left'>
              <i className='fas fa-search'></i>
            </span>
            <input
              className='input'
              placeholder='Search TV Shows...'
              onChange={this.handleChange}
              value={query}
              required
            />
          </div>
          <div className='control'>
            <button type='submit' className='button is-primary'>
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
