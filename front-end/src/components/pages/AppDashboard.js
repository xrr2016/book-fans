import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppComfirmEmailMessage from '../messages/AppComfirmEmailMessage'
// class AppDashboard extends Component {
//   render () {

//   }
// }

const AppDashboard = ({ isComfirmed }) => (
  <div>
    {!isComfirmed && <AppComfirmEmailMessage />}
  </div>
)

AppDashboard.propTypes = {
  isComfirmed: PropTypes.bool.isRequired
}

function mapState (state) {
  return {
    isComfirmed: !!state.user.comfirmed
  }
}

export default connect(mapState)(AppDashboard)