import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import AppHomePage from './components/pages/AppHomePage'
import AppConfirmationPage from './components/pages/AppConfirmationPage'
import AppLoginPage from './components/pages/AppLoginPage'
import AppSignupPage from './components/pages/AppSignupPage'
import AppForgotPassword from './components/pages/AppForgotPassword'
import AppResetPassword from './components/pages/AppResetPassword'
import AppDashboard from './components/pages/AppDashboard'
import AppNewBookPage from './components/pages/AppNewBookPage'
import AppUserRoute from './components/routes/AppUserRoute'
import AppGuestRoute from './components/routes/AppGuestRoute'
import AppNavigation from './components/navigation/AppNavigation'

const App = ({ location, isAuthenticated }) => (
  <div>
    <div className="ui container">
      {isAuthenticated && <AppNavigation />}
      <Route location={location} path="/" exact component={AppHomePage} />
      <Route
        location={location}
        path="/comfirmation/:token"
        exact
        component={AppConfirmationPage}
      />
      <AppGuestRoute
        location={location}
        path="/login"
        exact
        component={AppLoginPage}
      />
      <AppGuestRoute
        location={location}
        path="/signup"
        exact
        component={AppSignupPage}
      />
      <AppGuestRoute
        location={location}
        path="/signup"
        exact
        component={AppSignupPage}
      />
      <AppGuestRoute
        location={location}
        path="/forgot_password"
        exact
        component={AppForgotPassword}
      />
      <AppGuestRoute
        location={location}
        path="/reset_password/:token"
        exact
        component={AppResetPassword}
      />
      <AppUserRoute
        location={location}
        path="/dashboard"
        exact
        component={AppDashboard}
      />
      <AppUserRoute
        location={location}
        path="/books/new"
        exact
        component={AppNewBookPage}
      />
    </div>
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapState(state) {
  return {
    isAuthenticated: !!state.user.email
  }
}

export default connect(mapState)(App)
