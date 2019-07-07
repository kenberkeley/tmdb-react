export default [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: require('./home/').default
  },
  {
    title: 'Watch List',
    path: '/watchlist',
    component: require('./watchlist/').default
  }
]
