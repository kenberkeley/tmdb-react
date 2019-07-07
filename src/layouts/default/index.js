import React from 'react'
import Header from './comps/Header'

const DefaultLayout = props => (
  <div>
    <Header />
    <main className='container'>
      { props.children }
    </main>
  </div>
)

export default DefaultLayout
