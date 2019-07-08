import { connect } from 'react-redux'
import ResultsList from './ResultsList'

const mapStateToProps = rootState => ({
  watchlist: rootState.watchlist,
  results: rootState.search.results
})

const mapDispatchToProps = dispatch => ({
  addToWatchList: item => dispatch.watchlist.add(item),
  rmFromWatchList: id => dispatch.watchlist.rm(id)
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList)
