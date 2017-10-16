import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppComfirmEmailMessage from '../messages/AppComfirmEmailMessage'

const AppDashboard = ({ isConfirmed }) => (
  <div>
    {!isConfirmed && <AppComfirmEmailMessage />}
  </div>
)

AppDashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function mapState (state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapState)(AppDashboard)