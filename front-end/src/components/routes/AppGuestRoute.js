import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

const AppUserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}  
    render={props => 
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />} 
  />
)

AppUserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapState (state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapState)(AppUserRoute)