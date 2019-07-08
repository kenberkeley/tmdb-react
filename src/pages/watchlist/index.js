import React from 'react'
import { connect } from 'react-redux'
import { WatchListType } from '~/types/watchlist'
import WatchListItemCard from './comps/WatchlistItemCard'

class Watchlist extends React.Component {
  static propTypes = {
    watchlist: WatchListType
  }

  render () {
    const { watchlist, rmFromWatchList } = this.props
    return (
      <section>
        {
          watchlist.map(item => (
            <WatchListItemCard
              key={item.id}
              item={item}
              onRemove={rmFromWatchList}
            />
          ))
        }
      </section>
    )
  }
}

const mapState = state => ({
  watchlist: state.watchlist
})
const mapDispatch = dispatch => ({
  rmFromWatchList: id => dispatch.watchlist.rm(id)
})
export default connect(mapState, mapDispatch)(Watchlist)
