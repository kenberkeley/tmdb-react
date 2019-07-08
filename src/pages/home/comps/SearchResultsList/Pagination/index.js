import { connect } from 'react-redux'
import Pagination from './Pagination'

const mapStateToProps = ({ search: { curPage, totalPage, isLoading } }) => ({
  curPage,
  totalPage,
  isLoading
})

const mapDispatchToProps = ({ search: { goPrevPage, goNextPage } }) => ({
  goPrevPage,
  goNextPage
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
