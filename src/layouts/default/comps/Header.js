/* eslint-disable  jsx-a11y/anchor-is-valid */
import React from 'react'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import routes from '~/pages/'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isNavMenuVisible: false
    }
  }

  toggleNavMenu = evt => {
    evt.preventDefault()
    this.setState({
      isNavMenuVisible: !this.state.isNavMenuVisible
    })
  }

  render () {
    const { isNavMenuVisible } = this.state
    return (
      <header className='navbar has-shadow' role='navigation' aria-label='main navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item has-text-weight-bold'>
              My TV Shows
            </Link>
            <a role='button' data-target='navMenu' aria-label='menu' aria-expanded='false'
              className={classNames('navbar-burger', { 'is-active': isNavMenuVisible })}
              onClick={this.toggleNavMenu}>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div id='navMenu' className={classNames('navbar-menu', { 'is-active': isNavMenuVisible })}>
            <div className='navbar-start'>
              {
                routes.map(route => (
                  <NavLink
                    key={route.path}
                    exact={route.exact}
                    to={route.path}
                    className='navbar-item'
                    activeClassName='has-text-link'>
                    { route.title }
                  </NavLink>
                ))
              }
            </div>
          </div>
        </div>
      </header>
    )
  }
}
