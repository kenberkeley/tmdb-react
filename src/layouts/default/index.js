import React from 'react'
import Header from './comps/Header'

const DefaultLayout = props => (
  <div>
    <Header />
    <main className='container' style={{ padding: '2em 0' }}>
      { props.children }
    </main>
  </div>
)

export default DefaultLayout
