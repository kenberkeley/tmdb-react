import { connect } from 'react-redux'
import SearchInput from './SearchInput'

const mapStateToProps = rootState => ({
  query: rootState.search.query
})

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch.search.search({ query })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
