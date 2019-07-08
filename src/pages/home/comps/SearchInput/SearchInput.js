import React from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      keywords: props.query
    }
  }

  handleChange = evt => {
    this.setState({
      keywords: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.onSearch(this.state.keywords)
  }

  render () {
    const { keywords } = this.state
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
              value={keywords}
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
