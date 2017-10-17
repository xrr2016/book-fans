import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppComfirmEmailMessage from '../messages/AppComfirmEmailMessage'
import { allBooksSelector } from '../../reducers/books'
import AddBookCta from "../ctas/AddBookCta";

const AppDashboard = ({ isConfirmed, books }) => (
  <div>
    {!isConfirmed && <AppComfirmEmailMessage />}
    {!books.length && <AddBookCta />}
  </div>
)

AppDashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }),).isRequired,
}

function mapState (state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

export default connect(mapState)(AppDashboard)