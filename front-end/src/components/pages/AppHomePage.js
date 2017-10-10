import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

const AppHomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>App Home Page</h1>
    { isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link> }
  </div>
)

AppHomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapState (state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapState, { logout })(AppHomePage)